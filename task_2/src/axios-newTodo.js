import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://lab-68.firebaseio.com'
});

export default instance;