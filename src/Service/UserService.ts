import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = 'https://controle-api-mhpv.onrender.com'

export function singup(data: any) {
    delete data.confirmPassword
    const response = axios.post(`${baseUrl}/user`, data);
    return response
}

export function singin(data: any) {
    const response = axios.post(`${baseUrl}/login`, data);
    return response
}

export function userLogged() {
    const response = axios.get(`${baseUrl}/user`, {
        headers: {
            Authorization: `Baerer $${Cookies.get("token")}`
        }
    })
    return response
}