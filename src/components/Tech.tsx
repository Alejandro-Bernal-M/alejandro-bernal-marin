import TechCard from "./TechCard";

function Tech() {

  const techObject = {
      'Frameworks': ['React','Next js', 'Ruby on Rails'],
      'Languages': ['TypeScript', 'JavaScript', 'Ruby', 'HTML', 'CSS'],
      'Databases': ['PostgreSQL'],
      'Tools': ['Git', 'GitHub', 'VS code', 'Postman', 'Figma', 'Vercel']
    }
    return (
      <section>
      <h2>Tech Stack</h2>
      <div className="tech-container">
        {Object.keys(techObject).map((tech) => {
          return (
            <TechCard key={tech} title={tech} stack={techObject[tech]}/>
          )
        })}
      </div>
    </section>
  );
}
export default Tech;