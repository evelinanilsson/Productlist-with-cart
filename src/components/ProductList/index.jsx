import React from 'react'
import styles from './productList.module.css';
import data from '../../data.json'
import { Product } from '..'
import { useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState(data)
  return (
    <div className={styles.productListContainer}>
      <h2 className={styles.heading}>Desserts</h2>
      <div className={styles.productsContainer}>
        {products.map((product, index) => (
            <Product key={index} product={product}/>
        ))}
      </div>
    </div>
  )
}

export default ProductList
