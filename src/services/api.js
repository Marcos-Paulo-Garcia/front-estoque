import axios from "axios";
const api = axios.create({
    baseURL: "https://gestao-de-estoque-p584.onrender.com"
})

export default api