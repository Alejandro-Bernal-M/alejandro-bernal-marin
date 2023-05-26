import Image from 'next/image'
import myPicture from '../resources/images/me.jpg'
import styles from '../styles/About.module.css'

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
    </div>
  )
}

export default About