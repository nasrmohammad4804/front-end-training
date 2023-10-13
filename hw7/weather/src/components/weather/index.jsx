import { useEffect, useState } from "react";
import './main.css';

export default function Weather(){

    const [cities,setCities] =useState([]);
    const [selectedCityWeather,setSelectedCityWeather] = useState(null);


    const cityHandler = (event) => getWeatherStatus(event);

    function getWeatherStatus(event){
        
        let value = event.target.value;

        let url = `https://api.api-ninjas.com/v1/weather?city=${value}`;
        let option ={
            method:"GET",
            headers:{
                'X-Api-Key':'auNg+snfB8Ge7yZ+xubF7Q==eigkeopVz4pMQGIo'
            }
        };

        makeHttpRequest(url,option)
        .then(response => {

            event.target.style.border= '2px solid grey';
            setSelectedCityWeather(response);
        });
    }

    function getCities(){

        let url  = 'https://api.api-ninjas.com/v1/city?country=IR&limit=50';
        let option  = {
            method:"GET",
            headers:{
                'X-Api-Key':'auNg+snfB8Ge7yZ+xubF7Q==eigkeopVz4pMQGIo'
            }
        };

        makeHttpRequest(url,option)
        .then(response => {

            response.forEach(element => {
                element.id = crypto.randomUUID();
            });

            setCities(response);
        })
    }
    useEffect(() => getCities(),[]);

    return <>
            <div className="container">
                <h2 className="heading">Weather System by Choose City</h2>
            {cities.length>0 && 
                <select  name="cities" id="" onChange={cityHandler} className="city-container">
                    {cities.map(city => <option value={city.name} key={city.id}>{city.name}</option>)}
                </select>        
            }

            {selectedCityWeather ? 
                <div className="selected-city">
                    <div className="selected-city__item">current temp : <b>{selectedCityWeather.temp}</b></div>
                    <div className="selected-city__item">humidity rate : <b>{selectedCityWeather.humidity}</b></div>
                    <div className="selected-city__item">min temp : <b>{selectedCityWeather.min_temp}</b> </div>
                    <div className="selected-city__item">max temp : <b>{selectedCityWeather.max_temp}</b> </div>
                    <div className="selected-city__item">wind speed : <b>{selectedCityWeather.wind_speed}</b> </div>
                </div>
            : null}
            </div>
        
    </>
}


async function makeHttpRequest(url,option){


  const data  = await  fetch(url,option)
    .then(data => data.json());

    return data;
}