import Image from 'next/image'
import myPicture from '../resources/images/me2.jpg'
import styles from '../styles/About.module.css'
import {IoLogoLinkedin, IoLogoGithub} from 'react-icons/io5'

type aboutProps = {
  phraseData:
  { quote: string,
    author: string
  }
  counter: number,
  setCounter: (counter: number) => void
 }

function About({phraseData, counter, setCounter}: aboutProps) {
    
  return(
    <section className={styles.aboutSection} id='about-section'>
      <h2>About me.</h2>
      <div className={styles.photoAndDescription}>
        <Image
          className={styles.myImage}
          alt='Photography of the author'
          src={myPicture}
          />
        <p className={styles.myDescription}>
          I have a degree in the Sciences of sports and recreation,
          but I&apos;ve always been interested in technology and programming.
          I am passionate about learning new things and that is why I have developed the ability to solve problems promptly.
          I love to be in nature, be in high places, and play video games. I enjoy creating web pages and web applications.
        </p>
      </div>
      <div className={styles.socialMedia}>
        <a href='https://www.linkedin.com/in/alejandro-bernal-marin/' target='_blank' rel='noreferrer'>
          <IoLogoLinkedin className={styles.icon}/>
        </a>
        <a href='https://github.com/Alejandro-Bernal-M' target='_blank' rel='noreferrer'>
          <IoLogoGithub className={styles.icon}/>
        </a>
      </div>
        <div className={styles.phrase}>
          <p>
            &quot;{phraseData.quote}&quot;
            {' '}
            <br />
            -{phraseData.author}
            {' '}
          </p> 
            <button
              className={styles.buttonPhrase}
              onClick={() => {
                setCounter(counter + 1)
              }}>
              Click to change the phrase
            </button>
        </div>
    </section>
  )
}

export default About
