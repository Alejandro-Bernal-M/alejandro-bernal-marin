import Image from 'next/image'
import myPicture from '../resources/images/me.jpg'
import styles from '../styles/About.module.css'

async function phrase(){
  const response = await fetch('https://api.themotivate365.com/stoic-quote');
  const data = await response.json()
  return data;
}

async function About() {
  const phraseData = await phrase();
 
  return(
    <div>
      <h1 className={styles.mainTitle}>Welcome to my portfolio</h1>
      <div className={styles.photoAndDescription}>
        <div className={styles.image}>
          <Image
            className={styles.myImage}
           alt='Photography of the author'
            src={myPicture}
          />
        </div>
        <p className={styles.myDescription}>
          My name is
          <span> Alejandro Bernal Marín </span>
          I&apos;m a full-stack web developer.
          I have a degree on sciences of sports and recreation
           and enjoy creating web pages and web applications.
        </p>
      </div>
        <div className={styles.phrase}>
          <p>
            &quot;{phraseData.quote}&quot;
            <br />
            -{phraseData.author}
          </p> 
        </div>
    </div>
  )
}

export default About