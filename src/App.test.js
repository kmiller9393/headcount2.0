import React from 'react';
import kinderdata from './data/kindergartners_in_full_day_program';
import DistrictRepository from './helper';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should have initial state that is composed of two empty arrays, an object and a twoCards property set to false', () => {
    wrapper = mount(<App />);
    const expected = {
      filteredDistricts: [],
      compareDistricts: [],
      comparedAverages: {},
      twoCards: false
    };
    expect(wrapper.state()).toEqual(expected);
  });

  it('filterDistricts should filter out districts and update the state', () => {
    const expected = 'col';
    wrapper.instance().filterDistricts(expected);
    expect(wrapper.state('filteredDistricts')).toHaveLength(2);
  });

  // it('compareCards should add a card to the compareDistricts array', () => {});
});
