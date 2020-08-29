import * as axios from "axios/index";


const instanse = axios.create({
    withCredentials: true,
    baseURL: `http://localhost:3000/db.json/`
});

export const authAPI = {
    getAuth() {
     return instanse.get()
    }
}

export const pizzaAPI = {
    getPizza(payload) {
        return instanse.get(`pizza`, {payload:payload})
    }
}