import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero(props){
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0 ">
            <Container fluid={true}>
                <Row className="justify-content-center pt-4">
                    <Col className="text-center">
                        { props.title && <h1 className="display-3 fw-bold">{props.title}</h1> }
                        { props.subTitle && <h3 className="display-4 fw-light">{props.subTitle}</h3> }
                        { props.para && <h3 className="lead fw-light">{props.para}</h3> }
                    </Col>
                </Row>
            </Container> 
        </Jumbotron>
    );
}

export default Hero;