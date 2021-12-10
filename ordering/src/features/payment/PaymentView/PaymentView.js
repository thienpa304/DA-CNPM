
import React, {Component} from 'react';
import { Container , Col, Row} from 'reactstrap';
import './payment.css'
import Bill from '../PaymentModel/Bill';
import CartProvider from '../../food_ordering/components/Cart/CartController/CartProvider';
import { useState } from 'react';
import NavigationView from './NavigationView';

function Payment() {
    const [cartIsShown, setCartIsShown] = useState(false);
    const showCartHandler = () => {
        setCartIsShown(true);
    };
    const hideCartHandler = () => {
        setCartIsShown(false);
    };
    return (
        <Container>
   
            <Row>
            <Col xs={3}> 
            <img class=" img-fluid mai " src="/assets/images/caphe.png" alt=""/>
              </Col>
           
              <Col xs={6} >
        <CartProvider>
            {cartIsShown && <Bill onClose={hideCartHandler} />}
            <NavigationView onShowCart={showCartHandler} />
        </CartProvider>  
      </Col>
      <Col xs={3}>  
      <img class=" img-fluid mai " src="/assets/images/caphe.png" alt=""/>
              </Col>
              
            </Row>     
          </Container>
    );
}
export default Payment;