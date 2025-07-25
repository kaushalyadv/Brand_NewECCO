import axios from "axios";
const params = {
    headers: {
        Authorization: "bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
    },
};

  
export const postDataToApi = async (url, data) => {
    try {
      const response = await axios.post(url, data, params);
      return response.data;
    } catch (error) {
      throw new Error("Error posting data to API:", error);
    }
  };
  
  
  



  export const fetchDataFromApi = async (url) => {
    try {
       const response = await axios.get(process.env.REACT_APP_DEV_URL + url, params);
       return response.data;
    } catch (error) {
        console.log(error);
        return error;
    }
 };

export const makePymentRequest = axios.create({
    baseURL: process.env.REACT_APP_DEV_URL,
    headers: {
        Authorization: "bearer " + process.env.REACT_APP_STRIPE_APP_KEY,
    }
})