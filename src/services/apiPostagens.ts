import axios from 'axios';

const apiPostagens = axios.create({
  baseURL: 'https://apipostagem.builderseunegocioonline.com.br'
})

export { apiPostagens };