import React, { Component } from 'react'
import Layout from 'components/Layout'
import { Container, Col, Row } from 'reactstrap'
import DrSeussBannerMob from 'images/bg-header-991.jpg'
import DrSeussBannerDesk from 'images/BOOH-1920x1000pixels.jpg'
import YouTube from "react-youtube"
import {media} from "utils/Media"
import styled from "styled-components"
import play from "images/icons/play.svg"
import placeholder from "images/trailer-placeholder.jpg"

const Play = styled.div`
    &:after {
        content: "";
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-image: url("${play}");
        background-repeat: no-repeat;
        background-size: contain;
        height: 60px;
        width: 60px;
	    	cursor: pointer;

        @media ${media.md} {
            height: 80px;
            width: 80px;
        }

        @media ${media.lg} {
            height: 110px;
            width: 110px;
        }
    }

    &:hover {
        &:after {
            background-color: red;
        }
    }

    `

const Placeholder = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-image: url("${placeholder}");
    background-size: cover;
    background-position: center;
    cursor: pointer;
`


const headData = {
  title: 'Bat of out Hell',
  description: '',
};

class IndexPage extends Component {

  showPlaceholder() {
		this.setState({
			placeholder: true
		})
	}
  

  render() {

    this.state = {
      placeholder: true,
      
    }
    

    return (
      <>

        <Layout
          headData={headData}
        >
          <div className="page bg--black">

            <Row className="bg--home">
              <a href="https://www.showclix.com/events/29252" target="_blank" rel="noreferrer noopener">
                <img src={DrSeussBannerMob} alt="Dr Seuss Logo" className="img-fluid d-md-none" />
                <img src={DrSeussBannerDesk} alt="Dr Seuss Logo" className="img-fluid d-none d-md-block" />
              </a>
            </Row>

            <Row>
              <Container className="px-0 pt-3 py-md-5 text-center">
                <Row>
                  <Col xs={12}>
                    <div class="col-xs-12 text-center home">
                      <h1 class="text-red">WINNER! BEST MUSICAL</h1>
                      <h2>London Evening Standard Theatre Awards</h2>
                    </div>
                    <div class="col-sm-12 col-md-10 offset-md-1">
                      <br />
                      <p class="text-lg text-center">Following sell out seasons in London and Toronto, Jim Steinman’s smash-hit musical <strong>Bat Out of Hell </strong>heats up New York City Center this summer for six unmissable weeks only!</p>
                      <p class="text-lg text-center">This award-winning musical thunders through Meat Loaf’s legendary anthems including <em>I’d Do Anything For Love (But I Won’t Do That)</em>, <em>Paradise By The Dashboard Light</em>, <em>Two Out Of Three Ain’t Bad, Dead Ringer For Love</em> and <em>Bat Out of Hell</em>, in a theatrical spectacle unlike any other.</p>
                      <p class="text-lg text-center">Tickets from $45.00. Book your tickets now!</p>
                      <br />
                    </div>
                  </Col>

                  <Col xs={12}>
                      <div className="embed-responsive embed-responsive-16by9">
                        {this.state.placeholder &&
                          <>
                            <Play onClick={this.play} />
                            <Placeholder src={placeholder} alt="Watch trailer" title="Watch Back to the Future Musical trailer" onClick={this.play} />
                          </>
                        }
                        <YouTube
                          videoId="nr4Qq_ILExQ"
                          onReady={this.onReady}
                          onEnd={this.showPlaceholder}
                          className="embed-responsive-item"
                        />
                      </div>
                  </Col>
                </Row>
              </Container>
            </Row>

          </div>

        </Layout>

      </>
    );

  }
}

export default IndexPage