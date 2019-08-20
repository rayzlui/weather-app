import { mount } from 'enzyme';
import { InputView } from './inputView';
import React from 'react';

describe('InputView', () => {
  const mockSearchWeather = jest.fn();
  const wrapper = mount(<InputView searchWeather={mockSearchWeather} />);
  it('should handle action', () => {
    const ENTER_KEY = 13;
    const input = wrapper.find('input');
    input.instance().value = 'San Francisco';
    expect(mockSearchWeather).not.toHaveBeenCalled();
    input.simulate('keyDown', { keyCode: ENTER_KEY });
    expect(mockSearchWeather).toHaveBeenCalledWith('San Francisco');
  });
});
