'use client';

import House from "@/components/Home";
import About from "@/components/About"
import Tech from "@/components/Tech";
import ProjectsSection from "@/components/ProjectsSection";
import Contact from "@/components/Contact";
import { useEffect, useState } from 'react';

export default function Home() {
  const [phraseData, setPhraseData] = useState({quote: 'Your phrase is loading', author: 'unknown'});
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    async function phrase(){
      const response = await fetch('https://api.themotivate365.com/stoic-quote');
      const data = await response.json()
      setPhraseData(data);
      return data;
    }
    phrase();
  }
  ,[counter])

  useEffect(() => {
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
    );
    document.getElementsByTagName("head")[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);

  return (
    <main>
      <House />
      <About phraseData={phraseData} counter={counter} setCounter={setCounter}/>
      <hr />
      <Tech />
      <hr />
      <ProjectsSection />
      <hr />
      <Contact />
    </main>
  )
}
