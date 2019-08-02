import { shallow } from 'enzyme';
import { SearchView } from './searchView';
import React from 'react';

describe('SearchView', () => {
  const mockSearchWeather = jest.fn();

  describe('no weather data', () => {
    const mockData = { data: null, error: null, isFetching: false };
    const wrapper = shallow(
      <SearchView searchWeather={mockSearchWeather} weatherData={mockData} />,
    );

    it('should render with className = `searchbar--intro`', () => {
      const target = wrapper.find('.searchbar--intro');
      expect(target).toHaveLength(1);
      const notHere = wrapper.find('.searchbar');
      expect(notHere).toHaveLength(0);
    });

    it('should render header', () => {
      const header = wrapper.find('.search__header');
      expect(header.text()).toEqual('IS IT FUCKING RAINING');
    });

    it('should render inputView', () => {
      const component = wrapper.find('InputView');
      expect(component.props().searchWeather).toEqual(mockSearchWeather);
    });

    it('should not have error', () => {
      const error = wrapper.find('.error-message');
      expect(error).toHaveLength(0);
    });

    it('should have fun message', ()=>{
      const fun = wrapper.find('.fun-message')
      expect(fun.text()).toEqual('hey where u from')
    })
  });

  describe('weather info', () => {
    const mockSearchWeather = jest.fn();
    const mockData = { data: 'cold', error: null, isFetching: false };
    const wrapper = shallow(
      <SearchView searchWeather={mockSearchWeather} weatherData={mockData} />,
    );

    it('should reander with className searchbar', () => {
      const target = wrapper.find('.searchbar');
      expect(target).toHaveLength(1);
      const notHere = wrapper.find('.searchbar--intro');
      expect(notHere).toHaveLength(0);
    });

    it('should render header', () => {
      const header = wrapper.find('.search__header');
      expect(header.text()).toEqual('IS IT FUCKING RAINING AT');
    });

    it('should render inputView', () => {
      const component = wrapper.find('InputView');
      expect(component.props().searchWeather).toEqual(mockSearchWeather);
    });

    it('should not have error', () => {
      const error = wrapper.find('.error-message');
      expect(error).toHaveLength(0);
    });

    
  });

  describe('isFetching is true', () => {
    describe('should render correctly', () => {
      //this is only possibility for props based on how we setup our actions.
      const mockData = { data: null, error: null, isFetching: true };
      const wrapper = shallow(
        <SearchView searchWeather={mockSearchWeather} weatherData={mockData} />,
      );
      it('should have fetch message', () => {
        const fetching = wrapper.find('.fetching-message');
        expect(fetching).toHaveLength(1);
      });
      it('should have correct className for div', () => {
        const searchbar1 = wrapper.find('.searchbar');
        expect(searchbar1).toHaveLength(0);
        const searchbar2 = wrapper.find('.searchbar--intro');
        expect(searchbar2).toHaveLength(1);
      });
      it('should not have anything else', () => {
        const header = wrapper.find('.search__header');
        expect(header).toHaveLength(0);
        const component = wrapper.find('InputView');
        expect(component).toHaveLength(0);
        const error = wrapper.find('.error-message');
        expect(error).toHaveLength(0);
      });
    });

    describe('errorMessage', () => {
      //this is only possibility of props based on how we set up actions.
      const mockData = { data: null, error: 'error', isFetching: false };
      const wrapper = shallow(
        <SearchView searchWeather={mockSearchWeather} weatherData={mockData} />,
      );
      it('should render correctly', () => {
        const errorMessage = wrapper.find('.error-message');
        expect(errorMessage).toHaveLength(1);
        expect(errorMessage.text()).toEqual(
          'Dear Kind Person. We are unable to find the city, please try again. Or please use a zip code if you have tried multiple times.',
        );
        
      });
      it('should not have fun message', ()=>{
        const fun = wrapper.find('.fun-message')
        expect(fun).toHaveLength(0)
      })
    });
  });
});
