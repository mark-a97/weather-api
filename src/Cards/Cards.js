import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from './CardUI';

import img from '../assets/images/img.png';
import react from '../assets/images/react.png';
import museum from '../assets/images/VandA.png';
import journal from '../assets/images/journal.png';
import helpdesk from '../assets/images/helpdesk.png';
import weather from '../assets/images/weather.jpg';
import laravel from '../assets/images/laravel.png';
import game from '../assets/downloadable/Break0ut.jar';

class Cards extends Component{
  
    constructor(props){
        super(props);
        this.state = {
            cardDetails: [
                {
                    id: 1,
                    imgSrc: helpdesk,
                    title: "Online Help Desk",
                    desc: 'Final year project using JavaScript and PHP',
                    linkProject: "https://mra25.brighton.domains/helpdesk/login.php",
                    linkGit: "https://github.com/mark-a97/online-help-desk",
                    classType: "btn btn-success btn-margin",
                    projectInfo:'Follows many CRUD operations, is fully responsive and has a up to date design. My favourite project so far that I have completed',                                                                                        
                    year: '2021',
                },
                {
                    id: 2,
                    imgSrc: react,
                    title: "React-API",
                    desc: 'Creating and displaying my own API using React & PHP',
                    linkProject: null,
                    linkGit: "https://github.com/mark-a97/react-api/tree/main/react-api/Angus_Mark_18808552_CI609_assignment",
                    classType: "btn btn-success btn-margin",
                    projectInfo: 'Project created in my last year of university, first time attempting react with PHP along with creating my own API. Unfortunately the link does not seem to be' +
                    ' working properly, feel free to browse the GitHub',
                    year: '2020',
                    disabled: true,
                },     
                {
                    id: 3,
                    imgSrc: museum,
                    title: "Museum-API",
                    desc: 'Connecting to the V&A museum API and displaying results with vanilla JS',
                    linkProject: "http://mra25.brighton.domains/ci527/assignment1/index.html",
                    linkGit: "https://github.com/mark-a97/museum-api",
                    classType: "btn btn-success btn-margin",
                    projectInfo: 'Project created in my second year of university. Task was to connect to an API using vanilla JS.',                                                                     
                    year: '2020',
                },
                {
                    id: 4,
                    imgSrc: img, 
                    title: "Break0ut Game",
                    desc: 'Break0ut game using MVC made in my first year of university in Java',
                    linkProject: game,
                    linkGit: "https://github.com/mark-a97/break0ut",
                    classType: "btn btn-success btn-margin",
                    projectInfo: 'Project created in my first year of university. Had fun creating the game, unfortunately when compiled the sound does not appear to be working'
                                    + ' along with the pressing of the key "S", so please do not press to complete the game',    
                    downloadable: true,                                                              
                    year: '2019',
                },     
                {
                    id: 5,
                    imgSrc: journal, 
                    title: "Learning Journal",
                    desc: 'A 9 week learning journal of the skills I learnt using HTML, CSS and JavaScript',
                    linkProject: "https://mra25.brighton.domains/first-year/learning-journel/index.html",
                    linkGit: "https://github.com/mark-a97/learning-journal",
                    classType: "btn btn-success btn-margin",
                    projectInfo: 'Learning journal created in my first year of university, allowed me to refresh myself on key web skills and has brought me to where I am today.',                                                               
                    year: '2018',
                },     
            ],
            todoProjects: [
                {
                    id: 1,
                    title: "Weather API",
                    imgSrc: weather, 
                    desc: 'Using react to connect to a weather API',
                    linkProject: "",
                    linkGit: "https://github.com/mark-a97/break0ut",
                    classType: "btn btn-danger btn-margin",
                    type: "todo",
                    projectInfo: "As I am only recently refreshing myself on how to use React and my older API's seem to not be working as they used to" +
                     ", I will be connecting to a new API I have not used before",
                },
                {
                    id: 2,
                    title: "Laravel Project",
                    imgSrc: laravel, 
                    desc: 'Learning Laravel with React',
                    linkProject: "",
                    linkGit: "https://github.com/mark-a97/break0ut",
                    classType: "btn btn-danger btn-margin",
                    type: "todo",
                    projectInfo: "In my Help Desk project I used vanilla JS and PHP, I am now looking into learning frameworks so I will be using React alongside Laravel to gain a better understanding and improve my skills",
                }
            ],
        }
    }
    
        render(){
            return(
                <Container fluid className="d-flex justify-content-center mb-5 ">
                    <Row lg={3} md={2}xs={1}>
                        {this.props.type === "done" ? this.state.cardDetails.map((card) => (
                            <Col className="md-4" key={card.id}>
                                <Card 
                                    title={card.title}
                                    desc={card.desc}
                                    info={card.projectInfo}
                                    imgSrc={card.imgSrc}
                                    git={card.linkProject}
                                    link={card.linkGit}
                                    classType={card.classType}
                                    downloadable={card.downloadable}
                                    year={card.year}
                                    disabled={card.disabled}
                                    mode={this.props.mode}
                                />
                        </Col>
                        )) : this.state.todoProjects.map((card) => (
                            <Col className="md-4 text-left" lg={6} key={card.id}>
                                <Card 
                                    title={card.title}
                                    desc={card.desc}
                                    info={card.projectInfo}
                                    imgSrc={card.imgSrc}
                                    git={card.linkProject}
                                    link={card.linkGit}
                                    classType={card.classType}
                                    type={card.type}
                                    mode={this.props.mode}
                                />
                            </Col>
                        ))
                        
                    } 
                    </Row>
                </Container>
            );
        }
}
export default Cards;