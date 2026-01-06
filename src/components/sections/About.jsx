import { RevealOnScroll } from "./RevealOnScroll";

export const About = () => {
  const skills = {
    frontend: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Angular",
      "Figma",
      "NextJS",
      "Tailwind",
      "Vite",
    ],
    backend: [
      "Python",
      "Java",
      "SQL",
      "C",
      "C++",
      "Haskell",
      "GraphQL",
      "Assembly",
      "Bash",
      "ExpressJS",
      "NodeJS",
      "MongoDB",
      "Supabase",
      "Prisma",
      "Firebase",
      "AWS",
      "GCP",
    ],
    other: [
      "Docker",
      "Postman",
      "Swagger",
      "Linux",
      "Jupyter Notebooks",
      "Pandas",
    ],
  };
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="roudned-xl p-8 border-white/10 border hover:-translate-y-1 transition-all ">
            <p className="text-gray-300">
              Passionate developer with a growing focus on full-stack technologies
              and building efficient, user-centered applications.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                      hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                      hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Other</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.other.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                      hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <div className="text-gray-300">
                <h4 className="font-bold">
                  University of Toronto (2021 - Present)
                </h4>
                <h4 className="font-bold pb-2">B.S. in Computer Science</h4>
                <h4 className="font-bold">Relevant Coursework:</h4>
                <ul className="list-disc list-inside">
                  <li>Data Structures</li>
                  <li>Web Development</li>
                  <li>Machine Learning</li>
                  <li>Computer Networks</li>
                  <li>Software Engineering</li>
                </ul>
              </div>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
              <div className="text-gray-300 space-y-4">
                <div>
                  {" "}
                  <h4 className="font-bold pb-2">
                    Software Developer at IBM (May 2023 - Aug 2024)
                  </h4>
                  <p>
                    Developed and optimized internal tools and APIs reducing
                    manual effort and improving efficiency across departments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
