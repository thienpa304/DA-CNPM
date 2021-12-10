import React, {Component} from 'react';
import { Container } from 'reactstrap';
import Nav from './NavigationView'
import classes from './HomeComponent.module.css'

class Home extends Component {

    render(){
        return(
            <Container>
                <Nav />
                <div className={classes.banner}>
                    <img src='/assets/images/jumbotron.png' alt="Ảnh" />
                </div>
            </Container>
        );
    }
}

export default Home;