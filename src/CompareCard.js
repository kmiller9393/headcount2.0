import React from 'react';

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
        {DistrictOne} : {DistrictOneData}
      </h2>
      <h2>{comparison}</h2>
      <h2>
        {DistrictTwo}: {DistrictTwoData}
      </h2>
    </div>
  );
};

export default CompareCard;
