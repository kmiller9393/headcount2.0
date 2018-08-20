import React from 'react';
import Search from '../../Search';
import { shallow, mount } from 'enzyme';

describe('Search', () => {
  let wrapper;
  let handleMock;

  beforeEach(() => {
    handleMock = jest.fn();
    wrapper = shallow(<Search filterDistricts={handleMock} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('calls handleChange prop function with the data from the search input', () => {
    wrapper = mount(<Search filterDistricts={handleMock} />);
    wrapper.find('input').simulate('change');
    expect(handleMock).toBeCalled();
  });
});
