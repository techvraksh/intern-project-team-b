import React from "react";
import { BrowserRouter,Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import SigninScreen from './screens/SigninScreen';
import Navbar from "./components/Navbar";
import About from "./screens/About";
import CartScreen from "./screens/CartScreen";
import ShippingAddressScreen from "./screens/ShippingAdressScreen";

class App extends React.Component {
  constructor () {
 super();
    this.state = {
      cartItems: [],
    };
  }
  componentDidMount() {
    if(localStorage.carts) {
      this.setState({ cartItems: JSON.parse(localStorage.carts) || [] });
    }
    window.addEventListener('beforeunload',this.handleUpdateLocalStorage);
  }
  handleUpdateLocalStorage = () => {
    localStorage.setItem('carts',JSON.stringify(this.state.cartItems));
  }
  componentWillUnmount() {
    window.removeEventListener('beforeunload',this.handleUpdateLocalStorage)
  }
  addToCartHandler = (p) =>{
    let isPresent =
     this.state.cartItems.findIndex(product => product._id === p._id) !== -1
     if(isPresent){
     this.incrementQuantity(p._id);
     }
     else{
    this.setState((prevState) => ({
      cartItems: prevState.cartItems.concat({...p, quantity: 1}),
    }));}
   };
  
   incrementQuantity = (_id) => {
    this.setState((prevState) => {
      let updatedCartItems = prevState.cartItems.map((p) => {
        if(p._id === _id) {
          return{
            ...p,
            quantity: p.quantity+1,
          };
        }
        return p;
      });
      return {
        cartItems: updatedCartItems,
      };
    });
   };
   decrementQuantity = (_id) => {
    this.setState((prevState) => {
      let updatedCartItems = prevState.cartItems.map((p) => {
        if(p._id === _id) {
          return{
            ...p,
            quantity: p.quantity-1,
          };
        }
        return p;
      });
      return {
        cartItems: updatedCartItems,
      };
    });
   };
   deleteItem = (_id) => {
    this.setState((prevState) => {
      let updatedCartItems = prevState.cartItems.filter((p) => {
        return p._id !== _id
      });
      return{
        cartItems: updatedCartItems,
      };
    });
   };
render() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <div>
          <Navbar></Navbar>
        </div>
        <main>
          <Route path="/product/:id" component={ProductScreen}>addToCartHandler={this.addToCartHandler}</Route>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/Shipping" component={ShippingAddressScreen}></Route>
          <Route path="/cart" component={CartScreen}>
            cartItems={this.state.cartItems}
            incrementQuantity={this.incrementQuantity}
            decrementQuantity={this.decrementQuantity}
            deleteItem={this.deleteItem}
          </Route>
        </main>
        <footer className="row center">TechVraksh reserved</footer>
      </div>
    </BrowserRouter>
    );
  }
};

export default App;

