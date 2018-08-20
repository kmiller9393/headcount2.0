import React from 'react';
import CardContainer from '../../CardContainer';
import Card from '../../Card';
import { shallow } from 'enzyme';

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

  it('should render the districts and district data', () => {
    const card = [
      {
        location: 'COLORADO',
        stats: {
          2004: 0.24
        }
      },
      {
        location: 'ACADEMY 20',
        stats: {
          2004: 0.302
        }
      }
    ];
    wrapper = shallow(
      <CardContainer filteredDistricts={card} compareDistricts={card} />
    );

    const expected = wrapper.find(Card).length;
    expect(expected).toEqual(2);
  });
});
