import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'

import './style.css';
import './mobile.css';

import LogoMaintenance from './images/logo.png';
import MaintenanceImg from './images/maintenance.png';

import ScrollAnimation from 'react-animate-on-scroll';

export default class Maintenance extends Component {
    render() {
        return (
            <Segment className="maintenance-bottom fadeInUp" vertical textAlign='center'>
                Our site is under development, please bear with us!
            </Segment>
        )
    }
}
