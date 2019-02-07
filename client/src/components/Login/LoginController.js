import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import "./LoginController.css";
class LoginController extends Component {
  state = {
    username: "",
    password: ""
  };

  /* Sets the state when the form's input changes */
  handleChange = e => {
    const id = e.target.id;
    const val = e.target.value;
    switch(id) {
      case "formGroupUsername":
        this.setState( {username: val} );
        break;
      case "formGroupPassword":
        this.setState( {password: val } );
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div className="form-login-wrapper d-flex align-items-center d-flex justify-content-center">
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
          <div id="login-button-border"></div>
          <Button variant="primary" block>Log In</Button>
        </Form>
      </div>
    );
  }
}

export default LoginController;
