import "./WeatherApp.css";
import searchIcon from "../Assets/search.png";
import cloud from "../Assets/cloud.png";
import drizzle from "../Assets/drizzle.png";
import humidity from "../Assets/humidity.png";
import rain from "../Assets/rain.png";
import snow from "../Assets/search.png";
import wind from "../Assets/wind.png";
import clear from "../Assets/clear.png";

const WeatherApp = () => {
  return (
    <div>
      <div className="container">
        <div className="top-bar">
          <input type="text" className="city-input" placeholder="search" />
          <div className="search-icon">
            <img src={searchIcon} alt="" />
          </div>
        </div>
        <div className="weather-img">
          <img src={cloud} alt="" />
        </div>
        <div className="weather-temp">20°c</div>
        <div className="weather-location">London</div>
        <div className="data-container">
          <div className="element">
            <img src={humidity} alt="" />
            <div className="data">
              <div className="humidity-parcent">64%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={wind} alt="" />
            <div className="data">
              <div className="humidity-parcent">18 k/h</div>
              <div className="text">wind</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
