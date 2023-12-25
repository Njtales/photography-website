import React, { useState, useEffect, useRef } from 'react';
import { urlFor, client } from '../../client';
import { images } from '../../constants';

import './Portfolio.scss';

const Portfolio = () => {
  const [portfolio, setportfolio] = useState([]);

  return (
    <div className="photography-site">
      <section className="fine-art">
        <h2>FINE ART</h2>
        <h3>PHOTOGRAPHY</h3>
        <p>Natural. Soulful. Forever</p>
      </section>

      <section className="location">
        <h2>Buckinghamshire, UK</h2>
        <p>Meet the Artist</p>
      </section>

      <section className="portfolio">
        <h2>PORTFOLIO</h2>
        <p>Your story. Real moments. Unposed.</p>
      </section>
    </div>
  );
}

export default Portfolio;
