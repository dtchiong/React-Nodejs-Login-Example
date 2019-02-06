import React, { Component } from 'react';
import fire from "./config/fire";
import Home from "./components/Home/Home";
import LoginController from "./components/Login/LoginController";

import './App.css';

class App extends Component {
  state = {
    user: null,
    response: ""
  };

  componentDidMount() {
    this.authListener();
  }

  /*
  this.callApi()
  .then( res => this.setState({ response: res.express }))
  .catch( err => console.log(err));
  */

  /* Set an observer on the Auth object so we know when the user state changes */
  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("user is not null");
        this.setState({ user: user });
      } else {
        console.log("user is null");
      }
    });
  };

  callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>React</h1>
          <h1>Nodejs</h1>
          <h2>with Firebase Authentication</h2>
          <h6>Example App</h6>
        </div>
        {this.state.user? <Home></Home> : <LoginController></LoginController>}
      </div>
    );
  }
}

export default App;
