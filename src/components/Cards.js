import React, { Component } from "react";
import { Card, Button, CardTitle, Row, Col } from "reactstrap";

class Cards extends Component {
  render() {
    return (
      <Row>
        <Col sm="12">
          <Card body>
            <CardTitle>{this.props.CardName}</CardTitle>
            <div className="d-flex align-items-center justify-content-between">
              <Button onClick={this.props.onIncrement} color="danger">
                +
              </Button>
              {this.props.counter}
              <Button onClick={this.props.onDncrement} color="primary">
                -
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Cards;
