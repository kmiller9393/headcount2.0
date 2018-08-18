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
      filteredDistricts: [],
      compareDistricts: [],
      comparedAverages: {},
      twoCards: false
    };
  }

  filterDistricts = input => {
    const districts = new DistrictRepository(kinderdata);
    const newDistricts = districts.findAllMatches(input);
    this.setState({
      filteredDistricts: newDistricts
    });
  };

  chooseCard = card => {
    if (this.state.compareDistricts.length > 1) {
      return;
    }
    const clickedCards = [...this.state.compareDistricts, card];
    this.setState({ compareDistricts: clickedCards });
  };

  compareCards = () => {
    const districts = new DistrictRepository(kinderdata);
    const locations = this.state.compareDistricts.map(
      district => district.location
    );
    const compared = districts.compareDistrictAverages(
      locations[0],
      locations[1]
    );
    this.setState({ comparedAverages: compared, twoCards: true });
  };

  componentDidUpdate = () => {
    if (this.state.compareDistricts.length === 2 && !this.state.twoCards) {
      this.compareCards();
    }
  };

  removeCard = location => {
    if (this.state.compareDistricts.length >= 1) {
      const removeLocations = this.state.compareDistricts.filter(
        district => district.location !== location
      );
      this.setState({ compareDistricts: removeLocations, twoCards: false });
    }
  };

  componentDidMount = () => {
    this.populateContainer();
  };

  populateContainer = () => {
    const districts = new DistrictRepository(kinderdata);
    const newDistricts = districts.findAllMatches();
    this.setState({
      filteredDistricts: newDistricts
    });
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
            removeCard={this.removeCard}
          />
        </div>
      </div>
    );
  }
}

export default App;
