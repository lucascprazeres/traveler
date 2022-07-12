import Link from 'next/link'

import styles from './RestrictedAccess.module.css'

export default function RestrictedAccess() {
  return (
    <Link href="#">
      <a className={styles.container}>
        Acesso restrito
      </a>
    </Link>
  )
}