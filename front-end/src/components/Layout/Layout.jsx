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

export const Layout = () => {
  const [currency, setCurrency] = useState(
    localStorage["selectedCurrency"] || CURRENCIES.PLN
  )
  return (
    <>
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
    </>
  )
}
