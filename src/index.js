import React from 'react';
import ReactDOM from 'react-dom/client';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Provider } from 'react-redux';
import App from './App';

import { store } from './store/store';

const root = ReactDOM.createRoot( document.getElementById('root'))

// Load Stripe
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);



root.render(
  <Provider store={store}>
    <React.StrictMode>
      {/* Wrap your app with the stripe promise */}
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </React.StrictMode>
  </Provider>
 
);


