import React from 'react';

import { Info, Form, Weather } from './components';

const API_KEY = '2769cbb0fb6aa2eb5d78eb5490ada007'; // grab yours from OpenWeatherMap

class App extends React.Component {
    
  state = {
    temp: null,
    city: null,
    country: null,
    pressure: null,
    sunset: null,
    error: null,
  };

  setWeatherData = data => {
    this.setState({
      temp: data.main.temp,
      city: data.name,
      country: data.sys.country,
      pressure: data.main.pressure,
      sunset: sunset_date,
      error: null,
    });
  }
  
  clearWeatherData = () => {
   this.setState({
      temp: null,
      city: null,
      country: null,
      pressure: null,
      sunset: null,
      error: "Please enter city's name",
    }); 
  }

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      const api_url = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`,
      );
      const data = await api_url.json();

      var sunset = data.sys.sunset;
      var date = new Date();
      date.setTime(sunset);
      var sunset_date = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
      
      const weatherData = {
        ...data,
        sunset_date
      };

      this.setWeatherData(weatherData);
    } else {
      this.clearWeatherData();
    }
  };

  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
        
              <div className="col-sm-5 info">
                <Info />
              </div>
        
              <div className="col-sm-7 form">
                <Form weatherMethod={this.getWeather} />
                <Weather
                  temp={this.state.temp}
                  city={this.state.city}
                  country={this.state.country}
                  pressure={this.state.pressure}
                  sunset={this.state.sunset}
                  error={this.state.error}
                />
              </div>
        
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
