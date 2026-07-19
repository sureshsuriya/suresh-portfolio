import { Code2, Globe, ExternalLink, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero" id="about">
      <div className="container">
        <div className="hero-content fade-in">
          <span className="hero-greeting">Hi, I'm</span>
          <h1 className="hero-title">
            <span className="text-gradient">Suresh P</span>
          </h1>
          <p className="hero-subtitle">
            A passionate Full Stack Developer focused on building robust, scalable applications. 
            Recent Computer Science graduate specializing in Python, Django, Java, Spring Boot, and React. 
            Currently driving innovation through open-source contributions and freelance ventures.
          </p>
          
          <div className="hero-actions">
            <a href="/resume.pdf" download className="btn btn-primary">
              <Download size={20} />
              Download Resume
            </a>
            <a href="#projects" className="btn btn-outline">
              View My Work
            </a>
          </div>
          
          <div className="social-links" style={{ marginTop: '2.5rem', marginBottom: 0 }}>
            <a href="https://github.com/sureshsuriya" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
              <Code2 size={20} />
            </a>
            <a href="https://linkedin.com/in/suresh-p-822b43230" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
              <Globe size={20} />
            </a>
            <a href="mailto:sureshsurey4@gmail.com" className="social-link" aria-label="Email">
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
