import React from "react";
import Dashboard from "./Dashboard";
import Jumbotron from "./Jumbotron";

const US_DAILY_URL = "https://api.covidtracking.com/v1/us/current.json";
const US_STATE_URL = "https://api.covidtracking.com/v1/states/";

class ApplicationDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      usTotalCases: "",
      usTotalDeaths: "",
      usTotalDeathIncrease: "",
      usNewCases: "",
      usState: "",
      usStateTotalCases: "",
      usStateTotalDeaths: "",
      usStateTotalDeathIncrease: "",
      usStateNewCases: "",
      date: "",
    };
  }

  componentDidMount() {
    fetch(US_DAILY_URL)
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          usTotalCases: result[0].positive,
          usTotalDeaths: result[0].death,
          usTotalDeathIncrease: result[0].deathIncrease,
          usNewCases: result[0].positiveIncrease,
          date: this.formatDate(result[0].date),
        });
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    let usState = event.target.elements.usState.value.toLowerCase();
    let url = US_STATE_URL + usState + "/current.json";
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          usState: result.state,
          usStateTotalCases: result.positive,
          usStateTotalDeaths: result.death,
          usStateTotalDeathIncrease: result.deathIncrease,
          usStateNewCases: result.positiveIncrease,
        });
      });
  }

  formatDate(unformattedDate) {
    var year = unformattedDate.toString().slice(0, 4);
    var month = unformattedDate.toString().slice(4, 6);
    var day = unformattedDate.toString().slice(6, 8);
    var date = new Date(year, month - 1, day);
    return date.toDateString();
  }

  render() {
    return (
      <div>
        <Jumbotron date={this.state.date} onSubmit={this.handleSubmit} />
        <Dashboard
          totalNationalCases={this.state.usTotalCases}
          totalNationalDeaths={this.state.usTotalDeaths}
          newNationalCases={this.state.usNewCases}
          totalNationalDeathIncrease={this.state.usTotalDeathIncrease}
          usState={this.state.usState}
          stateTotalCases={this.state.usStateTotalCases}
          stateTotalDeaths={this.state.usStateTotalDeaths}
          stateTotalDeathIncrease={this.state.usStateTotalDeathIncrease}
          stateNewCases={this.state.usStateNewCases}
        />
      </div>
    );
  }
}

export default ApplicationDashboard;
