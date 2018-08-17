import React from 'react';
import PropTypes from 'prop-types';

const CompareCard = ({
  DistrictOne,
  DistrictOneData,
  comparison,
  DistrictTwo,
  DistrictTwoData
}) => {
  return (
    <div className="Card">
      <h2>
        {DistrictOne}: {DistrictOneData}
      </h2>
      <h2>{comparison}</h2>
      <h2>
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
