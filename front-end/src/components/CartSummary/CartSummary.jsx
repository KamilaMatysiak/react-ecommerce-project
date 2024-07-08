import styles from "./CartSummary.module.css"
import DELIVERY from "../../assets/Icons/delivery.svg"
import { FullWidthButton } from "../FullWidthButton/FullWidthButton"

export const CartSummary = ({ products }) => {
  const deliveryCost = 49
  const minSumForDelivery = 500

  let sum = 0
  products.forEach((product) => (sum += product.pricePLN))

  return (
    <div className={styles.cartSummary}>
      <h2>Podsumowanie</h2>
      <div className={styles.cartRow}>
        <p>Wartość produktu</p>
        <p>{sum}zł</p>
      </div>
      <div className={styles.cartRow}>
        <p>Koszt dostawy</p>
        <p>{sum > minSumForDelivery ? 0 : deliveryCost}zł</p>
      </div>
      <div className={`${styles.cartRow} ${styles.cartSummaryRow}`}>
        <p>Do zapłaty</p>
        <p>{sum > minSumForDelivery ? sum : sum + deliveryCost}zł</p>
      </div>
      <FullWidthButton isBlack={true}>Do kasy</FullWidthButton>
      <div className={styles.deliveryInfo}>
        <img src={DELIVERY} />
        <p>Darmowa dostawa od {minSumForDelivery}zł</p>
      </div>
    </div>
  )
}
