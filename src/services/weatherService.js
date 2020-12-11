import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5/weather`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 2000
})

export default {
  getWeather(city) {
      console.log('api')
    return apiClient.get('?q=' + city + '&APPID=2491c65e7d1c95a770a496394e898184' + '&units=imperial')
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
  postEvent(event) {
    return apiClient.post('/events', event)
  }
}