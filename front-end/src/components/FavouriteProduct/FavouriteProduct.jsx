import { useFetcher } from "react-router-dom"
import BAG_ICON from "../../assets/Icons/bag.svg"
import REMOVE_ICON from "../../assets/Icons/close.svg"
import styles from "./FavouriteProduct.module.css"

export const FavouriteProduct = ({ favourite: { id, product } }) => {
  const { Form } = useFetcher()
  return (
    <div className={styles.favouriteProduct}>
      <img src={product.photos[0]} />
      <div className={styles.favouriteProductInfo}>
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
          <Form method="DELETE" action={`/delete-from-favourites/${id}`}>
            <button>
              <img src={REMOVE_ICON} /> Usuń
            </button>
          </Form>
          <button>
            <img src={BAG_ICON} />
            Dodaj do koszyka
          </button>
        </div>
      </div>
    </div>
  )
}
