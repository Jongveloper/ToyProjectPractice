import axios from 'axios';
import { TodoType } from './ApiTypes';

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/json; charset=utf-8';
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  config.headers.Accept = 'application/json';
  return config;
});

const apis = {
  todo: (contents: string) => instance.post('/todo', contents),
  deleteTodo: (id: string) => instance.delete('/todo/:{id}'),
};

export default apis;
