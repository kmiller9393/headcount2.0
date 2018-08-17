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
      compareDistricts: [],
      comparedAverages: {}
    };
  }

  filterDistricts = input => {
    this.setState({
      filteredDistricts: this.state.districts.findAllMatches(input)
    });
  };

  compareCards = location => {
    if (this.state.compareDistricts.length === 1) {
      const compared = this.state.districts.compareDistrictAverages(
        this.state.compareDistricts[0].location,
        location
      );
      this.setState({ comparedAverages: compared });
    }
  };

  chooseCard = location => {
    if (this.state.compareDistricts.length > 1) {
      return;
    }
    const selected = this.state.districts.findByName(location);
    const clickedCards = [...this.state.compareDistricts, selected];
    this.setState({ compareDistricts: clickedCards });
  };

  render() {
    return (
      <div>
        <header>
          <h1>Kindergartners In Full Day Program</h1>
          <Search filterDistricts={this.filterDistricts} />
        </header>
        <div>
          <CardContainer
            districts={this.state.districts}
            filteredDistricts={this.state.filteredDistricts}
            chooseCard={this.chooseCard}
            compareDistricts={this.state.compareDistricts}
            compareCards={this.compareCards}
            comparedAverages={this.state.comparedAverages}
          />
        </div>
      </div>
    );
  }
}

export default App;
