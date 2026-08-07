import { useEffect, useRef } from "react";

const stackColors = {
  React: "bg-cyan-600/20 text-cyan-300 border-cyan-600/30",
  TypeScript: "bg-blue-600/20 text-blue-300 border-blue-600/30",
  "Google Sheets API": "bg-green-600/20 text-green-300 border-green-600/30",
  Java: "bg-orange-600/20 text-orange-300 border-orange-600/30",
  "Spring Boot": "bg-lime-700/20 text-lime-300 border-lime-700/30",
  JPA: "bg-indigo-600/20 text-indigo-300 border-indigo-600/30",
  Hibernate: "bg-yellow-700/20 text-yellow-300 border-yellow-700/30",
  H2: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  Hooks: "bg-pink-600/20 text-pink-300 border-pink-600/30",
  CSS: "bg-sky-600/20 text-sky-300 border-sky-600/30",
  MongoDB: "bg-emerald-600/20 text-emerald-300 border-emerald-600/30",
  "Java 17": "bg-orange-600/20 text-orange-300 border-orange-600/30",
  "Spring Data JPA": "bg-indigo-600/20 text-indigo-300 border-indigo-600/30",
  PostgreSQL: "bg-blue-800/20 text-blue-300 border-blue-800/30",
  Swagger: "bg-teal-600/20 text-teal-300 border-teal-600/30",
  Lombok: "bg-red-600/20 text-red-300 border-red-600/30",
  Tauri: "bg-yellow-600/20 text-yellow-300 border-yellow-600/30",
  Rust: "bg-orange-700/20 text-orange-300 border-orange-700/30",
};

export default function ProjectModal({ project, onClose }) {
  const overlayRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => {
      if (overlayRef.current) overlayRef.current.classList.remove("opacity-0");
      if (panelRef.current) panelRef.current.classList.remove("translate-y-8", "opacity-0");
    });
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  function handleClose() {
    if (overlayRef.current) overlayRef.current.classList.add("opacity-0");
    if (panelRef.current) panelRef.current.classList.add("translate-y-8", "opacity-0");
    setTimeout(onClose, 250);
  }

  function renderMedia() {
    if (project.mediaType === "video" && project.video) {
      return (
        <video
          src={project.video}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster={project.image}
        />
      );
    }
    return (
      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
    );
  }

  function renderButtons() {
    const buttons = [];
    if (project.link) {
      buttons.push(
        <a
          key="link"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 bg-accent text-white rounded-lg text-sm font-medium hover:bg-red-500 transition-colors"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          View Project
        </a>
      );
    }
    if (project.repo) {
      buttons.push(
        <a
          key="repo"
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 bg-bg-lighter text-white rounded-lg text-sm font-medium hover:bg-accent transition-colors"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.113.793-.258.793-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.195.69.8.576 4.565-1.188 8.018-5.683 8.018-11.387 0-6.627-5.373-12-12-12z" />
          </svg>
          GitHub
        </a>
      );
    }
    if (project.linkedinPost) {
      buttons.push(
        <a
          key="linkedin"
          href={project.linkedinPost}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.065-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LinkedIn
        </a>
      );
    }
    return buttons;
  }

  return (
    <div
      ref={overlayRef}
      onClick={(e) => e.target === overlayRef.current && handleClose()}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 opacity-0 transition-opacity duration-250"
    >
      <div
        ref={panelRef}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-surface rounded-2xl border border-white/10 translate-y-8 opacity-0 transition-all duration-300"
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-accent transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-12">
          <div className="space-y-6">
            <div className="aspect-[16/9] overflow-hidden rounded-xl bg-bg-light">
              {renderMedia()}
            </div>

            <div className="flex flex-wrap gap-3">
              {renderButtons()}
            </div>
          </div>

          <div className="space-y-6 overflow-y-auto max-h-[70vh] pr-2">
            <div>
              <span className="text-accent text-xs font-medium uppercase tracking-wider">
                {project.category} · {project.year}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-1">{project.title}</h2>
              <p className="text-text-light/80 text-sm mt-2 italic">"{project.headline}"</p>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-2">Overview</h3>
                <p className="text-text text-sm leading-relaxed">{project.description}</p>
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-2">The Problem</h3>
                <p className="text-text text-sm leading-relaxed">{project.problem}</p>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-3">Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      stackColors[tech] || "bg-gray-600/20 text-gray-300 border-gray-600/30"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}