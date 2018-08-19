import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ filterDistricts }) => {
  const handleChange = event => {
    filterDistricts(event.target.value);
  };

  return <input type="text" placeholder="Search" onChange={handleChange} />;
};

Search.propTypes = {
  filterDistricts: PropTypes.func
};

export default Search;
