import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import ModalConfirm from "./ModalConfirm/ModalConfirm";
import "./Home.css";
import requests from "../../utility/Requests";

class Home extends Component {
  state = {
    count: 0,
    buttonClicked: false,
    showModal: false,
  };

  /* Fetches the count so that if the user refreshes the page,
   * the count still shows the current value
   */
  componentDidMount() {
    const uid = this.props.user.uid;
    requests.getCount(uid)
      .then( (res) =>{
        this.setState( {count: res.count} );
      })
      .catch ( (res) => {
      });
  }

  /* Passed to the modal to increment count when the confirm button is clicked */
  incrementCount = () => {
    this.setState({ buttonClicked: true });
    requests.incrementCount(null)
      .then( (res) =>{
        this.setState( {buttonClicked: false, count: res.count} );
      })
      .catch( (res) =>{
      });
  }

  /* Functional component for the Increment button */
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

  /* Shows the Modal to confirm confirm increment */
  handleButtonIncrement = () => {
    this.setState( {showModal:  true} );
  }

  /* Closes the modal if it's cancelled */
  closeModal = () => {
    this.setState( {showModal: false} );
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
          <Col className="page-wrapper d-flex align-items-center">
            <ModalConfirm 
            count={this.state.count}
            show={this.state.showModal}
            closeModal = {this.closeModal}
            incrementCount = {this.incrementCount}
            />
          </Col>
        </Row>

      </div>
    );
  }
}

export default Home;
