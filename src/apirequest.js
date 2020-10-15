const openWeatherApi = 'https://api.openweathermap.org/data/2.5/weather?q=';

async function getWeather(cityname) {
  const response = await fetch(`${openWeatherApi}${cityname}&units=imperial&appid=${process.env.API_KEY}`);
  const weatherData = await response.json();
  return weatherData;
}
export const fToC = (farenheight) => Math.floor((farenheight - 32) * (5 / 9));

export default getWeather;
