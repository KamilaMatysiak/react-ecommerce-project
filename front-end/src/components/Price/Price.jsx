import { useContext } from "react"
import { CurrencyContext } from "../../context/CurrencyContext"
import { CURRENCIES, CURRENCIES_SIGN } from "../../constants/currencies"

export const Price = ({ product }) => {
  const [currency] = useContext(CurrencyContext)
  return (
    <>
      {currency === CURRENCIES.PLN ? product.pricePLN : product.priceUSD}
      {CURRENCIES_SIGN[currency]}
    </>
  )
}
