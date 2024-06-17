import { NavLink } from 'react-router-dom'
import { CATEGORIES } from '../../constants/categories'
import styles from './MainMenu.module.css'

export const MainMenu = () => {
  return (
    <ul className={styles.mainMenu}>
      {CATEGORIES.map((category) => (
        <li className={styles.menuOption} key={category.path}>
          <NavLink to={category.path}>{category.name}</NavLink>
        </li>
      ))}
    </ul>
  )
}
