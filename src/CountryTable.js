import React, { Component } from "react";
import CountryFactory from "./countryFactory";
import AllLabels from "./AllLabels";
import AllCountries from "./AllCountries";

export default class CountryTable extends Component {
  state = { labels: [], countries: [], }

  getData = async () => {
    console.log("updating table!");
    try {
      const labels = await CountryFactory.getLabels();
      const countries = await CountryFactory.getCountries();
      this.setState({ labels: labels, countries: countries });
    } catch (err) {
      if (err.status) {
        const fullError = await err.fullError;
        this.setState({ error: fullError.msg });
      } else {
        this.setState({ error: "Server is Down" })
      }
    }
    console.log("updated table!");
  }



  componentDidMount() {
    this.getData();
    setInterval(this.getData, 3000);
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr><AllLabels labels={this.state.labels} /></tr>
        </thead>
        <tbody>
          <AllCountries countries={this.state.countries} />
        </tbody>
      </table>
    );
  }
}