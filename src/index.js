import React from 'react';
import ReactDOM from 'react-dom/client';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
