import React from 'react';
import Card from './Card';
import CompareCard from './CompareCard';
import PropTypes from 'prop-types';
import './App.css';
import './Card.css';

const CardContainer = ({
  districts,
  filteredDistricts,
  chooseCard,
  compareDistricts,
  compareCards,
  comparedAverages
}) => {
  const newCard = filteredDistricts.map((district, index) => {
    return (
      <Card
        location={district}
        stats={districts.stats[district].stats}
        key={index}
        chooseCard={chooseCard}
        compareCards={compareCards}
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
        compareDistricts
        compareCards={compareCards}
      />
    );
  });

  const data = Object.values(comparedAverages);
  const comparedData = (
    <CompareCard
      firstDistrict={data[0]}
      comparison={data[2]}
      secondDistrict={data[1]}
    />
  );

  const displayDistrictData = Object.keys(districts.stats).map(
    (district, index) => {
      return (
        <Card
          location={district}
          stats={districts.stats[district].stats}
          key={index}
          chooseCard={chooseCard}
          compareCards={compareCards}
        />
      );
    }
  );

  if (filteredDistricts.length) {
    return <div className="App">{newCard}</div>;
  }
  return (
    <React.Fragment>
      <div className="Selected">
        {selectedDistricts}
        {compareDistricts.length > 1 && comparedData}
      </div>
      <div className="App">{displayDistrictData}</div>
    </React.Fragment>
  );
};

CardContainer.propTypes = {
  districts: PropTypes.object
};

export default CardContainer;
