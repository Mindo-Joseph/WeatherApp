import './style.css';
import { detailSection, imageSection } from './frontend';
import getWeather from './apirequest';

detailSection();
imageSection();
getWeather('Nairobi');
