const verifyEmail = function (newUser) {

  const html = `
    <!DOCTYPE html>
    <html lang="en" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

    <head>
      <meta charset="utf-8">
      <meta name="x-apple-disable-message-reformatting">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
      <title>Verification Code</title>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700"
        rel="stylesheet" media="screen">
      <style>
        .hover-underline:hover {
          text-decoration: underline !important;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes ping {

          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes pulse {
          50% {
            opacity: .5;
          }
        }

        @keyframes bounce {

          0%,
          100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }

          50% {
            transform: none;
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }

        @media (max-width: 600px) {
          .sm-px-24 {
            padding-left: 24px !important;
            padding-right: 24px !important;
          }

          .sm-py-32 {
            padding-top: 32px !important;
            padding-bottom: 32px !important;
          }

          .sm-w-full {
            width: 100% !important;
          }
        }
      </style>
    </head>

    <body
      style="margin: 0; padding: 0; width: 100%; word-break: break-word;  ">
      <div>
          <table
            width="100%"
            border="0"
            style="width: 100%; max-width: 600px; padding-top: 10px"
          >
            <tbody>
              <tr>
                <td
                  style="padding: 0px 0px 0px 0px; color: #000000; text-align: left"
                  width="100%"
                  align="left"
                >
                  
                  <table
                    width="100%"
                    style="table-layout: fixed; background-color: #ffffff"
                  >
                    <tbody>
                      <tr>
                        <td height="100%">
                          <div>
                            <span style="
                                color: #222a35;
                                font-family: HelveticaNeue;
                                font-size: 15px;
                                line-height: 1.5;
                              "
                              >
                              Dear Sir/Madam,</span>
                          </div>
                          <div>
                            <span
                              style="
                                color: #222a35;
                                font-family: HelveticaNeue;
                                font-size: 15px;
                                line-height: 1.5;
                              "
                              ><br
                            /></span>
                          </div>
                          <div>
                            <span style="line-height: 1.5; font-size: 15px"
                              ><div style="margin-bottom : 5px">
                                  <span style="font-size: 14px; color: #222a35; "
                                    >Student Information for enquery</span
                                  >
                                </div>
                                <div style="margin-bottom : 5px">
                                  <span 
                                    >Name:&nbsp;</span
                                  ><span
                                    style="
                                      color: #5367FF;
                                      font-size: 15px;
                                      margin-bottom : 10px;
                                    "
                                    >${newUser?.name}</span
                                  >
                                </div>
                                  <div style="margin-bottom : 5px">
                                  <span 
                                    >Email:&nbsp;</span
                                  ><span
                                    style="
                                      color: #5367FF;
                                      font-size: 15px;
                                      margin-bottom : 10px;
                                    "
                                    >${newUser?.email}</span
                                  >
                                </div>
                                <div style="margin-bottom : 5px">
                                  <span 
                                    >Mobile Number:&nbsp;</span
                                  ><span
                                  style="
                                  color: #5367FF;
                                  font-size: 15px;
                                  margin-bottom : 10px;
                                "
                                    >${newUser?.phone}</span
                                  >
                                </div>
                                <div style="margin-bottom : 5px">
                                  <span 
                                    >State:&nbsp;</span
                                  ><span
                                  style="
                                  color: #5367FF;
                                  font-size: 15px;
                                  margin-bottom : 10px;
                                "
                                    >${newUser?.state}</span
                                  >
                                </div>
                                <div style="margin-bottom : 5px">
                                  <span 
                                    >City:&nbsp;</span
                                  ><span
                                  style="
                                  color: #5367FF;
                                  font-size: 15px;
                                  margin-bottom : 10px;
                                "
                                    >${newUser?.city}</span
                                  >
                                </div>
                                
                               </span>
                          </div>
                          <div style="margin-bottom: 5px">
                            <br />
                            <div
                              style="color: #222a35; font-size: 9px; line-height: 1.5"
                            >
                              Horizon Academy Team
                            </div>
                          </div>
                          <div>
                            <span style="font-family: HelveticaNeue"
                              ><span
                                style="
                                  color: #999999;
                                  font-size: 11px;
                                  line-height: 18px;
                                "
                                >This is an automated email, please do not
                                reply.</span
                              ></span
                            >
                          </div>
                          <div
                            style="
                              padding-bottom: 5px;
                              border-bottom: 1px solid #eeeeee;
                            "
                          >
                            <span style="font-family: HelveticaNeue"></span>
                          </div>
                          
                        </td>
                      </tr>
                    </tbody>
                  </table>
                
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </body>

    </html>`;
  const text = `
        Verify Email, Use this OTP to confirm your account and log in`;
  return {
    html: html,
    text: text,
  };
};

export default verifyEmail;