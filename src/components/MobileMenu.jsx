export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
        ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }
      `}
      style={{ visibility: menuOpen ? "visible" : "hidden" }}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close menu"
      >
        &times;
      </button>
      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className={`text-2x font-semibold text-white my-4 transform transition-transform duration-300
            ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-5"
            }`}
      >
        Home
      </a>
      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className={`text-2x font-semibold text-white my-4 transform transition-transform duration-300
            ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-5"
            }`}
      >
        About
      </a>
      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className={`text-2x font-semibold text-white my-4 transform transition-transform duration-300
            ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-5"
            }`}
      >
        Projects
      </a>
      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className={`text-2x font-semibold text-white my-4 transform transition-transform duration-300
            ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-5"
            }`}
      >
        Contact
      </a>
      <a
        href={`${import.meta.env.BASE_URL}SohilChanana_Resume_2026.pdf`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setMenuOpen(false)}
        className={`bg-blue-500 text-white py-3 px-8 rounded-full font-semibold my-4 transform transition-all duration-300
            hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:scale-105
            ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-5"
            }`}
      >
        Resume
      </a>
    </div>
  );
};
