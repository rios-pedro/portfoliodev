import { useState } from "react";

const stackColors = {
  React: "bg-cyan-600",
  TypeScript: "bg-blue-600",
  "Google Sheets API": "bg-green-600",
  Java: "bg-orange-600",
  "Spring Boot": "bg-lime-700",
  JPA: "bg-indigo-600",
  Hibernate: "bg-yellow-700",
  H2: "bg-blue-500",
  Hooks: "bg-pink-600",
  CSS: "bg-sky-600",
  MongoDB: "bg-emerald-600",
  "Java 17": "bg-orange-600",
  "Spring Data JPA": "bg-indigo-600",
  PostgreSQL: "bg-blue-800",
  Swagger: "bg-teal-600",
  Lombok: "bg-red-600",
  Tauri: "bg-yellow-600",
  Rust: "bg-orange-700",
};

function StackBadge({ name }) {
  const color = stackColors[name] || "bg-gray-600";
  return (
    <span
      className={`inline-block ${color} text-white text-[10px] px-2 py-0.5 rounded-full font-medium`}
    >
      {name}
    </span>
  );
}

export default function ProjectCard({ project, onClick, style }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div
      onClick={() => onClick(project)}
      className="group relative overflow-hidden rounded-xl bg-surface cursor-pointer border border-white/5 hover:border-accent/40 transition-all duration-300"
      style={style}
    >
      <div className="aspect-[4/3] overflow-hidden bg-bg-light">
        {!imgLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-bg-light">
            <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
          </div>
        )}
        <img
          src={project.image}
          alt={project.title}
          onLoad={() => setImgLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-500 ${
            imgLoaded ? "opacity-100" : "opacity-0"
          } group-hover:scale-105`}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
        <span className="text-white text-sm font-medium flex items-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          View details
        </span>
      </div>

      <div className="p-4 space-y-2">
        <h4 className="text-white font-medium text-sm uppercase tracking-wide truncate">
          {project.title}
        </h4>
        <p className="text-text text-xs leading-relaxed line-clamp-2">
          {project.headline}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.stack.map((tech) => (
            <StackBadge key={tech} name={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}