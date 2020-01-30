import React, { Component } from 'react'
import {Segment, Image, Grid  } from 'semantic-ui-react'

import AboutImage from './images/img_about.png';

import ScrollAnimation from 'react-animate-on-scroll';

export default class About extends Component {
    render() {
        return (
            <Segment about className="about" vertical textAlign='center' >
                <Grid stackable columns={2}>
                    <Grid.Column mobile={16} tablet={16} computer={8} className="about-left-card">
                        <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutLeft" className="about-left-card-content">
                            <h1> Objectives </h1>
                            <p> To establish a strong and long-term bond among the customers. To offer affordable product and worth the price. To design and build your software with secure, reliable, user friendly and web based that is accessed from mobile, tablet, desktop and laptop. To consider the satisfaction of the customers. Provide skilled resource for efficient outsourcing and offshoring solutions in the Philippines. </p>
                        </ScrollAnimation>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={16} computer={8}>
                        <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutRight">
                            <Image src={AboutImage} size="massive" className="about-image"/>
                        </ScrollAnimation>
                    </Grid.Column>
                </Grid>
                
                <Segment className="about-mission" vertical textAlign='center' >
                    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" className="about-mission-title">
                        Our Mission
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" className="about-mission-desc">
                        is to enable our EMPLOYEE to grow their business by: Treating the employees with respect. Providing valuable employment. Facilitate employee achievement and development. Compassion. Teamwork
                    </ScrollAnimation>
                </Segment>
            </Segment>
        )
    }
}
