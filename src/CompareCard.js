import React from 'react';

const CompareCard = ({ firstDistrict, comparison, secondDistrict }) => {
  return (
    <div className="Compare">
      <h2>{firstDistrict}</h2>
      <h2>{comparison}</h2>
      <h2>{secondDistrict}</h2>
    </div>
  );
};

export default CompareCard;
