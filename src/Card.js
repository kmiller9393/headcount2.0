import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import './Card.css';

export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      selected: false
    };
  }

  handleClick = () => {
    const selectStatus = this.state.selected;
    this.props.removeCard(this.props.location);
    this.setState({
      selected: !selectStatus
    });
    if (this.props.selected) {
      return;
    }
    this.props.chooseCard(this.props);
  };

  render() {
    return (
      <div
        className={
          this.props.compareDistricts || this.state.selected
            ? 'Chosen Card'
            : 'Card'
        }
        onClick={this.handleClick}
      >
        <h2>{this.props.location}</h2>
        {Object.keys(this.props.stats).map((stat, index) => {
          return (
            <article key={index}>
              <ul
                className={
                  this.props.stats[stat] < 0.5 ? 'low-data' : 'high-data'
                }
              >
                {stat}: {this.props.stats[stat]}
              </ul>
            </article>
          );
        })}
      </div>
    );
  }
}

Card.propTypes = {
  stats: PropTypes.object,
  location: PropTypes.string,
  chooseCard: PropTypes.func,
  compareCards: PropTypes.func,
  compareDistricts: PropTypes.array,
  removeCard: PropTypes.func,
  selected: PropTypes.bool
};
