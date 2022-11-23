import { loadStripe } from '@stripe/stripe-js';
import React, {Component} from 'react';
import './css/Payment.css'


const api_key = 'pk_test_51M5xmzEsRNDa78Sn9N2ucmMJUwc4N1f3z94xnJP8qL2jOUhm5g86IpRPoPWuupr0RzTY041bS0ddJ6EbmLrC0RY000rpWDO0in'
let stripePromise

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(api_key)
  }
  
  return stripePromise
}

export default class Payment extends Component{

    constructor(props) {
      super(props)
      this.redirectToCheckout = this.redirectToCheckout.bind(this)
    }

    checkoutOptions = {
      lineItems: [{
        price: 'price_1M5yAxEsRNDa78SnC891jvkR',
        quantity: 1
      }],
      mode: 'payment',
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/cancel`
    }


  async redirectToCheckout() {
    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout(this.checkoutOptions)
    console.log('stripe checkout error', error)
  }

  render() { 
    return(
      <button className="checkout-button" onClick={this.redirectToCheckout}>
        {/* <div className="grey-circle">
          <div className="purple-circle">
            <img className="icon" src='' alt="credit-card-icon" />
          </div>
        </div> */}
        <div className="text-container">
          <p className="text">Payment</p>
        </div>
      </button>
    )
  }
}

