import React, { Component } from 'react'
import { Segment, Image, Grid } from 'semantic-ui-react'

import logo from './images/systemoph-logo.png';
import bg_footer from './images/buildings.png';
import bg_footers from './images/building.png';

// import ScrollAnimation from 'react-animate-on-scroll';

export default class About extends Component {
    render() {
        return (
            <Segment className="footer" vertical textAlign='center' style={{
                backgroundImage:  `url(${bg_footers})`}} >
                <div className="footer-content">
                    <Grid stackable columns={3}>
                        <Grid.Column width="5" className="">
                            <Image src={logo} size="medium" />
                        </Grid.Column>

                        <Grid.Column width="5">
                            <div className="footer-contact-us"> Contact Details </div>
                            <div className="footer-contact-us-content">
                                <p> salesmarketing@systemoph.com <br /> +639175553844 <br /> +639612452478 <br /> +639190002586</p>
                            </div>
                        </Grid.Column>

                        <Grid.Column width="5" className="">
                            <div className="footer-address"> Address </div>
                            <div className="footer-address-content">
                                Main: Guagua, Pampanga 2003    
                            </div>
                            <div className="footer-address-content">
                                Branch: Malolos City, Bulacan 3000 
                            </div>
                        </Grid.Column>

                        {/* <Grid.Column width="4" className="">
                            <div className="footer-hours"> Office Hours </div>
                            <div className="footer-hours-content">
                                Mon:09:00 am – 05:00 pm <br />
                                Tue:09:00 am – 05:00 pm <br />
                                Wed:09:00 am – 05:00 pm <br /> 
                                Thu:09:00 am – 05:00 pm <br />
                                Fri:09:00 am – 05:00 pm <br />
                            </div>
                        </Grid.Column> */}
                    </Grid>
                </div>
            </Segment>
        )
    }
}
