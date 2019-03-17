import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import styles from './App.module.css'
import { connect } from 'react-redux'
import { toggleCartDisplay } from '../actions'
import { getIsCartDisplaying } from '../reducers'
import {Icon, Modal, Row, Col} from 'antd'

const App = ({isCartDisplaying}) => (
  <div className={styles.app}>
    <div className={styles.mainContainer}>
      <Row type="flex" justify="space-between" align="middle">
        <Col sm={12} xs={24}>
          <h1 className={styles.shopTitle}>Acme Store</h1 >
        </Col>
        <Col sm={12} xs={{span:0}}>
          <p className={styles.titleBarCart}><Icon type="shopping-cart" className={styles.cartIcon}/>&nbsp;Your Cart is Empty</p>
        </Col>
        <Col sm={{span:0}} xs={24}>
          <p><Icon type="shopping-cart" className={styles.cartIcon}/>&nbsp;Your Cart is Empty</p>
        </Col>
      </Row>
      <hr/>
      <ProductsContainer />
      <hr/>
      <Modal
        visible={isCartDisplaying}
        title="Shopping Cart"
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
  isCartDisplaying: getIsCartDisplaying(state)
})

export default connect(
  mapStateToProps,
  {toggleCartDisplay}
)(App)
