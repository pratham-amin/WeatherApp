import { useEffect, useState } from 'react';
import './App.css'
import Highlights from './components/Highlights';
import Temp from './components/Temp';

function App() {
  const [city, setcity] = useState("Mangalore");
  const [weatherData, setWeatherData] = useState(null);
const apiurl = `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_KEY}&q=${city}&aqi=no`;

 
  useEffect(() => {
    fetch(apiurl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("error");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [city]);

  if (!weatherData) {
    return (
      <div className="bg-slate-700 h-screen flex justify-center items-center">
        <p className="text-slate-200 text-2xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-700 h-screen flex justify-center align-top">
      <div className='mt-40 w-1/5 h-1/3'>
        {weatherData && <Temp
          city={city}
          setcity={setcity}
          stats={{
            temp: weatherData.current.temp_c,
            condition: weatherData.current.condition.text,
            isday: weatherData.current.is_day,
            location: weatherData.location.name,
            time: weatherData.location.localtime
          }}
        />}
      </div>
      <div className='mt-40 w-1/3 h-1/3 grid grid-cols-2 gap-6'>
        <h2 className='text-slate-200 text-2xl col-span-2'>Today's Highlights</h2>
        {weatherData && (
            <>
              <Highlights 
              stats={{
               title:"Wind Status",
               value:weatherData.current.wind_mph,
               unit:"mph",
               direction:weatherData.current.wind_dir

              }}/>
              <Highlights 
              stats={{
                title:"Humidity",
                value:weatherData.current.humidity,
                unit:"%",
 
               }}/>
              <Highlights 
              stats={{
                title:"Visibility",
                value:weatherData.current.vis_miles,
                unit:"miles"
 
               }}/>
              <Highlights 
              stats={{
                title:"Air pressure",
                value:weatherData.current.pressure_mb,
                unit:"mb",
               
               }}/>
            </>
          )}

      </div>
    </div>
  );
}

export default App;
