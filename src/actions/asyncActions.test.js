import { fetchWeather, fetchGiphy } from './actions';
import * as actions from './actionsTypes';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import { weatherKey, giphyKey } from '../APIKEYS';

const middlewear = [thunk];
const mockStore = configureMockStore(middlewear);

describe('fetchWeather', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe('fetch data success', () => {
    it('should dispatch actions', () => {
      const search = 'oakland';
      const mockWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search}&APIKEY=${weatherKey}&units=imperial`;
      const mockGiphyUrl = `http://api.giphy.com/v1/gifs/search?q=rain&api_key=${giphyKey}&limit=25`;
      const data = {
        city: 'Oakland',
        weather: [{ main: 'rain', min: 88, max: 90, wind: '24mph' }],
      };

      fetchMock.getOnce(mockWeatherUrl, data);
      const expectedResult = [
        { type: actions.FETCH_WEATHER_START, url: mockWeatherUrl },
        { type: actions.FETCH_WEATHER_SUCCESS, data: data },
        { type: actions.FETCH_GIPHY_START, url: mockGiphyUrl },
      ];

      const store = mockStore();
      return store.dispatch(fetchWeather(search)).then(() => {
        expect(store.getActions()).toEqual(expectedResult);
      });
    });
  });

  describe('fetch data error', () => {
    it('should handle error', () => {
      let search = 'JAPAN';
      const mockBrokenUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search}&APIKEY=${weatherKey}&units=imperial`;
      const mockError = {
        status: 404,
        statusText: 'Not Found',
        url: mockBrokenUrl,
      };
      fetchMock.getOnce(mockBrokenUrl, 404);
      const expectedResult = [
        { type: actions.FETCH_WEATHER_START, url: mockBrokenUrl },
        { type: actions.FETCH_WEATHER_ERROR, error: mockError },
      ];

      const store = mockStore();
      return store.dispatch(fetchWeather(search)).then(() => {
        expect(store.getActions()).toEqual(expectedResult);
      });
    });
  });

  describe('fetchGiphy', () => {
    describe('fetch success', () => {
      it('should dispatch actions', () => {
        const search = 'rain';
        const mockGiphyUrl = `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${giphyKey}&limit=25`;
        const mockData = {
          image: { url: 'some_url' },
          data: { metadata: 'some_metadata' },
        };
        fetchMock.getOnce(mockGiphyUrl, mockData);
        const expectedResults = [
          { type: actions.FETCH_GIPHY_START, url: mockGiphyUrl },
          { type: actions.FETCH_GIPHY_SUCCESS, data: mockData },
        ];
        const store = mockStore();
        return store.dispatch(fetchGiphy(search)).then(() => {
          expect(store.getActions()).toEqual(expectedResults);
        });
      });
    });
    describe('fetch error', () => {
      it('should handle error', () => {
        const search = 'nothing';
        const mockGiphyUrl = `http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${giphyKey}&limit=25`;
        const mockError = {
          status: 404,
          statusText: 'Not Found',
          url: mockGiphyUrl,
        };
        fetchMock.getOnce(mockGiphyUrl, 404);
        const expectedResult = [
          { type: actions.FETCH_GIPHY_START, url: mockGiphyUrl },
          { type: actions.FETCH_GIPHY_ERROR, error: mockError },
        ];

        const store = mockStore();
        return store.dispatch(fetchGiphy(search)).then(() => {
          expect(store.getActions()).toEqual(expectedResult);
        });
      });
    });
  });
});
