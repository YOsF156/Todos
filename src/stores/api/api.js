import axios from "axios";




const api = axios.create({
    baseURL: "https://todos-server-yosef.herokuapp.com/api",
    withCredentials: true,
    headers: { "Content-Type": "application/json", }
});

export { api }