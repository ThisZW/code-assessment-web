import React from 'react'
import PropTypes from 'prop-types'
import {Row, Col, Button} from 'antd'
import demoImg from '../assets/demo.jpg'
import styles from './Product.module.css'

const Product = ({ price, quantity, title, onAddToCartClicked }) => (
  <Row className={styles.productContainer} type="flex">
    <Col lg={8} md={10} sm={12} xs={24}>
      <img className={styles.productImg} src={demoImg} alt=""/>
    </Col>
    <Col lg={16} md={14} sm={12} xs={24}>
      <div className={styles.productDetails}>
        <Row type="flex" justify="space-between" align="top">
          <Col span={18}>
            <h2 className={styles.productName}>{title}</h2>
          </Col>
          <Col span={6}>
            <span className={styles.price}>${price}</span>
          </Col>
        </Row>
        <div>{quantity ? `${quantity} Remaining` : `Sold Out!`}</div>
        <br/>
        <Button
          type="primary"
          shape="round"
          className={styles.addToCartButton}
          onClick={onAddToCartClicked}
          disabled={quantity > 0 ? '' : 'disabled'}>
          Add To Cart
        </Button>
      </div>
    </Col>
  </Row>
)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  onAddToCartClicked: PropTypes.func,
}

export default Product
