import styles from "./CartProduct.module.css"
import { Link } from "react-router-dom"
import REMOVE_ICON from "../../assets/Icons/close.svg"

export const CartProduct = ({ product }) => {
  return (
    <Link className={styles.cartProduct}>
      <img src={product.photos[0]} />
      <div className={styles.cartProductInfo}>
        <div className={styles.topRow}>
          <h3>
            {product.brand} {product.productName}
          </h3>
          <p>{product.pricePLN}zł</p>
        </div>

        <p className={styles.priceRow}>
          <span>Cena: </span>
          {product.pricePLN}zł
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
