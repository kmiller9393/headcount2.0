import React, { Component } from 'react';

export default class Search extends Component {
  handleChange = e => {
    this.props.filterDistricts(e.target.value);
  };

  render() {
    return (
      <form>
        <input type="text" placeholder="Search" onChange={this.handleChange} />
      </form>
    );
  }
}
