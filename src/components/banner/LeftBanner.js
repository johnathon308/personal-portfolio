import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './media';
// import { /*FaFacebookF, FaTwitter,*/ FaLinkedinIn, FaReact } from "react-icons/fa";
// import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["candidate for B.S. in Computer Science.", "Northeastern Student.", "passionate learner."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY DOMAIN</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Johnathon Villa</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I'm a passionate computer science major with a love for code, cuisine, and sports. 
        I find joy in the kitchen, experimenting with ingredients and creating culinary delights. 
        Beyond algorithms, you'll find me on the basketball court, fueling my competitive 
        spirit and commitment to teamwork. I also enjoy diving into captivating anime worlds, 
        whether unraveling code or savoring intricate plots. Let's work together and embark on 
        a journey of discovery and excellence.
        </p>
      </div>
      <Media />
    </div>
  );
}

export default LeftBanner