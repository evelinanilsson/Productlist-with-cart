import React from 'react'
import styles from './product.module.css'
import { MdAddShoppingCart } from 'react-icons/md'

const Product = ({ product }) => {
  return (
    <div className={styles.productItemContainer}>
        <div className={styles.imageContainer}>
            <picture>
                <source media='(min-width: 1024px)' srcSet={product.image.desktop} />
                <source media='(min-width: 768px)' srcSet={product.image.tablet} />
                <source media='(max-width: 767px)' srcSet={product.image.mobile} />
                <img src={product.image.thumbnail} alt={product.name} className={styles.productImage} loading='lazy' />
            </picture>
        </div>
      <div className={styles.productDetails}>
        <div className={styles.addCartButton}>
          <MdAddShoppingCart size={20} />
          <span>Add to Cart</span>
        </div>

        <p className={styles.productCategory}>{product.category}</p>
        <p className={styles.productName}>{product.name}</p>
        <p className={styles.productPrice}>{product.price}</p>
      </div>
    </div>
  )
}

export default Product
