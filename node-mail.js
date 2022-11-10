const nodemailer = require("nodemailer");

const email = {
  host: "smtp.mailtrap.io",
  port: 2525,
  secure: false,
  auth: {
    user: "7b0d404ad5a36a",
    pass: "3cbc4be93d193b",
  },
};

const send = async (data) => {
  nodemailer.createTransport(email).sendMail(data, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log(info);
      return info.response;
    }
  });
};

const content = {
  from: "deokho.kim@yatavent.com",
  to: "4dfd3a3b0a-a50f30@inbox.mailtrap.io",
  subject: "고객문의 서비스"
  text : "이메일 보내기 구현"
};

send(content);