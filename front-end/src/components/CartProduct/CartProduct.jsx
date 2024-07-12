import styles from "./CartProduct.module.css"
import { Link } from "react-router-dom"
import REMOVE_ICON from "../../assets/Icons/close.svg"
import { Price } from "../Price/Price"

export const CartProduct = ({ product }) => {
  const price = <Price product={product} />
  return (
    <Link className={styles.cartProduct}>
      <img src={product.photos[0]} />
      <div className={styles.cartProductInfo}>
        <div className={styles.topRow}>
          <h3>
            {product.brand} {product.productName}
          </h3>
          <p>{price}</p>
        </div>

        <p className={styles.priceRow}>
          <span>Cena: </span>
          {price}
        </p>

        <div className={styles.buttonRow}>
          <button>
            <img src={REMOVE_ICON} /> Usuń
          </button>
        </div>
      </div>
    </Link>
  )
}
