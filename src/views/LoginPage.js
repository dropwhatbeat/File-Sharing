import React, { useState } from "react";

import {
    Form,
    Button,
    Container,
    Row,
    Col
  } from "react-bootstrap";

function LoginPage(props) {

    const [userDeed, setuserDeed] = useState({
        email:"",
        password:""
    });

    function handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setuserDeed(prevState => ({
            ...prevState,
            [name]:value
        }))
        console.log(userDeed)
    }

    function handleSubmit(event){
        if ( userDeed.email == "bob@ipes.com" && userDeed.password == "admin"){
            props.onChange(userDeed.email);
            console.log(`${userDeed.email} successfully logged in`)
        } else {
            console.log("wrong email or password")
        }
        event.preventDefault();
    }

    return (
        <Container>
            <Row className="align-items-center">
                <h1>Welcome to Inter-Planetary Education System</h1>
            </Row>
            <Row className="align-items-center">
                <h1></h1>
            </Row>
            
            <Row>
                <Col></Col>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange}/>
                            <Form.Text className="text-muted">
                            use "bob@ipes.com"
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange}/>
                            <Form.Text className="text-muted">
                            use "admin"
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
        </Container>
        
    );
}

export default LoginPage;