import styles from '../styles/Home.module.css'
import { useEffect, useState } from "react";
// @ts-ignore
import * as THREE from 'three'
// @ts-ignore
import WAVES from 'vanta/dist/vanta.waves.min'

const Home = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(0)
 

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(WAVES({
        el: '#animation',
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: '#024375',
        THREE: THREE
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  
 
  return (
    <section className={styles.homeSection} id='home-section'>
      <div className={styles.intro}>
        <span>Hello! I&apos;m</span>
        <h1 className='mainTitle'>Alejandro Bernal Marín</h1>
        <span>Full-stack web developer. </ span>
      </div>
      <div className={styles.animation} id = 'animation'>
        
      </div>
    </ section>
  )
}

export default Home