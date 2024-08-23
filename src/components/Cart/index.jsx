import React, { useState } from 'react'
import styles from './cart.module.css'
import CartItem from '../CartItem';

const Cart = () => {
    const [cartItems, setCartItems] = useState([{
       
        "thumbnail": "./assets/images/image-waffle-thumbnail.jpg",
        "name": "Waffle with Berries",
        "quantity": 1,
        "price": 6.50
     },
     {
         "thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
         "name": "Vanilla Bean Crème Brûlée",
         "quantity": 2,
         "price": 7.00
      },
      {
         "thumbnail": "./assets/images/image-macaron-thumbnail.jpg",
         "name": "Macaron Mix of Five",
         "quantity": 0,
         "price": 6.00,
      },
      {
         "thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg",
         "name": "Classic Tiramisu",
         "quantity": 1,
         "price": 5.50
      },
      {
         "thumbnail": "./assets/images/image-baklava-thumbnail.jpg",
         "name": "Pistachio Baklava",
         "quantity": 3,
         "price": 4.00
      },
      {
         "thumbnail": "./assets/images/image-meringue-thumbnail.jpg",
         "name": "Lemon Meringue Pie",
         "quantity": 0,
         "price": 5.00
      },
      {
         "thumbnail": "./assets/images/image-cake-thumbnail.jpg",
         "name": "Red Velvet Cake",
         "quantity": 1,
         "price": 4.50
      },
      {
         "thumbnail": "./assets/images/image-brownie-thumbnail.jpg",
         "name": "Salted Caramel Brownie",
         "quantity": 2,
         "price": 4.50
      },
      {
         "thumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg",
         "name": "Vanilla Panna Cotta",
         "quantity": 0,
         "price": 6.50
      }])
    
      const totalCartItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

      const totalOrderPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div className={styles.cartContainer}>
        <h4 className={styles.heading}>Your Cart ({totalCartItemsCount})</h4>
        {!totalCartItemsCount ? (
            <div className={styles.emptyCartContainer}>
                <img src={"./assests/images/illustration-empty-cart.svg"} alt='empty cart' loading='lazy' />
                <p className={styles.emptyCartQuote}>Your added items will apear here</p>
            </div>
        ) : (
            <div>
                {cartItems.map((item, index) => (
                    <CartItem key={index} cartItem={item}/>
                ))}
                <div className={styles.totalOrderPrice}>
                    <p className={styles.orderTotalLabel}>Order Total</p>
                    <p className={styles.totalPrice}>${totalOrderPrice.toFixed(2)}</p>
                </div>
                <div className={styles.message}>
                    <img src={"/assets/images/icon-carbon-neutral.svg"} alt="carbon-neutral" loading='lazy'/>
                    <p>This is a <span className={styles.boldText}>carbon-neutral</span> delivery </p>
                </div>
                <button className={styles.confirmButton}>Confirm Order</button>
            </div>
        )}
    </div>
  )
}

export default Cart
