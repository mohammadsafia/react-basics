import React, { Component } from "react";
import "./App.css";
import Cards from "./components/Cards";
import { Row, Col } from "reactstrap";

class App extends Component {
  state = {
    data: [
      {
        CardName: "Ahmed",
      },
      {
        CardName: "Mohammad",
      },
      {
        CardName: "Obaida",
      },
      {
        CardName: "Nasseem",
      },
    ],
    counter: 0,
  };
  onIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  onDncrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  render() {
    return (
      <React.Fragment>
        <Row className="mt-5">
          <Col
            md={12}
            className="d-flex align-items-center justify-content-center"
          >
            <Cards counter={this.state.counter} />
          </Col>
        </Row>
        <Row className="p-5">
          {this.state.data.map((item, index) => (
            <Col key={index} md={3}>
              <Cards
                // counter={this.state.counter}
                CardName={item.CardName}
                onIncrement={this.onIncrement}
                onDncrement={this.onDncrement}
              />
            </Col>
          ))}
        </Row>
      </React.Fragment>
    );
  }
}

export default App;
