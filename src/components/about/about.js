import React, { Component } from "react";
import { Segment, Image, Grid } from "semantic-ui-react";

import AboutImage from "./images/img_about.png";

import ScrollAnimation from "react-animate-on-scroll";

export default class About extends Component {
  render() {
    return (
      <Segment id="about_" className="about" vertical textAlign="center">
        <Grid stackable columns={2}>
          <Grid.Column
            mobile={16}
            tablet={16}
            computer={8}
            className="about-left-card"
          >
            <ScrollAnimation
              animateIn="fadeInLeft"
              animateOut="fadeOutLeft"
              className="about-left-card-content"
            >
              <h1> Objectives </h1>
              <ul>
                <li>
                  {" "}
                  To offer our clients only the best, effective, favorable and
                  reliable solutions.{" "}
                </li>
                <li>
                  {" "}
                  To establish strong and long-term bond among partners.{" "}
                </li>
                <li>
                  {" "}
                  To design and build customised systems with efficiency and
                  strong security.{" "}
                </li>
                <li>
                  {" "}
                  To supply skilled resource for efficient outsourcing and
                  offshoring solutions.{" "}
                </li>
              </ul>
            </ScrollAnimation>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={16} computer={8}>
            <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutRight">
              <Image src={AboutImage} size="massive" className="about-image" />
            </ScrollAnimation>
          </Grid.Column>
        </Grid>

        <Segment className="about-mission" vertical textAlign="center">
          <ScrollAnimation
            animateIn="fadeIn"
            animateOut="fadeOut"
            className="about-mission-title"
          >
            Our Mission
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            animateOut="fadeOut"
            className="about-mission-desc"
          >
            is to execute your Visions with Innovation, Creativity and
            Originality. Raise your business to the next level with SysteMoPH.
          </ScrollAnimation>
        </Segment>
      </Segment>
    );
  }
}
