import React from 'react';

import classes from './RadioButton.module.css';

const RadioButton = ({ buttonID, buttonValue, buttonLabel, buttonChanged }) => (
  <div className={ classes.RadioButton }>
    <input 
      type="radio" 
      id={ buttonID } 
      name="radioButton" 
      value={ buttonValue } 
      onChange={ buttonChanged }
    />
    <label htmlFor={ buttonID } className={ classes.Input_Label }>
      { buttonLabel }
    </label>
  </div>
);

export default RadioButton;
