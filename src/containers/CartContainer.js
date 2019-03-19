import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { removeItemFromCart, updateCartItems, toggleCartDisplay} from '../actions'
import { getTotal, getCartProducts } from '../reducers'
import Cart from '../components/Cart'

const CartContainer = ({ products, total, removeItemFromCart, updateCartItems, isCartDisplaying }) => (
  <Cart
    products={products}
    total={total}
    onCartItemRemove={(productId, quantity) => removeItemFromCart(productId, quantity)}
    updateCartItems={(products) => updateCartItems(products)}
    isCartDisplaying={isCartDisplaying}
    />
)

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state),
  isCartDisplaying: toggleCartDisplay(state)
})

export default connect(
  mapStateToProps,
  {removeItemFromCart, updateCartItems }
)(CartContainer)
