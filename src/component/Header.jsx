import logo from '../assets/to-do-list-logo.svg'
import styles from '../styles/Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logotipo to do list" />
    </header>
  )
}
