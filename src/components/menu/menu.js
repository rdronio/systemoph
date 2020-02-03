import React, { Component } from 'react'
import { Menu, Container, Segment, Image  } from 'semantic-ui-react'

import ScrollAnimation from 'react-animate-on-scroll';

import logo from './images/logo/systemoph-logo.png';
import bg_landingpage from './images/bg_landingpage.png';

import { Link, animateScroll as scroll } from 'react-scroll'

export default class MenuHeader extends Component {
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    scrollToTop = () => {
        scroll.scrollToTop(); 
    };

    render() {
    const { activeItem } = this.state

        return (
            <div>
                <Menu secondary>
                    <Container> 
                        <Menu.Item>
                            <Image src={logo} size='small' className="header_logo"/>
                        </Menu.Item>
                        
                        <Menu.Menu position='right'>.
                            <Menu.Item>
                                <Link
                                    activeClass="active"
                                    to="about_"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="item"
                                > About </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link
                                    activeClass="active"
                                    to="services_"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="item"
                                > Services </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link
                                    activeClass="active"
                                    to="careers_"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="item"
                                > Careers </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link
                                    activeClass="active"
                                    to="ourworks_"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                    className="item"
                                >Our Works </Link>
                            </Menu.Item>
                        </Menu.Menu>
                    </Container>
                </Menu>

                <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
                    

                    <Segment className="showcase" vertical textAlign='center' style={{
                        backgroundImage:  `linear-gradient(to bottom, rgba(255, 255, 255, 0.46), rgba(255, 255, 255, 0)), url(${bg_landingpage})`}}>
                        <Container text textAlign="left" className="showcase-content">
                            <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutRight" className="showcase-title">
                                <span class="showcase-title first-word"> Expanding </span> <span class="showcase-title second-word"> Possibilities. </span>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutRight" className="showcase-subtitle">
                                Consider it Solved.
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutLeft" className="showcase-desc">
                                We aim to Provide Quality IT Solutions and Consultancy to help the growth of small, medium, and large enterprises.
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutLeft" className="showcase-button">
                                <a href="#"> Get Started </a>
                            </ScrollAnimation>
                        </Container>
                    </Segment>
                </ScrollAnimation>
            </div>
        )
    }
}
