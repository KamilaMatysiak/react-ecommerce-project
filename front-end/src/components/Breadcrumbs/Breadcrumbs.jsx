import styles from "./Breadcrumbs.module.css"
import { NavLink } from "react-router-dom"
import ARROW from "../../assets/Icons/arrow.svg"

export const Breadcrumbs = () => {
  const breadcrumbs = [
    { name: "Kobieta", path: "kobieta" },
    { name: "Odzież", path: "odziez" },
    { name: "Swetry", path: "swetry" },
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
