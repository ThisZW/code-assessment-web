import React from 'react'
import PropTypes from 'prop-types'
import demoImg from '../assets/demo.jpg'
import styles from './Cart.module.css'
import {Icon, Row, Col, Button, InputNumber, Alert} from 'antd'
import { removeItemFromCart } from '../actions';

class Cart extends React.Component{
  constructor(){
    super()
    this.state = {
      tempQty: new Map(),
      updateRequired: false,
    }
  }

  componentDidMount() {
    let tempQty = new Map()
    this.props.products.forEach(p => {
      tempQty.set(p.id, p.quantity)
    })
    this.setState({
      tempQty: tempQty
    })
  }
  
  componentDidUpdate(prevProps) {
    if(prevProps.isCartDisplaying !== this.props.isCartDisplaying){
      let tempQty = new Map()
      this.props.products.forEach(p => {
        tempQty.set(p.id, p.quantity)
      })
      this.setState({
        tempQty: tempQty
      })
    }
  }

  updateTempQty = (id, type) => {
    let {tempQty} = this.state
    if(type === 'plus'){
      let curQty = tempQty.get(id) 
      tempQty.set(id, curQty+1)
    } else {
      let curQty = tempQty.get(id) 
      curQty > 0 && tempQty.set(id, curQty-1)
    }
    this.setState({
      tempQty: tempQty,
      updateRequired: true
    })
  }

  updateQty = (products) => {
    const { updateCartItems } = this.props
    const {tempQty} = this.state
    if(products.every(p=>{
      return tempQty.get(p.id) <= p.quantity + p.inventory 
    })){
      this.setState({
        showUpdateSuccess: true,
        showUpdateError: false,
      })
      console.log('here')
    } else {
      this.setState({
        showUpdateSuccess: false,
        showUpdateError: true,
      })
    }
    updateCartItems()
  }
  
  cartProduct = (product) => {
    const {onCartItemRemove} = this.props
    let tempQty = this.state.tempQty
    return(
      <div className={styles.cartProduct} key={product.id} >
        <Row type="flex">
          <Col sm={10} xs={12}>
            <img src={demoImg} className={styles.cartProductImg} alt=""/>
          </Col>
          <Col sm={14} xs={12}>
            <div  className={styles.cartProductDetails}>
              <h2>{product.title}</h2>
              <h4>${product.price}</h4>
              <a href="#" onClick={() => onCartItemRemove(product.id, 1)} className={styles.cartProductRemove}>Remove</a>
            </div>
          </Col>
        </Row>
        <div className={styles.cartQuantitySelector}>
          <Row>
            <Col span={8}>
              <Button 
                className={styles.cartQtyMinus} 
                onClick={() => this.updateTempQty(product.id, 'minus')} 
                size="large" block>
                <Icon type="minus" className={styles.cartQtyIcon} />
              </Button>
            </Col>
            <Col span={8}>
              <p className={styles.cartQty}>{tempQty.get(product.id)}</p>
            </Col>
            <Col span={8}>
              <Button 
                className={styles.cartQtyPlus} 
                onClick={() => this.updateTempQty(product.id, 'plus')} 
                size="large" block>
                <Icon type="plus" className={styles.cartQtyIcon}/>
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    )
  }

  render(){
    const {products, total, onCheckoutClicked} = this.props
    const { showUpdateError, showUpdateSuccess } = this.state
    const hasProducts = products.length > 0
    return(
      hasProducts ? (
        <div>
          { 
            showUpdateError &&
            <Alert
              style={{marginBottom: '10px'}}
              message="Some product does not have enough inventory, please check!"
              type="error"
              showIcon
            />
          }
          {
            showUpdateSuccess &&
            <Alert
              style={{marginBottom: '10px'}}
              message="Cart has been updated"
              type="success"
              showIcon
            />
          }
          {products.map(product =>
            this.cartProduct(product)
          )}
          <hr/>
          <Row>
            <Col span={16}><h2>Subtotal</h2></Col>
            <Col span={8}><div className={styles.totalPrice}>${total}</div></Col>
            <Col span={16}><h2>Taxes</h2></Col>
            <Col span={8}><div className={styles.totalPrice}>${(total*0.088).toFixed(2)}</div></Col>
          </Row>
          <hr/>
          <Row>
            <Col span={16}><h2>Total</h2></Col>
            <Col span={8}><div className={styles.totalPrice}>${(total*1.088).toFixed(2)}</div></Col>
          </Row>
          <Button size="large" onClick={() => this.updateQty(products)} block>Update Cart</Button>
        </div>
      ) : (
        <div className={styles.emptyCart}>
          <div className={styles.centeredItem}>
            <Icon type="shopping-cart" className={styles.shoppingCartIcon}/>
            <p>Please add some products to your shopping cart</p>
          </div>
        </div>
      )
    )
  }
}


Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func,
  onCartItemRemove: PropTypes.func,
}

export default Cart