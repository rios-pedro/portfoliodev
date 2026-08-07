import { personal } from "../data/content";

export default function HomePanel({ onNavigate }) {
  return (
    <div className="relative min-h-screen min-h-dvh bg-black flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        webkit-playsinline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/dark_v.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60" />

      {/* Logo girando */}
      <img
        src="/images/header/logo.png"
        alt="Logo"
        className="fixed left-8 top-8 z-30 w-10 h-10 md:w-14 md:h-14 animate-[spin_3s_linear_infinite]"
        style={{ animation: "rotate 3s linear infinite" }}
      />

      {/* Navegação direcional */}
      <a
        onClick={() => onNavigate("about")}
        className="fixed top-10 left-1/2 -translate-x-1/2 z-30 text-white text-sm md:text-base uppercase tracking-[0.2em] font-medium cursor-pointer hover:opacity-70 transition-opacity"
      >
        About
      </a>
      <a
        onClick={() => onNavigate("skills")}
        className="fixed bottom-10 left-1/2 -translate-x-1/2 z-30 text-white text-sm md:text-base uppercase tracking-[0.2em] font-medium cursor-pointer hover:opacity-70 transition-opacity"
      >
        Skills
      </a>
      <a
        onClick={() => onNavigate("portfolio")}
        className="fixed top-1/2 -translate-y-1/2 left-4 z-30 text-white text-sm md:text-base uppercase tracking-[0.2em] font-medium cursor-pointer hover:opacity-70 transition-opacity -rotate-90 origin-left"
      >
        Portfolio
      </a>
      <a
        onClick={() => onNavigate("contact")}
        className="fixed top-1/2 -translate-y-1/2 right-4 z-30 text-white text-sm md:text-base uppercase tracking-[0.2em] font-medium cursor-pointer hover:opacity-70 transition-opacity rotate-90 origin-right"
      >
        Contact
      </a>

      {/* Hero */}
      <div className="relative z-10 text-center px-6">
        <h1
          className="text-[clamp(2.2rem,10vw,8rem)] font-bold leading-[1.1]"
          style={{
            background: `linear-gradient(rgba(255,255,255,0.8), rgba(200,200,200,0.4)),
              url(https://images.unsplash.com/photo-1701192799341-1aba51d43267?q=80&w=774&auto=format&fit=crop) center / cover`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          dangerouslySetInnerHTML={{ __html: personal.tagline }}
        />
      </div>

      <style>{`
        @keyframes rotate {
          100% { transform: rotateY(360deg); }
        }
      `}</style>
    </div>
  );
}