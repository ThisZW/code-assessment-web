import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout, removeItemFromCart, updateCartItems, toggleCartDisplay} from '../actions'
import { getTotal, getCartProducts } from '../reducers'
import Cart from '../components/Cart'

const CartContainer = ({ products, total, checkout, removeItemFromCart, updateCartItems, isCartDisplaying }) => (
  <Cart
    products={products}
    total={total}
    onCheckoutClicked={() => checkout(products)} 
    onCartItemRemove={(productId) => removeItemFromCart(productId)}
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
  checkout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state),
  isCartDisplaying: toggleCartDisplay(state)
})

export default connect(
  mapStateToProps,
  { checkout, removeItemFromCart, updateCartItems }
)(CartContainer)
