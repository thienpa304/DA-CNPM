import React, { Component } from "react";
import Button from "@material-ui/core/Button/Button";
import {ThemeProvider } from '@mui/material/styles';
import "./NavigationMenuItem.scss";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import NavigationLink from "../NavigationLink/NavigationLink";
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
});

interface INavigationMenuItemProps {
  title: string;
  path: string;
  disabled?: boolean;
}

class NavigationMenuItem extends Component<INavigationMenuItemProps> {
  render() {
    const { title, path, disabled } = this.props;

    return (
      <div className="NavigationMenuItem">
        <ErrorBoundary>
          {disabled ? (
            <Button
              className="NavigationMenuItem-Button"
              variant="contained"
              disabled
            >
              {title}
            </Button>
          ) : (
            <NavigationLink to={path}>
               <ThemeProvider theme={theme}>
              <Button className="NavigationMenuItem-Button"  variant="contained" color="info" >
                {title}
              </Button>
           </ThemeProvider>
            </NavigationLink>
          )}
        </ErrorBoundary>
      </div>
    );
  }
}

export default NavigationMenuItem;
