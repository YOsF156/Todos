import axios from "axios";




const api = axios.create({
    baseURL: "https://todo-server-xrzc.onrender.com/api",
    headers: { "Content-Type": "application/json", }
});

export { api }