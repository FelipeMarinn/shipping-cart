import React, {Component} from 'react';
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'
import '../css/details.css';
import '../css/cart.css';


export class Products extends Component{
  static contextType = DataContext

  componentDidMount() {
    this.context.getTotal()
  }

  render() { 
    const {cart, increase, reduction, removeProduct, total} = this.context

    if (cart.length === 0) {
      return <h2 style={{textAlign: 'center'}}>Nothings product</h2>
    } else {
      return(
        <>
        {
          cart.map(item => (
            <div className='details cart' key={item._id}>
              <img src={item.src[0]} alt=''/>
              <div className='box'>
                <div className='row'>
                  <h2>{item.title}</h2>
                  <span>${item.price * item.count}</span>
                </div>
                <p className='colors'>{
                  item.colors.map((color,index) => (
                    <button key={index} style={{background: color}}></button>
                  ))
                }</p>
                <p>{item.description}</p>
                <p>{item.content}</p>
                <div className='amount'>
                  <button className='count' onClick={() => reduction(item._id)}>-</button>
                  <span>{item.count}</span>
                  <button className='count' onClick={() => increase(item._id)}>+</button>
                </div>
              </div>
              <div className='delete' onClick={() => removeProduct(item._id)}>X</div>
            </div>
          ))
        }
        <div className='total'>
          <Link to='/payment'>Payment</Link>
          <h3>Total: ${total}</h3>
        </div>
        </>
      )
    }
  }
}

export default Products
