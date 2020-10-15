/* eslint-disable no-param-reassign */
import getWeather, {
  fetchCoordinates, fToC, getCurrentLocationWeather, getCurrentPosition,
} from './apirequest';
import sideImage from './img/sideImage.jpeg';

const toggleTemp = (obj, node) => {
  const tempCelcius = fToC(obj.main.temp);
  if (node.textContent.endsWith('F')) {
    node.textContent = `${tempCelcius} C`;
  } else {
    node.textContent = `${obj.main.temp} F`;
  }
};

const addDataToPage = (obj) => {
  const imageLink = 'http://openweathermap.org/img/wn/';
  const details = document.querySelector('.details-section');
  const currentWeather = document.createElement('div');
  currentWeather.className = 'current-weather';
  const tempDisplay = document.createElement('div');
  tempDisplay.className = 'temp-display';
  tempDisplay.textContent = `${obj.main.temp} F`;
  const toggleButton = document.createElement('button');
  toggleButton.textContent = 'Celcius/Farenheight';
  toggleButton.className = 'toggle-btn';
  toggleButton.addEventListener('click', () => {
    toggleTemp(obj, tempDisplay);
  });

  const weatherIcon = document.createElement('img');
  weatherIcon.className = 'weather-icon';
  weatherIcon.src = `${imageLink}${obj.weather[0].icon}@2x.png`;

  const otherDetails = document.createElement('div');
  otherDetails.className = 'other-details';
  const cityName = document.createElement('p');
  cityName.textContent = `City: ${obj.name}`;
  const weatherDescription = document.createElement('p');
  weatherDescription.textContent = `Description: ${obj.weather[0].description}`;
  const humidity = document.createElement('p');
  humidity.textContent = `Humidity: ${obj.main.humidity}`;
  const winspeed = document.createElement('p');
  winspeed.textContent = `Wind ${obj.wind.speed} MPH`;
  otherDetails.appendChild(cityName);
  otherDetails.appendChild(weatherDescription);
  otherDetails.appendChild(humidity);
  otherDetails.appendChild(winspeed);
  currentWeather.appendChild(tempDisplay);
  currentWeather.appendChild(weatherIcon);

  details.appendChild(currentWeather);
  details.appendChild(toggleButton);
  details.appendChild(otherDetails);
};
const detailSection = () => {
  const details = document.createElement('div');
  details.className = 'details-section';
  const dateAndSearchSection = document.createElement('div');
  dateAndSearchSection.className = 'date-search-section';
  const date = document.createElement('div');
  date.className = 'date';
  date.textContent = new Date().toDateString();
  const searchContainer = document.createElement('div');
  searchContainer.className = 'search';
  const search = document.createElement('input');
  search.required = 'true';
  search.setAttribute('type', 'text');
  search.setAttribute('placeholder', 'Location');
  searchContainer.appendChild(search);
  dateAndSearchSection.appendChild(date);
  dateAndSearchSection.appendChild(searchContainer);
  details.appendChild(dateAndSearchSection);
  search.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const detail = document.querySelector('.details-section');
      if (detail.hasChildNodes()) {
        while (detail.children[1]) {
          detail.removeChild(detail.lastChild);
        }
        getWeather(search.value).then((data) => addDataToPage(data));
      }
    }
  });

  const coordinates = fetchCoordinates();
  // eslint-disable-next-line max-len
  coordinates.then((data) => getCurrentLocationWeather(data.response.coords.latitude, data.response.coords.longitude)
    .then((weather) => addDataToPage(weather)));
  const getContentDiv = document.querySelector('#content');
  getContentDiv.appendChild(details);
};
const imageSection = () => {
  const imageDiv = document.createElement('div');
  imageDiv.className = 'image-section';
  const image = new Image();
  image.src = sideImage;
  image.className = 'image';
  imageDiv.appendChild(image);
  const getContentDiv = document.querySelector('#content');
  getContentDiv.appendChild(imageDiv);
};
export { detailSection, imageSection };
