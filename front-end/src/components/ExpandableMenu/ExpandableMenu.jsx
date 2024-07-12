import styles from "./ExpandableMenu.module.css"
import { CATEGORIES } from "../../constants/categories"
import { NavLink, useParams } from "react-router-dom"
import ARROW from "../../assets/Icons/arrow.svg"
import { PATH_TO_GENDER_NAME } from "../../constants/api"

export const ExpandableMenu = () => {
  const params = useParams()
  const activePath = params.category
  return (
    <div className={styles.expandableMenu}>
      <p>{PATH_TO_GENDER_NAME[params.gender]}</p>
      <ul>
        {CATEGORIES.map((category) => {
          return (
            <li key={category.path}>
              <NavLink to={`/${params.gender}/${category.path}`}>
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
                        <NavLink
                          to={`/${params.gender}/${category.path}/${subcategory.path}`}>
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
