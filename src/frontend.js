const detailSection = () => {
  const details = document.createElement('div');
  details.className = 'details-section';

  const dateAndSearchSection = document.createElement('div');
  dateAndSearchSection.className = 'date-search-section';
  const date = document.createElement('div');
  date.className = 'date';
  date.textContent = 'Tuesday October 13th';
  const search = document.createElement('input');
  search.className = 'search';
  search.required = 'true';
  search.placeholder = 'Location';

  dateAndSearchSection.appendChild(date);
  dateAndSearchSection.appendChild(search);

  const currentWeather = document.createElement('div');
  currentWeather.className = 'current-weather';
  const tempDisplay = document.createElement('div');
  tempDisplay.className = 'temp-display';
  const weatherIcon = document.createElement('div');
  weatherIcon.className = 'weather-icon';

  currentWeather.appendChild(tempDisplay);
  currentWeather.appendChild(weatherIcon);

  const weeklyForecast = document.createElement('div');
  weeklyForecast.className = 'weekly-forecast';

  details.appendChild(dateAndSearchSection);
  details.appendChild(currentWeather);
  details.appendChild(weeklyForecast);

  const getContentDiv = document.querySelector('#content');
  getContentDiv.appendChild(details);
};
const imageSection = () => {
  const image = document.createElement('div');
  image.className = 'image-section';
  image.textContent = 'Image goes here';
  const getContentDiv = document.querySelector('#content');
  getContentDiv.appendChild(image);
};
export { detailSection, imageSection };
