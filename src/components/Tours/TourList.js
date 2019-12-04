import React, { Component } from 'react';
import { Col, Row } from 'reactstrap'


class TourList extends Component {
  render() {

    return (
          <Row className="py-2 mx-auto">
               <Col md={12} xl={2} className="px-1">
                 <div className="tour-module">
                    <div className="py-5 p-md-3 h-100 text-center d-flex flex-column justify-content-center">
                      <h2 className="bold">MANCHESTER<br/> OPERA HOUSE </h2>
                      <p>10 SEPTEMBER -<br/> 26 SEPTEMBER 2020 </p>
                      <div><a href="mailto:seussgroups@kilburnmedia.com" target="_blank" rel="noreferrer noopener" className="btn btn--yellow text-uppercase">On sale Mon 9 Dec</a></div>

                    </div>
                    </div>
                  </Col>
                  <Col md={12} xl={2} className="px-1">
                  <div className="tour-module">
                    <div className="py-5 p-md-3 h-100 text-center d-flex flex-column justify-content-center">
                      <h2 className="bold">BIRMINGHAM ALEXANDRA</h2>
                      <p>29 SEPTEMBER - <br/> 10 OCTOBER 2020</p>
                      <div><a href="mailto:Events@ExperienceSeuss.com" className="btn btn--yellow text-uppercase">On sale Mon 9 Dec</a></div>
                    </div>
                    </div>
                  </Col>
                  
                  <Col md={12} xl={2} className="px-1">
                  <div className="tour-module">
                    <div className="py-5 p-md-3 h-100 text-center d-flex flex-column justify-content-center">
                      <h2 className="bold">WIMBLEDON<br/> NEW THEATRE</h2>
                      <p>13 OCTOBER - <br/> 24 OCTOBER 2020</p>
                      <div><a href="mailto:Sponsorships@ExperienceSeuss.com" target="_blank" rel="noreferrer noopener" className="btn btn--yellow text-uppercase">On sale Mon 9 Dec</a></div>
                    </div>
                    </div>
                  </Col>
                  <Col md={12} xl={2} className="px-1">
                  <div className="tour-module">
                    <div className="py-5 p-md-3 h-100 text-center d-flex flex-column justify-content-center">
                      <h2 className="bold">OXFORD <br/>NEW THEATRE</h2>
                      <p>27 OCTOBER - <br/>7 NOVEMBER 2020</p>
                      <div><a href="mailto:seussgroups@kilburnmedia.com" target="_blank" rel="noreferrer noopener" className="btn btn--yellow text-uppercase">On sale Mon 9 Dec</a></div>

                    </div>
                    </div>
                  </Col>
                  <Col md={12} xl={2} className="px-1">
                  <div className="tour-module">
                    <div className="py-5 p-md-3 h-100 text-center d-flex flex-column justify-content-center">
                      <h2 className="bold">GLASGOW <br/>KING'S THEATRE</h2>
                      <p>10 NOVEMBER - <br/>21 NOVEMBER 2020</p>
                      <div><a href="mailto:Events@ExperienceSeuss.com" className="btn btn--yellow text-uppercase">On sale Mon 9 Dec</a></div>
                    </div>
                    </div>
                  </Col>
                  
                  <Col md={12} xl={2} className="px-1">
                  <div className="tour-module">
                    <div className="py-5 p-md-3 h-100 text-center d-flex flex-column justify-content-center">
                      <h2 className="bold">LIVERPOOL <br/>EMPIRE THEATRE</h2>
                      <p>8 DECEMBER 2020 - <br/>2 JANUARY 2021</p>
                      <div><a href="mailto:Sponsorships@ExperienceSeuss.com" target="_blank" rel="noreferrer noopener" className="btn btn--yellow text-uppercase">On sale Mon 9 Dec</a></div>
                    </div>
                    </div>
                  </Col>
          </Row>
    )
  }
}

export default TourList;