import styles from "./Accordion.module.css"
import ARROW from "../../assets/Icons/arrow.svg"
import { useState } from "react"

export const Accordion = ({ items }) => {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0)
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <li key={item.title} onClick={() => setActiveSectionIndex(index)}>
            <div className={styles.item}>
              <p>{item.title}</p>
              <img
                className={activeSectionIndex === index && styles.expanded}
                src={ARROW}
              />
            </div>
            {activeSectionIndex === index && <p>{item.content}</p>}
          </li>
        )
      })}
    </ul>
  )
}
