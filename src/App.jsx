import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import {Projects} from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import Particles from "./components/reactbits/Particles";
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      
      {/* Global Particles Background */}
      <div className="fixed inset-0 z-0">
        <Particles
          particleCount={150}
          particleSpread={8}
          speed={0.08}
          particleColors={['#3b82f6', '#22d3ee', '#60a5fa', '#ffffff']}
          moveParticlesOnHover={true}
          particleHoverFactor={0.5}
          alphaParticles={true}
          particleBaseSize={80}
          sizeRandomness={0.8}
          cameraDistance={25}
          className="w-full h-full"
        />
      </div>
      
      <div
        className={`min-h-screen transition-opacity duration-700 relative z-10 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-transparent text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About/>
        <Projects/>
        <Contact />
      </div>
    </>
  );
}

export default App;
