import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/product.css'


export class Products extends Component{

  static contextType = DataContext  

  render() { 
    const {products} = this.context
    return(
      <div id='product'>
          {
            products.map(product => {
              return <div className='card' key={product._id}>
                       <Link to={`/product/${product._id}`}>
                           <img src={product.src[0]} alt={product.title}/>
                       </Link>
                       <div className='content'>
                         <h3>
                           <Link to={`/product/${product._id}`}>{product.title}</Link>
                         </h3>
                         <p>{product.description}</p>
                         <span>${product.price}</span>
                         <button onClick={() => this.context.addCart(product._id)}>Add to cart</button>
                       </div>
                     </div>
            })       
          }
      </div>
    )
  }
}

export default Products
