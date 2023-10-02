import axios from "axios";
import { url } from "inspector";

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const {data} = await axios.get((url),{
    headers: {
        'X-RapidAPI-Key': 'db530e0748msh3ba3fccd5c7e00ap1a42d6jsn138a618dc378',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
      }
    })

}