import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ filterDistricts }) => {
  this.handleChange = e => {
    filterDistricts(e.target.value);
  };

  return (
    <form>
      <input type="text" placeholder="Search" onChange={this.handleChange} />
    </form>
  );
};

Search.propTypes = {
  filterDistricts: PropTypes.func
};

export default Search;
