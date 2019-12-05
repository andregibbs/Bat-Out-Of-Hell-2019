import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'
import { Container, Row, Col } from 'reactstrap'
// s
import BoohBannerMob from 'images/BOOH-576x1000pixels.jpg'
import BoohBannerTablet from 'images/BOOH-991x1100pixels.jpg'
import BoohBannerDesk from 'images/BOOH-1920x1000pixels.jpg'
import VideoBlock from "components/Media/VideoBlock"
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Img from 'gatsby-image'


const headData = {
    title: 'Bat out of Hell | Media',
    description: '',
};

class GalleryPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
            modalOpen: false,
        }
    }

    toggleModal = (e) => {
        e.preventDefault();

        this.setState({
            modalOpen: !this.state.modalOpen
        });
    };

    render() {
        const { isOpen, photoIndex } = this.state

        const items = this.props.data.allGalleryJson.edges

        let images = []

        const galleryItems = items.map((item, i) => {
            images.push(item.node.image.childImageSharp.fluid.src)
            return (
                <Col xs={12} sm={6} lg={3} key={i} className="px-0 py-3 p-md-3">
                    <div
                        tabIndex={i} role="button" aria-pressed="false"
                        className="photo-wrapper"
                        onClick={() => this.setState({ photoIndex: i, isOpen: true })}
                        onKeyDown={() => this.setState({ photoIndex: i, isOpen: true })}
                    >
                        <Img
                            fluid={item.node.thumb.childImageSharp.fluid}
                            alt=""
                            className="photo-wrapper__img"
                        />
                    </div>
                </Col>
            )
        })

        return (
            <Layout
                headData={headData}
                navGlobal={true}
            >
                <section className="page bg--black">
                    <div className="page-container">
                        <Container fluid={true} className="px-0">

                            <div>
                                <img src={BoohBannerMob} alt="BOOH Banner" className="img-fluid w-100 d-md-none" />
                                <img src={BoohBannerTablet} alt="BOOH Banner" className="img-fluid w-100 d-none d-md-block d-lg-none" />
                                <img src={BoohBannerDesk} alt="BOOH Banner" className="img-fluid w-100 d-none d-lg-block" />
                            </div>

                            <h1 className="big-text text-center pt-5 text--red">Media</h1>

                            <Row>
                                <Container className="px-0 pt-3 py-md-5 text-center">
                                    <VideoBlock />
                                </Container>
                            </Row>

                            <Container>

                                <div className="photos">
                                  <h1 className="big-text text-center pb-5 text--red">Photographs</h1>
                                    <Row className="justify-content-center">
                                        {galleryItems}
                                    </Row>
                                    <p className="py-5 text-center mb-0">London 2018 Cast. Photography by Specular</p>
                                </div>

                            </Container>
                        </Container>
                    </div>
                </section>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        imageCaption={''}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}
            </Layout>
        )
    }

}


export default GalleryPage

export const GalleryPageQuery = graphql`
query {
    allGalleryJson {
        edges {
            node {
                id
                image {
                    childImageSharp {
                        fluid(maxWidth: 1600) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                thumb {
                    childImageSharp {
                        fluid(maxWidth: 300) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
}`