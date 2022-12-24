import axios from 'axios';

const apiPostagens = axios.create({
  baseURL: 'https://apipostagem.builderseunegocioonline.com.br' || 'http://localhost:3000'
})

export { apiPostagens };