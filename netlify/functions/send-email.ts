import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import nodemailer from 'nodemailer'

type EmailFormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

// Configure nodemailer with gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: `${process.env.GMAIL_ADDRESS}`,
    pass: `${process.env.GMAIL_APP_PASSWORD}`
  }
});

const handler: Handler = async (event: HandlerEvent) => {
  const { firstName, lastName, email, message } = JSON.parse(event.body || '{}') as EmailFormData

  // Create an email options object
  const mailOptions = {
    to: `${process.env.GMAIL_ADDRESS}`,
    subject: 'Website contact form submission',
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`
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
