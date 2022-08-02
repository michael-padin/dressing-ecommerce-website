import axios from "axios";
require('dotenv').config()  


const BASE_URL = process.env.REACT_APP_BACKEND_URL;
// const TOKEN  = process.env.TOKEN;
export const publicRequest = axios.create({
    baseURL: BASE_URL
})

