import React, { Component } from "react";

import "./NavigationMenu.scss";
import { currentPath } from "../../helpers";
import NavigationMenuItem from "../NavigationMenuItem/NavigationMenuItem";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

interface INavigationMenuState {
  shouldRenderMenu?: boolean;
}

class NavigationMenu extends Component<INavigationMenuState> {
  private get shouldRenderMenu(): boolean {
    return !currentPath.isHomeSubroute();
  }

  render() {
    return (
      <ErrorBoundary>
        {this.shouldRenderMenu ? (
          <div className="NavigationMenu">
            <div className="Slogan">
              <h1 style={{color: "white",margin:"center"}}>AHUHU COFFEE MANAGER </h1>
              <h3 style={{color: "white"}}>"Coffee - The Flavor Of Life"</h3>
            </div>
          </div>) : null}
          
        
      </ErrorBoundary>
    );
  }
}

export default NavigationMenu;
{/* <NavigationMenuItem
              title="Kitchen orders"
              path="/home/kitchen-orders"
            />
            <NavigationMenuItem
              title="Menu Manager"
              path="/home/menu-manager"
            /> */}