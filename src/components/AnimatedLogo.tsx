import React, { useState, useEffect } from "react";
import "./styles.css";
import LyrecoLogoSvg from "./LyrecoLogoSvg";

const AnimatedLogo = () => {
  const [position, setPosition] = useState({ top: "50%", left: "50%" });
  const [isClicked, setIsClicked] = useState(false);
  const [logoType, setLogoType] = useState<string>("image"); // image, ascii, text

  // Génère une position aléatoire
  const generateRandomPosition = () => ({
    top: `${Math.random() * 80 + 10}%`,
    left: `${Math.random() * 80 + 10}%`,
  });

  // Sélectionne un type de logo aléatoirement
  const getRandomLogoType = () => {
    const types = ["image", "ascii", "text"];
    return types[Math.floor(Math.random() * types.length)];
  };

  useEffect(() => {
    setPosition(generateRandomPosition());
    setLogoType(getRandomLogoType());
  }, []);

  const handleLogoClick = () => {
    setIsClicked(true);

    // Réinitialise après l'animation
    setTimeout(() => {
      setIsClicked(false);
      setPosition(generateRandomPosition());
      setLogoType(getRandomLogoType());
    }, 2000); // Durée de l'animation
  };

  const renderLogo = () => {
    switch (logoType) {
      case "image":
        return <img src="/lyreco.png" alt="Lyreco Logo" className="logo" />;
      case "ascii":
        return (
          <pre className="ascii-art">
            {`    **                                                   
             .                                                                      
                      :::.                                                                          
                .::::                                                                               
             :::::                                                                                  
          :::::.    =##=                                                                            
           :::      =##=     -+     +*+ -**-=##:  -*###+:     -*###*:   =*###+:                     
            :       =##=     ##*   ###  =###=:. =##=. .+##. =##*:.:=. *##+:.-###:                   
                    =##=      ###.###   =##:    *#########+.###      :##=     ##+                   
                    =##+::::   #####    =##:    =##=.  ::   =##*: .-  ###=. :###:      :            
                    =#######*  -##*     =##:      =#####=     =#####-   +#####-       :::           
                              ###:                                                  .:::::          
                                                                                  :::::             
                                                                               ::::.                
                                                                           :::                      
                                                                      .                                           
          `}
          </pre>
        );
      case "text":
        return <LyrecoLogoSvg />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`logo-container ${isClicked ? "clicked" : ""}`}
      style={{ ...position }}
      onClick={handleLogoClick}
    >
      {renderLogo()}
    </div>
  );
};

export default AnimatedLogo;
