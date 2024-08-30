const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "send.one.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "mukul.gupta@hestabit.in",
    pass: "Mukul123**",
  },
});

const sendMail = (mailBody, receiver, mailSubject) => {
  transporter.sendMail({
    from: "Mukul Gupta <mukul.gupta@hestabit.in>",
    to: receiver,
    subject: mailSubject,
    text: mailBody,
  });
};

module.exports=sendMail