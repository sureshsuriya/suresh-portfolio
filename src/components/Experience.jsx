import { experience } from '../data';

const Experience = () => {
  return (
    <section className="section" id="experience">
      <div className="container">
        <h2 className="section-title fade-in">Experience</h2>
        <div className="timeline">
          {experience.map((exp, index) => (
            <div 
              key={index} 
              className="timeline-item fade-in" 
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="timeline-dot"></div>
              <span className="timeline-date">{exp.period}</span>
              <h3 className="timeline-role">{exp.role}</h3>
              <h4 className="timeline-org">{exp.org}</h4>
              <p className="project-desc">{exp.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
