"use client";
import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { MouseBlob } from "./MouseBlob";
import { Hero } from "./Hero";
import { About } from "./About";
import { Projects } from "./Projects";
import { Resume } from "./Resume";
import { Contact } from "./Contact";
import { CustomCursor } from "./ui/custom-cursor";
import Loader from "./ui/Loader";

function Home() {
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

export default Home;
