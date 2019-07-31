import { fetchGiphy, fetchWeather } from './actions'

describe('fetchWeather', () => {
  let weather = fetchWeather('san francisco')
  console.log(weather)
  expect(fetchWeather('san francisco')).toEqual('que')
})

describe('fetchGiphy', () => {
  expect(fetchGiphy('rain').debug()).toEqual('wow')
})