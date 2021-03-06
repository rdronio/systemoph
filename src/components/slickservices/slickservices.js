import React, { Component } from "react";
import { Image, Grid, Segment } from "semantic-ui-react";
import Slider from "react-slick";

import websiteImage from "./images/website.png";
import hardwareImage from "./images/hardware.png";
import ecommerceImage from "./images/ecommerce.png";
import webappsImage from "./images/webapps.png";
import outsourcingImage from "./images/outsourcing.png";
import onpremiseImage from "./images/onpremise.png";

import ScrollAnimation from "react-animate-on-scroll";

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
      autoplaySpeed: 5000
    };
    return (
      <Segment vertical textAlign="center" className="slick-service">
        <ScrollAnimation
          animateIn="zoomIn"
          animateOut="zoomOut"
          className="slickservice-title"
        >
          <h1> Services </h1>
        </ScrollAnimation>

        <Slider {...settings}>
          <div>
            <Grid stackable columns={2}>
              <Grid.Column
                mobile={16}
                tablet={6}
                computer={6}
                className="slickservices-image-content"
              >
                <Image
                  src={websiteImage}
                  size="tiny"
                  className="services-image"
                />
              </Grid.Column>
              <Grid.Column
                mobile={16}
                tablet={10}
                computer={10}
                className="services-desc-content"
              >
                <div>
                  <div className="service-title"> Websites </div>
                  <div className="service-desc">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto, voluptatum{" "}
                  </div>
                </div>
              </Grid.Column>
            </Grid>
          </div>
          <div>
            <Grid stackable columns={2}>
              <Grid.Column
                mobile={16}
                tablet={6}
                computer={6}
                className="slickservices-image-content"
              >
                <Image
                  src={webappsImage}
                  size="tiny"
                  className="services-image"
                />
              </Grid.Column>
              <Grid.Column
                mobile={16}
                tablet={10}
                computer={10}
                className="services-desc-content"
              >
                <div>
                  <div className="service-title"> Web Apps </div>
                  <div className="service-desc">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto, voluptatum{" "}
                  </div>
                </div>
              </Grid.Column>
            </Grid>
          </div>
          <div>
            <Grid stackable columns={2}>
              <Grid.Column
                mobile={16}
                tablet={6}
                computer={6}
                className="slickservices-image-content"
              >
                <Image
                  src={onpremiseImage}
                  size="tiny"
                  className="services-image"
                />
              </Grid.Column>
              <Grid.Column
                mobile={16}
                tablet={10}
                computer={10}
                className="services-desc-content"
              >
                <div>
                  <div className="service-title"> On Premise System </div>
                  <div className="service-desc">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto, voluptatum{" "}
                  </div>
                </div>
              </Grid.Column>
            </Grid>
          </div>
          <div>
            <Grid stackable columns={2}>
              <Grid.Column
                mobile={16}
                tablet={6}
                computer={6}
                className="slickservices-image-content"
              >
                <Image
                  src={hardwareImage}
                  size="tiny"
                  className="services-image"
                />
              </Grid.Column>
              <Grid.Column
                mobile={16}
                tablet={10}
                computer={10}
                className="services-desc-content"
              >
                <div>
                  <div className="service-title"> Hardware </div>
                  <div className="service-desc">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto, voluptatum{" "}
                  </div>
                </div>
              </Grid.Column>
            </Grid>
          </div>
          <div>
            <Grid stackable columns={2}>
              <Grid.Column
                mobile={16}
                tablet={6}
                computer={6}
                className="slickservices-image-content"
              >
                <Image
                  src={outsourcingImage}
                  size="tiny"
                  className="services-image"
                />
              </Grid.Column>
              <Grid.Column
                mobile={16}
                tablet={10}
                computer={10}
                className="services-desc-content"
              >
                <div>
                  <div className="service-title">
                    {" "}
                    Outsourcing and Offshoring{" "}
                  </div>
                  <div className="service-desc">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto, voluptatum{" "}
                  </div>
                </div>
              </Grid.Column>
            </Grid>
          </div>

          <div>
            <Grid stackable columns={2}>
              <Grid.Column
                mobile={16}
                tablet={6}
                computer={6}
                className="slickservices-image-content"
              >
                <Image
                  src={ecommerceImage}
                  size="tiny"
                  className="services-image"
                />
              </Grid.Column>
              <Grid.Column
                mobile={16}
                tablet={10}
                computer={10}
                className="services-desc-content"
              >
                <div>
                  <div className="service-title"> E-Commerce </div>
                  <div className="service-desc">
                    {" "}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto, voluptatum{" "}
                  </div>
                </div>
              </Grid.Column>
            </Grid>
          </div>
        </Slider>
      </Segment>
    );
  }
}
