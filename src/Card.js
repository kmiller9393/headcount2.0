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
    this.setState({
      selected: !selectStatus
    });
    this.props.chooseCard(this.props.location);
  };

  render() {
    return (
      <div
        // className={this.state.selected ? 'Chosen' : 'Card'}
        className="Card"
        onClick={this.handleClick}
      >
        <h2>{this.props.location}</h2>
        {Object.keys(this.props.stats).map(stat => {
          return (
            <article>
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
  location: PropTypes.string
};
