import { personal, education, experience, socialLinks } from "../data/content";

export default function AboutPanel({ onClose }) {
  return (
    <div className="min-h-screen w-full flex justify-center bg-bg text-text">
      {/* Close button */}
      <button
        onClick={onClose}
        className="fixed right-8 top-8 z-30 w-8 h-8 text-white opacity-70 hover:opacity-100 transition-opacity"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      <div className="px-6 md:px-16 pt-20 w-full max-w-5xl">
        
        {/* About Me */}
        <section className="flex flex-col md:flex-row items-center justify-center gap-10 mb-20">
          <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-full overflow-hidden border-2 border-accent/30">
            <img
              src={personal.photo}
              alt={personal.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <br /><br /><br />
            <SectionHeading title="About me" subtitle="who i am" />
            <br /><br />
            <p className="text-text mb-6 leading-relaxed whitespace-pre-line">
              {personal.bio}
            </p>
            <div className="flex flex-wrap gap-4">
              
              <a
                href={personal.cvFile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-accent text-white font-medium hover:bg-accent/80 transition-colors text-sm uppercase tracking-wider"
              >
                Download CV
              </a>
              <a
                href={personal.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-accent text-accent font-medium hover:bg-accent hover:text-white transition-colors text-sm uppercase tracking-wider"
              >
                Work with me
              </a>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-20">
          <br /><br /><br />
          <SectionHeading title="Education" subtitle="learning" />
          <br /><br /><br />
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-bg-lighter hidden md:block" />
            <div className="space-y-12">
              {education.map((item, i) => (
                <div key={i} className={`relative flex ${item.side === "left" ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`hidden md:block flex-1 ${item.side === "left" ? "text-right pr-16" : "text-left pl-16"}`}>
                    <span className={`text-4xl md:text-5xl font-bold text-bg-lighter transition-colors duration-300 ${item.side === "left" ? "group-hover:text-accent" : "group-hover:text-accent"}`}>
                      {item.years}
                    </span>
                  </div>
                  <div className="hidden md:flex items-center justify-center w-0">
                    <div className="w-3.5 h-3.5 rounded-full border-2 border-white bg-bg absolute left-1/2 -translate-x-1/2 hover:bg-white hover:border-accent transition-colors" />
                  </div>
                  <div className="flex-1 md:px-16 group">
                    <span className="md:hidden text-3xl font-bold text-accent mb-3 block">{item.years}</span>
                    <h4 className="text-white text-lg font-medium mb-1">{item.title}</h4>
                    <span className="text-white text-sm block mb-2">{item.school}</span>
                    <p className="text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-20">
          <br /><br /><br />
          <SectionHeading title="Experience" subtitle="involvement" />
          <br /><br /><br />
          <div className="grid md:grid-cols-2 gap-8">
            {experience.map((item, i) => (
              <div
                key={i}
                className="relative bg-bg-light px-6 py-10 hover:bg-white/5 transition-colors cursor-default"
              >
                <span className="absolute top-4 right-4 text-7xl font-bold text-bg-lighter opacity-60 transition-colors duration-300">
                  {item.year}
                </span>
                <div className="relative">
                  {item.subtitle && (
                    <span className="text-xs text-text uppercase block mb-2">{item.subtitle}</span>
                  )}
                  <h4 className="text-white text-lg font-medium mb-1">{item.title}</h4>
                  <span className="text-white text-sm block mb-3">{item.company}</span>
                  <p className="text-sm leading-relaxed">{item.description}</p>
                  {item.year && (
                    <span className="text-8xl md:text-9xl font-bold text-bg-lighter">{item.year}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Connect */}
        <section className="mb-20">
          <br /><br /><br />
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex gap-8">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 group"
              >
                <svg className="w-12 h-12 text-bg-lighter group-hover:text-[#1b73ff] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.113.79-.258.79-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.195.69.8.576C20.565 21.795 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-white text-sm">GitHub</span>
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 group"
              >
                <svg className="w-12 h-12 text-bg-light hover:text-[#c82663] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-white text-sm">LinkedIn</span>
              </a>
            </div>
            <div>
              <SectionHeading title="Connect with me" subtitle="networks" />
              <p className="text-sm leading-relaxed max-w-md">
                My development ecosystem is focused on building robust, high-performing, and scalable systems.
                On GitHub, you can find my practical projects, RESTful API studies, and environment setups.
                On LinkedIn, I share my technical growth, articles, and connect with the technology community.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
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
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.015 7.053.072 3.695.276.276 3.695.072 7.053.015 8.333 0 8.741 0 12c0 3.259.015 3.667.072 4.947.204 3.358 3.618 4.777 4.981 4.981 1.28.057 1.689.072 4.947.072 3.258 0 3.667-.015 4.947-.072 3.354-.204 4.771-3.618 4.981-4.981C24.014 15.667 24 15.259 24 12c0-3.259-.014-3.667-.072-4.947-.204-3.358-3.618-4.777-4.975-4.977C17.888.015 17.464 0 12 0z"/>
            <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z"/>
            <circle cx="18.406" cy="5.594" r="1.44"/>
          </svg>
        </a>
        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center bg-bg-lighter text-white rounded-full hover:bg-accent transition-colors">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.113.793-.258.793-.088v-2.015c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.997.108-.775.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.195.69.8.576 4.565-1.188 8.018-5.683 8.018-11.387 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center bg-bg-lighter text-white rounded-full hover:bg-accent transition-colors">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037s-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center bg-bg-lighter text-white rounded-full hover:bg-accent transition-colors">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 0C5.82 0 .244 5.576.244 11.795c0 2.24.616 4.34 1.69 6.125L.24 24l6.038-1.587a11.813 11.813 0 005.764 1.463c6.22 0 11.795-5.576 11.795-12.082C23.835 5.576 18.26 12.04 12.04 0zm0 21.583c-9.675 0-17.614-7.944-17.614-8.718 0-9.675 0 6.206 1.84 3.687 8.17-1.162 4.877.563 4.877.563-1.162-.72-2.39-1.94-3.065-1.94.563-.38 1.582-.563 2.287-.563 1.085 0 2.45.83 2.45.83-.48-.8-1.23-1.328-2.12-1.328-1.378 0-3.43 2.145-3.43 4.05 0 1.782.83 4.393 5.485 7.55 4.655 3.157 7.43 2.698 7.43 2.698.4-.35.6-1.815.6-2.27 0-.473-.215-.727-.915-1.008-.687-.28-2.347-1.333-2.65-.72-.304.613-1.28.91-1.28.91.53-.33 1.64-.88 1.64-1.79 0-.913-.92-1.457-2.1-1.457-1.178 0-2.812.72-2.812 2.04 0 1.318.838 2.214.795 2.764-.043.55-1. .45-2.13-.91-1.13-1.36-2.05-3.98-2.05-6.05 0-2.07 1.2-3.98 3.05-5.37.31-.23.67-.345 1.07-.345 2.2 0 1.52.04 1.52-.04 0-.08-.33-3.16-.36-3.37-.24-.24-3.46.24-3.46-4.24 0-2.96-1.76-4.44.25-5.06.2-2.67.75-5.36 8.5 1.62 5.25 1.6 4.72.3 11.55 0z"/>
          </svg>
        </a>
      </div>
    </footer>
  );
}