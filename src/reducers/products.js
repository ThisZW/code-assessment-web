import { combineReducers } from 'redux'
import { 
  RECEIVE_PRODUCTS,
  ADD_TO_CART, 
  CART_ITEM_REMOVE, 
  CART_ITEM_UPDATE } from '../constants/ActionTypes'

const products = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        inventory: state.inventory - 1
      }
    case CART_ITEM_REMOVE:
      return {
        ...state,
        inventory: state.inventory + action.qty
      }
    default:
      return state
  }
}

const byId = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product
          return obj
        }, {})
      }
    case CART_ITEM_UPDATE:
      let {qtys} = action
      Object.keys(state).forEach( k => {
        qtys.has(parseInt(k)) && (state[k].inventory = state[k].origQty - qtys.get(parseInt(k)))
      })
      console.log(state)
      return state
    default:
      const { productId } = action
      if (productId) {
        return {
          ...state,
          [productId]: products(state[productId], action)
        }
      }
      return state
  }
}

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.map(product => product.id)
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds,
})

export const getProduct = (state, id) =>
  state.byId[id]

export const getVisibleProducts = state =>
  state.visibleIds.map(id => getProduct(state, id))
