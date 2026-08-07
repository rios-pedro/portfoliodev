import { services, skills, socialLinks } from "../data/content";

const icons = {
  api: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="8" rx="2" />
      <rect x="3" y="12" width="18" height="8" rx="2" />
      <line x1="7" y1="8" x2="7" y2="8" />
      <line x1="7" y1="16" x2="7" y2="16" />
      <line x1="11" y1="8" x2="17" y2="8" />
      <line x1="11" y1="16" x2="17" y2="16" />
    </svg>
  ),
  web: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <polyline points="9 10 11 12 15 8" />
    </svg>
  ),
  desktop: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <rect x="5" y="6" width="14" height="8" rx="1" />
    </svg>
  ),
  design: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  ),
};

export default function SkillsPanel({ onClose }) {
  return (
    <div className="min-h-screen w-full flex justify-center bg-bg text-text">
      <button
        onClick={onClose}
        className="fixed right-8 top-8 z-30 w-8 h-8 text-white opacity-70 hover:opacity-100 transition-opacity"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      <div className="px-6 md:px-16 pt-20 w-full max-w-5xl">
        <br /><br /><br />
        {/* Services */}
        <section className="mb-20">
          <SectionHeading title="What I do" subtitle="take a look" />
          <br /><br />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((svc, i) => (
              <div key={i} className="text-left group">
                <div className="w-12 h-12 mb-5 text-accent">
                  {icons[svc.iconKey]}
                </div>
                <h4 className="text-white font-medium mb-4">{svc.title}</h4>
                <p className="text-sm leading-relaxed">{svc.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-20">
          <br /><br /><br />
          <SectionHeading title="Skills" subtitle="abilities" />
          <br />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
            {skills.map((skill, i) => (
              <div key={i} className="flex flex-col items-center">
                <SkillCircle percent={skill.percent} color={skill.color} index={i} />
                <span className="text-white font-medium mt-4 text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

function SkillCircle({ percent, color, index }) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="relative w-24 h-24 sm:w-28 sm:h-28">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50" cy="55" r={radius}
          fill="none"
          stroke="#202020"
          strokeWidth="6"
        />
        <circle
          cx="50" cy="55" r={radius}
          fill="none"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white">
        {percent}%
      </span>
    </div>
  );
}

function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-medium text-white uppercase relative inline-block after:content-[''] after:block after:w-full after:h-0.5 after:bg-white after:mt-1">{title}</h2>
      <p className="text-accent uppercase text-xs font-medium mt-3">{subtitle}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-bg-lighter py-6 flex flex-col md:flex-row items-center justify-between text-sm">
      <p className="text-white">
        Copyright © 2026 <span className="text-accent">Pedro Rios</span>. All rights reserved.
      </p>
      <div className="flex gap-4 mt-3 md:mt-0">
        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center bg-bg-lighter text-white rounded-full hover:bg-accent transition-colors">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.015 7.053.072 3.695.276.276 3.695.072 7.053.015 8.333 0 8.741 0 12c0 3.259.015 3.667.072 4.947.204 3.358 3.618 4.777 4.981 4.981 1.28.057 1.689.072 4.947.072 3.258 0 3.667-.015 4.947-.072 3.354-.204 4.771-3.618 4.981-4.981C24.014 15.667 24 15.259 24 12c0-3.259-.014-3.667-.072-4.947-.204-3.358-3.618-4.777-4.975-4.977C17.888.015 17.464 0 12 0z"/><path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z"/><circle cx="18.406" cy="5.594" r="1.44"/></svg>
        </a>
        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center bg-bg-lighter text-white rounded-full hover:bg-accent transition-colors">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.113.793-.258.793-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.195.69.8.576 4.565-1.188 8.018-5.683 8.018-11.387 0-6.627-5.373-12-12-12z"/></svg>
        </a>
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center bg-bg-lighter text-white rounded-full hover:bg-accent transition-colors">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
        <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center bg-bg-lighter text-white rounded-full hover:bg-accent transition-colors">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 0C5.82 0 .244 5.576.244 11.795c0 2.24.616 4.34 1.69 6.125L.24 24l6.038-1.587a11.813 11.813 0 005.764 1.463c6.22 0 11.795-5.576 11.795-12.082C23.835 5.576 18.26 0 12.04 0zm5.876 8.75l-1.11 5.25s-.15.74-.77.74c-.51 0-.68-.39-.68-.39l-2.86-2.6-1.25.57 2.74 2.94s.43.51.43.95c0 .45-.43 1.27-1.71 1.27-1.28 0-4.02-2.49-4.02-2.49-.33-.17-.8-.83-.8-.83l-4.06-1.37s-.66-.35-.56-1.22c.1-.87.79-1.54.79-1.54l6.75-4.56s.78-.35 1.24 0c.46.35.44 1.02.44 1.02l-7.28 6.26s-.35.14-.35.48c0 .34.57.66 1.32.66l3.5-1.84 5.3-4.52s.5-.4.87-.06c.37.34.24.91.24.91z"/></svg>
        </a>
      </div>
    </footer>
  );
}