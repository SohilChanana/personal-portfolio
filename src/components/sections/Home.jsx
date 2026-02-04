import { RevealOnScroll } from "./RevealOnScroll";
import ShinyText from "../reactbits/ShinyText";
import profilePic from "../../assets/sohil_pic.jpg";
import githubLogo from "../../assets/github-mark-white.svg";
import linkedinLogo from "../../assets/linkedin.svg";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <img
            src={profilePic}
            alt="Sohil Chanana"
            className="w-56 h-56 rounded-full mx-auto mb-6 object-cover shadow-[0px_0px_20px_5px_rgba(46,147,255,1)]
 hover:scale-105 transition-transform duration-300"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <ShinyText
              text="Hi, I'm Sohil Chanana"
              speed={3}
              color="#3b82f6"
              shineColor="#22d3ee"
            />
          </h1>

          <p className=" text-gray-300 text-lg mb-8 max-w-lg mx-auto">
            I'm a Computer Science student specializing in Software Engineering
            at the University of Toronto. I'm passionate about building
            user-focused software and expanding my skills in Web Development,
            Computer Networks, and Full-Stack Development.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded-full font-medium transition-all relative overflow-hidden
              hover:translate-y-0.5 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 10.5 8 13l2 2.5" />
                <path d="m14 10.5 2 2.5-2 2.5" />
                <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z" />
              </svg>
              Projects
            </a>
            <a
              href={`${import.meta.env.BASE_URL}SohilChanana_Resume_2026.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white py-3 px-6 rounded-full font-medium transition-all relative overflow-hidden
              hover:translate-y-0.5 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
                <path d="M14 2v5a1 1 0 0 0 1 1h5" />
                <path d="M10 9H8" />
                <path d="M16 13H8" />
                <path d="M16 17H8" />
              </svg>
              Resume
            </a>
            <a
              href="#contact"
              className="border-2 border-blue-500/50 text-blue-500 py-3 px-6 rounded-full font-medium transition-all duration-100
              hover:translate-y-0.5 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
            <a
              href="https://www.linkedin.com/in/sohil-chanana/"
              target="_blank"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-500/50 transition-all duration-100 hover:bg-blue-500/10 hover:translate-y-0.5 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              rel="noopener noreferrer"
            >
              <img src={linkedinLogo} alt="Linkedin" className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/SohilChanana"
              target="_blank"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-500/50 transition-all duration-100 hover:bg-blue-500/10 hover:translate-y-0.5 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              rel="noopener noreferrer"
            >
              <img src={githubLogo} alt="github" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
