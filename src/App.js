import React, { Component } from 'react';

import classes from './App.module.css';
import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';
import SearchResults from './components/SearchResults/SearchResults';
import { countries } from './components/Data/Data';

class App extends Component {
  state = {
    originalData: countries,
    count: 0,
  }

  onKeyUpHandler = (e) => {
    const inputTextLength = e.target.maxLength;
    // Starting word
    if (inputTextLength === 1) {
      let inputValue = e.target.value.toUpperCase();
      let filteredData = [];
      let resultCount = 0;

      countries.map(currCountry => {
        let initialChar = currCountry.charAt(0).toUpperCase();

        if (inputValue === initialChar) {
          filteredData.push(currCountry);
          resultCount += 1;
        }
        return filteredData;
      });
      // countSearchRes(count, inputValue);
      this.setState({ originalData: filteredData, count: resultCount });
    }

    // Any word
    if (inputTextLength > 1) {
      let inputValue = e.target.value.toUpperCase();
      let resultCount = 0;
      let filteredData = [];

      countries.map(currCountry => {
        let partOfCountryStr = currCountry.substring(0, inputValue.length);

        if (partOfCountryStr.toUpperCase() === inputValue) {
          filteredData.push(currCountry);
          resultCount += 1;
        } return filteredData;
      });
      // countSearchRes(count, inputValue);
      this.setState({ originalData: filteredData, count: resultCount });
    }
  }

  render() {
    return (
      <div className={ classes.App_outerContainer }>
        <div className={ classes.App_innerContainer }>
          <Header 
            title="World Countries List" 
            description="Total number of countries is 208" />
          
          <SearchForm
            keyUp={ this.onKeyUpHandler } />
          
          <SearchResults data={ this.state.originalData } />
        </div>
      </div>
    );
  }
}

export default App;
