import React, {Component} from "react"
import styled from "styled-components"
import {media} from "utils/Media"
import {Container, Col} from "reactstrap"
import YouTube from "react-youtube"
import pause from "images/icons/pause.svg"

// import BorderedBlock from "components/shared/BorderedBlock"
import play from "images/icons/play.svg"


const MobileIframe = styled.iframe`
     width:100%; 
     height:200px;
`

const Play = styled.div`
    &:after {
        content: "";
        position: absolute;
        z-index: 2;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-image: url("${play}");
        background-repeat: no-repeat;
        background-size: contain;
        height: 60px;
        width: 60px;
        cursor: pointer;

        @media ${media.md} {
            height: 40px;
            width: 40px;
        }

        @media ${media.lg} {
            height: 50px;
            width: 50px;
        }
    }

    &:hover {
        &:after {
            background-color: #A0E963;
        }
    }
`


const Pause = styled.div`
    &:after {
        content: "";
        position: absolute;
        z-index: 2;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-image: url("${pause}");
        background-repeat: no-repeat;
        background-size: contain;
        height: 60px;
        width: 60px;
        cursor: pointer;

        @media ${media.md} {
            height: 40px;
            width: 40px;
        }

        @media ${media.lg} {
            height: 50px;
            width: 50px;
        }
    }

    &:hover {
        &:after {
            background-color: red;
        }
    }
`

// const VideoImg = styled.img`
//     position: relative;
//     z-index: 2;
//     display: none;

//     @media ${media.md} {
//        display:block;
//     }
// `

const VideoName = styled.div`
    position: absolute;
    z-index: 3;
    padding: 10px 0;
    line-height: 1;
    left: 50%;
    width: 100%;
    color: white;
    font-size: 1.1rem;
    text-transform: uppercase;
    transform: rotate(0deg) translateX(-50%);

    @media (max-width: 320px) {
        left: 0;
        transform: none;
        top:80%;
    }


    @media ${media.sm} {
        padding: 10px 0;
        position: relative;
        color: black;
        left: 15%;
        top: 0;
        font-size: 1.2rem;
        transform: none;
    }

    @media ${media.md} {
        left: 0;
        top: 3%;
        font-size: .8rem;
        color: white;
    }
    
    @media ${media.lg} {
        font-size: 1.1rem;

    }
`

const VideoWrap = styled.div`
    // position: absolute;
    z-index: 1;
    width: 100%;
    top: 2%;
    left: 0;
    display: none;
    padding: 10px;
    border: 3px solid #EC2420;

    @media ${media.md} {
        display: block;
        top: 25%;
        left: 7%;
    }

    iframe {
        max-width: 100%;
    }

    /* &:before,
    &:after {
        content: "";
        background-color: black;
        height: 15%;
        width: 100%;
        position: absolute;
        bottom: -14%;
    }

    &:before {
        bottom: 100%;
    } */
`

// const VideoOverlay = styled.div`
//     position: absolute;
//     z-index: 10;
//     width: 75%;
//     height: 58%;
//     top: 30%;
//     left: 5%;
// `

const VideoPlaylist = styled.div`
    list-style: none;
    z-index: 3;
    width: 100%;
    padding: 0;
    cursor: pointer;

    img {
        width: 100%;
        margin-top: -5px;
        border: 1px solid white;
    }

    @media ${media.sm} {

      img {
        width: 100%;
        margin-top: -75px;
      }
    }

    @media ${media.md} {

      img {
        margin-top: 0;
      }
    }
`

const ControlButton = styled.button`
    background-color: transparent;
    border: 0;
    position: absolute;
    z-index: 11;
    left: 45%;
    top: 40%;
    display: none;
    
    img {
        width: 40px;
    }

    @media ${media.md} {
      display: block;
    }
`

class VideoBlock extends Component {

    constructor(props) {
        super(props)
        this.state = {
            player: null,
            activeVideo: 0,
            playerState: "stopped",
            videos: [
                {
                    name: "",
                    id: "Vm0JdAdBuIw"
                },
                {
                    name: "",
                    id: "e9jyzhJ5EnU"
                },
              
            ]
        }

        this.onReady = this.onReady.bind(this)
        this.play = this.play.bind(this)
        this.pause = this.pause.bind(this)
        this.actionVideo = this.actionVideo.bind(this)
    }

    componentDidUpdate(prevProps) {
        if (this.props.tabActive !== prevProps.tabActive && this.props.tabActive !== '2') {
            this.state.player.target.pauseVideo()
            this.setState({
                playerState: "paused"
            })
        }
    }

    onReady(event) {
        this.setState({
            player: event
        })
        this.state.player.target.playVideo()
    }

    play() {
        this.state.player.target.playVideo()
        this.setState({
            playerState: "playing"
        })
    }

    pause() {
        this.state.player.target.pauseVideo()
        this.setState({
            playerState: "paused"
        })
    }

    changeVideo(i) {
        this.setState({
            activeVideo: i,
            playerState: "playing"
        })
    }

    actionVideo(e) {
        if (this.state.playerState === "playing") {
            this.state.player.target.playVideo()
        }
    }

    render() {
        const opts = {
            playerVars: { // https://developers.google.com/youtube/player_parameters
                rel: 0,
                modestbranding: 1,
                // controls: 0,
                showinfo: 0
            }
        }

        const videosList = this.state.videos.map((video, i) => {
            return (
                <Col md={4} key={i} className="d-none d-md-block px-1">
                    {this.state.playerState === "playing" ?
                        <>
                            {this.state.activeVideo === i ?
                                <ControlButton onClick={this.pause}>
                                    <Pause/>
                                </ControlButton>
                            :
                                <ControlButton onClick={this.play}>
                                    <Play onClick={() => this.changeVideo(i)} key={i}/>
                                </ControlButton>
                            }
                        </>
                        :
                        <ControlButton onClick={this.play}>
                            <Play onClick={() => this.changeVideo(i)} key={i}/>
                        </ControlButton>
                    }
                    <img onClick={() => this.changeVideo(i)} key={i}
                         src={`https://img.youtube.com/vi/${video.id}/default.jpg`} alt="Video Thumbnail"
                         title={video.name}/>
                    <VideoName className="d-none d-md-block text-uppercase" dangerouslySetInnerHTML={{__html: video.name}}/>
                </Col>
            )
        })

        const videos = this.state.videos.map((video, i) => {
            if (this.state.videos[this.state.activeVideo].id === video.id) {
                return (
                    <YouTube
                        videoId={video.id}
                        opts={opts}
                        onReady={this.onReady}
                        key={i}
                        // onStateChange={this.actionVideo}
                        className="embed-responsive-item d-none d-md-block"
                    />
                )
            } else {
                return ""
            }
        })

        return (
            <Container>
                    <Col className="px-0 px-md-3">
                        <VideoWrap>
                            <div className="embed-responsive embed-responsive-16by9">
                                {videos}
                            </div>
                        </VideoWrap>
                        <VideoPlaylist className="row p-sm-4 pt-md-3 p-md-0 mx-0">
                            {videosList}

                            <Col xs={12} className="d-md-none py-4 px-0" onClick={this.play}>
                                <MobileIframe src="https://www.youtube.com/embed/Vm0JdAdBuIw" frameBorder="0"
                                              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                              allowfullscreen></MobileIframe>
                                {/* <VideoName>Stephen Brackett answers the questions in your head - Part 1</VideoName> */}
                            </Col>
                            <Col xs={12} className="d-md-none py-4 px-0" onClick={this.play}>
                                <MobileIframe src="https://www.youtube.com/embed/e9jyzhJ5EnU" frameBorder="0"
                                              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                              allowfullscreen></MobileIframe>
                                {/* <VideoName>Stephen Brackett answers the questions in your head - Part 2</VideoName> */}
                            </Col>
                        </VideoPlaylist>

                    </Col>
            </Container>
        )
    }
}

export default VideoBlock