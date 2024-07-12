import styles from "./Breadcrumbs.module.css"
import { NavLink, useParams } from "react-router-dom"
import ARROW from "../../assets/Icons/arrow.svg"
import { CATEGORIES, GENDERS } from "../../constants/categories"

export const Breadcrumbs = () => {
  const { gender, category, subcategory } = useParams()
  const foundGender = GENDERS.find((g) => g.path === gender)
  const foundCategory = CATEGORIES.find((c) => c.path === category)

  const breadcrumbs = [
    { name: foundGender.name, path: foundGender.path },
    {
      name: foundCategory.name,
      path: `/${foundGender.path}/${foundCategory.path}`,
    },
  ]

  if (subcategory) {
    const foundSubcategory = foundCategory.subcategories.find(
      (s) => s.path === subcategory
    )

    breadcrumbs.push({
      name: foundSubcategory.name,
      path: `/${foundGender.path}/${foundCategory.path}/${foundSubcategory.path}`,
    })
  }

  return (
    <div className={styles.breadcrumbs}>
      {breadcrumbs.map((breadcrumb) => {
        return (
          <li key={breadcrumb.path}>
            <NavLink end to={breadcrumb.path}>
              {breadcrumb.name} <img src={ARROW} />
            </NavLink>
          </li>
        )
      })}
    </div>
  )
}
