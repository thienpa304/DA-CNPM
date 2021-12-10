import Card from './MenuView/Card';
import MealItem from './MenuItems/ItemView';
import classes from './MenuView/Menu.module.css';
import DUMMY_MEALS from './Data/FoodList';
import { useState } from 'react';




const Foods = () => {
  const [state, setState] = useState(DUMMY_MEALS);

  const handleBtns = (e) => {
    let word = e.target.value;

    if (word === 'All') {
      setState(DUMMY_MEALS);
    }
    else if (word === 'Cà phê') {
      const filtered = DUMMY_MEALS.filter(item=>item.category==='Cà phê');
      setState(filtered);
    }
    else if (word === 'Trà trái cây') {
      const filtered = DUMMY_MEALS.filter(item=>item.category==='Trà trái cây');
      setState(filtered);
    }
    else if (word === 'Đá xay') {
      const filtered = DUMMY_MEALS.filter(item=>item.category==='Đá xay');
      setState(filtered);
    }
  }





  const mealsList = state.map((meal) => (
    <MealItem
      key={meal.id}
      category={meal.category}
      id={meal.id}
      name={meal.name}
      price={meal.price*23000}
      image={meal.image}
    />
  ));







  const getFilteredItems = (query, items) => {
    if (!query) {
      return items;
    }
    return items.filter((song) => song.name.toLowerCase().includes(query));
  };







  const [query, setQuery] = useState(DUMMY_MEALS);
  const filteredItems = getFilteredItems(query, DUMMY_MEALS);






  return (
    <section className={classes.meals}>

      <div className={classes.menuButton}>
        <button className={classes.singleButton} value="All" onClick={handleBtns}>
          Tất cả
          {/* <span><img className={classes.categoryImage} src={all} alt='bread' /></span> */}
        </button>
        <button className={classes.singleButton} value="Cà phê" onClick={handleBtns}>
        Cà phê
          {/* <img className={classes.categoryImage} src={rice} alt='rice' /> */}
        </button>
        <button className={classes.singleButton} value="Trà trái cây" onClick={handleBtns}>
        Trà trái cây
          {/* <span><img className={classes.categoryImage} src={bread} alt='bread' /></span> */}
        </button>
        <button className={classes.singleButton} value="Đá xay" onClick={handleBtns}>
        Đá xay
          {/* <span><img className={classes.categoryImage} src={salad} alt='bread' /></span> */}
        </button>
      </div>





      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default Foods;
