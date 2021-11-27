import React, { Component } from "react";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button/Button";

import "./DishList.scss";
import { IDish } from "../../models";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import DishListItem from "../DishListItem/DishListItem";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { relative } from "path";
interface IDishListProps {
  dishList: IDish[];
  onLoadMore?: any;
  canFetchMore?: boolean;
}

class DishList extends Component<IDishListProps> {
  render() {
    const { dishList, onLoadMore, canFetchMore } = this.props;

    return (
      <div className="DishList">
        <ErrorBoundary>
        <ListItem style={{ background: '#FFFAF7'}}
          className="DishListItem"
        >
        <ListItemText 
            className="Quantity"
            primary={`Quantity`}
          />
          <ListItemText
            className="Position"
            primary={`Position`}
          />
          <ListItemText
            className="Dishes"
            primary={`Dishes`}
          />
          <ListItemText
            className="Served"
            primary={`Served`}
          />
        </ListItem>
          <List>
            {dishList.map((dish, index) => (
              <DishListItem dish={dish} key={index} />
            ))}

            {canFetchMore ? (
              <Button  onClick={onLoadMore}>Load more</Button>
            ) : null}
          </List>
        </ErrorBoundary>
      </div>
    );
  }
}

export default DishList;
