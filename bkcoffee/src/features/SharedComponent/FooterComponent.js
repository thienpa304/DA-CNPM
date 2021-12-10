import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';

class Footer extends Component {
    render(){
        return(
        <div className="footer">
            <Container >
                <br />
                <Row>

                    <Col>
                        <Row>
                            <Col className="footer-header"> <Col> Help  </Col> </Col>
                        </Row>
                        <Row>
                            <Col className="footer-content"> <Col>
                            Help center <br />
                            Contact support <br />
                            Instructions <br />
                            How it works <br />
                            </Col> </Col>
                        </Row>
                    </Col>
                </Row>
                <br />
            </Container>
        </div>
        );
    }
}

export default Footer;