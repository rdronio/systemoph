import React, { Component } from 'react'
import { Menu, Container, Segment, Image  } from 'semantic-ui-react'

import ScrollAnimation from 'react-animate-on-scroll';

import logo from './images/logo/systemoph-logo.png';
import bg_landingpage from './images/bg_landingpage.png';

export default class MenuHeader extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
            <Segment className="showcase" vertical textAlign='center' style={{
                backgroundImage:  `url(${bg_landingpage})`}}>
                <Menu secondary>
                    <Container> 
                        <Menu.Item>
                            <Image src={logo} size='medium'/>
                        </Menu.Item>
                        
                        <Menu.Menu position='right'>
                            <Menu.Item
                                name='home'
                                active={activeItem === 'home'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name='about'
                                active={activeItem === 'about'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name='careers'
                                active={activeItem === 'careers'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                            name='services'
                            active={activeItem === 'services'}
                            onClick={this.handleItemClick}
                            />
                        </Menu.Menu>
                    </Container>
                </Menu>

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
    )
  }
}
