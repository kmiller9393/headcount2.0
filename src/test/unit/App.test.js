import React from 'react';
import kinderdata from '../../data/kindergartners_in_full_day_program';
import DistrictRepository from '../../helper';
import ReactDOM from 'react-dom';
import App from '../../App';
import { shallow, mount } from 'enzyme';

describe('App', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have initial state that is composed of two empty arrays, an object and a twoCards property set to false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('filteredDistricts')).toHaveLength(181);
    expect(wrapper.state('compareDistricts')).toEqual([]);
    expect(wrapper.state('comparedAverages')).toEqual({});
    expect(wrapper.state('twoCards')).toEqual(false);
  });

  it('filterDistricts should filter out districts and update the state', () => {
    const wrapper = shallow(<App />);
    const expected = 'col';
    wrapper.instance().filterDistricts(expected);
    expect(wrapper.state('filteredDistricts')).toHaveLength(2);
  });

  it('chooseCard should add a card to the compareDistricts array', () => {
    const wrapper = shallow(<App />);
    const expected = {};
  });
});
