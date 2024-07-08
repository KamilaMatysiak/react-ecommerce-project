import styles from "./FullWidthButton.module.css"

export const FullWidthButton = ({ children, onClick, isBlack }) => {
  return (
    <button
      className={
        isBlack
          ? `${styles.fullWidthButton} ${styles.black}`
          : styles.fullWidthButton
      }
      onClick={onClick}>
      {children}
    </button>
  )
}
