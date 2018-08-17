import React from 'react';

const CompareCard = ({ comparedAverages }) => {
  return (
    <div>
      <h2>School Title</h2>
      <h2>{comparedAverages.compared}</h2>
      <h2>Second School Title</h2>
    </div>
  );
};

export default CompareCard;
