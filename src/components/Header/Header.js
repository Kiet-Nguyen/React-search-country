import React from 'react';

import classes from './Header.module.css';

const Header = ({ title, description }) => (
  <header className={ classes.Header }>
    <h1>{ title }</h1>
    <p>{ description }</p>
    <p></p>
  </header>
);

export default Header;
