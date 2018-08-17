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
  const dataKeys = Object.keys(comparedAverages);
  const comparedData = (
    <CompareCard
      DistrictOne={dataKeys[0]}
      DistrictOneData={data[0]}
      comparison={data[2]}
      DistrictTwo={dataKeys[1]}
      DistrictTwoData={data[1]}
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
        {selectedDistricts[0]}
        {compareDistricts.length > 1 && comparedData}
        {selectedDistricts[1]}
        {/* {compareDistricts.length > 1 && (
          <CompareCard comparedAverages={comparedAverages} />
        )} */}
      </div>
      <div className="App">{displayDistrictData}</div>
    </React.Fragment>
  );
};

CardContainer.propTypes = {
  districts: PropTypes.object,
  filteredDistricts: PropTypes.array,
  chooseCard: PropTypes.func,
  compareDistricts: PropTypes.array,
  compareCards: PropTypes.func,
  comparedAverages: PropTypes.object
};

export default CardContainer;
