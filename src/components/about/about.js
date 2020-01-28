import React, { Component } from 'react'
import {Segment, Image, Grid  } from 'semantic-ui-react'

import AboutImage from './images/img_about.png';

import ScrollAnimation from 'react-animate-on-scroll';

export default class About extends Component {
    render() {
        return (
            <Segment className="about" vertical textAlign='center' >
                <Grid stackable columns={2}>
                    <Grid.Column mobile={16} tablet={16} computer={8} className="about-left-card">
                        <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutLeft" className="about-left-card-content">
                            <h1> About </h1>
                            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quasi accusantium rem eaque ut quod voluptate, eligendi neque, nihil tempora eum quia voluptatem vero autem repudiandae? Facere vero incidunt voluptatem?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quasi accusantium rem eaque ut quod voluptate, eligendi neque, nihil tempora eum quia voluptatem vero autem repudiandae? Facere vero incidunt voluptatem? </p>
                        </ScrollAnimation>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={16} computer={8}>
                        <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutRight">
                            <Image src={AboutImage} size="massive" className="about-image"/>
                        </ScrollAnimation>
                    </Grid.Column>
                </Grid>
            </Segment>
        )
    }
}
