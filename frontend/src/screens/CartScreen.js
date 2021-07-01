import React from "react";
import CartItem from "../components/CartItem";

class CartScreen extends React.Component {
  constructor(props){
    super(props)
  this.state ={
    isOpen: false,
  };
}

close =() =>{this.setState({ isOpen: false})};
open = () =>{this.setState({isOpen: true})};
render(){
  const { isOpen } =this.state;
  let totalQuantity = this.props.cartIitems.reduce((acc, cv) => {
    acc=acc+cv.quantity;
    return acc;
  },0)
  let totalAmount = this.props.cartItems.reduce((acc, cv) => {
    acc=acc+cv.price * cv.quantity;
    return acc;
  },0)
  if(!isOpen) {
    return <ClosedCart open={this.open} totalQuantity={totalQuantity} />
  }
 
  return (
    <main>
      <section>
        <aside className="cart">
          <div onClick={this.close} className="close-btn">
            x
           </div> 
            <div className="cart-body">
              <div className="cart-heading">
                <div className="cart-icon">
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="icon"
                    >
                  </svg>
                </div>
                <h1>Cart{totalQuantity}</h1>
                <h6>this is the cart page</h6>
              </div>
          </div>
        </aside>
      </section>
      <section>
                <div >
                    {this.props.cartIitems.map((item) => (
                      <CartItem 
                      {...item}
                      incrementQuantity={this.props.incrementQuantity}
                      decrementQuantity={this.props.decrementQuantity}
                      deleteItem={this.props.deleteItem}
                      />
                    ))}
                    
                    <div className="cart-checkout">
                      <div>
                        <p>SUBTOTAL</p>mm
                        <p>${totalAmount}</p>
                      </div>
                      <button onClick={() => alert('Total amount is: $ '+ {totalAmount})}>CHECKOUT</button>
                    </div>
                </div>
      </section>
    </main>
  );
}
};
function ClosedCart(props) {
  return(
    <div className="close-cart">
      <span onClick={props.open} className="open-btn">
        <div className="cart-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            className="icon"
          >
          </svg>
                <h1>Cart{props.totalQuantity}</h1>
        </div>
      </span>
    </div>
  )
}
export default CartScreen;
