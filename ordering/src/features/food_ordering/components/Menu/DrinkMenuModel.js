import Card from './MenuView/Card';
import MealItem from './MenuItems/ItemView';
import classes from './MenuView/Menu.module.css';
import { useState } from 'react';
import DUMMY_MEALS from './Data/DrinkList';

const Drinks = () => {

  const [state, setState] = useState(DUMMY_MEALS);

  const handleBtns = (e) => {
    let word = e.target.value;

    if (word === 'All') {
      setState(DUMMY_MEALS);
    }
    else if (word === 'Bun') {
      const filtered = DUMMY_MEALS.filter(item=>item.category==='Bun');
      setState(filtered);
    }
    else if (word === 'Toast') {
      const filtered = DUMMY_MEALS.filter(item=>item.category==='Toast');
      setState(filtered);
    }
    else if (word === 'Dry Cake') {
      const filtered = DUMMY_MEALS.filter(item=>item.category==='Dry Cake');
      setState(filtered);
    }
  }

  const drinkList = state.map((meal) => (
    <MealItem
      key={meal.id}
      category={meal.category}
      id={meal.id}
      name={meal.name}
      price={meal.price*23000}
      image={meal.image}
    />
  ));

  return (
    <section className={classes.meals}>
      <div className={classes.menuButton}>
        <button className={classes.singleButton} value="All" onClick={handleBtns}>
          Tất cả
        </button>
        <button className={classes.singleButton} value="Toast" onClick={handleBtns}>
          Toast
        </button>
        <button className={classes.singleButton} value="Dry Cake" onClick={handleBtns}>
          Dry cake
        </button>
        <button className={classes.singleButton} value="Bun" onClick={handleBtns}>
          Bun
        </button>
      </div>

      <Card>
        <ul>{drinkList}</ul>
      </Card>
    </section>
  );
};

export default Drinks;
