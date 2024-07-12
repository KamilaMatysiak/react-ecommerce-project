import { NavLink, useParams } from "react-router-dom"
import { CATEGORIES } from "../../constants/categories"
import styles from "./CategoriesMenu.module.css"

export const CategoriesMenu = () => {
  const params = useParams()
  return (
    <div className={styles.categoriesMenu}>
      <ul>
        {CATEGORIES.map((subcategory) => (
          <li key={subcategory.path}>
            <NavLink to={`/${params.gender}/${subcategory.path}`}>
              {subcategory.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
