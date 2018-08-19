import React from 'react';
import CompareCard from '../../CompareCard';
import { shallow } from 'enzyme';

describe('CompareCard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <CompareCard
        DistrictOne={'COLORADO'}
        DistrictOneData={0.53}
        comparison={0.748}
        DistrictTwo={'ADAMS COUNTY 14'}
        DistrictTwoData={0.709}
      />
    );
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
