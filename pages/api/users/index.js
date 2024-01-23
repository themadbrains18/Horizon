import nc from "next-connect";
import nodemailer from 'nodemailer';
import verifyEmail from "@/template/emailTemplate";
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export const config = {
  api: {
    bodyParser: true, // Disallow body parsing, consume as stream
  }
}

const connectDB = require("../../../lib/db/models/index");

const User = require('../../../lib/db/models/user.model');
connectDB();
const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})
  // ============================================================//
  // User insert record
  // ============================================================//
  .post(async (req, res) => {
    try {
      const newUser = await User.create(JSON.parse(req.body));

      if (newUser) {

        //SEND MAIL
        // let transporter = await nodemailer.createTransport({
        //   host: "smtp.gmail.com",
        //   port: 587,
        //   secure: false,
        //   requireTLS: true,
        //   service: 'gmail',
        //   auth: {
        //     user: "sakshisethi.mdb@gmail.com",
        //     pass: "wjstmftxjgibyyag",
        //   },
        //   logger: true
        // })

        let template = await verifyEmail(newUser);
        const msg = {
          to: 'surinderkumar.mdb@gmail.com', // Change to your recipient
          from: 'sakshisethi.mdb@gmail.com', // Change to your verified sender
          subject: 'Sending with SendGrid is Fun',
          text: template.text,
          html: template.html,
        }

        try {
          sgMail
            .send(msg)
            .then((response) => {
              console.log(response[0].statusCode)
              console.log(response[0].headers)
            })
            .catch((error) => {
              console.error(error)
            })
          // transporter
          //   .sendMail({
          //     from: `The Mad Brains`,
          //     to: "surinderkumar.mdb@gmail.com",
          //     subject: "Horizan Academy For Enquiry",
          //     text: template.text,
          //     html: template.html,
          //   }).then((info) => {
          //     console.log(info, '----------------email transfer info');
          //   }).catch((error) => {
          //     console.log(error, '------then catch error mail send');
          //   })
        } catch (error) {
          console.log('Error sending email:', error);
        }

        return res.status(200).json({
          status: 'success',
          message: 'done',
          data: newUser
        });
      }

    } catch (error) {
      console.log(error)
      res.status(401).send({ error: error })
    }

  })

  // ============================================================//
  // Get User record
  // ============================================================//
  .get(async (req, res) => {
    try {

      const newUser = await User.find();
      return res.status(200).json({
        status: 'success',
        message: 'done',
        data: newUser
      });
    } catch (error) {
      console.log(error)
      res.status(401).send({ error: error })
    }

  })

export default handler;