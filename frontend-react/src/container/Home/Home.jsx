import React, { useState, useEffect, useRef } from 'react';
import { urlFor, client } from '../../client';
import { images } from '../../constants';

import './Home.scss'; 

const Home = () => {
  const [homes, setHomes] = useState([]);
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
  const timeoutRef = useRef(null); // To hold the timeout, so we can clear it on unmount

  useEffect(() => {
      const query = '*[_type == "home"]';

      client.fetch(query).then((data) => {
          if (Array.isArray(data)) {
              setHomes(data);
          }
      });
  }, []);

  useEffect(() => {
    // Function to advance the background image
    const nextBackground = () => {
      setCurrentBackgroundIndex((prevIndex) => 
        prevIndex === homes.length - 1 ? 0 : prevIndex + 1
      );
    };

    // Set a timeout to change the background image every 5 seconds (5000ms)
    timeoutRef.current = setTimeout(nextBackground, 6000);

    // Clear the timeout when the component unmounts or the index changes
    return () => clearTimeout(timeoutRef.current);
  }, [currentBackgroundIndex, homes.length]);

  // Calculate the background image style only for the current background
  const backgroundStyle = homes.length > 0 ? { 
    backgroundImage: `url(${urlFor(homes[currentBackgroundIndex].imgUrl).url()})` 
  } : {};

  return (
    <div className="hero" style={backgroundStyle}>  {/* Apply the backgroundStyle here */}
      
      <div className="navigation">
      <img 
          src={images.left_nav_svg}
          alt="left_nav_svg"
          className="svg-left-nav" />
        <div className="left-nav">
          
          
          <a href="/portfolio" >PORTFOLIO</a>
          <a href="/about">WHO I AM</a>
          <a href="/info">MORE INFO</a>
        </div>
        <div className="center-nav">
          <h1>SNEHAL JATALE <br/>
            <span>PHOTOGRAPHY</span></h1>
        </div>
        <div className="scroll-indicator">
            <span>SCROLL FOR MORE</span>
            <div className="arrow-down"></div>
        </div>
        <div className="right-nav">
            <img 
            src={images.right_nav_svg}
            alt="right_nav_svg"
            className="svg-right-nav" />
            <a href="/contact">CONTACT</a>
            <a href="/testimonials">TESTIMONIALS</a>
        </div>

      </div>
    </div>
  );


  
}

export default Home;
