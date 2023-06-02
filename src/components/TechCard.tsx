import exp from "constants";

type TechCardProps = {
  title: string;
  stack: string[];
}

function TechCard({title, stack}: TechCardProps) {
  return (
    <div className="tech-card">
      <h3>{title}</h3>
      {stack.map((tech) => {
        return (
          <p key={tech}>{tech}</p>
        )
      })}
    </div>
  )
}

export default TechCard;