import React from 'react';

import classes from './RadioButtons.module.css';
import RadioButton from './RadioButton/RadioButton';

const radioButtonsData = [
  {
    buttonID: 'starting-word', 
    buttonValue: 'start', 
    buttonLabel: 'Starting word',
    defaultChecked: 'true',
  },
  {
    buttonID: 'any-word', 
    buttonValue: 'any', 
    buttonLabel: 'Any word',
    defaultChecked: null, 
  }
];

const RadioButtons = ({ changed }) => (
  <div className={ classes.Container }>
    { radioButtonsData.map((button, buttonIndex) => (
      <RadioButton
        key={ buttonIndex }
        buttonID={ button.buttonID }
        buttonValue={ button.buttonValue }
        buttonLabel={ button.buttonLabel }
        buttonChanged={ changed }
      />
    )) }
  </div>
);

export default RadioButtons;
