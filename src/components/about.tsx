import Image from 'next/image'
import myPicture from '../resources/images/me2.jpg'
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
    <section className={styles.aboutSection}>
      <div className={styles.photoAndDescription}>
        <Image
          className={styles.myImage}
          alt='Photography of the author'
          src={myPicture}
          />
        <p className={styles.myDescription}>
          I&apos;m a <span>full-stack</span> web developer.
          I have a degree on sciences of sports and recreation
           and enjoy creating web pages and web applications.
        </p>
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