import ProjectCard from "@/components/ProjectCard"
import arrayOfProjects from "@/resources/projects/projects"
import styles from '../styles/Project.module.css'

function ProjectsSection() {
    return (
        <section className={styles.projectSection}>
            <h2 className={styles.projectSectionTitle}>Some of my projects:</h2>
            <div className={styles.projectGrid}>
                {arrayOfProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        projectName={project.name}
                        projectDescription={project.description}
                        projectTechStack={project.tools}
                        projectImage={project.image}
                        projectGitLink={project.gitLink}
                        projectLiveLink={project.liveLink}
                    />
                ))}
            </div>
        </section>
    )
}

export default ProjectsSection