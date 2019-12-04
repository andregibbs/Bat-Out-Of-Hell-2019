import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'reactstrap'

const Footer = () => (
    <footer className="footer p-4 text-center">
        <Container>
            <Row>
                <Col lg={12} className="p-0">
                    <Row>

                        <Col xs={12}>
                            <ul className="footer__links">
                                <li><a href="https://batoutofhellmusical.com/privacy-policy">Privacy Policy</a></li> |
                                <li><a href="https://batoutofhellmusical.com/cookies-policy">Cookie Policy</a></li>
                            </ul>
                        </Col>


                        <Col className="p-0 text-lg-center">
                            <ul className="footer__links--social">
                                <li>
                                    <a href="https://www.facebook.com/BatTheMusical/" target="_blank"
                                        rel="noopener noreferrer" className="icon icon-facebook">
                                        <div className="btn-social facebook">
                                            <span className="sr-only">Facebook</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/batthemusical?lang=en" target="_blank" rel="noopener noreferrer"
                                        className="icon icon-twitter">
                                        <div className="btn-social twitter">
                                            <span className="sr-only">Twitter</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/batthemusical/?hl=en" target="_blank" rel="noopener noreferrer"
                                        className="icon icon-instagram">
                                        <div className="btn-social instagram">
                                            <span className="sr-only">Instagram</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Col>

                <Col xs={12}>
                    <ul className="footer__links">
                        <li>© 2016 Bat Out Of Hell</li> |
                <li>All rights reserved</li><br />
                <li> Designed and built by  <a href="https://www.dewynters.com/"
                            target="_blank"
                            className="white-text"
                            rel="noopener noreferrer">Dewynters</a></li>
                    </ul>
                </Col>


            </Row>
        </Container>
    </footer>
);

export default Footer