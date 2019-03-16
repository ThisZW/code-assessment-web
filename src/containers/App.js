import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import styles from './App.module.css'
import {Icon, Row, Col} from 'antd'

const App = () => (
  <div className={styles.app}>
    <div className={styles.mainContainer}>
      <Row type="flex" justify="space-between" align="middle">
        <Col sm={12}>
          <h1 className={styles.shopTitle}>Acme Store</h1>
        </Col>
        <Col sm={12}>
          <p className={styles.titleBarCart}><Icon type="shopping-cart" className={styles.cartButton}/>&nbsp;Your Cart is Empty</p>
        </Col>
      </Row>
      <hr/>
      <ProductsContainer />
      <hr/>
      <CartContainer />
    </div>
  </div>
)

export default App
