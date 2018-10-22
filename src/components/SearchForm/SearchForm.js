import React, { Component } from 'react';

import classes from './SearchForm.module.css';
import RadionButtons from'../RadioButtons/RadioButtons';

class SearchForm extends Component {
  state = {
    inputLength: 0,
  }

  onChangeHandler = (e) => {
    const buttonValue = e.target.value;
    // Set maxlength for input field
    if (buttonValue === 'start') {
      this.setState({ inputLength: 1 });
    } else if (buttonValue === 'any') {
      this.setState({ inputLength: 524288 });
    }
  }

  render() {
    return (
      <section className={ classes.SearchForm }>
        <p className="mb-xs">Search a country with:</p>
        <form name="myForm" className="search-form">
          <RadionButtons 
            changed={ this.onChangeHandler } 
            clicked={ this.props.startWordClicked }/>

          <div className={ classes.Search_Field }>
            <input 
              type="text" 
              name="searchInput" 
              maxLength={ this.state.inputLength} 
              placeholder="Choose a method to search..." 
              className={ classes.Text_Input }
              onKeyUp={ this.props.keyUp } />
          </div>
        </form>
      </section>
    );
  }
}

export default SearchForm;
