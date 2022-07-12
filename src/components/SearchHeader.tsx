import { Logo } from "./Logo";
import RestrictedAccess from "./RestrictedAccess";

import styles from './SearchHeader.module.css'

export function SearchHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Logo />

        <div>
          <input type="text" />
        </div>

        <RestrictedAccess />
      </div>
    </header>
  )
}