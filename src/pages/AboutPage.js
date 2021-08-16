import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table'

import Hero from '../components/Hero';
import portfolioImage from '../assets/images/portfolio-image.png'

function AboutPage(props){
    return(
        <div>
            <Hero title={props.title}></Hero>
            <Container className="pt-4" fluid>
            <Row className="justify-content-center">
                <Col>
                    <img className="porfilio-image img-fluid img-thumbnail" src={portfolioImage} alt="img"/>
                </Col>
                <Col className="about-me" ml={12} lg={6}>
                    <p className="blockquote-footer mt-1">Mark Angus</p>
                    <p className="lh-lg">Having grown up in Rochester, I graduated with a first-class degree in Computer Science from the University of Brighton.
                        After reaching my goal and graduating, I am now looking to start off an exciting career in web development
                        with a reputable and growing company to which I can progress alongside.
                    </p>
                        
                    <p className="lh-lg">
                        I first discovered my love for computing back in school, which encouraged me to take my next step to study it further in college, successfully completing a BTEC in Information Technology. It was during my course at college where I was able to grasp an understanding and gain an insight into the different sectors of the computing industry, 
                        which is where I found my interest in web development.
                    </p>
                        
                    <p className="lh-lg">
                        After having a couple of years out of education, I took this time to develop invaluable life skills and good work ethic. I started my first job at Subway, and quickly progressed to the role of manager before transitioning to a new role as bar supervisor at Chiquito,
                        where I built up my skills in customer service and maintaining client relations.
                    </p>

                    <p className="lh-lg">
                        After completing my degree at university, my interest in web development has progressed even further, as shown in the detail of the projects which can be seen within my portfolio. I am very interested in starting a position within the full-stack department but am still open to other possibilities.
                        I am continuing to keep up to date on new developments within the industry and I constantly strive to learn and develop on new skills that I can bring to the table.
                    </p>
                        
                </Col>
            </Row>

            <Row className="table-section border-top mt-5">
               <h2 className="text-center mt-3">Skills learnt</h2>
               <Col className="mb-lg-5">
                <Table striped bordered hover responsive="sm" className="mt-4" variant={props.mode === true ? "dark" : "light"}>
                    <thead>
                    <tr>
                        <th>Skill</th>
                        <th>Competence</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>JavaScript</td>
                        <td>High</td>
                    </tr>
                    <tr>
                        <td>HTML &#38; CSS</td>
                        <td>High</td>
                    </tr>
                    <tr>
                        <td>PHP</td>
                        <td>High</td>
                    </tr>
                    <tr>
                        <td>React</td>
                        <td>Low (learning)</td>
                    </tr>
                    <tr>
                        <td>Laravel</td>
                        <td>Low (learning)</td>
                    </tr>
                    </tbody>
                </Table>
                </Col>
                <Col>
                <Table striped bordered hover responsive="sm" className="mt-4" variant={props.mode === true ? "dark" : "light"}>
                    <thead>
                    <tr>
                        <th>Skill</th>
                        <th>Competence</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>SQL</td>
                        <td>Medium</td>
                    </tr>
                    <tr>
                        <td>Bootstrap</td>
                        <td>Low (learning)</td>
                    </tr>
                    <tr>
                        <td>Java</td>
                        <td>Medium</td>
                    </tr>
                    <tr>
                        <td>Python</td>
                        <td>Low</td>

                    </tr>
                    <tr>
                        <td>C#</td>
                        <td>Low</td>
                    </tr>
                    </tbody>
                </Table>
                </Col>
            </Row>
        </Container>
    </div>
    );
}

export default AboutPage;