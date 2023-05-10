import type { IncomingMessage, ServerResponse } from "http";
import nodemailer from "nodemailer";
const runtimeConfig = useRuntimeConfig();

type EmailFormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

// Configure nodemailer with gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: `${runtimeConfig.gmailAddress}`,
    pass: `${runtimeConfig.gmailAppPassword}`,
  },
});

export default defineEventHandler(async (event) => {
  const req = event.node.req as IncomingMessage;
  const res = event.node.res as ServerResponse;
  const { firstName, lastName, email, message } = JSON.parse(
    await getRawBody(req)
  ) as EmailFormData;

  // Create an email options object
  const mailOptions = {
    to: `${runtimeConfig.gmailAddress}`,
    subject: "Website contact form submission",
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Email sent successfully" }));
  } catch (error) {
    console.error(error);
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Failed to send email" }));
  }
});

async function getRawBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: Uint8Array[] = [];

    req.on("data", (chunk) => {
      chunks.push(chunk);
    });

    req.on("end", () => {
      resolve(Buffer.concat(chunks).toString("utf8"));
    });

    req.on("error", (err) => {
      reject(err);
    });
  });
}
