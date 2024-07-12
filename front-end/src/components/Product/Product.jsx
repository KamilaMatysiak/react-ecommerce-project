import { Link } from "react-router-dom"
import styles from "./Product.module.css"

const ENDPOINT_TO_PATH_MAPPING = {
  women: "kobieta",
  men: "mezczyzna",
  children: "dziecko",
}

export const Product = ({ product }) => {
  return (
    <Link
      to={`/${ENDPOINT_TO_PATH_MAPPING[product.gender]}/${product.category}/${
        product.subcategory
      }/${product.id}`}
      className={styles.productCard}>
      <img src={product.photos[0]} />
      <h3>{product.productName}</h3>
      <p>{product.pricePLN}zł</p>
      <div className={styles.heart}></div>
    </Link>
  )
}
