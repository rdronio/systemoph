import React, { Component } from 'react'
import { Image, Grid, Button  } from 'semantic-ui-react'

import ScrollAnimation from 'react-animate-on-scroll';

import circle from './images/circle.png';

export default class Service extends Component {
    render() {
        return (
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" className="service">
                <ScrollAnimation animateIn="zoomInDown" animateOut="fadeOutUp" className="service">
                <h1> Services </h1>
                </ScrollAnimation>
                <Grid columns={3} stackable>
                    <Grid.Column width="5.3">
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" className="service-content">
                            <Image src={circle} size="tiny" className="services-image"/>
                            <div>
                                <div className="service-title"> Web Development </div>
                                <div className="service-desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum </div>
                            </div>
                        </ScrollAnimation>
                    </Grid.Column>
                    <Grid.Column width="5.3">
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" className="service-content">
                            <Image src={circle} size="tiny" className="services-image"/>
                            <div>
                                <div className="service-title"> E-Commerce </div>
                                <div className="service-desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum </div>
                            </div>
                        </ScrollAnimation>
                    </Grid.Column>
                    <Grid.Column width="5.3">
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" className="service-content">
                            <Image src={circle} size="tiny" className="services-image"/>
                            <div>
                                <div className="service-title"> Web Development </div>
                                <div className="service-desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum </div>
                            </div>
                        </ScrollAnimation>
                    </Grid.Column>
                </Grid>
                 <Grid columns={3} stackable>
                    <Grid.Column width="5.3">
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" className="service-content">
                            <Image src={circle} size="tiny" className="services-image"/>
                            <div>
                                <div className="service-title"> Web Development </div>
                                <div className="service-desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum </div>
                            </div>
                        </ScrollAnimation>
                    </Grid.Column>
                    <Grid.Column width="5.3">
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" className="service-content">
                            <Image src={circle} size="tiny" className="services-image"/>
                            <div>
                                <div className="service-title"> Web Development </div>
                                <div className="service-desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum </div>
                            </div>
                        </ScrollAnimation>
                    </Grid.Column>
                    <Grid.Column width="5.3">
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" className="service-content">
                            <Image src={circle} size="tiny" className="services-image"/>
                            <div>
                                <div className="service-title"> Web Development </div>
                                <div className="service-desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum </div>
                            </div>
                        </ScrollAnimation>
                    </Grid.Column>
                </Grid>
                {/* <Button> Learn More </Button> */}
            </ScrollAnimation>
        )
    }
}
