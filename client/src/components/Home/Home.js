import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./Home.css";
import requests from "../../utility/Requests";

class Home extends Component {
  state = {
    count: 0,
    buttonClicked: false
  };

  /* Fetches the count so that if the user refreshes the page,
   * the count still shows the current value
   */
  componentDidMount() {
    requests.getCount(null)
      .then( (res) =>{
        this.setState( {count: res.count} );
      })
      .catch ( (res) => {
      });
  }

  handleButtonIncrement = () => {
    this.setState({ buttonClicked: true });
    requests.incrementCount(null)
      .then( (res) =>{
        this.setState( {buttonClicked: false, count: res.count} );
      })
      .catch( (res) =>{
      });
  }

  incrementButton = () => {
    let disabledStatus = false;
    let buttonText = "Increment";

    if (this.state.buttonClicked) {
      disabledStatus = true;
      buttonText = "...Processing";  
    }

    return (
      <Button id="increment-btn" variant="success" size="lg" disabled={disabledStatus} onClick={()=>{this.handleButtonIncrement()}}>
        {buttonText}
      </Button>
    );
  }

  render() {
    return (
      <div className="page-wrapper d-flex align-items-center d-flex justify-content-center">
        <Row className="count-wrapper" noGutters="true">
          <Col className="d-flex align-items-center">
            <h2 id="count-label">Count: {this.state.count}</h2>
          </Col>
          <Col className="d-flex align-items-stretch">
            {this.incrementButton()}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
