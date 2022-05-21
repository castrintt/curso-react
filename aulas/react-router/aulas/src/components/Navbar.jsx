import React from 'react'

import styles from '../styles/Navbar.module.css'

//react router dom
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className={styles.nav}>
        <ul className={styles.unorder}>
            <li className={styles.list}>
                <Link to='/' className={styles.link}>
                    Home
                </Link>
            </li>
            <li className={styles.list}>
                <Link to='/about' className={styles.link}>
                    About
                </Link>
            </li>
            <li className={styles.list}>
                <Link to='/teste' className={styles.link}>
                    Teste
                </Link>
            </li>
        </ul>
        </nav>
    </>
  )
}

export default Navbar