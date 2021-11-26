import MealItem from '../Menu/MenuItems/ItemView';
import classes from '../Menu/MenuView/Menu.module.css';
import itemList from '../Menu/Data/TempList';
import { useState } from 'react';
import SearchBar from './SearchBar/CardSearchBar';





const Foods = () => {




    const getFilteredItems = (query, items) => {
      if (!query) {
        return items;
      }
      return items.filter((song) => song.name.toLowerCase().includes(query));
    };






  
    const [query, setQuery] = useState(itemList);
    const filteredItems = getFilteredItems(query, itemList);
  



    return (
      <section className={classes.meals}>



        <div className={classes.searchBar}>
          <label>Tìm kiếm </label>
          <input type="text" onChange={(e) => setQuery(e.target.value)} />
        </div>



        <div className={classes.text}>
          <p>Kết quả tìm kiếm</p>
        </div>




        <SearchBar>
          {filteredItems.map((value) => (
            <ul key={value.name}>     
              <MealItem
                key={value.id}
                category={value.category}
                id={value.id}
                name={value.name}
                price={value.price*23000}
                image={value.image}
              /> 
            </ul>
          ))}
        </SearchBar>




      </section>
    );
};




export default Foods;