import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import dateFormat from 'dateformat';
import Card from 'react-bootstrap/Card';

const props = {
    searched: false,
    value: "",
}

const Request = () => {

    const api = {
        key: "f180253d03ad43ba851194056211408",
        base: "https://api.weatherapi.com/v1/"
      }
    const [query, setQuery] = useState();
    const [weather, setWeather] = useState({});
    
    const search = (evt) => {
      if(evt.key === "Enter"){
        fetch(api.base + "forecast.json?key="+api.key+"&q="+query+"&days=5&aqi=no&alerts=no")
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        })
        .catch((error) => {
          console.log("Error " + error);
        })
        ;
        props.searched = true;
        props.value = query;
      }
      
    }
    const getTime = (date) => {
      date = date.substring(0, date.length - 3);
      return date;
    }
    const convert = (date) => {
      date = dateFormat(date, "mmmm dS");
      return date;
    }
    
    const pageBackground = typeof weather.location != "undefined" ? weather.current.condition.text : null;    
    return (
        <div  className={ pageBackground != null && pageBackground.includes('rain')     ? 'main-rain' : 'main'     &&
                          pageBackground != null && pageBackground.includes("Clear")    ? 'main-clear' : 'main'    &&
                          pageBackground != null && pageBackground.includes("Sunny")    ? 'main-sunny' : 'main'    &&
                          pageBackground != null && pageBackground.includes("Fog")      ? 'main-fog'   : 'main'    &&
                          pageBackground != null && pageBackground.includes("Overcast") ? 'main-overcast' : 'main' && 
                          pageBackground != null && pageBackground.includes("Partly")   ? 'main-partly-cloudy' : 'main'
        }>
          <Container className={props.searched === false ? 'main-container' : 'main-container-searched'}>
            <div className="search-box">
              <input 
                type="text"
                className="search-bar"
                placeholder="search location..."
                onChange={e => setQuery(e.target.value)}
                value={query || ''}
                onKeyPress={search}
              />
            </div>
                
            <Card.Title className="text-center text-white mb-5 text-location">{typeof weather.location != "undefined" ? 
                                                                                <p>{weather.location.name},&nbsp;
                                                                                   {weather.location.country}
                                                                                </p> : ''} </Card.Title>
            <Row md={6}className="text-center">
            {typeof weather.location != "undefined" ? weather.forecast.forecastday.map((data, index) => {
              return(

                      <Col key={index} className="card-color m-auto card-style col-md-6" sm={12} md={6}>
                        <Card.Title className="p-2">{convert(data.date)}</Card.Title>
                        <Card.Img className="bg-light weather-img"style={{height: "30%", width: "30%"}}variant="top" src={data.day.condition.icon}></Card.Img>
                        {index === 0 ? 
                                    <div className="current-temp-div">
                                      <p className="current-temp">{weather.current.temp_c}&#8451;</p>
                                      <p className="current-temp">Feels like {weather.current.feelslike_c}&#8451;</p>
                                    </div>
                                    : <div className="avg-temp-div"><p className="avg-temp">Average temp: {Math.round(data.day.avgtemp_c)}&#8451;</p></div>}
                        
                        <Card.Body className="card-body">
                          <div className="sun-container">
                            <i style={{color: "yellow"}}className="icon far fa-sun"></i>
                            <Card.Text className="weather-sun">{getTime(data.astro.sunrise)}</Card.Text>&nbsp;&nbsp;&nbsp;
                          </div>
                          <div className="sun-container" style={{float: 'right'}}>
                            <i style={{color: "black"}}className="far fa-moon"></i>
                            <Card.Text className="weather-sun">{getTime(data.astro.sunset)}</Card.Text>
                          </div>
          
                
                          <div className="temp-container">
                            <i style={{color: "red"}} className="fab fa-hotjar"></i>
                            <Card.Text>{Math.round(data.day.maxtemp_c)}&#8451;</Card.Text>&nbsp;&nbsp;&nbsp;
                          </div>
                          <div className="temp-container" style={{float: 'right'}}>
                            <i style={{color: "blue"}}className="fas fa-thermometer-empty"></i>
                            <Card.Text>{Math.round(data.day.mintemp_c)}&#8451;</Card.Text>
                          </div>

                        </Card.Body>
                        <Card.Footer><small>{data.day.daily_chance_of_rain > 1 ?
                                            data.day.daily_chance_of_rain+"%" : 
                                                                              ""} 
                                            ({data.day.condition.text})</small></Card.Footer>
                      </Col>
            
              )
            })    
          : "" } 
          </Row>
          {props.searched === true && typeof weather.location === "undefined" ? <p className="search-header">Search: "{props.value}" returned false</p> : ''}
          {props.searched === false && <p className="search-header">Please search a country or city to begin :)</p>}            
        </Container>
      </div>    
    )
}

export default Request;
