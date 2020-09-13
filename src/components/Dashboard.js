import React from "react";
import styled from "styled-components";
import { Container, Row, Col, Card } from "react-bootstrap";

const Styles = styled.div`
  .container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }
`;

class App extends React.Component {
  formatNumber(unformattedNum) {
    return unformattedNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  abbrState(input, to) {
    var states = [
      ["Arizona", "AZ"],
      ["Alabama", "AL"],
      ["Alaska", "AK"],
      ["Arkansas", "AR"],
      ["California", "CA"],
      ["Colorado", "CO"],
      ["Connecticut", "CT"],
      ["District of Columbia", "DC"],
      ["Delaware", "DE"],
      ["Florida", "FL"],
      ["Georgia", "GA"],
      ["Hawaii", "HI"],
      ["Idaho", "ID"],
      ["Illinois", "IL"],
      ["Indiana", "IN"],
      ["Iowa", "IA"],
      ["Kansas", "KS"],
      ["Kentucky", "KY"],
      ["Louisiana", "LA"],
      ["Maine", "ME"],
      ["Maryland", "MD"],
      ["Massachusetts", "MA"],
      ["Michigan", "MI"],
      ["Minnesota", "MN"],
      ["Mississippi", "MS"],
      ["Missouri", "MO"],
      ["Montana", "MT"],
      ["Nebraska", "NE"],
      ["Nevada", "NV"],
      ["New Hampshire", "NH"],
      ["New Jersey", "NJ"],
      ["New Mexico", "NM"],
      ["New York", "NY"],
      ["North Carolina", "NC"],
      ["North Dakota", "ND"],
      ["Ohio", "OH"],
      ["Oklahoma", "OK"],
      ["Oregon", "OR"],
      ["Pennsylvania", "PA"],
      ["Rhode Island", "RI"],
      ["South Carolina", "SC"],
      ["South Dakota", "SD"],
      ["Tennessee", "TN"],
      ["Texas", "TX"],
      ["Utah", "UT"],
      ["Vermont", "VT"],
      ["Virginia", "VA"],
      ["Washington", "WA"],
      ["West Virginia", "WV"],
      ["Wisconsin", "WI"],
      ["Wyoming", "WY"],
    ];

    if (to === "abbr") {
      input = input.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
      for (let i = 0; i < states.length; i++) {
        if (states[i][0] === input) {
          return states[i][1];
        }
      }
    } else if (to === "name") {
      input = input.toUpperCase();
      for (let i = 0; i < states.length; i++) {
        if (states[i][1] === input) {
          return states[i][0];
        }
      }
    }
  }

  render() {
    return (
      <Styles>
        <Container>
          <Row>
            <Col>
              <Card>
                <Card.Header as="h4">United States</Card.Header>
                <Card.Body>
                  <Card.Title>
                    Total Cases:{" "}
                    <b>{this.formatNumber(this.props.totalNationalCases)}</b>
                  </Card.Title>
                  <Card.Text>
                    Total Deaths:{" "}
                    <b>{this.formatNumber(this.props.totalNationalDeaths)}</b>
                    <br />
                    Total Death Increase: {" "}
                    <b>{this.formatNumber(this.props.totalNationalDeathIncrease)}</b>
                    <br />
                    New Cases:{" "}
                    <b>{this.formatNumber(this.props.newNationalCases)}</b>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {this.props.usState && (
              <Col>
                <Card>
                  <Card.Header as="h4">
                    {this.abbrState(this.props.usState, "name")}
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>
                      Total Cases:{" "}
                      <b>{this.formatNumber(this.props.stateTotalCases)}</b>
                    </Card.Title>
                    <Card.Text>
                      Total Deaths:{" "}
                      <b>{this.formatNumber(this.props.stateTotalDeaths)}</b>
                      <br />
                      Total Death Increase: {" "}
                      <b>{this.formatNumber(this.props.stateTotalDeathIncrease)}</b>
                      <br />
                      New Cases:{" "}
                      <b>{this.formatNumber(this.props.stateNewCases)}</b>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )}
          </Row>
        </Container>
      </Styles>
    );
  }
}

export default App;
