import React, { Component } from "react";
import { Button, Form, Row } from "react-bootstrap";
import fire from "../../config/fire";
import "./LoginController.css";

class LoginController extends Component {
  state = {
    username: "",
    password: "",
    lastLoginAttemptStatus: ""
  };

  login = () => {
    fire.auth().signInWithEmailAndPassword(this.state.username, this.state.password)
      .catch( (error) => {
        this.setState( {lastLoginAttemptStatus: error.code} );
      });
  }

  /* Sets the state when the form's input changes */
  handleChange = e => {
    const id = e.target.id;
    const val = e.target.value;
    switch(id) {
      case "formGroupUsername":
        this.setState( {username: val} );
        break;
      case "formGroupPassword":
        this.setState( {password: val} );
        break;
      default:
        break;
    }
  };

  /* Shows an error message if login fails, otherwise nothing */
  showLoginStatus = () => {
    let style = {display: "none"}
    let message = "";

    switch(this.state.lastLoginAttemptStatus) {
      case "auth/wrong-password":
        style = {display: true}
        message = "Incorrect username or password. Please try again."
        break;
      case "auth/invalid-email":
        style = {display: true}
        message = "The username should be in the form of an email address.";
        break;
      default:
        break;
    }
    
    return (
        <Row id="login-error-text-wrapper" className="d-flex align-items-center" noGutters="true">
          <i className="fas fa-exclamation-circle glyph-error" style={style}></i>
          <Form.Text id="login-error-text" style={style}>{message}</Form.Text>
        </Row>
    );
  }

  render() {
    return (
      <div className="page-wrapper d-flex align-items-center d-flex justify-content-center">
        <Form className="form-login">
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
          <Button variant="primary" block onClick={()=>{this.login()}}>Log In</Button>
          {this.showLoginStatus()}
        </Form>
      </div>
    );
  }
}

export default LoginController;
