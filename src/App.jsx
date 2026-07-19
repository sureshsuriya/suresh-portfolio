import { useState, useEffect, useRef } from 'react'
import {
  Coffee, Leaf, Atom, Database, GitBranch, Globe,
  Terminal, Server, Layers, CheckCircle2,
  Code2, ExternalLink, Download, Award,
} from 'lucide-react'

const projects = [
  {
    name: 'HEPTA',
    role: 'CDIS Internship — Bishop Heber College',
    desc: 'Institutional portal handling student records, department workflows, and internal document routing for the college.',
    bullets: [
      'Built a full institutional portal for student records and department workflows',
      'Designed a relational schema in MySQL for multi-department data',
      'Handled internal document routing between departments',
    ],
    stack: ['PHP', 'MySQL'],
    github: '#',
    demo: null,
  },
  {
    name: 'FarmToHome',
    role: 'T4TEQ Internship',
    desc: 'Agricultural marketplace connecting farmers directly to buyers — REST API backend with a document-driven product catalog.',
    bullets: [
      'Built the REST API layer connecting farmers directly to buyers',
      'Modeled the product catalog and orders in MongoDB',
      'Designed endpoints for listings, cart, and order tracking',
    ],
    stack: ['Django REST', 'MongoDB'],
    github: '#',
    demo: null,
  },
  {
    name: 'JobTrackr',
    role: 'Personal Build',
    desc: 'Job application tracker that reads application-confirmation emails automatically and logs status changes over time.',
    bullets: [
      'Parses Gmail inbox via Gmail API to detect application-confirmation emails',
      'Spring Boot backend logs and updates application status automatically',
      'React dashboard visualizes the application pipeline over time',
    ],
    stack: ['Spring Boot', 'React', 'Gmail API'],
    github: '#',
    demo: null,
  },
]

const certifications = [
  { name: 'MongoDB Schema Design Patterns & Anti-patterns', issuer: 'MongoDB (Credly)', date: 'Dec 2025' },
  { name: "From Relational Model (SQL) to MongoDB's Document Model", issuer: 'MongoDB University', date: 'Dec 2025' },
  { name: 'Data Analytics Job Simulation', issuer: 'Deloitte · Forage', date: 'Jan 2026' },
  { name: 'Introduction to End-to-End Analytics using Microsoft Fabric', issuer: 'Microsoft', date: '2025' },
  { name: 'Discover Data Analysis', issuer: 'Microsoft Learn', date: '2025' },
  { name: 'Introduction to Object-Oriented Programming with Python', issuer: 'Microsoft Learn', date: '2024' },
  { name: 'Introduction to Python', issuer: 'Microsoft Learn', date: '2024' },
  { name: 'Programming in Python', issuer: 'T4TEQ Software Solutions', date: '2026' },
  { name: 'Backend Development with Django', issuer: 'T4TEQ Software Solutions', date: '2026' },
  { name: 'Django Full Stack Internship Certificate', issuer: 'T4TEQ Software Solutions', date: '2026' },
  { name: 'Learning Spring 6 with Spring Boot 3', issuer: 'LinkedIn Learning', date: '2025' },
  { name: 'Blockchain Basics', issuer: 'LinkedIn Learning', date: 'May 2025' },
  { name: 'Business Analysis & Process Management', issuer: 'Coursera Project Network', date: '2025' },
  { name: '5-Day AI Agents Intensive Course (Days 1–5)', issuer: 'Kaggle × Google', date: '2025' },
  { name: "GSSoC '26 Contributor Selection", issuer: 'GirlScript Foundation', date: '2026' },
]

const workshops = [
  { name: 'DevOps Workshop', issuer: 'SRM University', date: '2022' },
  { name: 'Research Paper Writing Tools: LaTeX & Overleaf', issuer: 'CBIT, Hyderabad', date: 'Aug 2023' },
  { name: 'Web Designing Workshop', issuer: 'MarcelloTech', date: '2022' },
  { name: 'JavaScript (5-Day Course)', issuer: "Let's Upgrade", date: '2023' },
  { name: 'Paper Presentation, BOOTFEST 2k22', issuer: 'Bishop Heber College', date: '2022' },
]

const experience = [
  {
    role: 'Co-founder',
    org: 'TripleTechPhoenix',
    period: 'Ongoing',
    detail: 'Small web development studio — taking on client and personal build work alongside the job search.',
  },
  {
    role: 'Contributor',
    org: 'GSSoC 2026',
    period: 'Ongoing',
    detail: 'Finding untested code paths across real repositories, writing coverage for them, and raising self-resolvable issues.',
  },
  {
    role: 'Django Full Stack Intern',
    org: 'T4TEQ Software Solutions',
    period: '2026',
    detail: 'Built FarmToHome — a Django REST + MongoDB marketplace connecting farmers to buyers.',
  },
  {
    role: 'Intern',
    org: 'CDIS, Bishop Heber College',
    period: 'Aug – Dec 2023',
    detail: 'Built HEPTA (Heber e-Portal Template for AQAR) — a PHP + MySQL institutional portal for student records and department workflows.',
  },
]

const javaSkills = [
  { name: 'Java', Icon: Coffee },
  { name: 'Spring Boot', Icon: Leaf },
  { name: 'React', Icon: Atom },
  { name: 'SQL', Icon: Database },
  { name: 'DSA', Icon: GitBranch },
  { name: 'REST APIs', Icon: Globe },
]

const pythonSkills = [
  { name: 'Python', Icon: Terminal },
  { name: 'Django REST', Icon: Server },
  { name: 'MongoDB', Icon: Layers },
  { name: 'REST APIs', Icon: Globe },
  { name: 'Testing (Jest/PyTest)', Icon: CheckCircle2 },
]

const contributions = [
  {
    repo: 'Checkora',
    detail: 'Filed issue #2180 — unit test coverage for achievement and active-game logic in game/services.py',
    stack: 'Django',
  },
  {
    repo: 'commitpulse',
    detail: 'Drafted issues for utils/time.ts test coverage, hex validation, and SVG tooltip enhancements',
    stack: 'Next.js',
  },
  {
    repo: 'StudyPlan',
    detail: 'Filed Open Graph meta tag issue and wrote a 35-test Jest suite covering auth logic',
    stack: 'Node.js · SQLite · Gemini AI',
  },
  {
    repo: 'gitverse-nextjs',
    detail: 'Wrote a TypeScript test suite for geminiService.ts',
    stack: 'Next.js · TypeScript',
  },
]

function Reveal({ children, className = '', as: Tag = 'div', ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`reveal ${visible ? 'reveal--visible' : ''} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}

function App() {
  const [navSolid, setNavSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setNavSolid(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="page">
      <nav className={`nav ${navSolid ? 'nav--solid' : ''}`}>
        <span className="nav__mark">SP</span>
        <div className="nav__links">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#certifications">Certifications</a>
          <a href="#opensource">Open Source</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="hero__content">
          <p className="eyebrow">Tiruchirappalli, Tamil Nadu, India</p>
          <h1 className="hero__title">
            Suresh P
          </h1>
          <p className="hero__role">
            Full Stack Developer<span className="dim"> — </span>
            <span className="mono accent">Python</span> · <span className="mono accent">Django</span> ·{' '}
            <span className="mono accent">Java</span> · <span className="mono accent">Spring Boot</span> ·{' '}
            <span className="mono accent">React</span>
          </p>
          <p className="hero__desc">
            B.Sc Computer Science graduate building toward two career tracks at once,
            Java Full Stack and Python, while shipping tested code through open source
            along the way.
          </p>
          <div className="hero__cta">
            <a href="#work" className="btn btn--primary">View Projects</a>
            <a href="/resume.pdf" download className="btn btn--warm">
              <Download size={16} strokeWidth={2.2} />
              Download Resume
            </a>
            <a href="#contact" className="btn btn--ghost">Get in Touch</a>
          </div>
        </div>

        <div className="hero__signature" aria-hidden="true">
          <svg viewBox="0 0 560 320" className="track-svg">
            <defs>
              <linearGradient id="lineJava" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#2C5A8C" />
                <stop offset="100%" stopColor="#4FA8DA" />
              </linearGradient>
              <linearGradient id="linePy" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#2C5A8C" />
                <stop offset="100%" stopColor="#4FA8DA" />
              </linearGradient>
            </defs>

            <path
              className="track-path"
              d="M 20 70 C 220 70, 300 160, 470 160"
              stroke="url(#lineJava)"
              strokeWidth="2.5"
              fill="none"
            />
            <path
              className="track-path track-path--delay"
              d="M 20 250 C 220 250, 300 160, 470 160"
              stroke="url(#linePy)"
              strokeWidth="2.5"
              fill="none"
            />

            <circle className="track-dot" r="3.5" fill="#4FA8DA">
              <animateMotion dur="3.2s" repeatCount="indefinite"
                path="M 20 70 C 220 70, 300 160, 470 160" />
            </circle>
            <circle className="track-dot track-dot--b" r="3.5" fill="#4FA8DA">
              <animateMotion dur="3.6s" repeatCount="indefinite"
                path="M 20 250 C 220 250, 300 160, 470 160" />
            </circle>

            <text x="20" y="55" className="track-label">JAVA FULL STACK</text>
            <text x="20" y="270" className="track-label">PYTHON</text>

            <circle cx="470" cy="160" r="34" fill="#0F1F35" stroke="#4FA8DA" strokeWidth="1.5" />
            <text x="470" y="166" textAnchor="middle" className="track-node-label">SP</text>
          </svg>
        </div>
      </header>

      {/* ABOUT */}
      <Reveal as="section" id="about" className="section">
        <p className="section__eyebrow">About</p>
        <div className="about__grid">
          <div className="about__text">
            <p>
              I finished my B.Sc in Computer Science at Bishop Heber College, Tiruchirappalli,
              in November 2025 with a 7.33 CGPA. Since then I've been splitting my time between
              job hunting, open source, and a small web development venture I co-founded called{' '}
              <strong>TripleTechPhoenix</strong>.
            </p>
            <p>
              I'm a <strong>GSSoC 2026</strong> contributor, working through real repositories to
              find untested code paths, write coverage for them, and raise issues I can resolve
              myself. I also co-authored a paper published in{' '}
              <a
                href="https://doi.org/10.47893/IJCCT.2023.1437"
                target="_blank"
                rel="noreferrer"
              >
                IJCCT
              </a>{' '}
              (DOI: 10.47893/IJCCT.2023.1437).
            </p>
          </div>
          <div className="about__facts">
            <div className="fact">
              <span className="fact__label">Education</span>
              <span className="fact__value">B.Sc Computer Science, Bishop Heber College</span>
              <span className="fact__sub">Nov 2025 · CGPA 7.33</span>
            </div>
            <div className="fact">
              <span className="fact__label">Currently</span>
              <span className="fact__value">Seeking entry-level Full Stack roles</span>
              <span className="fact__sub">Java Full Stack + Python tracks</span>
            </div>
            <div className="fact">
              <span className="fact__label">Venture</span>
              <span className="fact__value">Co-founder, TripleTechPhoenix</span>
              <span className="fact__sub">Web development studio</span>
            </div>
          </div>
        </div>
      </Reveal>

      {/* SKILLS - dual track */}
      <Reveal as="section" className="section section--tight">
        <p className="section__eyebrow">Skills</p>
        <div className="tracks">
          <div className="track-card">
            <h3 className="track-card__title">Track 01 — Java Full Stack</h3>
            <div className="skill-grid">
              {javaSkills.map(({ name, Icon }) => (
                <div key={name} className="skill-pill">
                  <Icon size={16} strokeWidth={2} className="skill-pill__icon" />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="track-card">
            <h3 className="track-card__title">Track 02 — Python</h3>
            <div className="skill-grid">
              {pythonSkills.map(({ name, Icon }) => (
                <div key={name} className="skill-pill">
                  <Icon size={16} strokeWidth={2} className="skill-pill__icon" />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>

      {/* PROJECTS */}
      <Reveal as="section" id="work" className="section">
        <p className="section__eyebrow">Selected Work</p>
        <div className="projects">
          {projects.map((p) => (
            <article key={p.name} className="project-card">
              <div className="project-card__head">
                <h3>{p.name}</h3>
                <span className="project-card__role">{p.role}</span>
              </div>
              <p className="project-card__desc">{p.desc}</p>
              <ul className="project-card__bullets">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="tags">
                {p.stack.map((s) => (
                  <span key={s} className="tag tag--mono">{s}</span>
                ))}
              </div>
              <div className="project-card__links">
                <a href={p.github} target="_blank" rel="noreferrer" className="project-link">
                  <Code2 size={15} strokeWidth={2} /> Code
                </a>
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" className="project-link">
                    <ExternalLink size={15} strokeWidth={2} /> Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </Reveal>

      {/* EXPERIENCE TIMELINE */}
      <Reveal as="section" id="experience" className="section">
        <p className="section__eyebrow">Experience</p>
        <div className="timeline">
          {experience.map((e, i) => (
            <div key={i} className="timeline__row">
              <div className="timeline__marker">
                <span className="timeline__dot" />
                {i !== experience.length - 1 && <span className="timeline__line" />}
              </div>
              <div className="timeline__body">
                <div className="timeline__head">
                  <h3>{e.role} <span className="dim">· {e.org}</span></h3>
                  <span className="timeline__period mono">{e.period}</span>
                </div>
                <p className="timeline__detail">{e.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* CERTIFICATIONS */}
      <Reveal as="section" id="certifications" className="section">
        <p className="section__eyebrow">Certifications & Learning</p>
        <div className="cert-block">
          <h3 className="cert-block__title">Certifications & Courses</h3>
          <div className="cert-grid">
            {certifications.map((c) => (
              <div key={c.name} className="cert-card">
                <Award size={16} strokeWidth={2} className="cert-card__icon" />
                <div>
                  <p className="cert-card__name">{c.name}</p>
                  <p className="cert-card__meta">
                    {c.issuer}{c.date ? ` · ${c.date}` : ''}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="cert-block cert-block--secondary">
          <h3 className="cert-block__title">Workshops & Participation</h3>
          <div className="cert-grid">
            {workshops.map((c) => (
              <div key={c.name} className="cert-card cert-card--muted">
                <Award size={16} strokeWidth={2} className="cert-card__icon" />
                <div>
                  <p className="cert-card__name">{c.name}</p>
                  <p className="cert-card__meta">
                    {c.issuer}{c.date ? ` · ${c.date}` : ''}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* OPEN SOURCE — commit feed */}
      <Reveal as="section" id="opensource" className="section">
        <p className="section__eyebrow">Open Source — GSSoC 2026</p>
        <div className="feed">
          {contributions.map((c) => (
            <div key={c.repo} className="feed__row">
              <span className="feed__dot" />
              <div className="feed__body">
                <div className="feed__head">
                  <span className="feed__repo mono">{c.repo}</span>
                  <span className="feed__stack">{c.stack}</span>
                </div>
                <p className="feed__detail">{c.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* CONTACT */}
      <Reveal as="section" id="contact" className="section section--contact">
        <p className="section__eyebrow">Contact</p>
        <h2 className="contact__title">Let's build something.</h2>
        <p className="contact__desc">
          Open to entry-level Full Stack roles, Python or Java. Also open to freelance work.
        </p>
        <div className="contact__links">
          <a href="mailto:sureshsurey4@gmail.com">sureshsurey4@gmail.com</a>
          <a href="tel:+919360221584">+91 93602 21584</a>
          <a href="https://github.com/sureshsuriya" target="_blank" rel="noreferrer">github.com/sureshsuriya</a>
          <a href="https://linkedin.com/in/suresh-p-822b43230" target="_blank" rel="noreferrer">linkedin.com/in/suresh-p</a>
        </div>
        <a href="/resume.pdf" download className="btn btn--warm contact__resume-btn">
          <Download size={16} strokeWidth={2.2} />
          Download Resume
        </a>
      </Reveal>

      <footer className="footer">
        <span>Suresh P · Tiruchirappalli, Tamil Nadu</span>
      </footer>
    </div>
  )
}

export default App
