import { NavLink } from 'react-router-dom'
import styles from './IconMenu.module.css'
import HEART from '../../assets/Icons/heart.svg'
import BAG from '../../assets/Icons/bag.svg'

export const IconMenu = () => {
  const cartItems = 2
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
          <div className={styles.numberOfProducts}>{cartItems}</div>
        </NavLink>
      </li>
    </ul>
  )
}
