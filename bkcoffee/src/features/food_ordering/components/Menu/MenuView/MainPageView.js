import { Fragment } from 'react';
import Slogan from './Slogan';
import Food from '../FoodMenuModel';
import Drink from '../DrinkMenuModel';
import classes from './Menu.module.css';

const Menu = () => {
  return (
    <Fragment>
      <Slogan />
      <div className={classes.category}>
       <p>Thức uống</p>
      </div>
      <Food />
      <div className={classes.category}>
        <p>Bánh ngọt</p>
      </div>
      <Drink />
    </Fragment>
  );
};

export default Menu;
