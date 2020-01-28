import React, { Component } from 'react'
import { Segment, Image, Grid } from 'semantic-ui-react'

import logo from './images/systemoph-logo.png';
import bg_footer from './images/buildings.png';
// import ScrollAnimation from 'react-animate-on-scroll';

export default class About extends Component {
    render() {
        return (
            <Segment className="footer" vertical textAlign='center' style={{
                backgroundImage:  `url(${bg_footer})`}} >
                <div className="footer-content">
                    <Grid stackable columns={3}>
                        <Grid.Column width="4" className="">
                            <Image src={logo} size="medium" />
                        </Grid.Column>

                        <Grid.Column width="4">
                            <div className="footer-contact-us"> Contact Details </div>
                            <div className="footer-contact-us-content">
                                <p> info@systemoph.com <br /> +639175553844 <br /> +639612452478 <br /> +639190002586</p>
                            </div>
                        </Grid.Column>

                        <Grid.Column width="4" className="">
                            <div className="footer-address"> Address </div>
                            <div className="footer-address-content">
                                Main: 776 St. Dominic Subd., San Miguel Betis, Guagua, Pampanga 2003    
                            </div>
                            <div className="footer-address-content">
                                Branch: 222 Dalhia St. Alido Heights Subd., Malolos City, Bulacan 3000 
                            </div>
                        </Grid.Column>

                        <Grid.Column width="4" className="">
                            <div className="footer-hours"> Office Hours </div>
                            <div className="footer-hours-content">
                                Mon:09:00 am – 05:00 pm <br />
                                Tue:09:00 am – 05:00 pm <br />
                                Wed:09:00 am – 05:00 pm <br /> 
                                Thu:09:00 am – 05:00 pm <br />
                                Fri:09:00 am – 05:00 pm <br />
                            </div>
                        </Grid.Column>
                    </Grid>
                </div>
            </Segment>
        )
    }
}
