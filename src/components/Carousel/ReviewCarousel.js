import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Slider from 'react-slick'
import Img from "gatsby-image/withIEPolyfill"
import { Modal, ModalBody } from 'reactstrap'
import arrowRight from 'images/carousel/arrow-right.svg'
import arrowLeft from 'images/carousel/arrow-left.svg'
import play from 'images/play.png'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import globalNews from "images/global-news.png"
import morningNews from "images/morning-news.png"
import youtube from "images/youtube.jpg"


const CarouselWrapper = styled(Slider)`
    .slick-prev, .slick-next {
       width: 32px;
       height: 32px; 
        top: 50%;
        z-index: 9;
        
        &:focus {
            outline: 5px auto -webkit-focus-ring-color !important;
        }
    }
    
    .slick-next {
        right: 30px;
        
        @media (min-width: 1200px) {
            right: -100px;
        }

        @media (max-width: 1200px) {
            bottom: -50px;
            top: initial;
        }
        
        &:before {
            content: '';
            background: url(${arrowRight}) no-repeat center center;
            background-size: contain;
            position: absolute;
            right: -10px;
            top: 0;
            width: 100%;
            height: 100%;
            opacity: 1;

            @media (max-width: 1200px) {
                top: -50px;
            }
            
            @media (min-width: 1200px) {
                right: -20px;
            }
        }
    }
    
    .slick-prev {
        left: 30px;
        
        @media (min-width: 1200px) {
            left: -100px;
        }

        @media (max-width: 1200px) {
            bottom: -50px;
            top: initial;
        }
        
        &:before {
            content: '';
            background: url(${arrowLeft}) no-repeat center center;
            background-size: contain;
            position: absolute;
            left: -10px;
            top: 0;
            width: 100%;
            height: 100%;
            opacity: 1;

            @media (max-width: 1200px) {
                top: -50px;
            }
            
           @media (min-width: 1200px) {
                left: -20px;
            }
        }
    }
`

const VideoButton = styled.button`
    margin: 0 auto 1rem auto;
    background: none;
    border: none;
    border: 3px solid black;
    padding: 0;
`

const ModalStyled = styled(Modal)`
    max-width: 1200px;
    width: calc(100% - 50px);
    margin: 0 auto;
    text-align: center;
    text-transform: uppercase;

    .modal-content {
        background: transparent;
        border: none;
        border-radius: 0;
    }

    .modal-body {
        padding: 0;
    }

    .popup-modal__close {
        position: absolute;
        right: 0;
        top: 0rem;
        height: 36px;
        width: 36px;
        background-color: transparent;
        cursor: pointer;
        border: 0;
        z-index: 4;

        @media (min-width: 1200px) {
            height: 50px;
            width: 50px;
        }

        &:after,
        &:before {
            content: '';
            background-color: white;
            width: 45%;
            height: 3px;
            position: absolute;
            border-radius: 2px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) rotate(45deg);
        }

        &:after {
            transform: translate(-50%, -50%) rotate(-45deg);
        }
    }
`

const ReviewItems = (props) => (
    <StaticQuery
        query={graphql`
            query {
                allReviewItemsJson {
                    edges {
                        node {
                            review
                            author
                            title
                            viewmorelink
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 170) {
                                        ...GatsbyImageSharpFluid_withWebp_noBase64
                                    }
                                }
                            }
                        }
                    }
                }
            }
		`}
        render={data => (
            <ReviewCarousel id={props.id} data={data} />
        )}
    />
)

class ReviewCarousel extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            render: false
        }

        this.toggleModal = this.toggleModal.bind(this)
    }

    componentDidMount() {
    	 this.setState({
    		 render: true,
         });
    }

    toggleModal() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    render() {

        const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
            <button
                {...props}
                className={
                    "slick-prev slick-arrow" +
                    (currentSlide === 0 ? " slick-disabled" : "")
                }
                aria-hidden="false"
                aria-disabled={currentSlide === 0}
                type="button"
                tabIndex={0}
            >
                Previous
            </button>
        );
        const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
            <button
                {...props}
                className={
                    "slick-next slick-arrow" +
                    (currentSlide === slideCount - 1 ? " slick-disabled" : "")
                }
                aria-hidden="false"
                aria-disabled={currentSlide === slideCount - 1}
                type="button"
                tabIndex={0}
            >
                Next
            </button>
        );

        const settings = {
            speed: 500,
            dots: false,
            arrows: true,
            infinite: true,
            accessibility: true,
            prevArrow: <SlickArrowLeft />,
            nextArrow: <SlickArrowRight />,
            focusOnSelect: true,
            swipeToSlide: true,
            draggable: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        }

        // const items = this.props.data.allReviewItemsJson.edges;
        // const reviewItems = items.map(({ node }, id) => {
        //     return (
        //         <div
        //             key={id}
        //         >
        //             <Img
        //                 fixed={node.image.childImageSharp.fixed}
        //                 alt={node.title}
        //             />
        //             <div className="review-quotes">
        //                 <h2 className="bold mt-4">{node.review}</h2>
                        
        //                 <p className="text--smaller">{node.author}</p>
        //                 <div className="text-center"><a href={node.viewmorelink} target="_blank" rel="noreferrer noopener" className="btn btn--black btn--black-viewmore text-uppercase"><img src={play} className="img-fluid play" alt="play" />View more</a></div>
        //             </div>
        //         </div>
        //     )

        // })
        const { render } = this.state;
        if (render) {
	        return (
	            <>
	                <CarouselWrapper {...settings}>
	                    <div className="text-center">
	                        <div className="d-flex justify-content-center">
	                            <img src={globalNews} alt="" />
	                        </div>
	                        <div className="review-quotes">
	                            <h2 className="bold mt-4">“Your mountain is waiting, so get on your way, and make it pronto”</h2>
	
	                            <p className="text--smaller">Global News</p>
	                            <div className="text-center"><a href="https://globalnews.ca/video/6079549/the-dr-seuss-experience-opens-in-gta" target="_blank" rel="noreferrer noopener" className="btn btn--black btn--black-viewmore text-uppercase"><img src={play} className="img-fluid play" alt="play" />View more</a></div>
	                        </div>
	                    </div>
	
	                    <div className="text-center">
	                        <div className="review-quotes">
	                            {/* <h2 className="bold mt-4"></h2> */}
	
	                            <VideoButton onClick={this.toggleModal}>
	                                <img src={youtube} alt="" />
	                            </VideoButton>
	
	                            <div className="text-center">
	                                <button className="btn btn--black btn--black-viewmore text-uppercase" onClick={this.toggleModal}>
	                                    <img src={play} className="img-fluid play" alt="play" />
	                                    Watch TV Trailer
	                                </button>
	                            </div>
	                        </div>
	                    </div>
	
	                    <div>
	                        <div className="d-flex justify-content-center">
	                            <img src={morningNews} alt="" />
	                        </div>
	                        <div className="review-quotes">
	                            <h2 className="bold mt-4">“I never want to leave it”</h2>
	
	                            <p className="text--smaller">CTV Morning Live</p>
	                            <div className="text-center"><a href="https://www.youtube.com/watch?v=7ul2eO-v0Oc" target="_blank" rel="noreferrer noopener" className="btn btn--black btn--black-viewmore text-uppercase">
	                                <img src={play} className="img-fluid play" alt="play" />View more</a>
	                            </div>
	                        </div>
	                    </div>
	                </CarouselWrapper>
	                <ModalStyled  
	                    isOpen={this.state.isOpen} 
	                    toggle={this.toggleModal} 
	                    centered={true}
	                >
	                    <button className="popup-modal__close" onClick={this.toggleModal}>
	                        <div className="sr-only">Close</div>
	                    </button>
	                    <ModalBody>
	                        <div className="embed-responsive embed-responsive-16by9">
	                            <iframe src="https://player.vimeo.com/video/375696812?autoplay=1&loop=1" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen className="embed-responsive-item" ></iframe>
	                        </div>
	                    </ModalBody>
	                </ModalStyled>
	            </>
	        )
        }
        return null;
    }
}

export default ReviewItems