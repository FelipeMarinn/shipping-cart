import React, {Component} from 'react';
import Menu from './svg/bars-solid.svg'
import CartIcon from './svg/shopping-cart-solid.svg'
import Close from './svg/times-solid.svg'
import {Link} from 'react-router-dom'
import './css/header.css'
import {DataContext} from './Context'

export default class Header extends Component{
  static contextType = DataContext
  state = {toggle: false}

  menuToggle = () => {
    this.setState({toggle: !this.state.toggle})
  }

  render() {
    const {toggle} = this.state
    const {cart} = this.context
    const show = cart.length > 0 ? 'visible' : 'hidden'
    return(
      <header>
        <div className='menu'>
          <img src={Menu} alt="Menu-toggle" width='20px' onClick={this.menuToggle}/>
        </div>
        <div className='logo'>
          <h1><Link to='/'>Nike</Link></h1>
        </div>
        <nav>
          <ul className={toggle ? 'toggle' : ''}>
            <li><Link to='/' onClick={this.menuToggle}>Products</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/about'>About</Link></li>
            {/* <li><Link to='/login'>Login / Register</Link></li> */}
            <li className='close'> 
              <img src={Close} alt='' width='20px' onClick={this.menuToggle}/>
            </li>
          </ul>
          <div className='nav-cart'>
            <span style={{visibility: show}}>{cart.length}</span>
            <Link to='/cart'>
              <img src={CartIcon} alt='' width='20px'/>
            </Link>
          </div>
        </nav>
      </header>
    )
  }
}

