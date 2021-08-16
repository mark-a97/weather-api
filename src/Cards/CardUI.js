import React from 'react';

import Container from 'react-bootstrap/Container'
import '../Cards/card-style.css'
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import Button from '../Cards/Button';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';


const Card = (props) => {
    const [anchor, setAnchor] = useState(null);
    const openPopover = (event) => {
        setAnchor(event.currentTarget);
    };
    return (
      
        <Container className={props.mode === true ? "card-dark text-center this-img" : "card-light text-center this-img"}>
            <div className="overflow">
                <img src={props.imgSrc} alt="img" className="card-img-top"/>
            </div>
            <div className={props.type === "todo" ? "card-body-todo text-dark" : "card-body text-dark" }>
            
            
                <h4 sm={6} className={props.mode === true ? "card-title color-dark" : "card-title color-light"}>{props.title}</h4>
                {props.year !== undefined && <p className={props.mode === true ? "card-text-dark p-0 mt-0" : "card-text-light p-0 mt-0"}>({props.year})</p>}
                <p className={props.mode === true ? "card-text-dark" : "card-text-light"}>{props.desc}</p>
                    
                    <Container className="mx-auto d-flex justify-content-around">
                   
                    {props.type !== "todo" && 
                        <Button link={props.git} classType={props.disabled === true ? "btn btn-disabled btn-margin" : props.classType} text={
                            props.downloadable === true ? 
                            "Download" : "View Project"}/> 
                        }
                    {props.type !== "todo" &&
                        <Button link={props.link} classType={props.classType} text="View Github"/>
                    }
                    
                  
                    </Container>
                <Container>
                <Row>
                    <i
                        onClick={openPopover}
                        style={{cursor: 'pointer'}}
                        variant="contained"
                        className={props.mode === true ? "information-card fas fa-info-circle mt-5" : "fas fa-info-circle mt-5"}>
                    </i>
                </Row>
                   <Popover open={Boolean(anchor)} anchorEl={anchor}
                        anchorOrigin={{vertical: "bottom", horizontal: "center",}}
                        transformOrigin={{vertical: "top", horizontal: "center",}}
                        onClose={() => setAnchor(null)}>
                        <Typography className={props.mode === true ? "info-para-dark" : "info-para-light"} >{props.info}</Typography>
                    </Popover>
                </Container>
            </div>
        </Container>
    );
}

export default Card;