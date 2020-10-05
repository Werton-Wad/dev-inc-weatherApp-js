import { convertDate, convertTemp } from '../utilis';


function createItem(elem, language) {
    const $item = document.createElement('div');

    const $time = document.createElement('div');
    $time.textContent = convertDate(new Date(elem.dt_txt), language);
    // convertDate(new Date(elem.dt));

    const $iconWrapper = document.createElement('div');
    const $icon = document.createElement('img');
    $icon.src = `http://openweathermap.org/img/wn/${elem.weather[0].icon}@2x.png`;
    $icon.alt = 'icon';
    
    const $temp = document.createElement('div');
    $temp.innerHTML = convertTemp(elem.main.temp) + ' &#8451';

    $iconWrapper.append($icon);
    $item.append($time, $iconWrapper, $temp);
    return $item;
}

export default createItem;