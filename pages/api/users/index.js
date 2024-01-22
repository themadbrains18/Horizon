import nc from "next-connect";

export const config = {
  api: {
    bodyParser: true, // Disallow body parsing, consume as stream
  }
}

const User = require('../../../lib/db/models/user.model');
const connectDB = require("../../../lib/db/models/index");

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
      console.log(req.body, '========req.body');
      const newUser = await User.create(JSON.parse(req.body));
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