import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://job-portal-production-7c19.up.railway.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
