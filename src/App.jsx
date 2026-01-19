import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { MouseBlob } from "./components/MouseBlob";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Resume } from "./components/Resume";
import { Contact } from "./components/Contact";
import { CustomCursor } from "./components/ui/custom-cursor";
import Loader from "./components/ui/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen w-full bg-black antialiased relative overflow-x-hidden">
      <CustomCursor />
      <MouseBlob />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
