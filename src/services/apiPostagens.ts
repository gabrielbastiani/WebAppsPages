import axios from 'axios';

const apiPostagens = axios.create({
  baseURL: 'http://localhost:3333'
})

export { apiPostagens };