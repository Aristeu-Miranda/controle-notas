import axios from "axios";

const baseUrl = 'https://controle-api-mhpv.onrender.com'

export function singup(data: any) {
    delete data.confirmPassword
    const response = axios.post(`${baseUrl}/user`, data);
    return response
}