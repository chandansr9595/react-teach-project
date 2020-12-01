import axios from 'axios';

const StreamAPI = axios.create({
    baseURL: 'http://localhost:3001'
})

export default StreamAPI;