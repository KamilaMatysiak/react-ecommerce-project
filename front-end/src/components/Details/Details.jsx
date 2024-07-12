import styles from "./Details.module.css"

import { FullWidthButton } from "../FullWidthButton/FullWidthButton"

import DELIVERY from "../../assets/Icons/delivery.svg"
import RETURN from "../../assets/Icons/return.svg"
import { Accordion } from "../Accordion/Accordion"

export const Details = ({ product }) => {
  const accordionContent = [
    { title: "Opis produktu", content: product.description },
    { title: "Wskazówki pielęgnacyjne", content: product.maintenanceInfo },
  ]
  return (
    <div className={styles.details}>
      <h2>{product.brand}</h2>
      <p className={styles.productName}>{product.productName}</p>
      <p className={styles.price}>{product.pricePLN}zł</p>
      <FullWidthButton isBlack={true}>Dodaj do koszyka</FullWidthButton>
      <ul className={styles.extraInfo}>
        <li>
          <img src={DELIVERY} /> Dostawa do 24h
        </li>
        <li>
          <img src={RETURN} /> Zwrot do 100dni!
        </li>
      </ul>

      <Accordion items={accordionContent} />
    </div>
  )
}
