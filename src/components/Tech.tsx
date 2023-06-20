import TechCard from "./TechCard";
import styles from '../styles/Tech.module.css';

function Tech() {

  const techObject:{
    [key: string]: string[]; 
  } = {
      'Frameworks': ['React','Next js', 'Ruby on Rails'],
      'Languages': ['TypeScript', 'JavaScript', 'Ruby'],
      'Databases': ['PostgreSQL'],
      'Tools': ['Git', 'GitHub', 'VS code', 'Postman', 'Figma', 'Vercel','Jest', 'React Testing Library', 'Rspec', 'Capybara']
    }
    return (
      <section className={styles.techSection}>
      <h2 className={styles.mainTitle}>Tech Stack.</h2>
      <div className={styles.cardContainer}>
        {Object.keys(techObject).map((tech) => {
          return (
            <TechCard key={tech} title={tech} stack={techObject[tech]}/>
          )
        })}
      </div>
      <a  className={styles.btnResume} href='https://docs.google.com/document/d/1dDKXYzYk3qmM0VzXL9gQtRubpWqBvGySaPRr1_6d-js/edit?usp=sharing' target="_blank">
        <button>Get my resume</button>
      </a>
    </section>
  );
}
export default Tech;