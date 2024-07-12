import styles from "./CartProduct.module.css"
import { Link } from "react-router-dom"
import REMOVE_ICON from "../../assets/Icons/close.svg"
import { Price } from "../Price/Price"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export const CartProduct = ({ product }) => {
  const [, , deleteProductFromCart] = useContext(CartContext)
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
          <button onClick={() => deleteProductFromCart(product)}>
            <img src={REMOVE_ICON} /> Usuń
          </button>
        </div>
      </div>
    </Link>
  )
}
