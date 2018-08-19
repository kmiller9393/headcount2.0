import React from 'react';
import Card from './Card';
import CompareCard from './CompareCard';
import PropTypes from 'prop-types';
import './App.css';
import './Card.css';

const CardContainer = ({
  filteredDistricts,
  chooseCard,
  compareDistricts,
  compareCards,
  comparedAverages,
  removeCard
}) => {
  const newCard = filteredDistricts.map((district, index) => {
    return (
      <Card
        location={district.location}
        stats={district.stats}
        key={index}
        chooseCard={chooseCard}
        compareCards={compareCards}
        removeCard={removeCard}
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
        compareCards={compareCards}
        compareDistricts={compareDistricts}
        selected
        removeCard={removeCard}
      />
    );
  });

  return (
    <React.Fragment>
      <div className="Selected">
        {selectedDistricts[0]}
        {compareDistricts.length > 1 && (
          <CompareCard
            DistrictOne={Object.keys(comparedAverages)[0]}
            DistrictOneData={Object.values(comparedAverages)[0]}
            comparison={Object.values(comparedAverages)[2]}
            DistrictTwo={Object.keys(comparedAverages)[1]}
            DistrictTwoData={Object.values(comparedAverages)[1]}
          />
        )}
        {selectedDistricts[1]}
      </div>
      <div className="App">{newCard}</div>
    </React.Fragment>
  );
};

CardContainer.propTypes = {
  filteredDistricts: PropTypes.array,
  chooseCard: PropTypes.func,
  compareDistricts: PropTypes.array,
  compareCards: PropTypes.func,
  comparedAverages: PropTypes.object,
  removeCard: PropTypes.func
};

export default CardContainer;
