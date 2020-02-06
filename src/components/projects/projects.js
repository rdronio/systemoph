import React, { Component } from 'react'
import {Segment, Image, Grid  } from 'semantic-ui-react'
import Slider from "react-slick";

import ecommerceImage from './images/e-commerce.png';
import websiteImage from './images/website.png';
import hrisImage from './images/HRIS.png';
import mlmImage from './images/MLM.png';

// import dots from './images/dot.png';


import ScrollAnimation from 'react-animate-on-scroll';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Projects extends Component {
    // render() {
    //     return (
    //         <Segment id="ourworks_" className="projects" vertical textAlign='center' >
    //             <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut" className="projects-title">
    //                 Our Works 
    //             </ScrollAnimation>
    //             <ScrollAnimation animateIn="slideInLeft" animateOut="slideOutRight" className="projects-content">
    //                 <Grid stackable columns={3} className="projects-content-grid">
    //                     <Grid.Column mobile={16} tablet={10} computer={5}>
    //                         <Image src={ecommerceImage} size="large" className="projects-image"/>
    //                         <h3> E-Commerce </h3>
    //                         <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quasi accusantium rem eaque ut quod voluptate, eligendi neque, nihil tempora eum quia voluptatem vero autem repudiandae? </p>
    //                     </Grid.Column>
    //                     <Grid.Column mobile={16} tablet={10} computer={5}>
    //                         <Image src={websiteImage} size="large" className="projects-image"/>
    //                         <h3> Website </h3>
    //                         <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quasi accusantium rem eaque ut quod voluptate, eligendi neque, nihil tempora eum quia voluptatem vero autem repudiandae? </p>
    //                     </Grid.Column>
    //                     <Grid.Column mobile={16} tablet={10} computer={5}>
    //                         <Image src={hrisImage} size="large" className="projects-image"/>
    //                         <h3> HRIS, Time Keeping and Payroll </h3>
    //                         <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quasi accusantium rem eaque ut quod voluptate, eligendi neque, nihil tempora eum quia voluptatem vero autem repudiandae? </p>
    //                     </Grid.Column>
    //                 </Grid>
    //             </ScrollAnimation>
    //             <div className="projects-desc">
    //                 At SysteMoPH, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quasi accusantium rem eaque ut quod voluptate, eligendi neque, nihil tempora eum quia voluptatem vero autem repudiandae?
    //             </div>

    //         </Segment>
    //     )
    // }

    render() {
        const settings = {
            // dots: true,
            // infinite: true,
            // speed: 500,
            // slidesToShow: 3,
            // slidesToScroll: 3,
            // autoplay: true,
            // autoplaySpeed: 5000,

            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 3,
            dots: true,
            infinite: true,
            draggable: true,
            speed: 1000,
            autoplay: true,
            autoplaySpeed: 20000,
            responsive: [
            {
                breakpoint: 991,
                settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
                }
            }
            ]
        };

        return (
            <Segment id="ourworks_"vertical textAlign='center' className="slick-projects" >
                <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut" className="projects-title">
                    Our Works
                </ScrollAnimation>

                <Slider {...settings}>

                    <div>
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                        <Grid stackable columns={1} className="slickproject-grid">
                            <Grid.Column mobile={16} tablet={16} computer={16} className="project-content-grid">
                                <Image src={ecommerceImage} size="large" className="projects-image"/>
                                <h3> E-Commerce </h3>
                                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quasi accusantium rem eaque ut quod voluptate, eligendi neque, nihil tempora eum quia voluptatem vero autem repudiandae? </p>
                            </Grid.Column>
                        </Grid>
                        </ScrollAnimation>
                    </div>

                    <div>
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                        <Grid stackable columns={1} className="slickproject-grid">
                            <Grid.Column mobile={16} tablet={16} computer={16} className="project-content-grid">
                                <Image src={websiteImage} size="large" className="projects-image"/>
                                <h3> Website </h3>
                                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quasi accusantium rem eaque ut quod voluptate, eligendi neque, nihil tempora eum quia voluptatem vero autem repudiandae? </p>
                            </Grid.Column>
                        </Grid>
                        </ScrollAnimation>
                    </div>

                    <div>
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                        <Grid stackable columns={1} className="slickproject-grid">
                            <Grid.Column mobile={16} tablet={16} computer={16} className="project-content-grid">
                                <Image src={hrisImage} size="large" className="projects-image"/>
                                <h3> HRIS, Time Keeping and Payroll </h3>
                                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quasi accusantium rem eaque ut quod voluptate, eligendi neque, nihil tempora eum quia voluptatem vero autem repudiandae? </p>
                            </Grid.Column>
                        </Grid>
                        </ScrollAnimation>
                    </div>

                    <div>
                        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                        <Grid stackable columns={1} className="slickproject-grid">
                            <Grid.Column mobile={16} tablet={16} computer={16} className="project-content-grid">
                                <Image src={mlmImage} size="large" className="projects-image"/>
                                <h3> Multi-level Marketing System </h3>
                                <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quasi accusantium rem eaque ut quod voluptate, eligendi neque, nihil tempora eum quia voluptatem vero autem repudiandae? </p>
                            </Grid.Column>
                        </Grid>
                        </ScrollAnimation>
                    </div>
                </Slider>
            </Segment>
        );
    }
}
