import React, { Component } from 'react'
import { Image, Grid, Segment } from 'semantic-ui-react'

import ScrollAnimation from 'react-animate-on-scroll';

import websiteImage from './images/website.png';
import hardwareImage from './images/hardware.png';
import ecommerceImage from './images/ecommerce.png';
import webappsImage from './images/webapps.png';
import outsourcingImage from './images/outsourcing.png';
import onpremiseImage from './images/onpremise.png';

export default class Service extends Component {
    render() {
        return (
            <Segment id="services_" className="career" vertical textAlign='center' >
                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" className="service">
                    <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut" className="service">
                        <h1> Services </h1>
                    </ScrollAnimation>

                    <Grid stackable columns={3}>
                        <Grid.Column mobile={16} tablet={10} computer={5}>
                            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" className="service-content">
                                <Grid stackable columns={2}>
                                    <Grid.Column mobile={16} tablet={6} computer={6} className="services-image-content">
                                        <Image src={websiteImage} size="tiny" className="services-image"/>
                                    </Grid.Column>
                                    <Grid.Column mobile={16} tablet={10} computer={10} className="services-desc-content">
                                        <div>
                                            <div className="service-title"> Websites </div>
                                            <div className="service-desc">A website is a collection of publicly accessible, interlinked Web pages that share a single domain name. </div>
                                        </div>
                                    </Grid.Column>
                                </Grid>
                            </ScrollAnimation>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={10} computer={5}>
                            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" className="service-content">
                                <Grid stackable columns={2}>
                                    <Grid.Column mobile={16} tablet={6} computer={6} className="services-image-content">
                                        <Image src={webappsImage} size="tiny" className="services-image"/>
                                    </Grid.Column>
                                    <Grid.Column mobile={16} tablet={10} computer={10} className="services-desc-content">
                                        <div>
                                            <div className="service-title"> Web Apps </div>
                                            <div className="service-desc"> an application program that is stored on a remote server and delivered over the Internet through a browser interface. </div>
                                        </div>
                                    </Grid.Column>
                                </Grid>
                            </ScrollAnimation>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={10} computer={5}>
                            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" className="service-content">
                                <Grid stackable columns={2}>
                                    <Grid.Column mobile={16} tablet={6} computer={6} className="services-image-content">
                                        <Image src={onpremiseImage} size="tiny" className="services-image"/>
                                    </Grid.Column>
                                    <Grid.Column mobile={16} tablet={10} computer={10} className="services-desc-content">
                                        <div>
                                            <div className="service-title"> On Premise System </div>
                                            <div className="service-desc"> is installed and runs on computers on the premises of the person or organization using the software, rather than at a remote facility such as a server farm or cloud.  </div>
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
                                        <Image src={hardwareImage} size="tiny" className="services-image"/>
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
                                        <Image src={outsourcingImage} size="tiny" className="services-image"/>
                                    </Grid.Column>
                                    <Grid.Column mobile={16} tablet={10} computer={10} className="services-desc-content">
                                        <div>
                                            <div className="service-title"> Outsourcing and Offshoring </div>
                                            <div className="service-desc"> business practice of hiring a party outside a company to perform services and create goods that traditionally were performed in-house by the company's own employees and staff. </div>
                                        </div>
                                    </Grid.Column>
                                </Grid>
                            </ScrollAnimation>
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={10} computer={5}>
                            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" className="service-content">
                                <Grid stackable columns={2}>
                                    <Grid.Column mobile={16} tablet={6} computer={6} className="services-image-content">
                                        <Image src={ecommerceImage} size="tiny" className="services-image"/>
                                    </Grid.Column>
                                    <Grid.Column mobile={16} tablet={10} computer={10} className="services-desc-content">
                                        <div>
                                            <div className="service-title"> E-Commerce </div>
                                            <div className="service-desc"> eCommerce websites are online portals that facilitate online transactions of goods and services through means of the transfer of information and funds over the Internet. </div>
                                        </div>
                                    </Grid.Column>
                                </Grid>
                            </ScrollAnimation>
                        </Grid.Column>
                    </Grid>
                </ScrollAnimation>
            </Segment>
        )
    }
}
