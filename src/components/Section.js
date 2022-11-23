import React, {Component} from 'react';
import Products from './section/Products'
import Details from './section/Details'
import {Route, Switch} from 'react-router-dom'
import Cart from './section/Cart'
import Cancel from './section/Cancel';
import Success from './section/Success';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';


const routes = [
  {
    path: "/product/:id",
    component: Details
  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "/success",
    component: Success,
  },
  {
    path: "/cancel",
    component: Cancel,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/",
    component: Products,
  },
];

export default class Section extends Component{
  render() {
    return(
      <div>
        <section>
          <Switch>
            {/* <Route path="/product/:id" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route path="/success" component={Success} />
            <Route path="/cancel" component={Cancel} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Products} /> */}

            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}

          </Switch>
        </section>
      </div>
    )
  }
}

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
