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
import { CURRENCIES } from "../../constants/currencies"
import { CartContext } from "../../context/CartContext"
import { useLocalStorage } from "../../hooks/useLocalStorage"

export const Layout = () => {
  const [currency, setCurrency] = useLocalStorage(
    "selected_currency",
    CURRENCIES.PLN
  )
  const [cartItems, setCartItems] = useLocalStorage("cart_products", [])

  function addProductToCart(product) {
    const newState = [...cartItems, product]
    setCartItems(newState)
  }

  function deleteProductFromCart(product) {
    const newState = cartItems.filter((item) => item.id != product.id)
    setCartItems(newState)
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
