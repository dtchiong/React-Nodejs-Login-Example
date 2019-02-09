import React, {Component} from "react";
import { Button, Modal, Container, Row, Col, Form} from "react-bootstrap";

class ModalConfirm extends Component {

  getNextCount = (count) => {
    return Math.max(1, count * 2);
  }

  handleButtonConfirm = () => {
    this.props.incrementCount();
    this.props.closeModal();
  }

  handleButtonCancel = () => {
    this.props.closeModal();
  }

  render() {
    const currCount = this.props.count;
    const nextCount = this.getNextCount(currCount);

    return (
      <div className="modal-confirm-wrapper">
        <Modal show={this.props.show} onHide={this.handleButtonCancel}>
          <Modal.Header closeButton>
            <h1>Count</h1>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label><h5>Current:</h5></Form.Label>
                    <Form.Control readOnly value={currCount}/>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label><h5>Next:</h5></Form.Label>
                    <Form.Control readOnly value={nextCount}/>
                  </Form.Group>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={()=>{this.handleButtonCancel()}}>Cancel</Button>
            <Button variant="dark" onClick={()=>{this.handleButtonConfirm()}}>Confirm</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModalConfirm;