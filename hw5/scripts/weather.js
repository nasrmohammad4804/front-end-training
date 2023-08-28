let tabrizWeatherStationId=40706;
let startDate= '2020-01-01';
let endDate= '2020-01-01';

const option ={
    method: 'GET',
            headers: {
                'X-RapidAPI-Key': '13e3967a9dmsh95e39a817d907a3p18a902jsn1156a8d4ae3e',
                'X-RapidAPI-Host':'meteostat.p.rapidapi.com'
            }
            
}
fetch(`https://meteostat.p.rapidapi.com/stations/daily?station=${tabrizWeatherStationId}&start=${startDate}&end=${endDate}`,option)
.then(data => {
    return data.json()
})
.then(res => {
    console.log(res.data)
    console.log(res.meta);
})
.catch(err => {
    console.log(err);
})