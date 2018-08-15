import React, { Component } from 'react';
import Search from './Search';
import DistrictRepository from './helper';
import CardContainer from './CardContainer';
import kinderdata from './data/kindergartners_in_full_day_program';
import './App.css';
const districts = new DistrictRepository(kinderdata);

class App extends Component {
  constructor() {
    super();
    this.state = {
      districts
    };
  }

  // handleInput = input => {
  //   this.setState({
  //     districts:
  //   });
  // };

  render() {
    return (
      <div>
        <Search
          districts={this.state.districts}
          handleInput={this.handleInput}
        />
        <div className="App">
          <CardContainer districts={this.state.districts} />
        </div>
      </div>
    );
  }
}

export default App;
