import { convertTemp } from '../utilis';
import lang from '../lang';
import createWeatherForWholeDay from './weather-day';

function createItemOfFiveDays(elem, dayCounter, language) {
  console.log(dayCounter);
  const $item = document.createElement('div');
  $item.style.padding = '0 5px 10px 5px';

  const $day = document.createElement('div');
  $day.className = 'weather-day';
  $day.textContent = lang[language].weekday[dayCounter];

  $day.setAttribute('data-toggle', 'modal');


  $day.onclick = function(e) {
    $("#exampleModal").modal('show');
    const titleDay = e.target.textContent;
    createWeatherForWholeDay(titleDay, language, dayCounter);
  }

  const $iconWrapper = document.createElement('div');
  const $icon = document.createElement('img');
  $icon.src = `http://openweathermap.org/img/wn/${elem.weather[0].icon}@2x.png`;
  $icon.alt = 'icon';

  const $description = document.createElement('div');
  $description.textContent = elem.weather[0].description;
  $description.style.fontSize = '14px';
  $description.style.marginBottom = '10px';

  const $temp = document.createElement('div');
  $temp.innerHTML = convertTemp(elem.main.temp) + ' &#8451';

  $iconWrapper.append($icon);
  $item.append($day, $iconWrapper, $description, $temp);
  return $item;
}

export default createItemOfFiveDays;
