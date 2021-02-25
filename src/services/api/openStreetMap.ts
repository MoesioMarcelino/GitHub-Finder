import axios from 'axios';

const openStreetMap = axios.create({
  baseURL: 'https://nominatim.openstreetmap.org/search?format=json',
});

export default openStreetMap;
