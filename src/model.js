const state = {
    weatherList: [],
    city: {},
    isLoading: true,
    language: 'eng',
    searchValue: 'Minsk',
}

function showIsLoading() {
    return state.isLoading;
}
function setLanguage(lang) {
    state.language = lang;
}
function getLanguage() {
    return state.language;
}
function addWeatherList(data) {
    state.weatherList = [...data.list];
    state.city = { ...data.city };
    state.isLoading = false;
    return state;
}

function getWeatherList() {
    return state;
}

function setSearchValue(value) {
    state.searchValue = value;
}

function getSearchValue() {
    return state.searchValue;
}

export const weatherModel = {
    addWeatherList: addWeatherList,
    getWeatherList: getWeatherList,
    showIsLoading: showIsLoading,
    setLanguage: setLanguage,
    getLanguage: getLanguage,
    setSearchValue: setSearchValue,
    getSearchValue: getSearchValue,
}