import React, { Component } from 'react'

import './style.css';
import './mobile.css';

import LogoMaintenance from './images/logo.png';
import MaintenanceImg from './images/maintenance.png';

export default class Maintenance extends Component {
    render() {
        return (
            <section id="maintenance">
                <header>
                    <a href="https://systemoph.com/">
                    <img src={LogoMaintenance} alt="" />
                    </a>
                </header>
                <main class="showcase container">
                    <div>
                    <img src={MaintenanceImg} alt="" />
                    </div>
                    <div class="lead">
                    <h1>The site is currently down for maintenance.</h1>
                    <p>
                        Our website is undergoing scheduled maintenance, we will be right
                        back soon.<br />Thank you for your patience.
                    </p>
                    </div>
                </main>
                <footer>
                    <h4>Follow Us!</h4>
                    <a href="https://www.facebook.com/systemoph/"
                    ><i class="fab fa-facebook-square"></i
                    ></a>
                    <a href=""><i class="fab fa-twitter-square"></i></a>
                </footer>
            </section>
        )
    }
}
