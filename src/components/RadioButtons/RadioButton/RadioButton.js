import React from 'react';

import classes from './RadioButton.module.css';

const RadioButton = ({ buttonID, buttonValue, buttonLabel, buttonChecked, buttonChanged, buttonClicked }) => (
  <div className={ classes.RadioButton }>
    <input 
      type="radio" 
      id={buttonID} 
      name="radioButton" 
      value={buttonValue} 
      onChange={ buttonChanged }
      onClick={buttonClicked} />
    <label htmlFor={ buttonID } className={ classes.Input_Label }>{ buttonLabel }</label>
  </div>
);

export default RadioButton;
