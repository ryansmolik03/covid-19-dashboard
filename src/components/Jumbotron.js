import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import styled from "styled-components";
import SubmitForm from "./SubmitForm";
// import { Footer } from "./Footer";

const Styles = styled.div`
  .jumbo {
    // text-align: center;
  }

  .container {
    text-align: center;
  }
`;

class Jumbotron extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(event);
  };

  render() {
    return (
      <Styles>
        <Jumbo fluid className="jumbo vertical-center">
          <Container>
            <h1>COVID-19 Dashboard</h1>
            <p>As of: {this.props.date}</p>
            <SubmitForm onSubmit={this.handleSubmit} />
          </Container>
        </Jumbo>
      </Styles>
    );
  }
}

export default Jumbotron;
