import React from 'react';

import classes from './RadioButton.module.css';

const RadioButton = ({ buttonID, buttonValue, buttonLabel, buttonChecked, buttonChanged, clicked }) => (
  <div className={ classes.RadioButton }>
    <input 
      type="radio" 
      id={buttonID} 
      name="radioButton" 
      value={buttonValue} 
      onChange={ buttonChanged }
      onClick={clicked} />
    <label htmlFor={ buttonID } className={ classes.Input_Label }>{ buttonLabel }</label>
  </div>
);

export default RadioButton;
