import { Code2, Globe, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content fade-in">
          <h2 className="footer-title">Let's build something.</h2>
          <p className="footer-subtitle">
            Currently open to entry-level Full Stack roles (Python or Java) and freelance opportunities. 
            Feel free to reach out if you're looking for a dedicated developer to join your team.
          </p>
          
          <div className="social-links">
            <a href="https://github.com/sureshsuriya" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
              <Code2 size={24} />
            </a>
            <a href="https://linkedin.com/in/suresh-p-822b43230" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
              <Globe size={24} />
            </a>
            <a href="mailto:sureshsurey4@gmail.com" className="social-link" aria-label="Email">
              <ExternalLink size={24} />
            </a>
          </div>
          
          <p className="copyright">
            © {new Date().getFullYear()} Suresh P. Crafted with React & Vite. <br />
            Tiruchirappalli, Tamil Nadu, India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
