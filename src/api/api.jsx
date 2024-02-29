import axios from 'axios'

const baseURL = "https://fakestoreapi.com";


export const posts =   {
  
  getProducts : ()=>{
      return  axios.get(`${baseURL}/products`)
  },
  getCategory : (data)=>{
    return axios.get(`${baseURL}/products/category/${data}`)
    
  },
  getSingle : (id)=>{
    return  axios.get(`${baseURL}/products/${id}`)

  }

}

