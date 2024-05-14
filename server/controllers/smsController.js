const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

function sendSMS(Email, otp) {

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.NODE_MAILER_USER,
            pass: process.env.NODE_MAILER_PASS,
        },
        tls: {
            rejectUnauthorized: false,
        },
        debug: true,
    });
    console.log(Email)

    let mailOptions = {
        from: '"Event Mind" <' + process.env.NODE_MAILER_USER + '>',
        to: Email,
        subject: "One Time Password - EventMInd",
        html: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>Static Template</title>
        
            <link
              href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
              rel="stylesheet"
            />
          </head>
          <body
            style="
              margin: 0;
              font-family: 'Poppins', sans-serif;
              background: #ffffff;
              font-size: 14px;
            "
          >
            <div
              style="
                max-width: 680px;
                margin: 0 auto;
                padding: 45px 30px 60px;
                background: #f4f7ff;
                background-image: url(https://archisketch-resources.s3.ap-northeast-2.amazonaws.com/vrstyler/1661497957196_595865/email-template-background-banner);
                background-repeat: no-repeat;
                background-size: 800px 452px;
                background-position: top center;
                font-size: 14px;
                color: #434343;
              "
            >
             
        
              <main>
                <div
                  style="
                    margin: 0;
                    margin-top: 70px;
                    padding: 92px 30px 115px;
                    background: #ffffff;
                    border-radius: 30px;
                    text-align: center;
                  "
                >
                  <div style="width: 100%; max-width: 489px; margin: 0 auto;">
                    <h1
                      style="
                        margin: 0;
                        font-size: 24px;
                        font-weight: 500;
                        color: #1f1f1f;
                      "
                    >
                      Your OTP
                    </h1>
                    <p
                      style="
                        margin: 0;
                        margin-top: 17px;
                        font-size: 16px;
                        font-weight: 500;
                      "
                    >
                      Hey There,
                    </p>
                    <p
                      style="
                        margin: 0;
                        margin-top: 17px;
                        font-weight: 500;
                        letter-spacing: 0.56px;
                      "
                    >
                      Thank you for choosing Event Mind Company. Use the following OTP
                      to complete the procedure to change your email address. OTP is
                      valid for
                      <span style="font-weight: 600; color: #1f1f1f;">5 minutes</span>.
                      Do not share this code with others.
                   
                    </p>
                    <p
                      style="
                        margin: 0;
                        margin-top: 60px;
                        font-size: 40px;
                        font-weight: 600;
                        letter-spacing: 25px;
                        color: #ba3d4f;
                      "
                    >
                      ${otp}
                    </p>
                  </div>
                </div>
        
                <p
                  style="
                    max-width: 400px;
                    margin: 0 auto;
                    margin-top: 90px;
                    text-align: center;
                    font-weight: 500;
                    color: #8c8c8c;
                  "
                >
                  Need help? Ask at
                  <a
                    href="mailto:archisketch@gmail.com"
                    style="color: #499fb6; text-decoration: none;"
                    >shaikhali6507@gmail.com</a
                  >
                  or visit our
                  <a
                    href=""
                    target="_blank"
                    style="color: #499fb6; text-decoration: none;"
                    >Help Center</a
                  >
                </p>
              </main>
        
              <footer
                style="
                  width: 100%;
                  max-width: 490px;
                  margin: 20px auto 0;
                  text-align: center;
                  border-top: 1px solid #e6ebf1;
                "
              >
                <p
                  style="
                    margin: 0;
                    margin-top: 40px;
                    font-size: 16px;
                    font-weight: 600;
                    color: #434343;
                  "
                >
                  Event Mind Company
                </p>
                <p style="margin: 0; margin-top: 8px; color: #434343;">
                  Address 540, City, State.
                </p>
                
                  Copyright © 2024 Company. All rights reserved.
                </p>
              </footer>
            </div>
          </body>
        </html>
        
        `,
    };


    transporter.sendMail(mailOptions, function (err, success) {
        if (err) {
            console.log(err);
        } else {
            console.log("Email sent successfully");
        }
    });
}

function sendTicket(Details) {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.NODE_MAILER_USER,
            pass: process.env.NODE_MAILER_PASS,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    let mailOptions = {
        from: process.env.NODE_MAILER_USER,
        to: Details.email,
        subject: `Your Online Event Pass for ${Details.event_name} - EventMInd✨`,
        html: `Dear <i>${Details.name}</i>,<br><br>Thank you for registering for ${Details.event_name}! We are excited to have you join us and want to make sure that you have all the information you need to have a great time.<br><br>Your online pass has been generated and is ready for you to use. Please remember to keep this pass with you at all times during the event and do not share it with anyone else.<br><br><strong>Pass Number: ${Details.pass}</strong><br><br>Here are the details of your registration:<br>Name: ${Details.name}<br>Amount Paid: ${Details.price}<br>Address: ${Details.address1} <br> City: ${Details.city} <br> PinCode: ${Details.zip}<br><br>If you have any questions or concerns, please don't hesitate to reach out to us. We're here to help please contact us at:<br>Mohd Ali : shaikhali6507@gmail.com<br>Best regards,<br>The EventMInd Team`,
    };

    transporter.sendMail(mailOptions, function (err, success) {
        if (err) {
            console.log(err);
        } else {
            console.log("Email sent successfully");
        }
    });
}

module.exports = {
    sendSMS,
    sendTicket,
};
