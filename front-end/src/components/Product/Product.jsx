import { Link } from 'react-router-dom'
import styles from './Product.module.css'

export const Product = ({ product }) => {
  return (
    <Link className={styles.productCard}>
      <img src={product.photos[0]} />
      <h3>{product.productName}</h3>
      <p>{product.pricePLN}zł</p>
      <div className={styles.heart}></div>
    </Link>
  )
}
