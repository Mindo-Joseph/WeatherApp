const openWeatherApiCity = 'https://api.openweathermap.org/data/2.5/weather?q=';
const openWeatherApiCord = 'https://api.openweathermap.org/data/2.5/weather?lat=';
const getWeather = async (cityname) => {
  try {
    const response = await fetch(`${openWeatherApiCity}${cityname}&units=imperial&appid=${process.env.API_KEY}`);
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    return error;
  }
};
export const getCurrentLocationWeather = async (lat, long) => {
  try {
    const response = await fetch(`${openWeatherApiCord}${lat}&lon=${long}&appid=${process.env.API_KEY}`);
    const currentLocationData = await response.json();
    return currentLocationData;
  } catch (error) {
    return error;
  }
};

export function getCurrentPosition(options = {}) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}
export const fetchCoordinates = async () => {
  try {
    const response = await getCurrentPosition();
    return { response };
  } catch (error) {
    return error;
  }
};
export const fToC = (farenheight) => Math.floor((farenheight - 32) * (5 / 9));

export default getWeather;
