import React from 'react';
import { About, Testimonials } from './container';
import { Home } from './container';

import './App.scss';

const App = () => (
  <div className="app">
    <Home />
    <About />
    <Testimonials />
  </div>
);

export default App;
