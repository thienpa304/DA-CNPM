import { useState } from 'react';
import NavigationBar from '../Menu/MenuView/NavigationView';
import Cart from '../Cart/CartView/Cart';
import CartProvider from '../Cart/CartController/CartProvider';
import SearchPage from './SearchPageView';



function Food_Ordering() {



  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };





  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <NavigationBar onShowCart={showCartHandler} />
      <main>
        <SearchPage />
      </main>
    </CartProvider>
  );
}


export default Food_Ordering;
