import React, { Component } from 'react';
import { Container, Row, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <footer className="dynamic-footer container-fluid py-3 border bg-white">
                <Container>
                    <Row>
                        <Nav className="black-text">
                            <NavItem>
                                <NavLink to="/about-us">About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/support">Support</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/contact-us">Contact Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/privacy">Privacy Policy</NavLink>
                            </NavItem>
                        </Nav>
                    </Row>
                </Container>
            </footer>
        );
    }
}
            
export default Footer;