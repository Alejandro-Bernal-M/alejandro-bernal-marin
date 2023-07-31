'use client'

import Logo from '../resources/images/abm_logo2.png'
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'
import { useWindowDimentions } from '../../utils/useWindowDimentionsHook'
import { Divide as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import Popup from './Popup'

const Navbar = () => {
  const { width } = useWindowDimentions()
  const [isOpen, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <Image src={Logo} alt='Logo' className={styles.logo}/>
      <nav className={styles.navbar}>
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
            toggled={isOpen}
            toggle={setOpen}
            onToggle={(toggled) => {
              let popup = document.querySelector('#popup');
              if (toggled) {
                popup?.classList.add(styles.popupActive)
              } else {
                popup?.classList.remove(styles.popupActive)
              }
            }}
          />
          )}
      </nav>
      {width <= 768 && <Popup />}
    </header>
  )
}

export default Navbar