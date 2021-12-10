import classes from '../MenuView/Menu.module.css';


const DUMMY_MEALS = [
  {
    id: 1,
    category: "Bun",
    name: "Chocolate Donut",
    price: 3.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/1.jpg' alt='item'/>
  },
  {
    id: 2,
    category: "Bun",
    name: "Sugar Donut",
    price: 2.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/2.jpg' alt='item'/>
  },
  {
    id: 3,
    category: "Toast",
    name: "Cranberry Toast",
    price: 2.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/3.jpeg' alt='item'/>
  },
  {
    id: 4,
    category: "Toast",
    name: "Dark Rye Toast",
    price: 2.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/4.jpg' alt='item'/>
  },
  {
    id: 5,
    category: "Dry Cake",
    name: "Japan Light Cheese",
    price: 5.02,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/5.jpg' alt='item'/>
  }
];

export default DUMMY_MEALS;