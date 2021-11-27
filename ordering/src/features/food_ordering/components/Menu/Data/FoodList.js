import classes from '../MenuView/Menu.module.css';

const DUMMY_MEALS = [
  {
    id: 6,
    category: "Cà phê",
    name: "Latte Nóng",
    price: 2.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/6.jpg' alt='item'/>
  },
  {
    id: 7,
    category: "Cà phê",
    name: "Latte Đá",
    price: 2.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/7.jpg' alt='item'/>
  },
  {
    id: 8,
    category: "Cà phê",
    name: "Americano Đá",
    price: 2.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/8.jpg' alt='item'/>
  },
  {
    id: 9,
    category: "Trà trái cây",
    name: "Trà Đào Cam Sả",
    price: 2.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/9.jpg' alt='item'/>
  },
  {
    id: 10,
    category: "Trà trái cây",
    name: "Trà Long Nhãn Hạt Chia",
    price: 2.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/10.jpg' alt='item'/>
  },
  {
    id: 11,
    category: "Trà trái cây",
    name: "Trà Sen",
    price: 2.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/11.jpg' alt='item'/>
  },
  {
    id: 12,
    category: "Đá xay",
    name: "Cà Phê Đá Xay",
    price: 2.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/12.jpg' alt='item'/>
  },
  {
    id: 13,
    category: "Đá xay",
    name: "Matcha Đá Xay",
    price: 2.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/13.jpg' alt='item'/>
  },
  {
    id: 14,
    category: "Đá xay",
    name: "Sinh Tố Việt Quất",
    price: 2.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/14.jpg' alt='item'/>
  }
];

export default DUMMY_MEALS;