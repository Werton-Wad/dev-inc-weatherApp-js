import { actions } from '../controller';
import createCurrentDay from './current-day';
import createItem from './different-times';
import createItemOfFiveDays from './five-days';
import lang from '../lang';

const $wrapper = document.querySelector('.wrapper');
const $content = document.querySelector('.content');
const $fiveDaysWrapper = document.createElement('div');
const $speechBubbleWrapper = document.createElement('div');
const $langSelect = document.getElementById('select-lang');
$speechBubbleWrapper.className = 'bubble';
let toggled = true;


const $btnFiveDays = document.createElement('a');
$btnFiveDays.href = '#';
$btnFiveDays.className = 'btn-five-days';
$btnFiveDays.textContent = 'Weather for 5 days';
const $errorMessage = document.querySelector('.error-message');
const $optionsLangEng = document.querySelector('option[name="eng"]');
const $optionsLangRu = document.querySelector('option[name="ru"]');

const $searchInput = document.querySelector('input[name="search"');
const $btnSearch = document.querySelector('.btn-search');

$fiveDaysWrapper.classList.add('five-days');
const $differentTimeWrapper = document.createElement('div')
$differentTimeWrapper.classList.add('different-time');

const $differentTimeContainer = document.createElement('div');


async function view(language, city) {
  await actions.getWeather(language, city);
  if (!actions.showIsLoading()) {
    $optionsLangEng.textContent = lang[language].eng;
    $optionsLangRu.textContent = lang[language].ru;
    $btnFiveDays.textContent = lang[language].weatherForFiveDays;
    $content.innerHTML = '';
    const { weatherList, city } = actions.getWeatherList();
    $content.append(createCurrentDay(weatherList, city, language));
    renderDifferentTimesList(weatherList, language);
    renderFiveDaysItems(weatherList, language);
    $differentTimeContainer.append($differentTimeWrapper, $btnFiveDays);
    $content.append($differentTimeContainer);
    document.body.append($speechBubbleWrapper);
    $btnSearch.textContent = lang[language].searchBtn;
  }
}

$searchInput.onchange = function(e) {
  actions.setSearchValue(e.target.value);
}

$btnSearch.onclick = function() {
  $searchInput.value = '';
  const lang = actions.getLanguage();
  const searchValue = actions.getSearchValue();
  view(lang, searchValue);
  
}
$btnFiveDays.onclick = (e) => {
  e.preventDefault();
  toggled ? $speechBubbleWrapper.style.opacity = 1 : $speechBubbleWrapper.style.opacity = 0;
  toggled = !toggled;
  
}
$langSelect.onchange = function(e) {
  let city;
  actions.setLanguage(e.target.value);
  !$errorMessage.textContent ? city = actions.getSearchValue() : city = actions.getWeatherList().city.name;
  $errorMessage.textContent = '';
  view(e.target.value, city);
}


function renderDifferentTimesList(list, language) {
  $differentTimeWrapper.innerHTML = '';
  for (let i = 0; i < 4; i++) {
   let $createdItem = createItem(list[i], language);
   $differentTimeWrapper.append($createdItem);
  }
  
}
function renderFiveDaysItems(list, language) {
  let dayCounter = new Date().getDay();
  $fiveDaysWrapper.innerHTML = '';
  $speechBubbleWrapper.innerHTML = '';
  for (let i = 0; i < list.length; i += 8) {
    if (i !== 0) dayCounter += 1;
    if (dayCounter === lang.eng.weekday.length) {
      dayCounter = 0;
    }
    let $createdItem = createItemOfFiveDays(list[i], dayCounter, language);
    $fiveDaysWrapper.append($createdItem);
  }
  $speechBubbleWrapper.append($fiveDaysWrapper);
}


export default view;