import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleCartDisplay, checkout} from '../actions'
import { getIsCartDisplaying, getCartProducts} from '../reducers'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import {Icon, Modal, Row, Col, Button} from 'antd'
import styles from './App.module.css'


const App = ({ isCartDisplaying, toggleCartDisplay, products, checkout }) => (
  <div className={styles.app}>
    <div className={styles.mainContainer}>
      <Row type="flex" justify="space-between" align="middle">
        <Col sm={12} xs={24}>
          <h1 className={styles.shopTitle}>Acme Store</h1 >
        </Col>
        <Col sm={12} xs={{span:0}}>
          <a href="#" onClick={() => toggleCartDisplay()}>
            <p className={styles.titleBarCart}>
              <Icon type="shopping-cart" className={styles.cartIcon}/>
              &nbsp;
              {products.length > 0 ? 
                `${products.map(p => p.quantity).reduce((acc, cur) => acc+cur)}
                Items in your cart`
                :
                "Your Cart is Empty"}
            </p>
          </a>
        </Col>
        <Col sm={{span:0}} xs={24}>
          <a href="#" onClick={() => toggleCartDisplay()}>
            <p>
              <Icon type="shopping-cart" className={styles.cartIcon}/>
              &nbsp;
              {products.length > 0 ? 
                `${products.map(p => p.quantity).reduce((acc, cur) => acc+cur)} 
                Items in your cart`
                :
                "Your Cart is Empty"}
            </p>
          </a>
        </Col>
      </Row>
      <hr/>
      <ProductsContainer />
    
      <Modal
        visible={isCartDisplaying}
        title="Shopping Cart"
        onOk={() => toggleCartDisplay()}
        onCancel={() => toggleCartDisplay()}
        footer={
          <Button onClick={() =>checkout() } type="primary" size="large" className={styles.checkout} block>
            <p className={styles.checkoutText}>Checkout</p>
          </Button>
        }
        centered
      >
        <CartContainer/>
      </Modal>
    </div>
  </div>
)

App.protoTypes = {
  isCartDisplaying: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  isCartDisplaying: getIsCartDisplaying(state),
  products: getCartProducts(state)
  
})

export default connect(
  mapStateToProps,
  {toggleCartDisplay, checkout}
)(App)
