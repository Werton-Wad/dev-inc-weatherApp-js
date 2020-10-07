import { actions } from '../controller';
import { convertDate, convertTemp } from '../utilis';

const $modalTitle = document.querySelector('.modal-title');
const $timeForDayWrapper = document.querySelector('.weather-week-days-diff-time');


export default function createWeatherForWholeDay(titleDay, language, dayCounter) {
    $timeForDayWrapper.innerHTML = '';
    const weatherforDayList = actions.getWeatherByDayOfWeek(dayCounter);
    $modalTitle.textContent = titleDay;

    for (let i = 0; i < weatherforDayList.length; i++) {
        let elem = weatherforDayList[i];

        let $item = document.createElement('div');
        $item.style.textAlign = 'center';
        $item.style.padding = '10px';
        let $time = document.createElement('div');
        $time.textContent = convertDate(new Date(elem.dt_txt), language);

        let $iconWrapper = document.createElement('div');
        let $icon = document.createElement('img');
        $icon.src = `http://openweathermap.org/img/wn/${elem.weather[0].icon}@2x.png`;
        $icon.alt = 'icon';

        let $description = document.createElement('div');
        $description.textContent = elem.weather[0].description;
        $description.style.paddingBottom ='5px';

        let $temp = document.createElement('div');
        $temp.innerHTML = convertTemp(elem.main.temp) + ' &#8451';

        $iconWrapper.append($icon);
        $item.append($time, $iconWrapper, $description, $temp);
        $timeForDayWrapper.append($item);
    }
}