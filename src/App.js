import React, { Component } from 'react';

import classes from './App.module.css';
import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';
import SearchResults from './components/SearchResults/SearchResults';
import { countries } from './components/Data/Data';

class App extends Component {
  state = {
    arrayData: countries
  }

  render() {
    return (
      <div className={ classes.App_outerContainer }>
        <div className={ classes.App_innerContainer }>
          <Header title="World Countries List" description="Total number of countries is 208" />
          <SearchForm 
            startWordClicked={ this.startingWord } 
            anyWordClicked={ this.anyWord } />
          <SearchResults array={ this.state.arrayData } />
        </div>
      </div>
    );
  }
}

export default App;
