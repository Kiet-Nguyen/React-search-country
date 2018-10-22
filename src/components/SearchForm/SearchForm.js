import React from 'react';

import classes from './SearchForm.module.css';
import RadionButtons from'../RadioButtons/RadioButtons';

const SearchForm = ({ changedApp, keyUpApp, inputLength }) => (
  <section className={ classes.SearchForm }>
    <p className={ classes.Description }>Search a country with:</p>
    <form name="myForm" className="search-form">
      <RadionButtons changedSearchForm={ changedApp } />

      <div className={ classes.Search_Field }>
        <input
          type="text"
          name="searchInput"
          maxLength={ inputLength }
          placeholder="Choose a method to search..."
          className={ classes.Text_Input }
          onKeyUp={ keyUpApp } />
      </div>
    </form>
  </section>
);

export default SearchForm;

