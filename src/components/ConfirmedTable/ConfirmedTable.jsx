import React, { Component } from "react";
import styles from "./ConfirmedTable.module.css";
import { Pie } from "react-chartjs-2";

class ConfirmedTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://covid19.mathdro.id/api/confirmed")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      var russia = 0;
      var china = 0;
      var brazil = 0;
      var sweden = 0;
      var germany = 0;
      var italy = 0;
      var japan = 0;
      var peru = 0;
      var chile = 0;
      var canada = 0;
      var mexico = 0;
      var spain = 0;
      var ukraine = 0;
      var colombia = 0;
      var us = 0;
      var uk = 0;
      var india = 0;

      var fiveLarge = [0, 0, 0, 0, 0];
      var largeFive = ["a", "a", "a", "a", "a"];
      var worldcases = 0;

      {
        items.map((item) => {
          worldcases = worldcases + item.confirmed;
          if (item.confirmed > fiveLarge[4]) {
            if (item.confirmed > fiveLarge[3]) {
              if (item.confirmed > fiveLarge[2]) {
                if (item.confirmed > fiveLarge[1]) {
                  if (item.confirmed > fiveLarge[0]) {
                    // fiveLarge[0] = 5;
                    fiveLarge[0] = item.confirmed;
                    largeFive[0] = item.countryRegion;
                  } else {
                    fiveLarge[1] = item.confirmed;
                    largeFive[1] = item.countryRegion;
                  }
                } else {
                  fiveLarge[2] = item.confirmed;
                  largeFive[2] = item.countryRegion;
                }
              } else {
                fiveLarge[3] = item.confirmed;
                largeFive[3] = item.countryRegion;
              }
            } else {
              fiveLarge[4] = item.confirmed;
              largeFive[4] = item.countryRegion;
            }
          }
          if (item.countryRegion === "Russia") {
            russia = russia + item.confirmed;
          }
          if (item.countryRegion === "China") {
            china = china + item.confirmed;
          }
          if (item.countryRegion === "Brazil") {
            brazil = brazil + item.confirmed;
          }
          if (item.countryRegion === "Sweden") {
            sweden = sweden + item.confirmed;
          }
          if (item.countryRegion === "Germany") {
            germany = germany + item.confirmed;
          }
          if (item.countryRegion === "Italy") {
            italy = italy + item.confirmed;
          }
          if (item.countryRegion === "Japan") {
            japan = japan + item.confirmed;
          }
          if (item.countryRegion === "Peru") {
            peru = peru + item.confirmed;
          }
          if (item.countryRegion === "Chile") {
            chile = chile + item.confirmed;
          }
          if (item.countryRegion === "Canada") {
            canada = canada + item.confirmed;
          }
          if (item.countryRegion === "Mexico") {
            mexico = mexico + item.confirmed;
          }
          if (item.countryRegion === "Spain") {
            spain = spain + item.confirmed;
          }
          if (item.countryRegion === "Ukraine") {
            ukraine = ukraine + item.confirmed;
          }
          if (item.countryRegion === "Colombia") {
            colombia = colombia + item.confirmed;
          }
          if (item.countryRegion === "US") {
            us = us + item.confirmed;
          }
          if (item.countryRegion === "India") {
            india = india + item.confirmed;
          }
          if (item.countryRegion === "United Kingdom") {
            uk = uk + item.confirmed;
          }
        });
      }

      {
        items.map((item) => {
          var newCount = [
            russia,
            china,
            brazil,
            sweden,
            germany,
            italy,
            japan,
            peru,
            chile,
            canada,
            mexico,
            spain,
            ukraine,
            colombia,
            us,
            uk,
            india,
          ];
          var newCountry = [
            "Russia",
            "China",
            "Brazil",
            "Sweden",
            "Germany",
            "Italy",
            "Japan",
            "Peru",
            "Chile",
            "Canada",
            "Mexico",
            "Spain",
            "Ukraine",
            "Colombia",
            "United States",
            "United Kingdom",
            "India",
          ];

          for (let i = 0; i < newCount.length; i++) {
            if (
              newCount[i] > fiveLarge[4] &&
              newCount[i] !== fiveLarge[0] &&
              newCount[i] !== fiveLarge[1] &&
              newCount[i] !== fiveLarge[2] &&
              newCount[i] !== fiveLarge[3]
            ) {
              if (newCount[i] > fiveLarge[3]) {
                if (newCount[i] > fiveLarge[2]) {
                  if (newCount[i] > fiveLarge[1]) {
                    if (newCount[i] > fiveLarge[0]) {
                      // fiveLarge[0] = 5;
                      fiveLarge[4] = fiveLarge[3];
                      largeFive[4] = largeFive[3];
                      fiveLarge[3] = fiveLarge[2];
                      largeFive[3] = largeFive[2];
                      fiveLarge[2] = fiveLarge[1];
                      largeFive[2] = largeFive[1];
                      fiveLarge[1] = fiveLarge[0];
                      largeFive[1] = largeFive[0];
                      fiveLarge[0] = newCount[i];
                      largeFive[0] = newCountry[i];
                    } else {
                      fiveLarge[4] = fiveLarge[3];
                      largeFive[4] = largeFive[3];
                      fiveLarge[3] = fiveLarge[2];
                      largeFive[3] = largeFive[2];
                      fiveLarge[2] = fiveLarge[1];
                      largeFive[2] = largeFive[1];
                      fiveLarge[1] = newCount[i];
                      largeFive[1] = newCountry[i];
                    }
                  } else {
                    fiveLarge[4] = fiveLarge[3];
                    largeFive[4] = largeFive[3];
                    fiveLarge[3] = fiveLarge[2];
                    largeFive[3] = largeFive[2];
                    fiveLarge[2] = newCount[i];
                    largeFive[2] = newCountry[i];
                  }
                } else {
                  fiveLarge[4] = fiveLarge[3];
                  largeFive[4] = largeFive[3];
                  fiveLarge[3] = newCount[i];
                  largeFive[3] = newCountry[i];
                }
              } else {
                fiveLarge[4] = newCount[i];
                largeFive[4] = newCountry[i];
              }
            }
          }
        });
      }

      const pieChart = (
        <Pie
          data={{
            labels: [
              largeFive[0],
              largeFive[1],
              largeFive[2],
              largeFive[3],
              largeFive[4],
              "Rest of the World",
            ],
            datasets: [
              {
                data: [
                  (fiveLarge[0] / worldcases) * 100,
                  (fiveLarge[1] / worldcases) * 100,
                  (fiveLarge[2] / worldcases) * 100,
                  (fiveLarge[3] / worldcases) * 100,
                  (fiveLarge[4] / worldcases) * 100,
                  100 -
                    ((fiveLarge[0] / worldcases) * 100 +
                      (fiveLarge[1] / worldcases) * 100 +
                      (fiveLarge[2] / worldcases) * 100 +
                      (fiveLarge[3] / worldcases) * 100 +
                      (fiveLarge[4] / worldcases) * 100),
                ],
                backgroundColor: [
                  "rgba(220, 20, 60, 0.7)",
                  "rgba(72, 61, 139, 0.7)",
                  "rgba(34, 139, 34, 0.7)",
                  "rgba(255, 215, 0, 0.7)",
                  "rgba(218, 112, 214, 0.7)",
                  "rgba(30, 144, 255, 0.7)",
                ],
              },
            ],
          }}
        />
      );

      return (
        <div className={styles.india}>
          {/* <ul> */}
          {/* <li>Country: Russia | Cases: {russia}</li>
                            <li>Country: China | Cases: {china}</li>
                            <li>Country: Brazil | Cases: {brazil}</li>
                            <li>Country: Sweden | Cases: {sweden}</li>
                            <li>Country: Germany | Cases: {germany}</li>
                            <li>Country: Italy | Cases: {italy}</li>
                            <li>Country: Japan | Cases: {japan}</li>
                            <li>Country: Peru | Cases: {peru}</li>
                            <li>Country: Chile | Cases: {chile}</li>
                            <li>Country: Canada | Cases: {canada}</li>
                            <li>Country: Mexico | Cases: {mexico}</li>
                            <li>Country: Spain | Cases: {spain}</li>
                            <li>Country: Ukraine | Cases: {ukraine}</li>
                            <li>Country: Colombia | Cases: {colombia}</li>
                            <li>Country: United States | Cases: {us}}</li>
                            <li>{fiveLarge} + {largeFive}</li>
                    </ul> */}
          <div className={styles.stats}>
            <h3 className={styles.three}>Most COVID-19 Infections</h3>
            <div className={styles.containL}>
              <table className={styles.tbl}>
                <thead>
                  <tr>
                    <th className={styles.head}>Country</th>
                    <th className={styles.head}>COVID-19 Cases</th>
                    <th className={styles.head}>% of World Cases</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{largeFive[0]}</td>
                    <td>{fiveLarge[0]}</td>
                    <td>{((fiveLarge[0] / worldcases) * 100).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>{largeFive[1]}</td>
                    <td>{fiveLarge[1]}</td>
                    <td>{((fiveLarge[1] / worldcases) * 100).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>{largeFive[2]}</td>
                    <td>{fiveLarge[2]}</td>
                    <td>{((fiveLarge[2] / worldcases) * 100).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>{largeFive[3]}</td>
                    <td>{fiveLarge[3]}</td>
                    <td>{((fiveLarge[3] / worldcases) * 100).toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>{largeFive[4]}</td>
                    <td>{fiveLarge[4]}</td>
                    <td>{((fiveLarge[4] / worldcases) * 100).toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={styles.chartR}> {pieChart}</div>
          </div>
        </div>
      );
    }
  }
}

export default ConfirmedTable;
