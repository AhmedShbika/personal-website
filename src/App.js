import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import "./index.css";
import Header from "./header";
import Main from "./main";
import sparkels from "./images/🦆 emoji _sparkles_.png";
import star from "./images/🦆 emoji _white medium star_.png";
import fire from "./images/🦆 emoji _fire_.png";
import wight from "./images/Property 1=Default.png";
import Worke from "./worke";
import line from "./images/Union.png";
import quezz from "./images/Component 9 (1).png";
import meme from "./images/Component 10 (1).png";
import musels from "./images/Component 8 (1).png"
import Service from "./service";
const data = {
  data: [
    {
      top: "creative ",
      simeTtop: "ui",
      bottom: "figma tool",
     link:"https://github.com/AhmedShbika/Quez/tree/main",
      pref:
        "creating ui using figma tool in addition to other ui tools like photoshop and  illustrator and so on",
      img: sparkels,
    },
    {
      top: "inteactive ",
      simeTtop: "design",
      pref:
        "interactive design that capture the user using figma prototype to see the whole user experience berfor the actuall code",
      bottom: "figma prototype",
      img: star,
    },
    {
      top: "fast & beautiful ",
      simeTtop: "website",
      bottom: "react-frame",
      pref:
        "apply the figam design using react framework and firebase for fast and editable websit in the future",
      img: fire,
    },
  ],
};

const data2 = {
  data2: [
    {
      describe: " quezz game",
      img: quezz,
      link:"https://github.com/AhmedShbika/Quez/tree/main",
    },
    {
      describe: " meme genenator",
      img: meme,
    link:"https://github.com/AhmedShbika/MEME-mk"
    },
  ],
};

const MainComponents = data.data.map((x, index) => {
  return (
    <Main
      key={index}
      top={x.top}
      bottom={x.bottom}
      src={x.img}
      simeTtop={x.simeTtop}
      pref={x.pref}
    />
  );
});

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const workRef = useRef(null);
  const serviceRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    });
  }, []);

  const scrollToSection = () => {
    if (workRef.current) {
      window.scrollTo({
        top: workRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  const scrollToSection2 = () => {
    
    if ( serviceRef.current) {
      window.scrollTo({
        top: serviceRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const WorkComponents = data2.data2.map((x, index) => {
    return (
      <Worke
        key={index}
        descripe={x.describe}
        img={x.img}
        scroll={scrollToSection}
       link={x.link}
        />
    );
  });

  return (
    <div className="all">
      <Router>
        <Header  
        scroll2={scrollToSection2}
        scroll={scrollToSection}/>
        <img src={musels} className="w" alt="" />
        <div className="fire">{MainComponents}</div>
        <div className="poi">
          <img src={wight} className="wight" alt="" />
          <img src={line} className="line" alt="" />
        </div>
        <div className="worke-class"  ref={workRef} >
          {WorkComponents}
        </div>
    <div ref={serviceRef}>
      
   
      <Service/>
      </div>
      <div className="viloets" >
        Violets are blue,Roses are red and anta mo shendiro
      </div>
      </Router>
    </div>
  );
}

export default App;