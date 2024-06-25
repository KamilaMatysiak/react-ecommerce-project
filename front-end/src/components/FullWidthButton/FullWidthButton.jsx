import styles from './FullWidthButton.module.css'

export const FullWidthButton = ({ children, onClick }) => {
  return (
    <button className={styles.fullWidthButton} onClick={onClick}>
      {children}
    </button>
  )
}
