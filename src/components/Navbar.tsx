'use client'

import Logo from '../resources/images/abm_logo2.png'
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import { useWindowDimentions } from '../../utils/useWindowDimentionsHook'
import { Divide as Hamburger } from 'hamburger-react'

const Navbar = () => {
  const { width } = useWindowDimentions()
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Image src={Logo} alt='Logo' className={styles.logo}/>
        {width > 768 && (
          <ul className={styles.navbarList}>
            <li className={styles.navbarItem}>
              <a href='#home-section' className={styles.navbarLink}>Home</a>
            </li>
            <li className={styles.navbarItem}>
              <a href='#about-section' className={styles.navbarLink}>About</a>
            </li>
            <li className={styles.navbarItem}>
              <a href='#projects-section' className={styles.navbarLink}>Projects</a>
            </li>
            <li className={styles.navbarItem}>
              <a href='#contact-section' className={styles.navbarLink}>Contact</a>
            </li>
          </ul>
        )}
        {width <= 768 && (
          <Hamburger 
          />
        )}
      </nav>
    </header>
  )
}

export default Navbar