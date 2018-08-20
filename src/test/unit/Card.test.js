import React from 'react'
import Card from '../../Card'
import { shallow, mount } from 'enzyme'

describe('Card', () => {
  let wrapper
  let compareCardsMock
  let key
  let chooseCardMock
  let removeCardMock
  let compareDistricts = []

  beforeEach(() => {
    key = 1
    chooseCardMock = jest.fn()
    compareCardsMock = jest.fn()
    removeCardMock = jest.fn()
    wrapper = shallow(
      <Card
        location="COLORADO"
        stats={{ 2004: 0.24 }}
        key={key}
        selected
        compareDistricts={compareDistricts}
        chooseCard={chooseCardMock}
        compareCards={compareCardsMock}
        removeCard={removeCardMock}
      />
    )
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('the handleClick changes the state of the card when clicked', () => {
    wrapper = shallow(
      <Card
        location="COLORADO"
        stats={{ 2004: 0.24 }}
        key={key}
        compareDistricts={compareDistricts}
        chooseCard={chooseCardMock}
        compareCards={compareCardsMock}
        removeCard={removeCardMock}
      />
    )
    expect(wrapper.state('selected')).toEqual(false)
    wrapper.instance().handleClick()
    expect(wrapper.state('selected')).toEqual(true)
  })

  it('calls removeCard when it has a selected property and does not call chooseCard', () => {
    wrapper.instance().handleClick()
    expect(removeCardMock).toHaveBeenCalled()
    expect(chooseCardMock).not.toHaveBeenCalled()
  })

  it('should have a falsy property of selected and then chooseCard should be called', () => {
    wrapper = shallow(
      <Card
        location="COLORADO"
        stats={{ 2004: 0.24 }}
        key={key}
        compareDistricts={compareDistricts}
        chooseCard={chooseCardMock}
        compareCards={compareCardsMock}
        removeCard={removeCardMock}
      />
    )
    wrapper.instance().handleClick()
    expect(chooseCardMock).toHaveBeenCalled()
  })

  it('should have a class of Chosen when it has a compareDistricts property or a selected property', () => {
    expect(wrapper.find('div').hasClass('Chosen')).toEqual(true)
  })

  it('should not have a class of Chosen when it does not have a compareDistricts property or a selected property', () => {
    wrapper = shallow(
      <Card
        location="COLORADO"
        stats={{ 2004: 0.24 }}
        key={key}
        chooseCard={chooseCardMock}
        compareCards={compareCardsMock}
        removeCard={removeCardMock}
      />
    )
    expect(wrapper.find('div').hasClass('Chosen')).toEqual(false)
  })

  it('should have the low-data class when its stat is below 0.5', () => {
    wrapper = shallow(
      <Card
        location="COLORADO"
        stats={{ 2004: 0.24 }}
        key={key}
        chooseCard={chooseCardMock}
        compareCards={compareCardsMock}
        removeCard={removeCardMock}
      />
    )
    expect(wrapper.find('ul').hasClass('low-data')).toEqual(true)
  })

  it('should have the high-data class when its stat is above 0.5', () => {
    wrapper = shallow(
      <Card
        location="COLORADO"
        stats={{ 2004: 0.6 }}
        key={key}
        chooseCard={chooseCardMock}
        compareCards={compareCardsMock}
        removeCard={removeCardMock}
      />
    )
    expect(wrapper.find('ul').hasClass('high-data')).toEqual(true)
  })
})
