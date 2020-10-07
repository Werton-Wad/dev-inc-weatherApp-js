import getWeatherAPI from './config';
import { weatherModel } from './model';
import lang from './lang';

const $errorMessage = document.querySelector('.error-message');
async function getWeather(language, city) {
    $errorMessage.textContent = '';
    try {
        const response = await fetch(getWeatherAPI(language, city));
        const result = await response.json();
        weatherModel.addWeatherList(result);
    } catch (error) {
        $errorMessage.textContent = lang[language].errorMessage;
    }
}

function getWeatherList() {
    return weatherModel.getWeatherList();
}

function showIsLoading() {
    return weatherModel.showIsLoading();
}
function setLanguage(lang) {
    weatherModel.setLanguage(lang);
}
function getLanguage() {
    return weatherModel.getLanguage();
}
function setSearchValue(value) {
    weatherModel.setSearchValue(value);
}
function getSearchValue() {
    return weatherModel.getSearchValue();
}
function getWeatherByDayOfWeek(day) {
    const weatherList = weatherModel.getWeatherList().weatherList;
    const weatherForDayList = weatherList.filter(el => new Date(el.dt_txt).getDay() === day);
    return weatherForDayList;
}


export const actions = {
    getWeather: getWeather,
    getWeatherList: getWeatherList,
    showIsLoading: showIsLoading,
    setLanguage: setLanguage,
    setSearchValue: setSearchValue,
    getSearchValue: getSearchValue,
    getLanguage: getLanguage,
    getWeatherByDayOfWeek: getWeatherByDayOfWeek,
}