import type { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';
import nodemailer from 'nodemailer';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set');
}

if (!process.env.GMAIL_CLIENT_ID || !process.env.GMAIL_CLIENT_SECRET || !process.env.GMAIL_REFRESH_TOKEN) {
  throw new Error('Gmail OAuth2 credentials are not set');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16' as any,
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

// Create reusable transporter using OAuth2
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'rapidsaas@gmail.com',
    clientId: process.env.GMAIL_CLIENT_ID,
    clientSecret: process.env.GMAIL_CLIENT_SECRET,
    refreshToken: process.env.GMAIL_REFRESH_TOKEN,
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const sig = req.headers['stripe-signature'];

  if (!sig) {
    return res.status(400).json({ message: 'No signature found' });
  }

  let event: Stripe.Event;

  try {
    // Get the raw body as a buffer
    const rawBody = await new Promise<Buffer>((resolve) => {
      const chunks: Buffer[] = [];
      req.on('data', (chunk) => chunks.push(chunk));
      req.on('end', () => resolve(Buffer.concat(chunks)));
    });

    event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret!);
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).json({ message: `Webhook Error: ${err.message}` });
  }

  // Handle the event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    
    console.log('Processing checkout session:', {
      sessionId: session.id,
      customerEmail: session.customer_details?.email,
      amount: session.amount_total,
      currency: session.currency
    });
    
    try {
      console.log('Attempting to send email...');
      
      if (!session.customer_details?.email) {
        throw new Error('No customer email found in session');
      }

      const mailOptions = {
        from: '"RapidSaaS" <rapidsaas@gmail.com>',
        to: session.customer_details.email,
        subject: 'Your RapidSaaS Starter Kit Download Link',
        html: `
          <h1>Thank you for your purchase!</h1>
          <p>Here's your download link for the RapidSaaS Starter Kit:</p>
          <p><a href="https://drive.google.com/file/d/1AFFCpWLO3ZZ5-TK_ER19nyfFs5EzWVTN/view?usp=drive_link">Download RapidSaaS Starter Kit</a></p>
          <p><strong>Getting Started:</strong></p>
          <p>After downloading the kit, please read the README.md file carefully. It contains detailed instructions for:</p>
          <ul>
            <li>Setting up your development environment</li>
            <li>Installing dependencies</li>
            <li>Configuring environment variables</li>
            <li>Running the application locally</li>
          </ul>
          <p><strong>Want access to the private GitHub repository?</strong></p>
          <p>Simply reply to this email with your GitHub username, and we'll grant you access to the private repository within 24 hours.</p>
          <p>If you have any questions or need help with the setup, please don't hesitate to reach out.</p>
          <p>Best regards,<br>The RapidSaaS Team</p>
        `,
      };

      const info = await transporter.sendMail(mailOptions);
      
      console.log('Email sent successfully:', {
        messageId: info.messageId,
        to: session.customer_details.email,
        response: info.response
      });
    } catch (error: any) {
      console.error('Error sending email:', {
        error: error.message,
        code: error.code,
        command: error.command,
        stack: error.stack
      });
      // Don't return an error response here as the payment was successful
    }
  }

  res.status(200).json({ received: true });
} 