// A mock function to mimic making an async request for data
export function fetchWeather(city = 'London') {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f825344b0cf0672c689378549f9868db`)
  }
  