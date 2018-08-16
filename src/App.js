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
      filteredDistricts: [],
      compareDistricts: []
    };
  }

  filterDistricts = input => {
    this.setState({
      filteredDistricts: this.state.districts.findAllMatches(input)
    });
  };

  chooseCard = location => {
    const selected = this.state.districts.findByName(location)
    const clickedCards = [...this.state.compareDistricts, selected]
    this.setState({ compareDistricts: clickedCards })
  }

  render() {
    return (
      <div>
        <header>
          <h1>Kindergartners In Full Day Program</h1>
          <Search
            districts={this.state.districts}
            filterDistricts={this.filterDistricts}
          />
        </header>
        <div>
          <CardContainer
            districts={this.state.districts}
            filteredDistricts={this.state.filteredDistricts}
            chooseCard={this.chooseCard}
            compareDistricts={this.state.compareDistricts}
          />
        </div>
      </div>
    );
  }
}

export default App;
