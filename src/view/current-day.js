import { convertTemp, convertDate } from '../utilis';
import lang from '../lang';


function createCurrentDay(list, city, language) {
const $currentDayWrapper = document.createElement('div');
$currentDayWrapper.classList.add('current-day');

const $location = document.createElement('div');
$location.classList.add('location');
$location.textContent = `${city.name}, ${city.country}`;

const $currentDate = document.createElement('div');
$currentDate.classList.add('current-date');
$currentDate.textContent = convertDate(new Date(), language);

const $currentTemp = document.createElement('div');
$currentTemp.classList.add('current-temp');
$currentTemp.innerHTML = convertTemp(list[0].main.temp) + '&#8451';

const $img = document.createElement('img');
$img.src = `http://openweathermap.org/img/wn/${list[0].weather[0].icon}@2x.png`
$img.classList.add('current-icon');
$img.alt = 'icon';

const $description = document.createElement('div');
$description.textContent = list[0].weather[0].description;

const $realFeelTemp = document.createElement('div');
$realFeelTemp.textContent = `${lang[language].feelsLike}: ${convertTemp(list[0].main.feels_like)}`;

const $wind = document.createElement('div');
$wind.textContent = `${lang[language].wind}: ${list[0].wind.speed} m/s`;

const $pressure = document.createElement('div');
$pressure.textContent = `${lang[language].pressure}: ${list[0].main.pressure} mmHg`;

const $humidity = document.createElement('div');
$humidity.textContent = `${lang[language].humidity}: ${list[0].main.humidity} %`;

$currentDayWrapper.append($location, $currentDate, $currentTemp, $img, $description, $realFeelTemp, $wind, $pressure, $humidity);
return $currentDayWrapper;

}

export default createCurrentDay;
