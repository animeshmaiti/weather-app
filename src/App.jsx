import "./App.css";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import { useState,useEffect} from "react";
const weatherApiKey = `${process.env.REACT_APP_WEATHER_API_KEY}`;
// console.log(weatherApiKey);
// console.log(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}`);
function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  useEffect(() => {
    // Fetch default weather data when the component mounts
    const lat="22.5726723",lon="88.3638815",defaultCity="Kolkata, India"; // Set your desired default city
    const defaultWeatherFetch = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`);
    
    defaultWeatherFetch
      .then((response) => response.json())
      .then((weatherResponse) => {
        setCurrentWeather({city:defaultCity,...weatherResponse });
      })
      .catch((err) => console.log(err));
  }, []);
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);

    const [lat, lon] = searchData.value.split(" ");
    const currentWeatherFetch = fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`
    );

    const foreCastFetch = fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`
    );

    Promise.all([currentWeatherFetch, foreCastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };
  console.log(currentWeather);
  console.log(forecast);
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </div>
  );
}

export default App;
