import React, { Component } from 'react'
import {Segment, Image, Grid  } from 'semantic-ui-react'

import ecommerceImage from './images/e-commerce.png';
import websiteImage from './images/website.png';
import hrisImage from './images/HRIS.png';

import ScrollAnimation from 'react-animate-on-scroll';

export default class Projects extends Component {
    render() {
        return (
            <Segment id="ourworks_" className="projects" vertical textAlign='center' >
                <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut" className="projects-title">
                    Our Works 
                </ScrollAnimation>
                <ScrollAnimation animateIn="slideInLeft" animateOut="slideOutRight" className="projects-content">
                    <Grid stackable columns={3} className="projects-content-grid">
                        <Grid.Column mobile={16} tablet={10} computer={5}>
                            <Image src={ecommerceImage} size="large" className="projects-image"/>
                            <h3> E-Commerce </h3>
                            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quasi accusantium rem eaque ut quod voluptate, eligendi neque, nihil tempora eum quia voluptatem vero autem repudiandae? </p>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={10} computer={5}>
                            <Image src={websiteImage} size="large" className="projects-image"/>
                            <h3> Website </h3>
                            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quasi accusantium rem eaque ut quod voluptate, eligendi neque, nihil tempora eum quia voluptatem vero autem repudiandae? </p>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={10} computer={5}>
                            <Image src={hrisImage} size="large" className="projects-image"/>
                            <h3> HRIS, Time Keeping and Payroll </h3>
                            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quasi accusantium rem eaque ut quod voluptate, eligendi neque, nihil tempora eum quia voluptatem vero autem repudiandae? </p>
                        </Grid.Column>
                    </Grid>
                </ScrollAnimation>
                {/* <div className="projects-desc">
                    At SysteMoPH, we come to work everyday, excited on the new things we'll learn, the apps that we'll build, knowing that what we do solves problems and make lives better.
                </div> */}

            </Segment>
        )
    }
}
