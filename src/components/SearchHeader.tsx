import { FiSearch } from 'react-icons/fi'
import { Logo } from "./Logo";
import { RestrictedAccess } from "./RestrictedAccess";

import styles from './SearchHeader.module.css'

export function SearchHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Logo />

        <div className={styles.inputContainer}>
          <FiSearch size={18}/>
          <input type="text" placeholder="Qual cidade você procura?"/>
        </div>

        <RestrictedAccess />
      </div>
    </header>
  )
}