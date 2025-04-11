import type { VercelRequest, VercelResponse } from '@vercel/node';
import Stripe from 'stripe';
import cors from 'cors';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16' as any, // Type assertion to avoid version mismatch
});

// Helper method to wait for a middleware to execute before continuing
function runMiddleware(req: VercelRequest, res: VercelResponse, fn: Function) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

// Initialize CORS middleware
const corsMiddleware = cors({
  origin: ['https://rapidsaas.xyz', 'http://localhost:3000'],
  methods: ['POST', 'OPTIONS'],
  credentials: true,
});

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    // Run the CORS middleware
    await runMiddleware(req, res, corsMiddleware);

    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }

    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method not allowed' });
    }

    const { productId } = req.body;
    
    console.log('Received request with productId:', productId);

    if (!productId) {
      console.error('No productId provided in request body');
      return res.status(400).json({ message: 'productId is required' });
    }

    // First, get the product to find its default price
    console.log('Retrieving product from Stripe...');
    const product = await stripe.products.retrieve(productId);

    console.log('Product retrieved:', {
      id: product.id,
      name: product.name,
      defaultPriceId: product.default_price
    });

    if (!product.default_price) {
      console.error('Product has no default price:', product.id);
      throw new Error('Product has no default price');
    }

    // Get the price details separately
    const price = await stripe.prices.retrieve(product.default_price as string);
    
    console.log('Price retrieved:', {
      id: price.id,
      currency: price.currency,
      unit_amount: price.unit_amount
    });

    console.log('Creating checkout session...');
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: price.id,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.origin}/success`,
      cancel_url: 'https://rapidsaas.xyz',
      metadata: {
        product: 'RapidSaaS Starter Kit',
      },
      billing_address_collection: 'required',
      allow_promotion_codes: true,
      custom_text: {
        submit: {
          message: 'Your download link will be sent to your billing email'
        }
      }
    });

    console.log('Checkout session created:', session.id);
    res.status(200).json({ sessionId: session.id });
  } catch (error: any) {
    console.error('Stripe Error:', {
      type: error.type,
      code: error.code,
      message: error.message,
      param: error.param,
      raw: error.raw
    });
    
    if (error.type === 'StripeInvalidRequestError') {
      return res.status(400).json({
        message: 'Invalid request to Stripe',
        error: error.message
      });
    }
    
    res.status(500).json({ 
      message: 'Error creating checkout session',
      error: error.message
    });
  }
}