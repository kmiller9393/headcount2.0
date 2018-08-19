import React from 'react';
import CardContainer from '../../CardContainer';
import { shallow, mount } from 'enzyme';

describe('CardContainer', () => {
  let wrapper;
  let removeCardMock;
  let chooseCardMock;
  let compareCardsMock;
  let filteredDistricts = [];
  let compareDistricts = [];
  let comparedAverages = {};
  beforeEach(() => {
    removeCardMock = jest.fn();
    chooseCardMock = jest.fn();
    compareCardsMock = jest.fn();
    wrapper = shallow(
      <CardContainer
        removeCard={removeCardMock}
        chooseCard={chooseCardMock}
        compareCards={compareCardsMock}
        filteredDistricts={filteredDistricts}
        compareDistricts={compareDistricts}
        comparedAverages={comparedAverages}
      />
    );
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
