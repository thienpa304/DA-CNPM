import { useContext } from 'react';
import Card from './Card';
import BillDetail from './BillDetail';
import CartContext from '../../food_ordering/components/Cart/CartController/CartContext';
import classes from './Bill.module.css';
import React  from 'react';
import random from './Id'
//import { LoginContext } from '../../SharedComponent/LoginContext';


const Cart1 = (props) => {
  const cartContext = useContext(CartContext);

  const totalAmount = `${cartContext.totalAmount.toLocaleString('vi-VN')} VND`;

  const cartItems = (
    <ul className = {classes['cart-items']}>
      {cartContext.items.map((item) => (
        <BillDetail
          key = {item.id}
          name = {item.name}
          amount = {item.amount}
          price = {item.price}
        />
      ))}
    </ul>
  );
  let id = random();

  return (
      <Card>
          <span style={{ fontWeight: 'bold', fontSize: '2.5vw'}}> ID:{id}</span>
        {cartItems}
        <div style={{paddingTop: "40px"}}>
        <div style={{ fontWeight: 'bold', fontSize: '3vw', textAlign: "left", float: "left"}}> 
         Thành tiền
          </div>
          <div style={{ fontWeight: 'bold', fontSize: '3vw', textAlign: "right"}}>
          {totalAmount}
        </div>
        </div>
      </Card>
  );

};

export default Cart1;
