import { currentDay, nextDay } from "./vars";
import {
  getCurrentWeather,
  getNextWeather,
  getHours,
  getMinutes,
} from "./functions";

const serverUrl =
  "https://api.openweathermap.org/data/2.5/forecast?q=Gomel&appid=a94d0a5ac08570add4b47b8da933f247&units=metric";
async function getWeather() {
  const request = await fetch(serverUrl);
  const data = await request.json();
  getCurrentWeather(data);
  getNextWeather(data);
}
getWeather();
