import axios from "axios";
import ILoginData from "../interfaces/ILoginData";


const API = axios.create({
  baseURL: 'https://api.homologation.cliqdrive.com.br',
  headers: {
    Accept: 'application/json;version=v1_web',
    "Content-Type": 'application/json'
  }
})

async function login(loginData: ILoginData) {
  return await API.post('/auth/login/', loginData, {
    
  })
}

async function getProfile(token: string) {
  return API.get('/auth/profile/', {
    headers: {
      Authorization: token
    }
  })
}

export { login, getProfile }