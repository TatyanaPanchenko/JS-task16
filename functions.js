import { currentDay, nextDay } from "./vars";

export function getCurrentWeather(data) {
  const time = new Date();
  const template = `<div class="current-day-data">
          <p class="current-day-city">${data.city.name}</p>
          <p class="current-day-time">${getHours(time)}:${getMinutes(time)}</p>
        </div>
        <div class="current-day-weather">
          <img src="https://openweathermap.org/img/wn/${
            data.list[0].weather[0].icon
          }.png" alt="${data.list[0].weather[0].main}">
          <p class="current-day-precipitation">${
            data.list[0].weather[0].main
          }</p>
          <p class="current-day-temperature">${Math.round(
            data.list[0].main.temp
          )} &deg;C</p>
        </div>
        <div class="current-day-wind">
          <div class="current-day-speed">Speed</div>
          <div class="current-day-value">${Math.round(
            data.list[0].wind.speed
          )} m/s</div>
        </div>`;
  currentDay.innerHTML = template;
}

export function getNextWeather(data) {
  for (let i = 0; i < data.list.length; i += 8) {
    const template = `<div class="day"><div class="next-day-date">
            <div class="next-day-day">${data.list[i].dt_txt.slice(0, 10)}</div>
            <div class="next-day-time">${data.list[i].dt_txt.slice(11)}</div>
          </div>
          <img src="https://openweathermap.org/img/wn/${
            data.list[i].weather[0].icon
          }.png" alt="${data.list[i].weather[0].main}">
          <div class="next-day-temperature">${Math.round(
            data.list[i].main.temp
          )} &deg;C</div> </div>`;
    nextDay.innerHTML += template;
  }
}

export function getHours(time) {
  let hours = time.getHours();

  if (hours < 10) {
    hours = `0${hours}`;
  }
  return hours;
}

export function getMinutes(time) {
  const minutes = time.getMinutes();
  // }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return minutes;
}
