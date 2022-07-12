import Link from 'next/link'

import styles from './RestrictedAccess.module.css'

export function RestrictedAccess() {
  return (
    <Link href="#">
      <a className={styles.container}>
        Acesso restrito
      </a>
    </Link>
  )
}