import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Home from './HomeComponent';
import Payment from '../payment/PaymentComponent';
import Ordering from '../food_ordering/OrderingController'
import FoodMenu from '../food_ordering/FoodMenuController';
import DrinkMenu from '../food_ordering/DrinkMenuController';
import SearchPage from '../food_ordering/components/SeacrhPage/SearchPageController';
import Footer from './FooterComponent'

class Main extends Component {
	render(){
        return (
            <div>
                <div>
                    <Switch>
                        <Route path='/home' component={Home} />
                        <Route path='/payment' component={Payment} />   
                        <Route path='/ordering' component={Ordering} />
                        <Route path='/food-menu' component={FoodMenu} />
                        <Route path='/drink-menu' component={DrinkMenu} />
                        <Route path='/search-item' component={SearchPage} />
                        <Redirect to="/home" />
                    </Switch>
                </div>
                <Footer />
            </div>

        );
    }
}

export default Main;