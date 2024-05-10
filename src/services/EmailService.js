// const nodemailer = require("nodemailer");
// const dotenv = require("dotenv");
// dotenv.config();
// var inlineBase64 = require("nodemailer-plugin-inline-base64");

// const sendEmailCreateOrder = async (email, orderItems) => {
//   let transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true, // true for 465, false for other ports
//     auth: {
//       user: process.env.MAIL_ACCOUNT, // generated ethereal user
//       pass: process.env.MAIL_PASSWORD, // generated ethereal password
//     },
//   });
//   transporter.use("compile", inlineBase64({ cidPrefix: "somePrefix_" }));

//   let listItem = "";
//   const attachImage = [];
//   orderItems.forEach((order) => {
//     listItem += `<div>
//     <div>
//       Bạn đã đặt sản phẩm <b>${order.name}</b> với số lượng: <b>${order.amount}</b> và giá là: <b>${order.price} VND</b></div>
//       <div>Bên dưới là hình ảnh của sản phẩm</div>
//     </div>`;
//     attachImage.push({ path: order.image });
//   });

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: process.env.MAIL_ACCOUNT, // sender address
//     to: email, // list of receivers
//     subject: "Bạn đã đặt hàng tại Shop Food & Food", // Subject line
//     text: "Hello world?", // plain text body
//     html: `<div><b>Bạn đã đặt hàng thành công tại Shop Food & Food</b></div> ${listItem}`,
//     attachments: attachImage,
//   });
// };

// module.exports = {
//   sendEmailCreateOrder,
// };

//
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const dotenv = require("dotenv");
dotenv.config();
var inlineBase64 = require("nodemailer-plugin-inline-base64");

const createTransporterOAuth2 = async () => {
  const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
  });

  const accessToken = await oauth2Client.getAccessToken();

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      type: "OAuth2",
      user: process.env.MAIL_ACCOUNT,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: accessToken,
    },
  });

  transporter.use("compile", inlineBase64({ cidPrefix: "somePrefix_" }));
  return transporter;
};

const sendEmailCreateOrder = async (email, orderItems) => {
  let transporter = await createTransporterOAuth2();

  let listItem = "";
  const attachImage = [];
  orderItems.forEach((order) => {
    listItem += `<div>
    <div>
      Bạn đã đặt sản phẩm <b>${order.name}</b> với số lượng: <b>${order.amount}</b> và giá là: <b>${order.price} VND</b></div>
      <div>Bên dưới là hình ảnh của sản phẩm</div>
    </div>`;
    attachImage.push({ path: order.image });
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: process.env.MAIL_ACCOUNT, // sender address
    to: email, // list of receivers
    subject: "Bạn đã đặt hàng tại Shop Food & Food", // Subject line
    text: "Hello world?", // plain text body
    html: `<div><b>Bạn đã đặt hàng thành công tại Shop Food & Food</b></div> ${listItem}`,
    attachments: attachImage,
  });
  return info;
};

module.exports = {
  sendEmailCreateOrder,
};
