import githubLogo from "../../assets/github-mark-white.svg";
import youtubeLogo from "../../assets/youtube-icon-white.svg";
import { RevealOnScroll } from "./RevealOnScroll";
import ShinyText from "../reactbits/ShinyText";
import SpotlightCard from "../reactbits/SpotlightCard";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <ShinyText 
              text="Featured Projects" 
              speed={3}
              color="#3b82f6"
              shineColor="#22d3ee"
            />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SpotlightCard className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all hover:border-blue-500/30">
              <h3 className="font-bold text-xl mb-2">CauseCompass</h3>
              <p className="text-gray-300">
                A platform enabling users to evaluate companies based on social
                and environmental values. It leverages AI to provide detailed
                summaries, alignment ratings, and alternative suggestions backed
                by reliable sources.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "NextJS",
                  "TypeScript",
                  "Tailwind CSS",
                  "Supabase",
                  "Postgres",
                  "Prisma",
                  "Google Gemini",
                  "Vercel",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className=" bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center ">
                <a
                  href="https://github.com/BrandTrieu/cause-compass"
                  target="_blank"
                  className="border border-blue-500/50 text-blue-500 py-2 px-3 rounded-full font-medium transition-all duration-100
                        hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10 mt-4 flex items-center gap-2"
                  rel="noopener noreferrer"
                >
                  <img src={githubLogo} alt="GitHub" className="w-5 h-5" />
                  View Project
                </a>
              </div>
            </SpotlightCard>
            <SpotlightCard className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all hover:border-blue-500/30">
              <h3 className="font-bold text-xl mb-2">
                Zoomer - AI Meeting Assistant
              </h3>
              <p className="text-gray-300">
                A fully integrated meeting assistant that automates note-taking
                with real-time transcription and translation. Features include
                synced video playback, LLM-powered summaries, and an interactive
                Q&A system.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "Python",
                  "TypeScript",
                  "FastAPI",
                  "NextJS",
                  "Recall.ai",
                  "Google Gemini",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className=" bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center ">
                <a
                  href="https://github.com/Matthew-J-Lew/zoomer"
                  target="_blank"
                  className="border border-blue-500/50 text-blue-500 py-2 px-3 rounded-full font-medium transition-all duration-100
                        hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10 mt-4 flex items-center gap-2"
                  rel="noopener noreferrer"
                >
                  <img src={githubLogo} alt="GitHub" className="w-5 h-5" />
                  View Project
                </a>
              </div>
            </SpotlightCard>
            <SpotlightCard className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all hover:border-blue-500/30">
              <h3 className="font-bold text-xl mb-2">
                Pactify - AI Contract Service
              </h3>
              <p className="text-gray-300">
                Streamlines the legal document lifecycle by helping users draft,
                analyze, and manage contracts. Key capabilities include smart
                templates, AI-driven improvement suggestions, and a centralized
                dashboard for all agreements.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "React",
                  "NodeJS",
                  "ExpressJs",
                  "MongoDB",
                  "OpenAI API",
                  "AWS S3",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className=" bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center ">
                <a
                  href="https://github.com/SohilChanana/Pactify-Contract-Generator"
                  target="_blank"
                  className="border border-blue-500/50 text-blue-500 py-2 px-3 rounded-full font-medium transition-all duration-100
                        hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10 mt-4 flex items-center gap-2"
                  rel="noopener noreferrer"
                >
                  <img src={githubLogo} alt="GitHub" className="w-5 h-5" />
                  View Project
                </a>
              </div>
            </SpotlightCard>
            <SpotlightCard className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all hover:border-blue-500/30">
              <h3 className="font-bold text-xl mb-2">
                UTSCdle - University Geoguessr Game
              </h3>
              <p className="text-gray-300">
                A browser-based location guessing game where players identify
                spots on a university campus using progressively clearer images.
                The game tracks user guesses, calculates distances from the
                correct location, and features both personal stats and global
                leaderboards.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "NextJS",
                  "TypeScript",
                  "Docker",
                  "MongoDB",
                  "Nginx",
                  "OAuth2",
                  "Google Cloud Platform",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className=" bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://youtu.be/T4kD7aeCpo0"
                  target="_blank"
                  className="border border-blue-500/50 text-blue-500 py-2 px-3 rounded-full font-medium transition-all duration-100
                        hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10 mt-4 flex items-center gap-2"
                  rel="noopener noreferrer"
                >
                  <img src={youtubeLogo} alt="Demo link" className="w-5 h-5" />
                  Demo Video
                </a>
                <a
                  href="https://github.com/SohilChanana/utscdle"
                  target="_blank"
                  className="border border-blue-500/50 text-blue-500 py-2 px-3 rounded-full font-medium transition-all duration-100
                        hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10 mt-4 flex items-center gap-2"
                  rel="noopener noreferrer"
                >
                  <img src={githubLogo} alt="GitHub link" className="w-5 h-5" />
                  View Project
                </a>
              </div>
            </SpotlightCard>
            <SpotlightCard className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all hover:border-blue-500/30">
              <h3 className="font-bold text-xl mb-2">
                UofT Course Planner App
              </h3>
              <p className="text-gray-300">
                A mobile app designed to help students at the University of
                Toronto plan their courses efficiently. It provides a
                user-friendly interface for searching and filtering courses,
                viewing course details, and creating personalized course
                schedules. Administrators can manage course data by adding or
                editing course information, including names, codes,
                prerequisites, and term offerings.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Java", "Android Studio", "Firebase", "Gradle"].map(
                  (skill, index) => (
                    <span
                      key={index}
                      className=" bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>

              <div className="flex justify-between items-center ">
                <a
                  href="https://github.com/SohilChanana/UofT_Course_Planner"
                  target="_blank"
                  className="border border-blue-500/50 text-blue-500 py-2 px-3 rounded-full font-medium transition-all duration-100
                        hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10 mt-4 flex items-center gap-2"
                  rel="noopener noreferrer"
                >
                  <img src={githubLogo} alt="GitHub" className="w-5 h-5" />
                  View Project
                </a>
              </div>
            </SpotlightCard>
            <SpotlightCard className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all hover:border-blue-500/30">
              <h3 className="font-bold text-xl mb-2">Stock Management Tool</h3>
              <p className="text-gray-300">
                A command-line stock management tool that lets users create and
                track portfolios, analyze stock performance, and generate basic
                predictions using historical data. It also includes social
                features like sharing stock lists, writing reviews, and
                connecting with friends for collaborative investing.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "Python",
                  "PostgreSQL",
                  "Pandas",
                  "Google Cloud Platform",
                  "sci-kit-learn",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className=" bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center ">
                <a
                  href="https://github.com/SohilChanana/Stock-Tool"
                  target="_blank"
                  className="border border-blue-500/50 text-blue-500 py-2 px-3 rounded-full font-medium transition-all duration-100
                        hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10 mt-4 flex items-center gap-2"
                  rel="noopener noreferrer"
                >
                  <img src={githubLogo} alt="GitHub" className="w-5 h-5" />
                  View Project
                </a>
              </div>
            </SpotlightCard>
            <SpotlightCard className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all hover:border-blue-500/30">
              <h3 className="font-bold text-xl mb-2">
                Firefighter Felix - Assembly Game
              </h3>
              <p className="text-gray-300">
                A platformer game made in MIPS assembly language, where players
                control a firefighter navigating through a burning building
                trying to escape. The game features several movement abilities,
                extinguishable fires, and multiple levels with increasing
                difficulty.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Assembly", "MIPS Simulator"].map((skill, index) => (
                  <span
                    key={index}
                    className=" bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                        hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://youtu.be/WbrefAqEv2Y"
                  target="_blank"
                  className="border border-blue-500/50 text-blue-500 py-2 px-3 rounded-full font-medium transition-all duration-100
                        hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10 mt-4 flex items-center gap-2"
                  rel="noopener noreferrer"
                >
                  <img src={youtubeLogo} alt="Demo link" className="w-5 h-5" />
                  Demo Video
                </a>
                <a
                  href="https://github.com/SohilChanana/Firefighter_Felix"
                  target="_blank"
                  className="border border-blue-500/50 text-blue-500 py-2 px-3 rounded-full font-medium transition-all duration-100
                        hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10 mt-4 flex items-center gap-2"
                  rel="noopener noreferrer"
                >
                  <img src={githubLogo} alt="GitHub" className="w-5 h-5" />
                  View Project
                </a>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
