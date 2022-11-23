import React, {Component} from 'react';
import '../css/Payment.css'


export class Success extends Component {
  render() {
    return (
      <div className='payment-result'>
        <div className='payment__statement'>
          <h1 className='statement'>Cancel</h1>
          <h2 className='statement'>Your payment was canceled</h2>
        </div>   
      </div>
    )
  }  
}

export default Success