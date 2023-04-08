import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import nodemailer from 'nodemailer'
const runtimeConfig = useRuntimeConfig()

type EmailFormData = {
  name: string | null;
  email: string | null;
  message: string | null;
};

// Configure nodemailer with gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: `${runtimeConfig.gmailAddress}`,
    pass: `${runtimeConfig.gmailAppPassword}`
  }
});

const handler: Handler = async (event: HandlerEvent) => {
  const { name, email, message } = JSON.parse(event.body || '{}') as EmailFormData

  // Create an email options object
  const mailOptions = {
    to: `${runtimeConfig.gmailAddress}`,
    subject: 'Website contact form submission',
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  }

  try {
    await transporter.sendMail(mailOptions)
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' })
    }
  } catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' })
    }
  }
}

export { handler }
