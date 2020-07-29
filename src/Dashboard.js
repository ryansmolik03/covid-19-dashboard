import React from 'react';
import styled from 'styled-components';
import { Form, Button, Col } from 'react-bootstrap';

const US_DAILY_URL = "https://covidtracking.com/api/v1/us/daily.json"
const US_STATE_URL = "https://covidtracking.com/api/v1/states/"

const Styles = styled.div`
    .header {
        text-align: center;
        color: #ff7f50;
        margin: 20px;

        h1 {
            font-size: 50pt;
        }

        p {
            font-size: 15pt;
        }
    }
    .container {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around
    }

    .item {
      width: 500;
      margin: 20px;
      text-align: center;
      color: #ff7f50;
    }

    h1 {
        font-size: 30pt;
    }

    h2 {
        font-size: 25pt;
    }

    th, td {
      font-size: 20pt;
    }

`;

class App extends React.Component {
  state = {
    usTotal : '',
    usNew : '',
    usTotalDeaths : '',
    date: '',
    usState: '',
    usStateTotal: '',
    usStateTotalDeaths: '',
    usStateNew: ''
  }
  
  componentDidMount() {
    fetch(US_DAILY_URL)
    .then((response) => response.json())
    .then(
      (result) => {
        this.setState({
          usTotal : result[0].positive,
          usNew: result[0].positiveIncrease,
          usYesterdayNew: result[1].positiveIncrease,
          usTotalDeaths: result[0].death,
          date: this.formatDate(result[0].date)
        })
      }
    )
  }

  formatNumber(unformattedNum) {
    return unformattedNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  formatDate(unformattedDate) {
    var year = unformattedDate.toString().slice(0, 4)
    var month = unformattedDate.toString().slice(4, 6)
    var day = unformattedDate.toString().slice(6, 8)
    var date = new Date(year, month - 1, day)
    return date.toDateString();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let usState = event.target.elements.usState.value.toLowerCase();

    let url = US_STATE_URL + usState + "/current.json";
    fetch(url)
    .then((response) => response.json())
    .then(
      (result) => {
        this.setState({
          usState: result.state,
          usStateTotal: result.positive,
          usStateTotalDeaths: result.death,
          usStateNew: result.positiveIncrease
        })
      }
    )
  }

  getPercentage(upper, lower) {
    return ((upper / lower) * 100).toFixed(2)
  }

  abbrState(input, to){
    
      var states = [
          ['Arizona', 'AZ'],
          ['Alabama', 'AL'],
          ['Alaska', 'AK'],
          ['Arkansas', 'AR'],
          ['California', 'CA'],
          ['Colorado', 'CO'],
          ['Connecticut', 'CT'],
          ['District of Columbia', 'DC'],
          ['Delaware', 'DE'],
          ['Florida', 'FL'],
          ['Georgia', 'GA'],
          ['Hawaii', 'HI'],
          ['Idaho', 'ID'],
          ['Illinois', 'IL'],
          ['Indiana', 'IN'],
          ['Iowa', 'IA'],
          ['Kansas', 'KS'],
          ['Kentucky', 'KY'],
          ['Louisiana', 'LA'],
          ['Maine', 'ME'],
          ['Maryland', 'MD'],
          ['Massachusetts', 'MA'],
          ['Michigan', 'MI'],
          ['Minnesota', 'MN'],
          ['Mississippi', 'MS'],
          ['Missouri', 'MO'],
          ['Montana', 'MT'],
          ['Nebraska', 'NE'],
          ['Nevada', 'NV'],
          ['New Hampshire', 'NH'],
          ['New Jersey', 'NJ'],
          ['New Mexico', 'NM'],
          ['New York', 'NY'],
          ['North Carolina', 'NC'],
          ['North Dakota', 'ND'],
          ['Ohio', 'OH'],
          ['Oklahoma', 'OK'],
          ['Oregon', 'OR'],
          ['Pennsylvania', 'PA'],
          ['Rhode Island', 'RI'],
          ['South Carolina', 'SC'],
          ['South Dakota', 'SD'],
          ['Tennessee', 'TN'],
          ['Texas', 'TX'],
          ['Utah', 'UT'],
          ['Vermont', 'VT'],
          ['Virginia', 'VA'],
          ['Washington', 'WA'],
          ['West Virginia', 'WV'],
          ['Wisconsin', 'WI'],
          ['Wyoming', 'WY'],
      ];

      if (to === 'abbr'){
          input = input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
          for(let i = 0; i < states.length; i++){
              if(states[i][0] === input){
                  return(states[i][1]);
              }
          }    
      } else if (to === 'name'){
          input = input.toUpperCase();
          for(let i = 0; i < states.length; i++){
              if(states[i][1] === input){
                  return(states[i][0]);
              }
          }    
      }
  }

  render() {
    return (
      <Styles>
        <div className="header">
            <div className="title">
                <h1>COVID-19 Dashboard</h1>
                <p>As of: {this.state.date}</p>
            </div>
            <div className="stateForm">
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
                        <Button type="dark" variant="warning">Submit</Button>
                    </Col>
                    </Form.Group>
                </Form>
            </div>
          
        </div>
        
        <div className="container">
          <div className="item">
            <h2>United States</h2>
            <table>
              <tr>
                <td>Total Cases:</td>
                <td><b>{this.formatNumber(this.state.usTotal)}</b></td>
              </tr>
              <tr>
                <td>Total Deaths:</td>
                <td><b>{this.formatNumber(this.state.usTotalDeaths)}</b></td>
              </tr>
              <tr>
                <td>New Cases:</td>
                <td><b>{this.formatNumber(this.state.usNew)}</b></td>
              </tr>
            </table>
          </div>
          
          {this.state.usState !== '' &&
              <div className="item">
                <h2>{this.abbrState(this.state.usState, 'name')}</h2>
                <table>
                  <tr>
                    <td>Total Cases</td>
                    <td><b>{this.formatNumber(this.state.usStateTotal)}</b></td>
                  </tr>
                  <tr>
                    <td>Total Deaths:</td>
                    <td><b>{this.formatNumber(this.state.usStateTotalDeaths)}</b></td>
                  </tr>
                  <tr>
                    <td>New Cases:</td>
                    <td><b>{this.formatNumber(this.state.usStateNew)}</b></td>
                  </tr>
                  <tr>
                    <td>% of Total Cases:</td>
                    <td><b>{this.formatNumber(this.getPercentage(this.state.usStateTotal, this.state.usTotal)) + "%"}</b></td>
                  </tr>
                </table>
              </div>
            }
        </div>
      </Styles>
    )
  }
}

export default App;
