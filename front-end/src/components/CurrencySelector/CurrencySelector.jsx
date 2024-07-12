import { useContext } from "react"
import { CURRENCIES } from "../../constants/currencies"
import styles from "./CurrencySelector.module.css"
import { CurrencyContext } from "../../context/CurrencyContext"

export const CurrencySelector = () => {
  const [currency, setCurrency] = useContext(CurrencyContext)
  return (
    <>
      <select
        onChange={(e) => {
          setCurrency(e.currentTarget.value)
          localStorage["selectedCurrency"] = e.currentTarget.value
        }}
        value={currency}
        className={styles.currencySelector}>
        <option value={CURRENCIES.PLN}>{CURRENCIES.PLN}</option>
        <option value={CURRENCIES.USD}>{CURRENCIES.USD}</option>
      </select>
    </>
  )
}
