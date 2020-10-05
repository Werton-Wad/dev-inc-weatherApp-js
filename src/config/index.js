
function getWeatherAPI(lang, city) {
    const weatherAPI = 'https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=6134cfe3746c6029f959e5a65fab8885&cnt=40';
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=${lang}&appid=6134cfe3746c6029f959e5a65fab8885&cnt=40`;
}


export default getWeatherAPI;