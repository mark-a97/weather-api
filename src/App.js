import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';

import { Switch, Paper } from '@material-ui/core';
import {ThemeProvider, createTheme } from '@material-ui/core/styles';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Loader from './components/Loader';


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: 'Mark Angus',
      darkMode: false,
      loading: true,
      navLinks: [
        { title: 'Home', path: '/portfolio/home'},
        { title: 'About', path: '/portfolio/about'},
        { title: 'Contact', path: 'portfolio/contact'},
      ],
      home: {
        title: 'Computer Science Graduate',
        subTitle: 'Graduated July 2021',
        para: 'Checkout my projects below',
      },
      about: {
        title: 'About me',
      },
      contact: {
        title: 'Don\'t hesitate to contact me!',
      },
    }
  }
 
  componentDidMount() {
    this.timerHandle = setTimeout(() => this.setState({ loading: false }), 1000); 
  }
  componentWillUnmount(){
    if (this.timerHandle) {
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  }

  setMode(){
    const currentState = this.state.darkMode;
    this.setState({ darkMode: !currentState }); 
}

  render(){
    const theme = createTheme({
      palette: {
        type: this.state.darkMode ? "dark" : "light",
      }
    })

    return (
    
      <Router>
         <ThemeProvider theme={theme}>
        <Paper>
        <Container className="p-0" fluid={true}>

          <Navbar className="text-white" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand className="nav-name"><Link className="nav-link title-name" to="/portfolio/home">{this.state.title}</Link></Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ms-auto me-3 text-center">
                <Switch className="mode-switch"
                        color="default"
                        style={{color: 'yellow'}}
                        icon={this.state.darkMode === false && <i className="fas fa-moon"></i>}
                        checkedIcon={this.state.darkMode === true && <i className="fas fa-sun" ></i> }
                        checked={this.state.darkMode}
                        onClick={this.setMode.bind(this)} 
                />
                <Link className="nav-link" to="/portfolio/home">Home</Link>
                <Link className="nav-link" to="/portfolio/about">About</Link>
                <Link className="nav-link" to="/portfolio/contact">Contact</Link>              
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Container className="body-height">

          {this.state.loading === true && <Loader />}
          
          <Route exact path="">
            <Redirect to="/portfolio/home"/>
          </Route>
            <Route path="/portfolio/home" render={() => 
            <HomePage classname=""
                      title={this.state.home.title}
                      subTitle={this.state.home.subTitle}
                      para={this.state.home.para} 
                      mode={this.state.darkMode}
                      
            />} />
            <Route path="/portfolio/about" render={() => 
            <AboutPage 
                      title={this.state.about.title}
                      mode={this.state.darkMode}
            />} />

            <Route path="/portfolio/contact" render={() => 
            <ContactPage 
                      title={this.state.contact.title}
                      mode={this.state.darkMode}
            />} />
            
          </Container>
        </Container>
        <Footer />
        </Paper>
      </ThemeProvider>
      </Router>
   
    );

  }
  
}

export default App;
