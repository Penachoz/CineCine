import axios from 'axios';

const cinePlusApi = axios.create({
    baseURL: 'https://apicinecine-production.up.railway.app/api'});

export default cinePlusApi

