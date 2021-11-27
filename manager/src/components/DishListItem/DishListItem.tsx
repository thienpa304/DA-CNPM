import React, { Component } from "react";
import moment from "moment";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";

import "./DishListItem.scss";
import { IDish } from "../../models";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import{theme} from "../Logout"
import { createTheme, ThemeProvider } from '@mui/material/styles';
interface IDishListItemProps {
  dish: IDish;
}

class DishListItem extends Component<IDishListItemProps> {
  state = {
    checked: false
  };

  handleCooked = () => {
    this.setState({
      checked: !this.state.checked
    });
  };

  transformTimestamp(timestamp: number): string {
    return moment(timestamp).format("hh:mm");
  }

  getTargetDetails(dish: IDish): string {
    return `${this.transformTimestamp(dish.orderedAt)}, ${dish.table}`;
  }

  render() {
    const { dish } = this.props;

    return (
      <ErrorBoundary>
        <ListItem style={{ background: '#FFFAF7'}}
          className="DishListItem"
          key={dish.id}
          button
          onClick={this.handleCooked}
        >
          <ListItemText
            className="DishListItem-details quantity"
            primary={`${dish.quantity}`}
          />
          <ListItemText
            className="DishListItem-details target"
            primary={this.getTargetDetails(dish)}
          />
          <ListItemText
            className="DishListItem-details dish"
            primary={dish.name}
            secondary={dish.comment || ""}
          />

          <ThemeProvider theme={theme}>
          <Checkbox
            checked={!!this.state.checked}
            tabIndex={-1}
            disableRipple
            color = "secondary"
          />
          </ThemeProvider>
        </ListItem>
      </ErrorBoundary>
    );
  }
}

export default DishListItem;
