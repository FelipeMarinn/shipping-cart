import React, {Component} from 'react';

export const DataContext = React.createContext()

export class DataProvider extends Component{

  state = {
    products: [
      {
        "_id": "1",
        "title": "Nike Shoes",
        "src": [
          "https://cdn-images.farfetch-contents.com/13/80/01/87/13800187_21663026_1000.jpg",
          "https://cdn-images.farfetch-contents.com/13/80/01/87/13800187_21663035_1000.jpg",
          "https://cdn-images.farfetch-contents.com/13/80/01/87/13800187_21663043_1000.jpg",
          "https://cdn-images.farfetch-contents.com/13/80/01/87/13800187_21663049_1000.jpg"
        ],
        "description": "tenis Air Jordan 1 Retro High OG",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed imperdiet enim. Proin in vehicula augue. In hac habitasse platea dictumst. Duis a urna velit.",
        "price": 380,
        "colors":["red","black","crimson","teal"],
        "count": 1
    },
    {
        "_id": "2",
        "title": "Nike Shoes",
        "src": [
          "https://cdn-images.farfetch-contents.com/15/95/00/40/15950040_32587702_1000.jpg",
          "https://cdn-images.farfetch-contents.com/15/95/00/40/15950040_32587703_1000.jpg",
          "https://cdn-images.farfetch-contents.com/15/95/00/40/15950040_32587705_1000.jpg",
          "https://cdn-images.farfetch-contents.com/15/95/00/40/15950040_32587706_1000.jpg"
        ],
        "description": "tenis React Vision",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed imperdiet enim. Proin in vehicula augue. In hac habitasse platea dictumst. Duis a urna velit.",
        "price": 230,
        "colors":["red","crimson","teal"],
        "count": 1
    },
    {
        "_id": "3",
        "title": "Nike Shoes",
        "src": [
          "https://cdn-images.farfetch-contents.com/16/62/33/81/16623381_32776190_1000.jpg",
          "https://cdn-images.farfetch-contents.com/16/62/33/81/16623381_32776188_1000.jpg",
          "https://cdn-images.farfetch-contents.com/16/62/33/81/16623381_32776191_1000.jpg",
          "https://cdn-images.farfetch-contents.com/16/62/33/81/16623381_32773524_1000.jpg"
        ],
        "description": "tenis Air Max 95",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed imperdiet enim. Proin in vehicula augue. In hac habitasse platea dictumst. Duis a urna velit.",
        "price": 250,
        "colors":["lightblue","white","crimson","teal"],
        "count": 1
    },
    {
        "_id": "4",
        "title": "Nike Shoes",
        "src": [
          "https://cdn-images.farfetch-contents.com/16/55/75/95/16557595_32292520_1000.jpg",
          "https://cdn-images.farfetch-contents.com/16/55/75/95/16557595_32292521_1000.jpg",
          "https://cdn-images.farfetch-contents.com/16/55/75/95/16557595_32293202_1000.jpg",
          "https://cdn-images.farfetch-contents.com/16/55/75/95/16557595_32292522_1000.jpg"
        ],
        "description": "zapatillas Air Force 1",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed imperdiet enim. Proin in vehicula augue. In hac habitasse platea dictumst. Duis a urna velit.",
        "price": 180,
        "colors":["orange","black","crimson","teal"],
        "count": 1
    },
    {
        "_id": "5",
        "title": "Nike Shoes",
        "src": [
          "https://cdn-images.farfetch-contents.com/16/55/66/43/16556643_32352393_1000.jpg",
          "https://cdn-images.farfetch-contents.com/16/55/66/43/16556643_32352394_1000.jpg",
          "https://cdn-images.farfetch-contents.com/16/55/66/43/16556643_32353834_1000.jpg",
          "https://cdn-images.farfetch-contents.com/16/55/66/43/16556643_32353833_1000.jpg"
        ],
        "description": "tenis Air Force 1'07 LX Than You Plastic Bag",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed imperdiet enim. Proin in vehicula augue. In hac habitasse platea dictumst. Duis a urna velit.",
        "price": 210,
        "colors":["orange","black","crimson","teal"],
        "count": 1
    },
    {
        "_id": "6",
        "title": "Nike Shoes",
        "src": [
          "https://cdn-images.farfetch-contents.com/16/54/89/91/16548991_32477538_1000.jpg",
          "https://cdn-images.farfetch-contents.com/16/54/89/91/16548991_32477540_1000.jpg",
          "https://cdn-images.farfetch-contents.com/16/54/89/91/16548991_32477541_1000.jpg",
          "https://cdn-images.farfetch-contents.com/16/54/89/91/16548991_32477542_1000.jpg"
        ],
        "description": "tenis Dunk High PRM",
        "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        "price": 450,
        "colors":["orange","black","crimson","teal"],
        "count": 1
    }
    ],
    cart: [],
    total: 0
  }

  addCart = (id) => {
    const {products, cart} = this.state
    // verifica que todos los elementos cumplan un requsisto
    const check = cart.every(item => {
      return item._id !== id
    })
    if (check) {
      const data = products.filter(product => {
        return product._id === id
      })
      this.setState({cart: [...cart, ...data]})
    } else {
      alert('The product has been added to cart')
    }
  
  }

  reduction = (id) => {
    const {cart} = this.state
    cart.forEach(item => {
      if (item._id === id) {
        item.count === 1 ?  item.count = 1 : item.count--
      }
    })
    this.setState({cart: cart})
    this.getTotal()
  }

  increase = (id) => {
    const {cart} = this.state
    cart.forEach(item => {
      if (item._id === id) {
        item.count++
      }
    })
    this.setState({cart: cart})
    this.getTotal()
  }

  removeProduct = (id) => {
    if (window.confirm('Do you want to delete this product?')) {
      const {cart} = this.state
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1)
        }
      })
      this.setState({cart: cart})
      this.getTotal()
    }
  }

  getTotal = () => {
    const {cart} = this.state
    // suma los valores del array sobre un acomuldor dando un unico valor
    const res = cart.reduce((prev, item) => {
      return prev + (item.price * item.count)
    }, 0)
    this.setState({total: res})
  }

  componentDidUpdate() {
    localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
    localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
  }

  componentDidMount() {
    const dataCart = JSON.parse(localStorage.getItem('dataCart'))
    console.log(dataCart)
    if (dataCart !== null) {
      this.setState({cart: dataCart})
    }
    const dataTotal = JSON.parse(localStorage.getItem('dataTotal'))
    console.log(dataCart)
    if (dataTotal !== null) {
      this.setState({total: dataTotal})
    }
  }

  render() {
    const {products, cart, total} = this.state
    const {addCart, reduction, increase, removeProduct, getTotal} = this

    return(
      <DataContext.Provider value={{products, addCart, cart, reduction, increase, removeProduct, total, getTotal}}>
        {this.props.children}
      </DataContext.Provider>
    )
  }
}
