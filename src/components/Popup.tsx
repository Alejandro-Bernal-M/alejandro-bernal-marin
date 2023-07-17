import styles from '../styles/Popup.module.css'

const Popup = () => {
  return (
    <div className={styles.popup} id = 'popup'>
      <ul className={styles.popupList}>
        <li className={styles.popupItem}>
          <a href='#home-section' className={styles.popupLink}>Home</a>
        </li>
        <li className={styles.popupItem}>
          <a href='#about-section' className={styles.popupLink}>About</a>
        </li>
        <li className={styles.popupItem}>
          <a href='#projects-section' className={styles.popupLink}>Projects</a>
        </li>
        <li className={styles.popupItem}>
          <a href='#contact-section' className={styles.popupLink}>Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Popup;