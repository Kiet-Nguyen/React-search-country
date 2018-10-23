import React, { Component } from 'react';

import classes from './App.module.css';
import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';
import SearchResults from './components/SearchResults/SearchResults';
import { countries } from './components/Data/Data';

class App extends Component {
  state = {
    inputLength: 0,
    originalData: countries,
  }

  // Display a nummer of countries match search input
  countSearchRes = (countNum, value) => {
    let tobe = '';
    let singOrPlural = '';

    if (countNum >= 0 && countNum <= 1) {
      tobe = 'is'; 
      singOrPlural = 'country';
    } else {
      tobe = 'are';
      singOrPlural = 'countries';
    }

    document.querySelector('.js-result-count').textContent = `There ${tobe} ${countNum} ${singOrPlural} starting with ${value}`;
  };

  onChangeHandler = e => {
    const buttonValue = e.target.value;
    // Set maxlength for input field
    if (buttonValue === 'start') {
      this.setState({ inputLength: 1 });
    } else if (buttonValue === 'any') {
      this.setState({ inputLength: 524288 });
    }
  }

  onKeyUpHandler = e => {
    let inputValue = e.target.value.toUpperCase();
    let filteredData = [];
    let resultCount = 0;

    countries.map(currCountry => {
      let partOfCountryStr = currCountry.substring(0, inputValue.length);

      if (partOfCountryStr.toUpperCase() === inputValue) {
        filteredData.push(currCountry);
        resultCount += 1;
      }
      return filteredData;
    });
    this.setState({ originalData: filteredData });
    this.countSearchRes(resultCount, inputValue);
  }

  render() {
    return (
      <div className={ classes.App_outerContainer }>
        <div className={ classes.App_innerContainer }>
          <Header 
            title="World Countries List" 
            description="Total number of countries is 208"
          />
          
          <SearchForm
            inputLength={ this.state.inputLength }
            keyUpApp={ this.onKeyUpHandler }
            changedApp={ this.onChangeHandler }
          />
          
          <SearchResults data={ this.state.originalData } />
        </div>
      </div>
    );
  }
}

export default App;
