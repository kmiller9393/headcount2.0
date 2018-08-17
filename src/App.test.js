import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';

describe('App', () => {
  let addIdeaMock;
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App addIdea={addIdeaMock} />);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a Search component with the correct props', () => {
    wrapper = mount(<App />);
    const expected = {
      filterDistricts: wrapper.instance().filterDistricts
    };
    expect(wrapper.find('Search').props()).toEqual(expected);
  });

  it('should have initial state that with one object with data, one empty object and two empty arrays', () => {
    const expected = {
      districts: {},
      filteredDistricts: [],
      compareDistricts: [],
      comparedAverages: {}
    };
    const wrapper = mount(<App />);
    expect(wrapper.state()).toEqual(expected);
  });
});
