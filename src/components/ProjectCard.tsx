import Image, { StaticImageData }  from "next/image"
import styles from '../styles/Project.module.css'
import { FiGithub } from 'react-icons/fi'
import { BsRocket } from 'react-icons/bs'
import ProjectPopup from "./ProjectPopup"
import { useState } from "react"

type ProjectCardProps = {
  projectName: string,
  projectDescription: string,
  projectTechStack: string[],
  projectImage: StaticImageData,
  projectGitLink: string,
  projectLiveLink: string
}

function ProjectCard({projectName, projectDescription, projectTechStack, projectImage, projectGitLink, projectLiveLink}: ProjectCardProps) {
  const [showPopup, setShowPopup] = useState(false);
  const handleExpand = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div className={styles.projectCard}>
      <h3 className={styles.projectTitle}>{projectName}</h3> 
      <Image src={projectImage} alt={projectName} className={styles.cardImage}/>
      <div className={styles.cardInfo}>
        <p className={styles.projectDescription}>{projectDescription.slice(0,65)+'...'}</p>
        <button onClick={handleExpand} className={styles.expandBtn}>Expand this project </button>
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
      {showPopup &&
      <ProjectPopup
        projectName={projectName}
        projectDescription={projectDescription}
        projectTechStack={projectTechStack}
        projectImage={projectImage}
        projectGitLink={projectGitLink}
        projectLiveLink={projectLiveLink}
        showPopup={showPopup}
        setShowPopup={setShowPopup}
      />
      }
    </div>
  )
}

export default ProjectCard