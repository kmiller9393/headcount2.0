import React, { Component } from 'react';
import DistrictRepository from './helper';
import kinderdata from './data/kindergartners_in_full_day_program';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      districtSuggestions: [],
      userInput: ''
    };
  }

  filterDistricts = input => {
    const districtRepository = new DistrictRepository(kinderdata);
    const findMatches = districtRepository.findAllMatches(input);
    const finalMatches = [...findMatches];
    this.setState({
      districtSuggestions: finalMatches
    });
    console.log(this.state.districtSuggestions);
    // this.props.handleInput(this.state.districtSuggestions);
  };

  handleChange = e => {
    this.setState({
      userInput: e.target.value
    });
    this.filterDistricts(this.state.userInput);
  };

  render() {
    return (
      <form>
        <input type="text" placeholder="Search" onChange={this.handleChange} />
      </form>
      //   <section>

      //   </section>
    );
  }
}
