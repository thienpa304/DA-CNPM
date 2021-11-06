import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import DishListContainer from "../../components/DishList/DishList.container";
import MenuManager from "../../components/MenuManager/MenuManager";

class HomeRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path="/home/kitchen-orders" component={DishListContainer} />
        <Route path="/home/menu-manager" component={MenuManager} />
      </Switch>
    );
  }
}

export default HomeRouter;
