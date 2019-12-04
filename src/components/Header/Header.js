import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Col, Row } from 'reactstrap'
// import YoutubeModal from 'components/YoutubeModal/YoutubeModal'
// import Pagelogo from 'images/big-logo-40px.png'

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navToggled: false,
      collapsed: false,
      isOpen: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
    window.addEventListener('resize', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, true);
    window.removeEventListener('resize', this.handleScroll, true);
  }

  handleScroll = () => {
    // let scrollPosition = document.documentElement.scrollTop
    let scrollPosition = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
    let collapsed = scrollPosition < 20 ? false : true;
    this.setState({
      collapsed
    });
  };

  onMobileClick = (e) => {
    this.setState({
      navToggled: !this.state.navToggled
    });
  }

  toggleModal = (e) => {
    e.preventDefault();

    this.setState({
      modalOpen: !this.state.modalOpen
    });
  };

  toggleNav = () => {
    this.setState({
      navToggled: !this.state.navToggled
    });
  };

  render() {
    const { navToggled, collapsed } = this.state;
    const blueWithoutScroll = this.props.blueWithoutScroll;

    return (
      <>
        <header className={`header ${collapsed || blueWithoutScroll ? 'collapsed' : ''}`}>
          <div className="header__container">
            <div className="d-none d-md-block">

              <nav id="navbarSupportedContent" className="main-nav">
                <Row className="h-100 d-flex align-items-center ">

                  <Col md={5} className="px-0">
                    <ul className="main-nav--menu header__links--social">
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
                        <a href="https://www.instagram.com/batthemusical/?hl=en" target="_blank"
                          rel="noopener noreferrer"
                          className="icon icon-instagram">
                          <div className="btn-social instagram">
                            <span className="sr-only">Instagram</span>
                          </div>
                        </a>
                      </li>
                    </ul>

                  </Col>
                  <Col md={7} >
                    <ul className="main-nav--menu h-100 d-flex align-items-center justify-content-end">
                      {/* <li>
                        <Link activeClassName="active" to="/" className="link">Home</Link>
                      </li> */}
                      <li>
                        <a activeClassName="active" target="_blank" rel="noopener noreferrer" href="https://batoutofhellmusical.com" className="link">Home</a>
                      </li>
                      <li>
                        <Link activeClassName="active"  to="/tour-dates" className="link">Tour Dates</Link>
                      </li>
                      <li>
                        <a activeClassName="active" target="_blank" rel="noopener noreferrer" href="https://batoutofhellmusical.com/media" className="link">Media</a>
                      </li>
                      <li>
                        <a activeClassName="active" target="_blank" rel="noopener noreferrer" href="http://www.batoutofhellmusical.com.au/" className="link">Australia</a>
                      </li>
                    </ul>
                  </Col>
                </Row>


              </nav>
            </div>
            <button
              className={`nav-toggle ${navToggled ? 'active' : ''} ${collapsed || blueWithoutScroll ? 'collapsed' : ''} d-md-none`}
              onClick={this.toggleNav}
              aria-expanded="false"
              aria-controls="navbarSupportedContent"
              type="button"
              aria-label="Toggle navigation"

            >
              <span className="nav-toggle__burger" />
              <span className="nav-toggle__open text--light">Menu</span>
              <span className="nav-toggle__close text--light">Close</span>
            </button>
            <div className="d-md-none text-right">
              <a href="https://www.showclix.com/events/29252" target="_blank" rel="noreferrer noopener" className="btn btn--red">Book Tickets</a>
            </div>

          </div>
        </header>

        <nav id="navbarSupportedContent"
          className={`nav mobile-nav ${navToggled ? 'active' : ''}  ${collapsed || blueWithoutScroll ? 'collapsed' : ''}`}>
          <ul className="nav__btns">
            <li>
              <Link activeClassName="active" to="/" className="link home" onClick={this.onMobileClick}>Home</Link>
            </li>

            <li className="nav__btns-book-now">
              <a href="https://www.showclix.com/events/29252"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Book Now"
                className="btn btn--red btn-book-tickets-in-nav"
                onClick={this.onMobileClick}>Book Online</a>
            </li>

            <li>
              <Link activeClassName="active" to="#visit" className="link visit" onClick={this.onMobileClick}>Directions</Link>
            </li>
            <li>
              <Link activeClassName="active" to="/faq" className="link faq" onClick={this.onMobileClick}>FAQ</Link>
            </li>
            <li>
              <Link activeClassName="active" to="/press" className="link press" onClick={this.onMobileClick}>Press</Link>
            </li>
            <li>
              <Link activeClassName="active" to="#register" className="link register" onClick={this.onMobileClick}>Register</Link>
            </li>
          </ul>
        </nav>
        {/* <YoutubeModal isOpen={modalOpen} toggleModal={this.toggleModal} videoId={videoId} /> */}
      </>
    );
  }
}

export default Header;