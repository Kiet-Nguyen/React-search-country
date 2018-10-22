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
    count: 0,
  }

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
    // countSearchRes(count, inputValue);
    this.setState({ originalData: filteredData, count: resultCount });
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
