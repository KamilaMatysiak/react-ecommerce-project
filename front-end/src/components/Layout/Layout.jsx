import { Outlet } from "react-router-dom"
import { CategoriesMenu } from "../CategoriesMenu/CategoriesMenu"
import { CurrencySelector } from "../CurrencySelector/CurrencySelector"
import { Footer } from "../Footer/Footer"
import { IconMenu } from "../IconMenu/IconMenu"
import { Logo } from "../Logo/Logo"
import { MainContent } from "../MainContent/MainContent"
import { MainMenu } from "../MainMenu/MainMenu"
import { TopBar } from "../TopBar/TopBar"
import { CurrencyContext } from "../../context/CurrencyContext"
import { useState } from "react"
import { CURRENCIES } from "../../constants/currencies"
import { CartContext } from "../../context/CartContext"

export const Layout = () => {
  const [currency, setCurrency] = useState(
    localStorage["selectedCurrency"] || CURRENCIES.PLN
  )

  const [cartItems, setCartItems] = useState(() => {
    localStorage["cart_products"]
      ? JSON.parse(localStorage["cart_products"])
      : []
  })
  function addProductToCart(product) {
    setCartItems((previousCartItems) => {
      const newState = [...previousCartItems, product]
      localStorage["cart_products"] = JSON.stringify(newState)
      return newState
    })
  }

  function deleteProductFromCart(product) {
    setCartItems((prevCartItems) => {
      const newState = prevCartItems.filter((item) => item.id != product.id)
      localStorage["cart_products"] = JSON.stringify(newState)
      return newState
    })
  }

  return (
    <>
      <CartContext.Provider
        value={[cartItems, addProductToCart, deleteProductFromCart]}>
        <CurrencyContext.Provider value={[currency, setCurrency]}>
          <MainContent>
            <TopBar>
              <MainMenu />
              <Logo />
              <div>
                <CurrencySelector />
                <IconMenu />
              </div>
            </TopBar>
            <CategoriesMenu />
            <Outlet />
          </MainContent>
          <Footer />
        </CurrencyContext.Provider>
      </CartContext.Provider>
    </>
  )
}
