import { NavLink } from "react-router-dom"
import styles from "./IconMenu.module.css"
import HEART from "../../assets/Icons/heart.svg"
import BAG from "../../assets/Icons/bag.svg"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export const IconMenu = () => {
  const [cartItems] = useContext(CartContext)
  return (
    <ul className={styles.iconMenu}>
      <li>
        <NavLink to="ulubione">
          <img src={HEART} />
        </NavLink>
      </li>
      <li>
        <NavLink to="koszyk">
          <img src={BAG} />
          <div className={styles.numberOfProducts}>{cartItems.length}</div>
        </NavLink>
      </li>
    </ul>
  )
}
