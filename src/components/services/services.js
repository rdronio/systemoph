import React, { Component } from 'react'
import { Image, Grid } from 'semantic-ui-react'

import ScrollAnimation from 'react-animate-on-scroll';

import circle from './images/circle.png';

export default class Service extends Component {
    render() {
        return (
            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" className="service">

                <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut" className="service">
                    <h1> Services </h1>
                </ScrollAnimation>

                <Grid stackable columns={3}>
                    <Grid.Column mobile={16} tablet={10} computer={5}>
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" className="service-content">
                            <Grid stackable columns={2}>
                                <Grid.Column mobile={16} tablet={6} computer={6} className="services-image-content">
                                    <Image src={circle} size="tiny" className="services-image"/>
                                </Grid.Column>
                                <Grid.Column mobile={16} tablet={10} computer={10} className="services-desc-content">
                                    <div>
                                        <div className="service-title"> Websites </div>
                                        <div className="service-desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum </div>
                                    </div>
                                </Grid.Column>
                            </Grid>
                        </ScrollAnimation>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={10} computer={5}>
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" className="service-content">
                            <Grid stackable columns={2}>
                                <Grid.Column mobile={16} tablet={6} computer={6} className="services-image-content">
                                    <Image src={circle} size="tiny" className="services-image"/>
                                </Grid.Column>
                                <Grid.Column mobile={16} tablet={10} computer={10} className="services-desc-content">
                                    <div>
                                        <div className="service-title"> Web Apps </div>
                                        <div className="service-desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum </div>
                                    </div>
                                </Grid.Column>
                            </Grid>
                        </ScrollAnimation>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={10} computer={5}>
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" className="service-content">
                            <Grid stackable columns={2}>
                                <Grid.Column mobile={16} tablet={6} computer={6} className="services-image-content">
                                    <Image src={circle} size="tiny" className="services-image"/>
                                </Grid.Column>
                                <Grid.Column mobile={16} tablet={10} computer={10} className="services-desc-content">
                                    <div>
                                        <div className="service-title"> On Premise System </div>
                                        <div className="service-desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum </div>
                                    </div>
                                </Grid.Column>
                            </Grid>
                        </ScrollAnimation>
                    </Grid.Column>
                </Grid>

                <Grid columns={3} stackable>
                    <Grid.Column mobile={16} tablet={10} computer={5}>
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" className="service-content">
                            <Grid stackable columns={2}>
                                <Grid.Column mobile={16} tablet={6} computer={6} className="services-image-content">
                                    <Image src={circle} size="tiny" className="services-image"/>
                                </Grid.Column>
                                <Grid.Column mobile={16} tablet={10} computer={10} className="services-desc-content">
                                    <div>
                                        <div className="service-title"> Hardware </div>
                                        <div className="service-desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum </div>
                                    </div>
                                </Grid.Column>
                            </Grid>
                        </ScrollAnimation>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={10} computer={5}>
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" className="service-content">
                            <Grid stackable columns={2}>
                                <Grid.Column mobile={16} tablet={6} computer={6} className="services-image-content">
                                    <Image src={circle} size="tiny" className="services-image"/>
                                </Grid.Column>
                                <Grid.Column mobile={16} tablet={10} computer={10} className="services-desc-content">
                                    <div>
                                        <div className="service-title"> Outsourcing and Offshoring </div>
                                        <div className="service-desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum </div>
                                    </div>
                                </Grid.Column>
                            </Grid>
                        </ScrollAnimation>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={10} computer={5}>
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" className="service-content">
                            <Grid stackable columns={2}>
                                <Grid.Column mobile={16} tablet={6} computer={6} className="services-image-content">
                                    <Image src={circle} size="tiny" className="services-image"/>
                                </Grid.Column>
                                <Grid.Column mobile={16} tablet={10} computer={10} className="services-desc-content">
                                    <div>
                                        <div className="service-title"> E-Commerce </div>
                                        <div className="service-desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum </div>
                                    </div>
                                </Grid.Column>
                            </Grid>
                        </ScrollAnimation>
                    </Grid.Column>
                </Grid>
            </ScrollAnimation>
        )
    }
}
