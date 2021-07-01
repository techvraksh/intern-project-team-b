import React from "react";

function CartItem(props){
    return(
        <div className="cart-item">
            <img src={props.image} alt={props.name} width="80px"></img>
            <div className='cart-item-details'>
             <p className='cart-item-name'>{props.name}</p>
             <p>Quantity: {props.quantity}</p>
            </div>
            <div className='cart-price'>
                <p onClick={() => props.deleteItem(props._id)} className='cart-cross'>x</p>
                <p className='price'>$ {props.price}</p>
                <div>
                    <Increment incrementQuantity={() =>props.incrementQuantity(props._id)}/>
                    <Decrement decrementQuantity={() =>props.decrementQuantity(props._id)}/>
                </div>
            </div>
        </div>   
    );
}

function Increment(props) {
    return(
        <svg
        xmlns="https://www.w3.org/2000/svg"
        fill="none"
        viewBox="currentColor"
        className="plus-icon"
        onClick={props.incrementQuantity}
        >
         <path 
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth={2}
         d="M12 6v6m0 0v6m0-6h6m-6 0H6"
         />
        </svg>
    )
}

function Decrement(props) {
    return(
        <svg
        xmlns="https://www.w3.org/2000/svg"
        fill="none"
        viewBox="currentColor"
        className="plus-icon"
        onClick={props.decrementQuantity}
        >
         <path 
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth={2}
         d="M12 6v6m0 0v6m0-6h6m-6 0H6"
         />
        </svg>
    )
}
export default CartItem ;