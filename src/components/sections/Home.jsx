import { RevealOnScroll } from "./RevealOnScroll";
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent loading-right">
            Hi, I'm Sohil Chanana
          </h1>

          <p className=" text-gray-300 text-lg mb-8 max-w-lg mx-auto">
            I’m a Computer Science student specializing in Software Engineering
            at the University of Toronto Scarborough. I’m passionate about
            building user-focused software and expanding my skills in Web
            Development, Computer Networks, and Full-Stack Development.
          </p>
          <div className="flex justify-center items-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden
              hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border-2 border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-100
              hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
            <a
              href="https://www.linkedin.com/in/sohil-chanana/"
              target="_blank"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-500/50 transition-all duration-100 hover:bg-blue-500/10 hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)]"
              rel="noopener noreferrer"
            >
              <img src={linkedinLogo} alt="Linkedin" className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/SohilChanana"
              target="_blank"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-blue-500/50 transition-all duration-100 hover:bg-blue-500/10 hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)]"
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
