import styles from "./CartProductsList.module.css"
import { CartProduct } from "../CartProduct/CartProduct"
import { CenteredContent } from "../CenteredContent/CenteredContent"

export const CartProductsList = ({ products }) => {
  return (
    <CenteredContent>
      <div className={styles.cartProductsList}>
        <h2>Koszyk</h2>
        {products.map((product) => (
          <CartProduct key={product.id} product={product} />
        ))}
      </div>
    </CenteredContent>
  )
}
