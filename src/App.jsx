import { useState, useCallback } from "react";
import HomePanel from "./components/HomePanel";
import AboutPanel from "./components/AboutPanel";
import ContactPanel from "./components/ContactPanel";
import SkillsPanel from "./components/SkillsPanel";
import PortfolioPanel from "./components/PortfolioPanel";

export default function App() {
  const [active, setActive] = useState(null);

  const open = useCallback((p) => {
    setActive(p === "home" ? null : p);
  }, []);

  const close = useCallback(() => setActive(null), []);

  const isOpen = (p) => active === p;

  return (
    <div className="relative w-screen h-dvh overflow-hidden">
      <div className="absolute inset-0 z-10">
        <HomePanel onNavigate={open} />
      </div>

      <div
        className={`absolute inset-0 z-20 transition-transform duration-500 ease-in-out bg-bg ${isOpen("about") ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="w-full h-full overflow-y-auto">
          <AboutPanel onClose={close} />
        </div>
      </div>

      <div
        className={`absolute inset-0 z-20 transition-transform duration-500 ease-in-out bg-bg ${isOpen("skills") ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="w-full h-full overflow-y-auto">
          <SkillsPanel onClose={close} />
        </div>
      </div>

      <div
        className={`absolute inset-0 z-20 transition-transform duration-500 ease-in-out bg-bg ${isOpen("contact") ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="w-full h-full overflow-y-auto">
          <ContactPanel onClose={close} />
        </div>
      </div>

      <div
        className={`absolute inset-0 z-20 transition-transform duration-500 ease-in-out bg-bg ${isOpen("portfolio") ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="w-full h-full overflow-y-auto">
          <PortfolioPanel onClose={close} />
        </div>
      </div>
    </div>
  );
}
