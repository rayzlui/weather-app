import { shallow } from 'enzyme';
import { SearchView } from './searchView';
import React from 'react';

describe('SearchView', () => {
  describe('no weather data', () => {
    const mockSearchWeather = jest.fn();
    const wrapper = shallow(<SearchView searchWeather={mockSearchWeather} />);

    it('should render with className = `searchbar--intro`', () => {
      const target = wrapper.find('.searchbar--intro');
      expect(target).toHaveLength(1);
      const notHere = wrapper.find('.searchbar');
      expect(notHere).toHaveLength(0);
    });

    it('should render header', () => {
      const header = wrapper.find('.search__header');
      expect(header.text()).toEqual('IS IT RAINING AT ');
    });

    it('should render inputView', () => {
      const component = wrapper.find('InputView')
      expect(component.props().searchWeather).toEqual(mockSearchWeather)
    })
  });

  describe('weather info', () => {
    const mockSearchWeather = jest.fn();
    const mockData = { temp: 'cold' };
    const wrapper = shallow(
      <SearchView searchWeather={mockSearchWeather} data={mockData} />,
    );

    it('should reander with className searchbar', () => {
      const target = wrapper.find('.searchbar');
      expect(target).toHaveLength(1);
      const notHere = wrapper.find('.searchbar--intro');
      expect(notHere).toHaveLength(0);
    });

    it('should render header', () => {
      const header = wrapper.find('.search__header');
      expect(header.text()).toEqual('IS IT RAINING AT ');
    });

    it('should render inputView', () => {
      const component = wrapper.find('InputView')
      expect(component.props().searchWeather).toEqual(mockSearchWeather)
    })
  });
});
