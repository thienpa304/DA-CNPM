import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";

import "./NavigationBar.scss";
import { currentPath } from "../../helpers";
import Logout from "../Logout/Logout";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import NavigationLink from "../NavigationLink/NavigationLink";
import NavigationMenuItem from "../NavigationMenuItem/NavigationMenuItem";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {theme} from '../Logout'
interface NavigationBarProps {
  location?: any;
}
class NavigationBar extends Component<NavigationBarProps> {
  private get shouldRenderBackBtn(): boolean {
    return !!currentPath.isHomeSubroute();
  }
  render() {
    return (
      <div className="NavigationBar">
        <ErrorBoundary>
        <AppBar position="static" style={{ background: '#aa8b76  ' }}>
            <Toolbar className="NavigationBar-Toolbar">
              {this.shouldRenderBackBtn ? (
                <NavigationLink to="/">
                  <ThemeProvider theme = {theme}>
                  <Button variant="contained" color = "secondary">
                    Home
                  </Button>
                  </ThemeProvider>
                </NavigationLink>
              ) : null}
              <Typography variant="h6" color="inherit">
                Ahuhu Coffee Manager
              </Typography>
               {/* ////////////////////////////////////////////////// */}

            <NavigationMenuItem
              title="Kitchen orders"
              path="/home/kitchen-orders"
            />
            <NavigationMenuItem
              title="Menu Manager"
              path="/home/menu-manager"
            />

              {/* ////////////////////////////////////////////////// */}
              <Logout />
            </Toolbar>
          </AppBar>
        </ErrorBoundary>
      </div>
    );
  }
}

export default NavigationBar;
