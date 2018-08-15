import React, { Component } from 'react';
import Search from './Search';
import DistrictRepository from './helper';
import CardContainer from './CardContainer';
import kinderdata from './data/kindergartners_in_full_day_program';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      districts: new DistrictRepository(kinderdata),
      filteredDistricts: []
    };
  }

  filterDistricts = input => {
    this.setState({
      filteredDistricts: this.state.districts.findAllMatches(input)
    });
  };

  // handleInput = input => {
  //   this.setState({
  //     districts:
  //   });
  // };

  render() {
    return (
      <div>
        <header>
          <h1>Kindergartners In Full Day Program</h1>
          <Search
            districts={this.state.districts}
            handleInput={this.handleInput}
            filterDistricts={this.filterDistricts}
          />
        </header>
        <div className="App">
          <CardContainer
            districts={this.state.districts}
            filteredDistricts={this.state.filteredDistricts}
          />
        </div>
      </div>
    );
  }
}

export default App;
