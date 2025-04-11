import { loadStripe } from '@stripe/stripe-js';

// Add debugging
console.log('Stripe Environment:', {
  publishableKey: import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY?.slice(0, 8) + '...',
  productId: import.meta.env.VITE_STRIPE_PRODUCT_ID
});

// Initialize Stripe with your publishable key
export const stripePromise = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY 
  ? loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)
  : null;

export const createCheckoutSession = async () => {
  if (!import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY) {
    console.error('Stripe publishable key is not set');
    return;
  }

  if (!import.meta.env.VITE_STRIPE_PRODUCT_ID) {
    console.error('Stripe product ID is not set');
    return;
  }

  console.log('Creating checkout session with product ID:', import.meta.env.VITE_STRIPE_PRODUCT_ID);

  try {
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productId: import.meta.env.VITE_STRIPE_PRODUCT_ID,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error:', {
        status: response.status,
        statusText: response.statusText,
        body: errorText
      });
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { sessionId } = await response.json();
    console.log('Received session ID:', sessionId);

    // Redirect to Stripe Checkout
    const stripe = await stripePromise;
    if (stripe) {
      console.log('Redirecting to Stripe checkout...');
      const { error } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (error) {
        console.error('Stripe redirect error:', error);
        throw new Error(error.message);
      }
    }
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
}; 