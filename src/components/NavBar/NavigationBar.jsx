import React, { Component } from 'react';
import styles from './NavBar.module.css';

class NavigationBar extends Component {
    render() {
        return(
            <div className={styles.body}>
                <nav>
                    <input id="nav-toggle" type="checkbox"></input>
                    <div className={styles.header}>
                        COVID<strong>Tracker</strong>
                    </div> 
                    <ul className={styles.links}>
                        <li className={styles.active}><a href="#">Home</a></li>
                        <li className={styles.notactive}><a href="https://curiousexpert24.github.io/covidtacker_about/">About</a></li>
                        <li className={styles.notactive}><a href="https://curiousexpert24.github.io/covidtacker_about/safetypage.html">Safety Tips</a></li>
                    </ul>
                    <label htmlFor="nav-toggle" className={styles.iconB}>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                    </label>
                </nav>
                <div className={styles.container}>
                    <h2>COVID Tracker</h2>
                    <h4>A reliable way to track COVID-19 Cases, Recoveries, and Deaths</h4>
                </div>
            </div>
        )
    }
}

export default NavigationBar;
