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
      <div className="App container-fluid px-0">
        <div className="app-header">
          <h1 id="text-react">React</h1>
          <h1 id="text-nodejs">Nodejs</h1>
          <h1 className="header-subtitle">Login Example App</h1>
        </div>
        {this.state.user? <Home></Home> : <LoginController></LoginController>}
      </div>
    );
  }
}

export default App;
