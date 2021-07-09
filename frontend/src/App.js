import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import SigninScreen from './screens/SigninScreen';
import Navbar from "./components/Navbar";
import About from "./screens/About";
import CartScreen from "./screens/CartScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";


const App = () => {
  return (
    <BrowserRouter>                                                    
      <div className="grid-container">
        <div>
          <Navbar></Navbar>
        </div>
        <main>
          <CartProvider>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/Shipping" component={ShippingAddressScreen}></Route>
          <Route path="/cart" component={CartScreen}></Route>
          </CartProvider>
        </main>
        <footer className="row center">TechVraksh reserved</footer>
      </div>
    </BrowserRouter>
    );
};

export default App;

