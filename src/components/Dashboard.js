import React from "react";
import styled from "styled-components";
// import SubmitForm from "./SubmitForm";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Jumbotron,
  Card,
} from "react-bootstrap";

const US_DAILY_URL = "https://covidtracking.com/api/v1/us/daily.json";
const US_STATE_URL = "https://covidtracking.com/api/v1/states/";

const Styles = styled.div`
  form-container {
    display: block;
    text-align: center;
  }
  form {
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
  }
  .jumbotron {
    text-align: center;
  }

  .container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }

  .item {
    width: 500;
    margin: 30px;
    text-align: center;
    color: #ff7f50;
  }
`;

class App extends React.Component {
  state = {
    usTotal: "",
    usNew: "",
    usTotalDeaths: "",
    date: "",
    usState: "",
    usStateTotal: "",
    usStateTotalDeaths: "",
    usStateNew: "",
  };

  componentDidMount() {
    fetch(US_DAILY_URL)
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          usTotal: result[0].positive,
          usNew: result[0].positiveIncrease,
          usYesterdayNew: result[1].positiveIncrease,
          usTotalDeaths: result[0].death,
          date: this.formatDate(result[0].date),
        });
      });
  }

  formatNumber(unformattedNum) {
    return unformattedNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  formatDate(unformattedDate) {
    var year = unformattedDate.toString().slice(0, 4);
    var month = unformattedDate.toString().slice(4, 6);
    var day = unformattedDate.toString().slice(6, 8);
    var date = new Date(year, month - 1, day);
    return date.toDateString();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let usState = event.target.elements.usState.value.toLowerCase();

    let url = US_STATE_URL + usState + "/current.json";
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          usState: result.state,
          usStateTotal: result.positive,
          usStateTotalDeaths: result.death,
          usStateNew: result.positiveIncrease,
        });
      });
  };

  getPercentage(upper, lower) {
    return ((upper / lower) * 100).toFixed(2);
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
        <Jumbotron>
          <h1>COVID-19 Dashboard</h1>
          <p>As of: {this.state.date}</p>
          <div className="form-container">
            <Form onSubmit={this.handleSubmit} inline>
              <Form.Group controlId="usState">
                <Form.Row>
                  <Form.Label>State</Form.Label>
                  <Col>
                    <Form.Control required as="select">
                      <option>AL</option>
                      <option>AK</option>
                      <option>AZ</option>
                      <option>AR</option>
                      <option>CA</option>
                      <option>CO</option>
                      <option>CT</option>
                      <option>DE</option>
                      <option>DC</option>
                      <option>FL</option>
                      <option>GA</option>
                      <option>HI</option>
                      <option>ID</option>
                      <option>IL</option>
                      <option>IN</option>
                      <option>IA</option>
                      <option>KS</option>
                      <option>KY</option>
                      <option>LA</option>
                      <option>ME</option>
                      <option>MD</option>
                      <option>MA</option>
                      <option>MI</option>
                      <option>MN</option>
                      <option>MS</option>
                      <option>MO</option>
                      <option>MT</option>
                      <option>NE</option>
                      <option>NV</option>
                      <option>NH</option>
                      <option>NJ</option>
                      <option>NM</option>
                      <option>NY</option>
                      <option>NC</option>
                      <option>ND</option>
                      <option>OH</option>
                      <option>OK</option>
                      <option>OR</option>
                      <option>PA</option>
                      <option>RI</option>
                      <option>SC</option>
                      <option>SD</option>
                      <option>TN</option>
                      <option>TX</option>
                      <option>UT</option>
                      <option>VT</option>
                      <option>VA</option>
                      <option>WA</option>
                      <option>WV</option>
                      <option>WI</option>
                      <option>WY</option>
                    </Form.Control>
                  </Col>
                </Form.Row>
              </Form.Group>
              <Form.Group>
                <Col>
                  <Button type="submit" variant="warning">
                    Submit
                  </Button>
                </Col>
              </Form.Group>
            </Form>
          </div>
        </Jumbotron>
        <Container>
          <Row>
            <Col>
              <Card>
                <Card.Header as="h4">United States</Card.Header>
                <Card.Body>
                  <Card.Title>
                    Total Cases: <b>{this.formatNumber(this.state.usTotal)}</b>
                  </Card.Title>
                  <Card.Text>
                    Total Deaths:{" "}
                    <b>{this.formatNumber(this.state.usTotalDeaths)}</b>
                    <br />
                    New Cases: <b>{this.formatNumber(this.state.usNew)}</b>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            {this.state.usState !== "" && (
              <Col>
                <Card>
                  <Card.Header as="h4">
                    {this.abbrState(this.state.usState, "name")}
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>
                      Total Cases:{" "}
                      <b>{this.formatNumber(this.state.usStateTotal)}</b>
                    </Card.Title>
                    <Card.Text>
                      Total Deaths:{" "}
                      <b>{this.formatNumber(this.state.usStateTotalDeaths)}</b>
                      <br />
                      New Cases:{" "}
                      <b>{this.formatNumber(this.state.usStateNew)}</b>
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
