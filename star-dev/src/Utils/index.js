import axios from 'axios'

// export const apiInstance = axios.create({
//   baseURL: 'http://localhost:5001/yada-yada-shop/us-central1/api'
// })

export const apiInstance = axios.create({
  baseURL: 'https://us-central1-yada-yada-shop.cloudfunctions.net/api'
})
