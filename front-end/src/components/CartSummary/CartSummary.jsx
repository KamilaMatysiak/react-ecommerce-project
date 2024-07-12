import styles from "./CartSummary.module.css"
import DELIVERY from "../../assets/Icons/delivery.svg"
import { FullWidthButton } from "../FullWidthButton/FullWidthButton"
import { useContext } from "react"
import { CurrencyContext } from "../../context/CurrencyContext"
import { CURRENCIES, CURRENCIES_SIGN } from "../../constants/currencies"

export const CartSummary = ({ products }) => {
  const [currency] = useContext(CurrencyContext)

  const deliveryCosts = {
    [CURRENCIES.PLN]: 49,
    [CURRENCIES.USD]: 10,
  }

  const minSumsForDelivery = {
    [CURRENCIES.PLN]: 500,
    [CURRENCIES.USD]: 100,
  }

  const currencySign = CURRENCIES_SIGN[currency]

  let sum = 0
  products.forEach(
    (product) =>
      (sum += currency === CURRENCIES.PLN ? product.pricePLN : product.priceUSD)
  )

  return (
    <div className={styles.cartSummary}>
      <h2>Podsumowanie</h2>
      <div className={styles.cartRow}>
        <p>Wartość produktu</p>
        <p>
          {sum}
          {currencySign}
        </p>
      </div>
      <div className={styles.cartRow}>
        <p>Koszt dostawy</p>
        <p>
          {sum > minSumsForDelivery[currency] ? 0 : deliveryCosts[currency]}
          {currencySign}
        </p>
      </div>
      <div className={`${styles.cartRow} ${styles.cartSummaryRow}`}>
        <p>Do zapłaty</p>
        <p>
          {sum > minSumsForDelivery[currency]
            ? sum
            : sum + deliveryCosts[currency]}
          {currencySign}
        </p>
      </div>
      <FullWidthButton isBlack={true}>Do kasy</FullWidthButton>
      <div className={styles.deliveryInfo}>
        <img src={DELIVERY} />
        <p>
          Darmowa dostawa od {minSumsForDelivery[currency]}
          {currencySign}
        </p>
      </div>
    </div>
  )
}
