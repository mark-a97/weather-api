import React from 'react';

import Hero from '../components/Hero';
import Container from 'react-bootstrap/Container';

import Card from '../Cards/Cards';

const cardType = [
    {
        type: "done",
    },
    {
        type: "todo",
    }
];

function HomePage(props){
    return(
        <div>
            <Container>
                <Hero  title={props.title} subTitle={props.subTitle} para={props.para} />
                <Card mode={props.mode} type={cardType[0].type}/>
            </Container>

            <Container className="border-top p-3"> 
                <Hero subTitle="Projects I am working on"></Hero>
                <Card mode={props.mode} type={cardType[1].type}/>
            </Container>
        </div>
        );
}

export default HomePage;