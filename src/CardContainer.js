import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import './App.css'

const CardContainer = ({ districts, filteredDistricts, chooseCard, compareDistricts }) => {
  const newCard = filteredDistricts.map((district, index) => {
    return (
      <Card
        location={district}
        stats={districts.stats[district].stats}
        key={index}
        chooseCard={chooseCard}
      />
    );
  });

  const selectedDistricts = compareDistricts.map((district, index) => {
    return (
      <Card
        location={district.location}
        stats={district.stats}
        key={index}
        chooseCard={chooseCard}
      />
    )
  })

  const displayDistrictData = Object.keys(districts.stats).map(
    (district, index) => {
      return (
        <Card
          location={district}
          stats={districts.stats[district].stats}
          key={index}
          chooseCard={chooseCard}
        />
      );
    }
  );

  if (filteredDistricts.length) {
    return <div className="App">{newCard}</div>;
  }
  return (
    <div className="App">
      <div className="Chosen">
        {selectedDistricts}
      </div>
      {displayDistrictData}
    </div>
  );
};

CardContainer.propTypes = {
  districts: PropTypes.object
};

export default CardContainer;
