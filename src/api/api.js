import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3030';

export async function getAllUsers(){
   const response = await axios.get('auth');
   return response.data
}

export async function addUser(payload){
   const response = await axios.post('auth', payload);
   return response.data
}