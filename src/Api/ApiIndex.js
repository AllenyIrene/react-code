
import axios from "axios";



const options = {
    method: 'GET',
    params: {
      location_id: '293919',
    },
    headers: {
      'X-RapidAPI-Key': '98a5eef2c0msh04492bc062a0150p17c137jsn433ffb830787',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };

export const getPlacesDat = async (type) => {
    try{
   const {data : {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list`,options);
   return data
    }
    catch (error)
    {
       console.log(error)
    }
}