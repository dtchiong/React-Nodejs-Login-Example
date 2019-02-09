import React, { Component } from "react";
import fire from "./config/fire";
import Home from "./components/Home/Home";
import LoginController from "./components/Login/LoginController";
import loadingWheel from "./assets/loading-wheel.png";
import './App.css';

class App extends Component {
  state = {
    user: null,
    response: "",
    gotAuthResponse: false
  };

  componentDidMount() {
    this.authListener();
  }

  /* Set an observer on the Auth object so we know when the user state changes 
   * Set the gotAuthResponse to true, once we know the result of the login status so
   * that we can stop showing the loading wheel 
   */
  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user || !this.state.gotAuthResponse) {
        this.setState( {user: user, gotAuthResponse: true} );
      }
    });
  };

  /* If logged into, prevents the login form from flashing before showing the home page when the auth
   * returns the user by showing a loading wheel. And if the user is logged in, we show the
   * Home page, otherwise we show the login form
   */
  showContent = () => {
    if (!this.state.gotAuthResponse) {
      return (
        <div className="img-wrapper d-flex align-items-center d-flex justify-content-center">
          <img src={loadingWheel} className="app-loading-wheel" alt="loading"></img>
        </div>
      );
    }

    return (this.state.user? <Home user={this.state.user}></Home> : <LoginController></LoginController>);
  }

  render() {
    return (
      <div className="App container-fluid px-0">
        <div className="app-header">
          <h1 id="text-react">React</h1>
          <h1 id="text-nodejs">Nodejs</h1>
          <h1 className="header-subtitle">Login Example App</h1>
        </div>

        <div className="page-content-wrapper">
          {this.showContent()}
        </div>
      </div>
    );
  }
}

export default App;
