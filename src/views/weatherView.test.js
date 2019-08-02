import { shallow } from 'enzyme';
import React from 'react';
import { WeatherView } from './weatherView';

describe('WeatherView', () => {
  describe('no props passed', () => {
    it('should render null', () => {
      const wrapper = shallow(<WeatherView />);
      expect(wrapper.isEmptyRender()).toBe(true);
    });
  });

  describe('props passed', () => {
    function mockData(typeWeather) {
      return {
        name: 'new orleans',
        weather: [{ description: typeWeather }],
        main: { temp: 75, temp_min: 66, temp_max: 81, humidity: 94 },
        wind: { speed: 10, deg: 14 },
        visibility: 55,
      };
    }

    describe('weather is rain', () => {
      const rain = mockData('rain');
      const wrapper = shallow(<WeatherView weatherData={rain} />);
      it('should have rain header', () => {
        const header = wrapper.find('.weather__header');
        expect(header.text()).toEqual('YES ITS FUCKING RAINING IN NEW ORLEANS');
      });

      it('should display temp', () => {
        const tempSection = wrapper.find('.weather__temp');
        const header = tempSection.find('h3');
        expect(header.text()).toEqual(`Current Temperature: ${rain.main.temp} F*`);
        const tempRange = tempSection.find('p');
        expect(tempRange.text()).toEqual(
          `Low: ${rain.main.temp_min} to High: ${rain.main.temp_max}`,
        );
      });

      it('should display wind', () => {
        const windSection = wrapper.find('.weather__wind');
        const header = windSection.find('h3');
        expect(header.text()).toEqual('Wind');
        const windSpeed = windSection.find('p');
        expect(windSpeed.text()).toEqual(
          `${rain.wind.speed}mph to ${rain.wind.deg}`,
        );
      });

      it('should display humidity', () => {
        const humiditySection = wrapper.find('.weather__humidity');
        const header = humiditySection.find('h3');
        expect(header.text()).toEqual('Humidity');
        const humidity = humiditySection.find('p');
        expect(humidity.text()).toEqual(rain.main.humidity.toString());
      });

      it('should display visibility', () => {
        const visSection = wrapper.find('.weather__visibility');
        const header = visSection.find('h3');
        expect(header.text()).toEqual('Visibility');
        const vis = visSection.find('p');
        expect(vis.text()).toEqual(rain.visibility.toString());
      });
    });

    describe('weather is not rain', () => {
      const windy = mockData('windy');
      const wrapper = shallow(<WeatherView weatherData={windy} />);

      it('should have rain header', () => {
        const header = wrapper.find('.weather__header');
        expect(header.text()).toEqual(`IT IS CURRENTLY WINDY IN NEW ORLEANS`);
      });

      it('should display temp', () => {
        const tempSection = wrapper.find('.weather__temp');
        const header = tempSection.find('h3');
        expect(header.text()).toEqual(
          `Current Temperature: ${windy.main.temp} F*`,
        );
        const tempRange = tempSection.find('p');
        expect(tempRange.text()).toEqual(
          `Low: ${windy.main.temp_min} to High: ${windy.main.temp_max}`,
        );
      });

      it('should display wind', () => {
        const windSection = wrapper.find('.weather__wind');
        const header = windSection.find('h3');
        expect(header.text()).toEqual('Wind');
        const windSpeed = windSection.find('p');
        expect(windSpeed.text()).toEqual(
          `${windy.wind.speed}mph to ${windy.wind.deg}`,
        );
      });

      it('should display humidity', () => {
        const humiditySection = wrapper.find('.weather__humidity');
        const header = humiditySection.find('h3');
        expect(header.text()).toEqual('Humidity');
        const humidity = humiditySection.find('p');
        expect(humidity.text()).toEqual(windy.main.humidity.toString());
      });

      it('should display visibility', () => {
        const visSection = wrapper.find('.weather__visibility');
        const header = visSection.find('h3');
        expect(header.text()).toEqual('Visibility');
        const vis = visSection.find('p');
        expect(vis.text()).toEqual(windy.visibility.toString());
      });
    });
  });
});
