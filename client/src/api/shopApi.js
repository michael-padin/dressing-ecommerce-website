import axios from "axios";



const BASE_URL = "https://dressing-ecommerce-website.vercel.app"
// const TOKEN  = process.env.TOKEN;
export const publicRequest = axios.create({
    baseURL: BASE_URL
})

// export const userRequest = axios.create({
//     baseURL: BASE_URL,
//     header: {token: `${TOKEN}`}
// })