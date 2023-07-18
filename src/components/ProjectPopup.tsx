import Image, { StaticImageData }  from "next/image"
import { FiGithub } from 'react-icons/fi'
import { BsRocket } from 'react-icons/bs'
import styles from '../styles/ProjectPopup.module.css'

type ProjectPopupProps = {
  projectName: string,
  projectDescription: string,
  projectTechStack: string[],
  projectImage: StaticImageData,
  projectGitLink: string,
  projectLiveLink: string,
  showPopup: boolean,
  setShowPopup: (state: boolean) => void
}

const ProjectPopup = ({projectName, projectDescription, projectTechStack, projectImage, projectGitLink, projectLiveLink, showPopup, setShowPopup}: ProjectPopupProps) => {
  return (
    <div className={styles.popup} id='projectPopup'>
      <div className={styles.innerPopup}>
        <button className={styles.closeBtn} onClick={() => {setShowPopup(!showPopup)}}>X</button>
        <h2 className={styles.name}>{projectName}</h2> 
        <Image src={projectImage} alt={projectName} className={styles.image}/>
        <div className={styles.cardInfo}>
          <p className={styles.projectDescription}>{projectDescription}</p>
          <div className={styles.techStack}>
            <ul>
             {projectTechStack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.button}>
              <a href={projectLiveLink} target="_blank" rel="noreferrer">Live Demo <BsRocket /></a>
            </ button >
            <button className={styles.button}>
              <a href={projectGitLink} target="_blank" rel="noreferrer">Code <FiGithub /></a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectPopup
