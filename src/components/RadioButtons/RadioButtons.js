import React from 'react';

import classes from './RadioButtons.module.css';
import RadioButton from './RadioButton/RadioButton';

const radioButtonsData = [
  {
    buttonID: 'starting-word', 
    buttonValue: 'start', 
    buttonLabel: 'Starting word',
  },
  {
    buttonID: 'any-word', 
    buttonValue: 'any', 
    buttonLabel: 'Any word',
  }
];

const RadioButtons = ({ changedSearchForm }) => (
  <div className={ classes.Container }>
    { radioButtonsData.map((button, buttonIndex) => (
      <RadioButton
        key={ buttonIndex }
        buttonID={ button.buttonID }
        buttonValue={ button.buttonValue }
        buttonLabel={ button.buttonLabel }
        buttonChanged={ changedSearchForm }
      />
    )) }
  </div>
);

export default RadioButtons;
