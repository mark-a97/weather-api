import React from 'react';
import emailjs from 'emailjs-com';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'

import Hero from '../components/Hero';
import Content from '../components/Content';
import Loader from '../components/Loader.js'


class ContactPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
            loading: null,
            errMsg: ""
        }
    }

    handleChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name] : value,
        });
    }
   
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.message === "" || this.state.message === "" || this.state.name === ""){
            this.setState({
                emailSent: false,
                errMsg: "Please fill out all the details correctly.",
            })
        }
        else {
            this.setState({loading: true}, () => {
                emailjs.sendForm('service_vkkws8y', 'template_gtdzcex', e.target, 'user_gAADbKQrFPlBX37tllbNQ')     
                .then((result) => {
                    console.log(result.text);
                    this.setState({
                        disabled: true,
                        emailSent: true,
                        loading: false,
                    });
                }, (error) => {
                    console.log(error.text);
                });
            })
        }
    }
   
    render(){
        const {loading} = this.state;
       
        return(
            <div>  
                <Hero title={this.props.title}></Hero>
                {this.state.emailSent === true && 
                <Alert variant="success">
                    <Alert.Heading>Thank you for getting in contact!</Alert.Heading>
                    <p>Feel free to continue browsing my portfilio and send me any further enquiries you may have :)</p>
                <hr />
                </Alert> }
                <Content>
                    <Form className={this.props.mode === true ? "contact-form-dark" : "contact-form-light"} onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea" rows="6" value={this.state.message} onChange={this.handleChange}/>
                        </Form.Group>

                        
                        <Button className="mt-3 text-center"
                                onClick={this.showAlert}
                                variant="primary"
                                type="submit"
                                disabled={this.state.disabled}
                                >Send! </Button>

                        {loading ? <Loader /> : this.state.loading === false }
                   
                        {this.state.emailSent === true && <p className="text-left p-0 mt-3 success-msg">Email sent!</p>}
                        {this.state.emailSent === false && <p className="text-left p-0 mt-3 err-msg">Email failed! {this.state.errMsg}</p>}
                    </Form>
                </Content>
            </div>
        );
    }   
}

export default ContactPage;