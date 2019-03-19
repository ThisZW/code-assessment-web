import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE,
  CART_DISPLAY_TOGGLE,
  CART_ITEM_REMOVE,
  CART_ITEM_UPDATE,
} from '../constants/ActionTypes'

const initialState = {
  addedIds: [],
  quantityById: {},
  isCartDisplaying: false,
}

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state
      }
      return [ ...state, action.productId ]
    //remove and update cart
    case CART_ITEM_REMOVE:
      if (state.indexOf(action.productId) !== -1) {
        state.splice(state.indexOf(action.productId), 1)
        return state
      }
    default:
      return state
  }
}

const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId } = action
      return { ...state,
        [productId]: (state[productId] || 0) + 1
      }
    case CART_ITEM_REMOVE:
      return {
        ...state,
        [action.productId]: 0
      }
    case CART_ITEM_UPDATE:
      const { qtys } = action
      let qtyObj = {}
      qtys.forEach((v,k)=>{
        qtyObj[k] = v
      })
      return qtyObj
    default:
      return state
  }
}

//add state for toggling around cart display
const cartDisplay = (state = initialState.isCartDisplaying, action)=>{
  switch (action.type){
    case CART_DISPLAY_TOGGLE:
      return !state
    default:
      return state
  }
}

export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0

export const getAddedIds = state => state.addedIds

export const getIsCartDisplaying = state => state.isCartDisplaying

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState
    case CHECKOUT_FAILURE:
      return action.cart
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action),
        isCartDisplaying: cartDisplay(state.isCartDisplaying, action)
      }
  }
}

export default cart
