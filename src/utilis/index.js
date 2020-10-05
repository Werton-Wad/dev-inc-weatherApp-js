const convertTemp = (tempK) => {
    return Math.floor(tempK - 273);
}
function convertDate(date, lang) {
    let day = date.getDate();
    let month = date.toLocaleString(lang, { month: 'short' });
    let hours = date.getHours();
    let minutes = date.getMinutes();
    minutes = Number(minutes) < 10 ? `0${minutes}` : minutes;
    return `${day} ${month} ${hours}:${minutes}`;
}


export {
    convertTemp,
    convertDate,
}