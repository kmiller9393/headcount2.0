import React from 'react';
import App from '../../App';
import { shallow } from 'enzyme';

describe('App', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have initial state', () => {
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
    const expected = {
      location: 'ADAMS COUNTY 14',
      stats: {
        2004: 0.228,
        2005: 0.3,
        2006: 0.293,
        2007: 0.306,
        2008: 0.673
      }
    };
    wrapper.instance().chooseCard(expected);
    expect(wrapper.state('compareDistricts')).toHaveLength(1);
  });

  it('compareCards should add three properties to the comparedAverages object and add two objects to the comparedDistricts array', () => {
    const wrapper = shallow(<App />);
    const stateValue = [
      {
        location: 'COLORADO',
        stats: { '2004': 0.24 }
      },
      {
        location: 'COLORADO SPRINGS 11',
        stats: { '2004': 0.069 }
      }
    ];
    const expected = {
      COLORADO: 0.53,
      'COLORADO SPRINGS 11': 0.833,
      compared: 0.636
    };
    wrapper.setState({ compareDistricts: stateValue });
    wrapper.instance().compareCards();
    expect(wrapper.state('comparedAverages')).toEqual(expected);
  });

  it('removeCard should remove a card from the comparedDistricts array', () => {
    const wrapper = shallow(<App />);
    const district = 'COLORADO';
    const expected = [
      {
        location: 'COLORADO',
        stats: { '2004': 0.24 }
      },
      {
        location: 'COLORADO SPRINGS 11',
        stats: { '2004': 0.069 }
      }
    ];
    wrapper.setState({ compareDistricts: expected });
    expect(wrapper.state('compareDistricts')).toHaveLength(2);
    wrapper.instance().removeCard(district);
    expect(wrapper.state('compareDistricts')).toHaveLength(1);
  });

  it('populateContainer should populate the filteredDistricts and its length should be 181', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().populateContainer();
    expect(wrapper.state('filteredDistricts')).toHaveLength(181);
  });
});
