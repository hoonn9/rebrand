const mailgun = require("mailgun-js");
const DOMAIN = process.env.MAILGUN_DOMAIN;
const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: DOMAIN,
});

const sendEmail = async ({ to, subject, text }) => {
  const payload = {
    from: `Re-brand <me@samples.mailgun.org>`,
    to: to,
    subject: subject,
    text: text,
  };

  try {
    // const data = await mg.messages().send(payload);
    // return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

exports.sendEmail = sendEmail;
