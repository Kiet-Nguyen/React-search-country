import React from 'react';

import classes from './SearchResults.module.css';

const getRandomInt = () => {
  return Math.floor(Math.random() * 255) + 1;
};

// Generate random hexadecimal color
const randomHexaNumberGenerator = () => {
  //return '#' + Math.floor(Math.random() * 16777215).toString(16);
  let hexColor;
  const randomColor = '#';
  let red = getRandomInt();
  let green = getRandomInt();
  let blue = getRandomInt();

  //store the random hex Color value after converting the rgb values to hexadecimal
  hexColor = ((1 << 24) + (red << 16) + (green << 8) + blue)
    .toString(16)
    .slice(1);

  return randomColor + hexColor;
};

const SearchResults = ({ data }) => {
  return (
    <div className={ classes.Countries }>
      {data.map(country => {
        return (
          <div key={ country } className={classes.Country} style={{ backgroundColor: randomHexaNumberGenerator() }}>
            <span className={ classes.Text_color }>{ country }</span>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;

