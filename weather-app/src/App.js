import './App.css';
import { useState,useEffect } from 'react';
import axios from "axios";
function App() {
  const [data,setData] = useState(null);
  const [city,setCity] = useState("Bhopal");

  useEffect(() => {
    const getData = setTimeout(() => {
      axios
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=0936ea43c0dbf03b04e04b498e9d918e`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error)=>{
        setData(0);
        console.log(error);
      })
      ;
    }, 2000)

    return () => clearTimeout(getData)
  }, [city])
  return (
    <div className="App" >
      
      <div className='search'>
      <input
       className='input ' 
       type='text' 
       placeholder = 'Search City'
       onChange={(e)=>{setCity(e.target.value)}}
       />
    
      </div>
      <div>
      <div className='card'>
            { !data ? (
              <div className='error'>No Data Found </div>
            ) : (
              <div>
                <div className='content'>
                <span className='city'>{data.name}</span>
                <div className='temp'>
                { data.main.temp}°C
                </div>
                <div className='sub-heading'>
                    Humidity : {data.main.humidity}
                </div>
                <div className='sub-heading'>
                    Wind Speed : {data.wind.speed}
                </div>
                <div className='sub-heading'>
                    Weather Conditions : {data.weather[0].description}
                </div>
            </div>
              </div>
            )

            }
        </div>
      </div>
      
    </div>
  );
}

export default App;
