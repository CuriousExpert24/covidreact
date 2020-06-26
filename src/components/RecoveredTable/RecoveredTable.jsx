import React, { Component } from 'react';
import styles from './RecoveredTable.module.css';
import { Pie } from 'react-chartjs-2';

class RecoveredTable extends Component{

    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {

        fetch('https://covid19.mathdro.id/api/recovered')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });

    }

    render(){

        var { isLoaded, items } = this.state;;

        if(!isLoaded){
            return <div>Loading...</div>
        }

        else{

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
            var uk = 0;

            var fiveRecover = [0,0,0,0,0];
            var recoverFive =["a","a","a","a", "a"];
            var worldRecover = 0;

            {items.map(item => {
                worldRecover = worldRecover + item.recovered;

                if(item.recovered > fiveRecover[4]){
                    if(item.recovered > fiveRecover[3]){
                        if(item.recovered > fiveRecover[2]){
                            if(item.recovered > fiveRecover[1]){
                                if(item.recovered > fiveRecover[0]){
                                    // fiveRecover[0] = 5;
                                    fiveRecover[0]= item.recovered;
                                    recoverFive[0] = item.countryRegion;
                                }
                                else{
                                    fiveRecover[1] = item.recovered;
                                    recoverFive[1] = item.countryRegion;
                                }
                            }
                            else{
                                fiveRecover[2] = item.recovered;
                                recoverFive[2] = item.countryRegion;
                            }
                        }
                        else{
                            fiveRecover[3] = item.recovered;
                            recoverFive[3] = item.countryRegion;
                        }

                    }
                    else{
                        fiveRecover[4] = item.recovered;
                        recoverFive[4] = item.countryRegion;
                    }
                }

                if(item.countryRegion === "Russia"){
                    russia = russia + item.recovered;
                }
                if(item.countryRegion === "China"){
                    china = china + item.recovered;
                }
                if(item.countryRegion === "Brazil"){
                    brazil = brazil + item.recovered;
                }
                if(item.countryRegion === "Sweden"){
                    sweden = sweden + item.recovered;
                }
                if(item.countryRegion === "Germany"){
                    germany = germany + item.recovered;
                }
                if(item.countryRegion === "Italy"){
                    italy = italy + item.recovered;
                }
                if(item.countryRegion === "Japan"){
                    japan = japan + item.recovered;
                }
                if(item.countryRegion === "Peru"){
                    peru = peru + item.recovered;
                }
                if(item.countryRegion === "Chile"){
                    chile = chile + item.recovered;
                }
                if(item.countryRegion === "Canada"){
                    canada = canada + item.recovered;
                }
                if(item.countryRegion === "Mexico"){
                    mexico = mexico + item.recovered;
                }
                if(item.countryRegion === "Spain"){
                    spain = spain + item.recovered;
                }
                if(item.countryRegion === "Ukraine"){
                    ukraine = ukraine + item.recovered;
                }
                if(item.countryRegion === "Colombia"){
                    colombia = colombia + item.recovered;
                }
                if(item.countryRegion === "United Kingdom"){
                    uk = uk + item.recovered;
                }

                // if(item.provinceState === null || item.provinceState === "Recovered"){
                //     return <li key={item.id}> Country: {item.countryRegion} | CoolRecovered: {item.recovered}</li>
                // }
            })}

            {items.map(item => {
                var newCount = [russia, china, brazil, sweden, germany, italy, japan, peru, chile, canada, mexico, spain, ukraine, colombia, uk];
                var newCountry = ['Russia', 'China', 'Brazil', 'Sweden', 'Germany', 'Italy', 'Japan', 'Peru', 'Chile', 'Canada', 'Mexico', 'Spain', 'Ukraine', 'Colombia', 'United Kingdom'];

                for(let i = 0; i < newCount.length; i++){
                    if(newCount[i] > fiveRecover[4] && newCount[i] !== fiveRecover[0] && newCount[i] !== fiveRecover[1] && newCount[i] !== fiveRecover[2] && newCount[i] !== fiveRecover[3]){
                        if(newCount[i] > fiveRecover[3]){
                            if(newCount[i] > fiveRecover[2]){
                                if(newCount[i] > fiveRecover[1]){
                                    if(newCount[i] > fiveRecover[0]){
                                        // fiveRecover[0] = 5;
                                        fiveRecover[4] = fiveRecover[3];
                                        recoverFive[4] = recoverFive[3];
                                        fiveRecover[3] = fiveRecover[2];
                                        recoverFive[3] = recoverFive[2];
                                        fiveRecover[2] = fiveRecover[1];
                                        recoverFive[2] = recoverFive[1];
                                        fiveRecover[1] = fiveRecover[0];
                                        recoverFive[1] = recoverFive[0];
                                        fiveRecover[0] = newCount[i];
                                        recoverFive[0] = newCountry[i];
                                    }
                                    else{
                                        fiveRecover[4] = fiveRecover[3];
                                        recoverFive[4] = recoverFive[3];
                                        fiveRecover[3] = fiveRecover[2];
                                        recoverFive[3] = recoverFive[2];
                                        fiveRecover[2] = fiveRecover[1];
                                        recoverFive[2] = recoverFive[1];
                                        fiveRecover[1] = newCount[i];
                                        recoverFive[1] = newCountry[i];
                                    }
                                }
                                else{
                                    fiveRecover[4] = fiveRecover[3];
                                    recoverFive[4] = recoverFive[3];
                                    fiveRecover[3] = fiveRecover[2];
                                    recoverFive[3] = recoverFive[2];
                                    fiveRecover[2] = newCount[i];
                                    recoverFive[2] = newCountry[i];
                                }
                            }
                            else{
                                fiveRecover[4] = fiveRecover[3];
                                recoverFive[4] = recoverFive[3];
                                fiveRecover[3] = newCount[i];
                                recoverFive[3] = newCountry[i];
                            }

                        }
                        else{
                            fiveRecover[4] = newCount[i];
                            recoverFive[4] = newCountry[i];
                        }
                    }
                }
            })}

            const pieChart = (
                <Pie 
                    data={{
                        labels: [recoverFive[0], recoverFive[1], recoverFive[2], recoverFive[3], recoverFive[4], 'Rest of the World'],
                        datasets: [{
                            data: [(fiveRecover[0] / worldRecover) * 100, (fiveRecover[1] / worldRecover) * 100, (fiveRecover[2] / worldRecover) * 100, (fiveRecover[3] / worldRecover) * 100, (fiveRecover[4] / worldRecover) * 100, 100 - ((fiveRecover[0] / worldRecover) * 100 + (fiveRecover[1] / worldRecover) * 100 + (fiveRecover[2] / worldRecover) * 100 + (fiveRecover[3] / worldRecover) * 100 + (fiveRecover[4] / worldRecover) * 100)],
                            backgroundColor: ['rgba(220, 20, 60, 0.7)', 'rgba(72, 61, 139, 0.7)', 'rgba(34, 139, 34, 0.7)', 'rgba(255, 215, 0, 0.7)', 'rgba(218, 112, 214, 0.7)', 'rgba(30, 144, 255, 0.7)'],
                        }] 
                    }}
                />
            )

            return(
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
                            <li>Country: United Kingdom | Cases: {uk}</li>
                    </ul> */}
                    <div className={styles.stat}>
                        <h3 className={styles.hthree}>Most COVID-19 Recoveries</h3>
                        <div className={styles.contain}>
                            <table className={styles.tabl}>
                                <thead>
                                    <tr>
                                        <th>Country</th>
                                        <th>COVID-19 Recoveried</th> 
                                        <th>% of World Recoveries</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{recoverFive[0]}</td>
                                        <td>{fiveRecover[0]}</td>
                                        <td>{((fiveRecover[0] / worldRecover) * 100).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td>{recoverFive[1]}</td>
                                        <td>{fiveRecover[1]}</td>
                                        <td>{((fiveRecover[1] / worldRecover) * 100).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td>{recoverFive[2]}</td>
                                        <td>{fiveRecover[2]}</td>
                                        <td>{((fiveRecover[2] / worldRecover) * 100).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td>{recoverFive[3]}</td>
                                        <td>{fiveRecover[3]}</td>
                                        <td>{((fiveRecover[3] / worldRecover) * 100).toFixed(2)}</td>
                                    </tr>                           
                                    <tr>
                                        <td>{recoverFive[4]}</td>
                                        <td>{fiveRecover[4]}</td>
                                        <td>{((fiveRecover[4] / worldRecover) * 100).toFixed(2)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className={styles.chart}>
                            {pieChart}
                        </div>

                    </div>
                </div>
            );
        }
    }
}

export default RecoveredTable;