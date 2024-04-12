import React, { useState } from 'react';
import './WeatherApp.css';
import search_icon from '../Assets/search.png';
import clear_icon from '../Assets/clear.png';
import cloud_icon from '../Assets/cloud.png';
import drizzle_icon from '../Assets/drizzle.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';
import humidity_icon from '../Assets/humidity.png';

const WeatherApp = () => {
    let api_key = "a769fd0fb83bc0d273cff37b829536ba";
    const [weathericon, setWeathericon] = useState(cloud_icon);
    const search = async() => {
        const element = document.getElementsByClassName("cityInput");
        if(element[0].value === "") {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`;
        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate");
        const temprature = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");
        humidity[0].innerHTML = data.main.humidity + "%";
        wind[0].innerHTML = Math.floor(data.main.speed) + "km/hr";
        temprature[0].innerHTML = Math.floor(data.main.temp) + "°C";
        location[0].innerHTML = data.name;
        
        if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n"){
            setWeathericon(clear_icon);
        }
        else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n"){
            setWeathericon(cloud_icon);
        }
        else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n"){
            setWeathericon(drizzle_icon);
        }
        else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n"){
            setWeathericon(drizzle_icon);
        }
        else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n"){
            setWeathericon(rain_icon);
        }
        else if(data.weather[0].icon === "010d" || data.weather[0].icon === "010n"){
            setWeathericon(rain_icon);
        }
        else if(data.weather[0].icon === "013d" || data.weather[0].icon === "013n"){
            setWeathericon(snow_icon);
        }
        else{
            setWeathericon(clear_icon);
        }
    }

    return(
        <div className="container">
            <div className="top-bar">
                <input type="text" className="cityInput" placeholder="Enter a location..."/>
                <div className="search-icon" onClick={() => {search()}}>
                    <img src={search_icon} alt="search"/>
                </div>
            </div>
        <div className="weather-image">
            <img src={weathericon} alt="icon" />
        </div>
        <div className="weather-temp">33°C</div>
        <div className="weather-location">Virudhunagar</div>
        <div className="container2">
            <div className="element">
                <img src={humidity_icon} alt="humidity icon" className="icon"/>
                <div className="data">
                    <div className="humidity-percent">26%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>
            <div className="element">
                <img src={wind_icon} alt="wind icon" className="icon"/>
                <div className="data">
                    <div className="wind-rate">NaNkm/hr</div>
                    <div className="text">Wind speed</div>
                </div>
            </div>
        </div>
        </div> 
    );
}
export default WeatherApp
