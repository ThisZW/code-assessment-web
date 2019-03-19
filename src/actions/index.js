import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()
  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  })
}

const cartDisplayToggle = () => ({
  type: types.CART_DISPLAY_TOGGLE
})

export const toggleCartDisplay = () => (dispatch, getState) => {
  dispatch(cartDisplayToggle())
}

const cartItemRemove = (productId, qty) =>({
  type: types.CART_ITEM_REMOVE,
  productId,
  qty
})

export const removeItemFromCart = (productId, qty) => (dispatch, getState) => {
  if(getState().cart.addedIds.includes(productId)){
    dispatch(cartItemRemove(productId, qty))
  }
}

const cartItemUpdate = (qtys) => ({
  type: types.CART_ITEM_UPDATE,
  qtys
})

export const updateCartItems = (qtys) => (dispatch, getState) => {
  dispatch(cartItemUpdate(qtys))
}