import styles from "./Breadcrumbs.module.css"
import { NavLink, useParams } from "react-router-dom"
import ARROW from "../../assets/Icons/arrow.svg"

export const Breadcrumbs = () => {
  const params = useParams()
  const breadcrumbs = [
    { name: params.gender, path: params.gender },
    { name: params.category, path: `${params.gender}/${params.category}` },
    {
      name: params.subcategory,
      path: `${params.gender}/${params.category}/${params.subcategory}`,
    },
  ]
  return (
    <div className={styles.breadcrumbs}>
      {breadcrumbs.map((breadcrumb) => {
        return (
          <li key={breadcrumb.path}>
            <NavLink to={breadcrumb.path}>
              {breadcrumb.name} <img src={ARROW} />
            </NavLink>
          </li>
        )
      })}
    </div>
  )
}
