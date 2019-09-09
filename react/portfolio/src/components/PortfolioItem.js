import React from 'react';

const PortfolioItem = props => (
  <div>
    <h1>Art</h1>
    Here is my art: {props.match.params.id}
  </div>
);

export default PortfolioItem;
