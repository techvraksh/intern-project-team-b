import React from "react";
import { useCart } from "react-use-cart";
import "../styles.css";
const CartScreen = () => {
  const { 
          isEmpty, 
          items,
          totalUniqueItems,
          totalItems,
          cartTotal,
          updateItemQuantity,
          removeItem,
          emptyCart,
        } = useCart();
        if(isEmpty) return <h1 className="p1">Your Cart is Empty</h1>
  return(
    <section className="p2">
      <div className="p3">
         <div className="col-12">
              <h1 className="p4">Cart({totalItems}) </h1>
              <h5 className="p5">This is your cart page</h5>
              <table className="p6">
                <tbody>
                      <tr>
                        <th>Image</th>
                        <th>Products({totalUniqueItems})</th>
                        <th>Piece Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th>---------------</th>
                      </tr>
                  {items.map((product) => {
                    return(
                      <tr key={product.id}>
                        <td>
                            <img src={product.image} style={{height: '6rem'}} alt={product.name} />
                        </td>
                        <td>{product.name}</td>
                        <td>${product.price}</td>
                        <td>{product.quantity}</td>
                        <td>$ ({product.price}*{product.quantity})</td>
                        <td>
                          <button
                          onClick={() => updateItemQuantity(product.id,product.quantity-1 )}>-</button>
                          <button
                          onClick={() => updateItemQuantity(product.id,product.quantity+1 )}>+</button>
                          <button 
                          onClick={() => removeItem(product.id )}>remove</button>
                        </td>
                      </tr>
                    )})}
                      <tr>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>Net Total:</td>
                          <td> $ {cartTotal}</td>
                          <td>
                              <button
                              onClick={() => emptyCart()}>Clear Cart
                              </button>
                              <a href="/Shipping"><button>Check Out</button></a>
                          </td>
                      </tr>
                </tbody>
              </table>
         </div>
      </div>
    </section>
  );
};
export default CartScreen;
