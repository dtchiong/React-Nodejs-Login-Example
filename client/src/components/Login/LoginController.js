import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import "./LoginController.css";
class LoginController extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    console.log("changed");
  };

  render() {
    return (
      <div className="form-login-container d-flex align-items-center">
        <Form className="form-login " >
          <h1>Login</h1>
          <Form.Group controlId="formGroupUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter username"
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="password"
              onChange={this.handleChange}
            >
            </Form.Control>
          </Form.Group>
          <Button variant="primary" block>Log In</Button>
        </Form>
      </div>
    );
  }
}

export default LoginController;
