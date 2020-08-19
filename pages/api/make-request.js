// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require("nodemailer");

export default async (req, res) => {
  if (req.method !== "POST") {
    res.statusCode = 500;
    res.json({ success: false });
  }

  try {
    const { name, email, order, message } = req.body;

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.DIS_MAIL,
        pass: process.env.DIS_PASS,
      },
    });

    const textBody = `
    The following person used Dis-Connect page to get in touch:

    Name: ${name},\n
    Email: ${email},\n
    Requested Product: ${order},\n
    Message: ${message}
    `;

    const htmlBody = `
    <div>
      <p>The following person used Dis-Connect page to get in touch. Here's all the information they provided:</p>
      <br>
      <p><b>Name:</b> ${name},</p>
      <p><b>Email:</b> ${email},</p>
      <p><b>Requested Product:</b> ${order},</p>
      <p><b>Message:</b> ${
        message && message !== "" ? message : "<no-message-provided>"
      }</p>
    </div>
    `;

    let info = await transporter.sendMail({
      from: `"Dis-Connect" <${process.env.DIS_MAIL}>`,
      to: `${process.env.DIS_MAIL}`,
      replyTo: `${email}`,
      subject: `${name} for ${order}`,
      text: textBody,
      html: htmlBody,
    });

    console.log("Message sent: %s", info.messageId);

    res.statusCode = 200;
    res.json({ success: true });
  } catch (e) {
    console.error(e);
    res.statusCode = 500;
    res.json({ success: false });
  }
};
