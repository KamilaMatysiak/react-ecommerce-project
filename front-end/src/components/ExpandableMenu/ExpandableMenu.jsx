import styles from "./ExpandableMenu.module.css"
import { CATEGORIES } from "../../constants/categories"
import { NavLink } from "react-router-dom"
import ARROW from "../../assets/Icons/arrow.svg"

export const ExpandableMenu = () => {
  const activePath = "odziez"

  return (
    <div className={styles.expandableMenu}>
      <p>Kobieta</p>
      <ul>
        {CATEGORIES.map((category) => {
          return (
            <li key={category.path}>
              <NavLink to={category.path}>
                {category.name}
                <img
                  src={ARROW}
                  className={activePath == category.path ? styles.expanded : ""}
                />
              </NavLink>
              {activePath == category.path && (
                <ul>
                  {category.subcategories.map((subcategory) => {
                    return (
                      <li key={subcategory.path}>
                        <NavLink to={subcategory.path}>
                          {subcategory.name}
                        </NavLink>
                      </li>
                    )
                  })}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
