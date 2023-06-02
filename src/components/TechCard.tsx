import styles from '../styles/Tech.module.css';

type TechCardProps = {
  title: string;
  stack: string[];
}

function TechCard({title, stack}: TechCardProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <div className={styles.stackContainer}>
        {stack.map((tech) => {
          return (
            <p key={tech} className={styles.stackContent}>{tech}</p>
          )
        })}
      </div>
    </div>
  )
}

export default TechCard;