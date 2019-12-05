import React, { Component } from 'react'
import Layout from 'components/Layout'
import { Link } from 'gatsby'
// import { Container, Col, Row } from 'reactstrap'
import Australia from "images/australia.jpg"
import UKFlag from "images/uk.jpg"
import HomeMd from "images/home-md.jpg"
import HomeSm from "images/home-sm.jpg"
import MainLogo from "images/main.png"




const headData = {
  title: 'Bat of out Hell',
  description: '',
};

class IndexPage extends Component {

  render() {

    return (
      <>

        <Layout
          headData={headData}
        >
          <div>
            <div className="main-header--home">
              <div className="header-wrapper">

                <img src={HomeSm} alt="Bat out of hell" className="img-fluid d-md-none" />
                <img src={HomeMd} alt="Bat out of hell" className="img-fluid d-none d-md-block d-lg-none" />
                <img src={MainLogo} alt="Bat out of Hell" className="d-none d-lg-block main-logo" />
                <div className="list">


                  <div className="border__white">
                    <Link to="#">
                      <div className="flag-container">

                        <img src={UKFlag} alt="UK flag" className="flag" />
                      </div>
                      <div className="text-container text-left">
                        {/* <h1 className="text-left">UK TOUR 2020 </h1>
                        <p className="mb-0">Tickets on sale 10am 9 December 2019</p> */}
                        <h1 className="text-left">FUTURE PRODUCTIONS - UK  </h1>
                        <p className="mb-0">Sign up to be the first to hear the latest news</p>

                        
                      </div> 
                     </Link>
                  </div>
                  <div className="border__white">
                    <a href="http://www.batoutofhellmusical.com.au/" rel="noopener noreferrer" target="_blank">
                      <div className="flag-container">

                        <img src={Australia} alt="AUSTRALIA flag" className="flag" />
                      </div>
                      <div className="text-container text-left">
                        <h1 className="text-left">AUSTRALIA</h1>
                        <p className="mb-0">Tickets on sale 6&nbsp;December&nbsp;2019</p>

                      </div> </a>
                  </div>


                </div>
              </div>

            </div>

          </div>

        </Layout>

      </>
    );

  }
}

export default IndexPage