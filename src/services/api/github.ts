import axios from 'axios';

const github = axios.create({
  baseURL: 'https://api.github.com/users',
});

export default github;
