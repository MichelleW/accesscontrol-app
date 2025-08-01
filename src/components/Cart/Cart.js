import React, { useState, useEffect } from 'react'
import './Cart.css'
import { sampleCartItems } from './data/cartData'

const Cart = () => {
    const [cartItems, setCartItems] = useState(sampleCartItems)
    const [total, setTotal] = useState(0)

    function calculateTotal(items) {
        return items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    }
    function handleQuantityChange(itemId, change) {
        setCartItems(prevItems => prevItems.map(item => {
            if (item.id === itemId) {
                const newQuantity = item.quantity + change;
                // Prevent quantity from going below 0
                if (newQuantity < 0) {
                    return item; // Return unchanged item if quantity would be negative
                }
                return { ...item, quantity: newQuantity };
            }
            return item;
        }))

    }

    function removeItem(itemId) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    }

    function continueShopping() {
        setCartItems(sampleCartItems)

    }

    function emptyCart() {
        setCartItems([])
        setTotal(0)
    }
    useEffect(() => {
        setTotal(calculateTotal(cartItems))
    }, [cartItems])
    return (
        <div className="cart">
            <div className="header">
                <h1>Shopping Cart</h1>
                <div className="totalItems">{(cartItems.length) ? `${cartItems.length} items` : '0 Items'} ${total.toFixed(2)}</div>
            </div>
            {cartItems.map((item, index) => {
                return (
                    <div className="item" key={item.id}>
                        <div className="item-description">
                            <img src={item.image} alt="item" />
                            <div className="description">
                                <h4>{item.name}</h4>
                                <p>${item.price}</p>
                            </div>
                        </div>
                        <div className="quantity">
                            <div className="quantity-controls">
                                <div className="minus" onClick={() => handleQuantityChange(item.id, -1)}>-</div>
                                <div className="quantity-number">{item.quantity}</div>
                                <div className="plus" onClick={() => handleQuantityChange(item.id, 1)}>+</div>
                            </div>
                            <button className="remove-item" onClick={() => removeItem(item.id)}>Remove</button>
                        </div>
                    </div>
                )
            })}
            {cartItems.length === 0 ? (
                <>
                    <div className="empty-cart">Your cart is empty.</div>
                    <button className="cart-button" onClick={continueShopping}>Continue Shopping</button></>
            ) : (
                <button className="cart-button" onClick={emptyCart}>Empty Cart</button>
            )}
        </div>
    )
}

export default Cart