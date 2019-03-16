/**
 * Mocking client-server processing
 */

//replace it to axios api call
//import _products from './products.json'
import axios from 'axios'

const TIMEOUT = 300

const getProductsFromAPI = async () => {
  return new Promise((resolve, reject) =>{
    axios.get('http://tech.work.co/shopping-cart/products.json')
      .then(products => {
        let res = products.data.map(p => {
          return {
            id: p.id,
            title: p.productTitle,
            price: p.price.value,
            inventory: p.inventory
          }
        })
        return resolve(res)
      })
      .catch(e => {
        return reject(e)
      })
  });
}

const getProducts = async() => {
  let data = await getProductsFromAPI()
  console.log(data)
  return data;
}

export default {
  //getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
  getProducts: async(cb, timeout) => cb(await getProducts()),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
