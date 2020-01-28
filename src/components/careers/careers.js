import React, { Component } from 'react'
import {Segment, Image, Grid, Button  } from 'semantic-ui-react'

import CareerImage from './images/careers.png';

import ScrollAnimation from 'react-animate-on-scroll';

export default class Careers extends Component {
    render() {
        return (
            <Segment className="career" vertical textAlign='center' >
                <Grid stackable columns={2}>
                    <Grid.Column mobile={16} tablet={16} computer={6} className="career-left-card">
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" className="career-left-card-content">
                            <Image src={CareerImage} size="massive" className="careers-image"/>
                        </ScrollAnimation>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={16} computer={10}>
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" className="career-right-card-content">
                            <h1> Careers </h1>
                            <p> Join as we grow. Come and join our team as we build our future. <br /> Please send your CV at ojsioson@systemoph.com </p>
                            <Button> Learn More </Button>
                        </ScrollAnimation>
                    </Grid.Column>
                </Grid>
            </Segment>
        )
    }
}
