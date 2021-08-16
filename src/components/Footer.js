import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Footer(){
    return(
        <footer className="bg-dark text-white">
        <Container fluid={true}>
            <Row className="text-center pt-3">
                <ul className="list-unstyled">
                    <li>Mark Angus,</li>
                    <li>23 Tupman Close,</li>
                    <li>Rochester, Kent,</li>
                    <li>ME1 1RS</li>
                </ul>           
            </Row>
            <Row className="border-top text-center pt-3">
            <ul className="icon-list list-unstyled md-3 d-flex justify-content-center">
                    <li>07907483215</li>
                    <li><a href="mailto:markrangus@outlook.com?subject"><i className="fas fa-at"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/mark-angus-6a75bb211/" target="_blank" rel='noreferrer'><i className="fab fa-linkedin"></i></a></li>
                    <li><a href="https://github.com/mark-a97" target="_blank" rel='noreferrer'><i className="fab fa-github"></i></a></li>
                </ul>
            </Row>
            <Row className=" mt-0 text-center text-secondary">
              
                    <p>©Mark Angus</p>
                        
            </Row>
        </Container>
    </footer>
    );
}

export default Footer;
