import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';
import './Weather.css';

function Weather() {
  return (
    <div className="Container">
      <form className="WeatherSearch">
            <input type="search" placeholder="Enter city..." />
            <input type="submit" placeholder="Search"className="btn btn-primary" />
          
            <button className="btn btn-success">Current</button>
      </form>
      <div className="Weather-Details">
        <div className="form-row">
          <div className="col-6">
            <h1 className="City">Edmonton</h1>
            <ul className="Weather-Description">
              <li>
                Monday <span className="Date-Time">17:00</span>
              </li>
              <li className="Description">clear sky</li>
              <li>
                <ReactAnimatedWeather
                icon='CLEAR_DAY'
                color='#154757'
                size={45}
                  animated={true}
                  className="Icon"
                />
                <span className="Temperature">20</span>{" "}
                <span className="Units">°C | ° F</span>
              </li>
            </ul>
          </div>
          <div className="col-6">
            <ul className="Overview">
              <li>Humidity: 30 %</li>
              <li>Wind: 8.0 km/h</li>
            </ul>
          </div>
        </div>
        <div className="col-6">
          <ul className="Forecast">
            <li className="Forecast-Daily">Mon</li>
            <li className="Forecast-Daily">Tue</li>
            <li className="Forecast-Daily">Wed</li>
            <li className="Forecast-Daily">Thu</li>
            <li className="Forecast-Daily">Fri</li>
            <li className="Forecast-Daily">Sat</li>
          </ul>
        </div>
        <br />
        <div className="col-6">
          <ul className="Forecast">
            <li className="Forecast-Daily-Icon">
              
            <ReactAnimatedWeather
                icon='PARTLY_CLOUDY_DAY'
                color='#154757'
                size={40}
                  animated={true}
                  
                />
            </li>
            <li className="Forecast-Daily-Icon">
              
            <ReactAnimatedWeather
                icon='PARTLY_CLOUDY_DAY'
                color='#154757'
                size={40}
                  animated={true}
                  
                />
            </li>
            <li className="Forecast-Daily-Icon">
              
            <ReactAnimatedWeather
                icon='CLEAR_DAY'
                color='#154757'
                size={40}
                  animated={true}
                  
                />
            </li>
            <li className="Forecast-Daily-Icon">
             
            <ReactAnimatedWeather
                icon='CLOUDY'
                color='#154757'
                size={40}
                  animated={true}
                  
                />
            </li>
            <li className="Forecast-Daily-Icon">
            
            <ReactAnimatedWeather
                icon='RAIN'
                color='#154757'
                size={40}
                  animated={true}
                  
                />
                            </li>
            <li className="Forecast-Daily-Icon">
              
            <ReactAnimatedWeather
                icon='WIND'
                color='#154757'
                size={40}
                  animated={true}
                  
                /></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Weather;