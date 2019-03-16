import React from 'react'
import PropTypes from 'prop-types'
import {Row, Col, Button} from 'antd'
import demoImg from '../assets/demo.jpg'
import styles from './Product.module.css'

const Product = ({ price, quantity, title }) => (
  <Row className={styles.productContainer}>
    <Col sm={8}>
      <img className={styles.productImg} src={demoImg} alt=""/>
    </Col>
    <Col sm={16}>
      <div className={styles.productDetails}>
        <Row>
          <Col span={18}>
            <h2>{title}</h2>
          </Col>
          <Col span={6}>
            <span className={styles.price}>${price}</span>
          </Col>
        </Row>
        <div>{quantity ? `${quantity} Remaining` : null}</div>
        <br/>
        <Button>Add To Cart</Button>
      </div>
    </Col>
  </Row>
)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
}

export default Product
