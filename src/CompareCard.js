import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const CompareCard = ({
  DistrictOne,
  DistrictOneData,
  comparison,
  DistrictTwo,
  DistrictTwoData
}) => {
  return (
    <div className="Card Chosen Compared">
      <h2 className="top-district">
        {DistrictOne}: {DistrictOneData}
      </h2>
      <h2 className="comparison">compared: {comparison}</h2>
      <h2 className="bottom-district">
        {DistrictTwo}: {DistrictTwoData}
      </h2>
    </div>
  );
};

CompareCard.propTypes = {
  DistrictOne: PropTypes.string,
  DistrictOneData: PropTypes.number,
  comparison: PropTypes.number,
  DistrictTwo: PropTypes.string,
  DistrictTwoData: PropTypes.number
};

export default CompareCard;
