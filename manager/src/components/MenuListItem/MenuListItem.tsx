import React, { Component } from "react";
import moment from "moment";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import "./MenuListItem.scss";
import {IDish} from "../../models";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import DishList from "../DishList/DishList";
import Box from "@material-ui/core/Box"
import Rating from "@material-ui/core/Rating"
import StarIcon from "@material-ui/icons/Star"
import Typography from "@material-ui/core/Typography"

interface IMenuListItemProps {
  dish: IDish;
}

class MenuListItem extends Component<IMenuListItemProps> {
  state = {
    counter: this.props.dish.rest
  };
  handleIncrement = () => {
    this.setState(state => ({ counter: ++this.props.dish.rest }));
  };

  handleDecrement = () => {
    this.setState(state => ({ counter: this.props.dish.rest > 0 ?--this.props.dish.rest : 0}));
  };
  render() {
   
    const { dish } = this.props;
    const displayCounter = this.state.counter >= 0
    return (
      <ErrorBoundary>
        <ListItem style={{ background: '#FFFAF7'}}
          className="DishListItem"
          key={dish.id}
          button
        >
          <ListItemText
            className="DishListItem-details quantity"
            primary={`${dish.id}`}
         
          />
          <ListItemText
            className="DishListItem-details dish"
            primary={dish.name}
            secondary={this.state.counter > 10 ? `Abudant: ${dish.rest}` : `Almost Over: ${dish.rest} `}
          />



          <Rating className= "DishListItem-details rating" name="half-rating-read" defaultValue={dish.rating} precision={0.5} readOnly />
          <Paper>
            <img className="DishListItem-details img" src={`${dish.img}`} alt="" />
          </Paper>
        <ButtonGroup size="small" aria-label="small outlined button group">
        <Button className= "DishListItem-details btn" onClick={this.handleDecrement}>-</Button>
        {displayCounter && 
         <Button style= {{width:50}} >{dish.rest}</Button>}
         {displayCounter && 
        <Button onClick={this.handleIncrement}>+</Button>}
      </ButtonGroup>          
        </ListItem>
      </ErrorBoundary>
    );
  }
}
export default MenuListItem;