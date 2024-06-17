import { NavLink } from 'react-router-dom'
import { SUBCATEGORIES } from '../../constants/categories'
import styles from './CategoriesMenu.module.css'

export const CategoriesMenu = () => {
  return (
    <div className={styles.categoriesMenu}>
      <ul>
        {SUBCATEGORIES.map((subcategory) => (
          <li key={subcategory.path}>
            <NavLink to={subcategory.path}>{subcategory.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
