import React, { Component } from "react";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button/Button";

import "./MenuManager.scss";
import { IDish } from "../../models";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import MenuListItem from "../MenuListItem/MenuListItem";


interface IDishListProps {
    menuList: IDish[];
  onLoadMore?: any;
  canFetchMore?: boolean;
}

class DishList extends Component<IDishListProps> {
  render() {
    const { menuList, onLoadMore, canFetchMore } = this.props;

    return (
      <div className="DishList">
        <ErrorBoundary>
          <List>
          {menuList.map((dish, index) => (
              <MenuListItem dish={dish} key={index} />
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
