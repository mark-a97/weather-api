import React from "react";

import Container from 'react-bootstrap/Container';

import Footer from './components/Footer';
import Request from './components/Request';

function App() {
  return (
          <Container className="p-0" fluid>
            <Request />
            <Footer/>
          </Container>

  );
}

export default App;
