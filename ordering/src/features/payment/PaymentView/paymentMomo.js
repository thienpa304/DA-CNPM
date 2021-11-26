import React, {Component} from 'react';
import { Container , Col, Row} from 'reactstrap';
import './payment.css'
import { useContext } from 'react';
import CartContext from '../../food_ordering/components/Cart/CartController/CartContext';


const MOMO = (props) =>  {  
  const cartContext = useContext(CartContext);
  const totalAmount = `${cartContext.totalAmount.toLocaleString('vi-VN')} VND`;
      return (
        
          <Container>
          <Row>
          <Col xs={4} > 
          <img class="img-fluid " src="/assets/images/caphe.png" alt=""/>
            </Col>
            <Col xs={4}>
          <h2 style={{ fontWeight: 'bold', color: 'orange', fontSize: '2vw', textAlign: 'center'}}>Mời bạn quét mã QR </h2>
          <img class="img-fluid " src={`https://momosv3.apimienphi.com/api/QRCode?phone=0977854000`}></img>

    </Col>
    <Col xs={4}>  
    <img class="img-fluid " src="/assets/images/caphe.png" alt=""/>
            </Col>
          </Row>
        </Container>
          
      )
}
export default MOMO;