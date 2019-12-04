import React, { Component } from 'react'
import Layout from 'components/Layout'
import { Container, Col, Row } from 'reactstrap'
import BoohBannerMob from 'images/BOOH-576x1000pixels.jpg'
import BoohBannerTablet from 'images/BOOH-991x1100pixels.jpg'
import BoohBannerDesk from 'images/BOOH-1920x1000pixels.jpg'
import YouTube from "react-youtube"
import TourList from "components/Tours/TourList"
import styled from "styled-components"
import {media} from "utils/Media"
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
  constructor(props) {
		super(props)

		this.state = {
			modal: false,
			placeholder: true,
			event: ""
		}

		this.onReady = this.onReady.bind(this)
		this.play = this.play.bind(this)
		this.showPlaceholder = this.showPlaceholder.bind(this)
	}

	onReady(event) {
		this.setState({
			player: event
		})
	}

	play() {
		this.state.player.target.playVideo()
		this.setState({
			placeholder: false
		})
	}

	showPlaceholder() {
		this.setState({
			placeholder: true
		})
	}

  render() {

    const opts = {
      playerVars: { // https://developers.google.com/youtube/player_parameters
          rel: 0,
          modestbranding: 1
      }
  }
    

    return (
      <>

        <Layout
          headData={headData}
        >
          <div className="page bg--black">

            <div>
              <a href="https://www.showclix.com/events/29252" target="_blank" rel="noreferrer noopener">
                <img src={BoohBannerMob} alt="BOOH Banner" className="img-fluid w-100 d-md-none" />
                <img src={BoohBannerTablet} alt="BOOH Banner" className="img-fluid w-100 d-none d-md-block d-lg-none" />
                <img src={BoohBannerDesk} alt="BOOH Banner" className="img-fluid w-100 d-none d-lg-block" />
              </a>
            </div>

            <Row>
              <TourList/>
            </Row>

            <Row>
              <Container className="px-0 pt-3 py-md-5 text-center">
                <Row>
                   <Col xs={12}>
                    <div className="col-xs-12 text-center home">
                      <h1 className="mb-0">WINNER! BEST MUSICAL</h1>
                      <h4>London Evening Standard Theatre Awards</h4>
                    </div>
                    <div className="col-sm-12 col-md-9 mx-auto text-center">
                      <br />
                      <p>Direct from electrifying audiences in London, Toronto, Germany and New York, Jim Steinman’s spectacular musical <strong>Bat Out of Hell</strong> hits the road on a UK tour in 2020.</p>
                      <p>Bringing to life the legendary anthems of <strong>Jim Steinman</strong> & <strong>Meat Loaf</strong>, this critically-acclaimed production uniquely combines the magic and excitement of a musical with the immense energy of rock ‘n’ roll. Join Strat, the forever young leader of rebellious gang ‘The Lost’ as he falls in love with Raven, the beautiful daughter of the tyrannical ruler of Obsidian.</p>
                      <p>This award-winning musical thunders through iconic hits including <em>I’d Do Anything For Love (But I Won’t Do That), Paradise By The Dashboard Light, Two Out Of Three Ain’t Bad, Dead Ringer For Love and Bat Out of Hell,</em> in an exciting over the top theatrical spectacle unlike any other.</p>
                      <br />
                    </div>
                  </Col>

                  <Col sm={9} className="mx-auto">
                      <div className="embed-responsive embed-responsive-16by9">
                        {this.state.placeholder &&
                          <>
                            <Play onClick={this.play} />
                            <Placeholder src={placeholder} alt="Watch trailer" title="Bat Out of Hell The Musical – Official Trailer" onClick={this.play} />
                          </>
                        }
                        <YouTube
                          videoId="Vm0JdAdBuIw"
                          opts={opts}
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