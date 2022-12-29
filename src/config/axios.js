import axios from 'axios';
import { API_URL } from './constant';

axios.defaults.baseURL = API_URL;

export default axios;
