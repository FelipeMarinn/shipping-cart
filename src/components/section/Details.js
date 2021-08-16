import React, {Component} from 'react';
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'
import '../css/details.css';

export default class Details extends Component{
  static contextType = DataContext
  state = { 
    product: [],
    index : 0
  }
  myRef = React.createRef();

  thishandletab = (index) => {
    this.setState({index: index})
    console.log(this.myRef.current.children)
    const images = this.myRef.current.children
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace('active', '')
    }
    images[index].className = 'active'
  } 

  getProduct = () => {
    if (this.props.match.params.id) {
      const res = this.context.products
      const data = res.filter(item => {
        return item._id === this.props.match.params.id
      })
      this.setState({product: data})
      console.log(data)
    }
  }

  componentDidUpdate() {
    const {index} = this.state;
    this.myRef.current.children[index].className = 'active'
  }

  componentDidMount() {
    this.getProduct()
  }

  handledButton = () => {
    this.myRef.scrollLeft = 50;
    document.documentElement.scrollLeft = 50;
  }

  render() {
    const {product, index} = this.state
    const {addCart} = this.context

    return(
      <>
          {
            product.map(item => (
              <>
                <div className='details' key={item._id}>
                  <img src={item.src[index]} alt=''/>
                  <div className='box'>
                    <div>
                      <div className='row'>
                        <h2>{item.title}</h2>
                        <span>${item.price}</span>
                      </div>
                      <p className='colors'>{
                        item.colors.map((color,index) => (
                          <button key={index} style={{background: color}}></button>
                        ))
                      }</p>
                      <p>{item.description}</p>
                      <p>{item.content}</p>
                    </div>
                    <div id='thum' className='thumb' ref={this.myRef}>
                      {
                        item.src.map((img, index) => (
                          <img src={img} alt='' key={index}
                          onClick={() => this.thishandletab(index)}/>
                        ))
                      } 
                    </div>
                    <div>
                      <Link to='/cart' className='cart' onClick={() => addCart(item._id)}>
                          Add to cart
                      </Link>
                    </div> 
                  </div>
                </div>
              </>
            
            ))
          }
      </>
    )
  }
}