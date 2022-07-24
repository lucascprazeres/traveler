import { Logo } from "./Logo";
import { RestrictedAccess } from "./RestrictedAccess";

import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Logo />

        <span>Cidade</span>

        <RestrictedAccess />
      </div>
    </header>
  )
}