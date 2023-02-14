import axios from "axios";

const BASE_URL = "https://kaela-shop-api.onrender.com/";
// const TOKEN  = process.env.TOKEN;
export const publicRequest = axios.create({
    baseURL: BASE_URL
})

