import React, {Component} from 'react';
import Products from './section/Products'
import Details from './section/Details'
import {Route} from 'react-router-dom'
import Cart from './section/Cart'
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import { Cancel } from './section/Cancel';
import { Success } from './section/Success';


export default class Section extends Component{
  render() {
    return(
      <div>
        <section>
          <Route path="/" component={Products} exact/>
          <Route path="/product/:id" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/success" component={Success} />
          <Route path="/cancel" component={Cancel} />
        </section>
      </div>
    )
  }
}
