
import React from 'react';
import Typical from 'react-typical'

import { Cards, CountryPicker, Chart, ConfirmedTable, RecoveredTable, DeathsTable, NavigationBar } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';
import image from './covid.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
        <div className={styles.totalContain}>
          <NavigationBar />
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} /> 
          <ConfirmedTable />
          <RecoveredTable />
          <DeathsTable />
        </div>
    );
  }
}

export default App;