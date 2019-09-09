import React from 'react';
import { Link } from 'react-router-dom';
import PortfolioItem from './PortfolioItem';

const Portfolio = props => {
  return (
    <div>
      <h2>My Work</h2>
      <Link to="/portfolio/1">Thing 1</Link>
      <Link to="/portfolio/2">Thing 2</Link>
    </div>
  );
};

export default Portfolio;
