import React, { Component } from "react";
import { Image, Grid } from 'semantic-ui-react'
import ReactDOM from 'react-dom';
import Slider from "react-slick";

import circle from './images/circle.png';

import ScrollAnimation from 'react-animate-on-scroll';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SlickServices extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
        };
        return (
            <div className="slick-service">
                <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut" className="slickservice-title">
                    <h1> Services </h1>
                </ScrollAnimation>

                <Slider {...settings}>
                <div>
                    <Grid stackable columns={2}>
                        <Grid.Column mobile={16} tablet={6} computer={6} className="slickservices-image-content">
                            <Image src={circle} size="tiny" className="services-image"/>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={10} computer={10} className="services-desc-content">
                            <div>
                                <div className="service-title"> Websites </div>
                                <div className="service-desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum </div>
                            </div>
                        </Grid.Column>
                    </Grid>
                </div>
                <div>
                    <Grid stackable columns={2}>
                        <Grid.Column mobile={16} tablet={6} computer={6} className="slickservices-image-content">
                            <Image src={circle} size="tiny" className="services-image"/>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={10} computer={10} className="services-desc-content">
                            <div>
                                <div className="service-title"> Web Apps </div>
                                <div className="service-desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum </div>
                            </div>
                        </Grid.Column>
                    </Grid>
                </div>
                <div>
                    <Grid stackable columns={2}>
                        <Grid.Column mobile={16} tablet={6} computer={6} className="slickservices-image-content">
                            <Image src={circle} size="tiny" className="services-image"/>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={10} computer={10} className="services-desc-content">
                            <div>
                                <div className="service-title"> On Premise System </div>
                                <div className="service-desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum </div>
                            </div>
                        </Grid.Column>
                    </Grid>
                </div>
                <div>
                    <Grid stackable columns={2}>
                        <Grid.Column mobile={16} tablet={6} computer={6} className="slickservices-image-content">
                            <Image src={circle} size="tiny" className="services-image"/>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={10} computer={10} className="services-desc-content">
                            <div>
                                <div className="service-title"> Hardware </div>
                                <div className="service-desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum </div>
                            </div>
                        </Grid.Column>
                    </Grid>
                </div>
                <div>
                    <Grid stackable columns={2}>
                        <Grid.Column mobile={16} tablet={6} computer={6} className="slickservices-image-content">
                            <Image src={circle} size="tiny" className="services-image"/>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={10} computer={10} className="services-desc-content">
                            <div>
                                <div className="service-title"> Outsourcing and Offshoring </div>
                                <div className="service-desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum </div>
                            </div>
                        </Grid.Column>
                    </Grid>
                </div>

                <div>
                    <Grid stackable columns={2}>
                        <Grid.Column mobile={16} tablet={6} computer={6} className="slickservices-image-content">
                            <Image src={circle} size="tiny" className="services-image"/>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={10} computer={10} className="services-desc-content">
                            <div>
                                <div className="service-title"> E-Commerce </div>
                                <div className="service-desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatum </div>
                            </div>
                        </Grid.Column>
                    </Grid>
                </div>
                </Slider>
            </div>
        );
    }
}