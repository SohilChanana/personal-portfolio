import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            sohil<span className="text-blue-500 ">.dev</span>{" "}
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors hover:underline decoration-blue-500 underline-offset-4"
            >
              {" "}
              Home{" "}
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors hover:underline decoration-blue-500 underline-offset-4"
            >
              {" "}
              About{" "}
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors hover:underline decoration-blue-500 underline-offset-4"
            >
              {" "}
              Projects{" "}
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors hover:underline decoration-blue-500 underline-offset-4"
            >
              {" "}
              Contact{" "}
            </a>
            <a
              href={`${import.meta.env.BASE_URL}SohilChanana_Resume_2026.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white py-2 px-4 rounded-full font-medium transition-all
              hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:scale-105"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
