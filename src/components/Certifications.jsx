import { certifications, workshops } from '../data';
import { Award, BookOpen } from 'lucide-react';

const Certifications = () => {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <h2 className="section-title fade-in">Certifications & Learning</h2>
        
        <h3 className="timeline-role fade-in" style={{ marginBottom: '2rem' }}>Professional Certifications</h3>
        <div className="certs-grid" style={{ marginBottom: '4rem' }}>
          {certifications.map((cert, index) => (
            <div 
              key={cert.name} 
              className="glass-card fade-in"
              style={{ padding: '1.25rem', animationDelay: `${index * 0.05}s` }}
            >
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <Award className="cert-icon" size={24} />
                <div>
                  <h4 className="cert-title">{cert.name}</h4>
                  <span className="cert-issuer">
                    {cert.issuer} {cert.date ? `• ${cert.date}` : ''}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="timeline-role fade-in" style={{ marginBottom: '2rem' }}>Workshops</h3>
        <div className="certs-grid">
          {workshops.map((workshop, index) => (
            <div 
              key={workshop.name} 
              className="glass-card fade-in"
              style={{ padding: '1.25rem', animationDelay: `${index * 0.05}s` }}
            >
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <BookOpen className="cert-icon" size={24} />
                <div>
                  <h4 className="cert-title">{workshop.name}</h4>
                  <span className="cert-issuer">
                    {workshop.issuer} {workshop.date ? `• ${workshop.date}` : ''}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
