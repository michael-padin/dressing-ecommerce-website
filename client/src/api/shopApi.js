import axios from "axios";



const BASE_URL = "http://localhost:3001"
// const TOKEN  = process.env.TOKEN;
export const publicRequest = axios.create({
    baseURL: BASE_URL
})

