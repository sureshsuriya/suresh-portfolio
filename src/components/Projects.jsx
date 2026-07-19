import { projects } from '../data';
import { ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title fade-in">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article 
              key={project.name} 
              className="glass-card fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="project-header">
                <div>
                  <h3 className="project-title">{project.name}</h3>
                  <span className="project-role">{project.role}</span>
                </div>
              </div>
              <p className="project-desc">{project.desc}</p>
              
              <div className="project-stack">
                {project.stack.map(tech => (
                  <span key={tech} className="stack-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                {project.github && project.github !== '#' && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                    <Code2 size={18} /> Code
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="project-link">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
