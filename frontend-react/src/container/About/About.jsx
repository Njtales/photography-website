// Assuming this is a React component
import React from 'react';
import { images } from '../../constants';
import './About.scss'; // Make sure the SCSS file name matches

const About = () => {
  return (
    <div className="about-container">
        <div className="about-head-nav">
            <div className="about-nav-title">
                <a href="/gallery">NEW-BORN <br/> PHOTOGRAPHY</a>
                <a className="about-nav-description" 
                    href="/gallery">Natural. Soulful. Forever</a>
                
            </div>

            <div className="about-nav-midtitle">
                <a href="/who-i-am">Doha, Qatar</a>
                <a className="about-nav-description" 
                href="/who-i-am">Meet the Artist</a>
            </div>

            <div className="about-nav-title">
                <a href="/portfolio" >PORTFOLIO</a>
                <a className="about-nav-description" 
                href="/portfolio" >Your story. Real moments. Unposed.</a>
            </div>
        </div>

        <div className="about-aboutme-textpic">
            <div className="about-aboutme-wrapper">
                <div className="about-aboutme-textwrapper">
                    <div className="about-aboutme-text">
                        <span>Hello, I'm Snehal.</span>
                        <p>
                            I fell in love with photography before I turned ten years of age and the rest is history. 
                            I'm obsessed with light and creating film-like images that you will cherish forever. 
                            My goal is to capture your family as it is... the laughter, the magic, the madness. 
                            All of it! That is what makes every family so unique. I cannot wait to meet you!
                        </p>
                    </div>
                </div>
                
                <div className="about-aboutme-pic">
                    <div className="about-aboutme-picwrapper">
                        <img src={images.imgaboutme} alt="About me" />
                    </div>
                </div>

            </div>
            
        </div>
    </div>

    
  );
};

export default About;
