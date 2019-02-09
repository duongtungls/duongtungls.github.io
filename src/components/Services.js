import React, { Component } from 'react'

class Services extends Component {

  render() {
    return (
      <div className="arlo_tm_section" id="services">
        <div className="arlo_tm_services_wrap">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>Amazing Services</h3>
              <span>Meet our amazing services</span>
            </div>
            <div className="list_wrap">
              <ul>
                <li>
                  <div className="inner">
                    <div className="icon">
                      {/*<img className="svg" src="/image/svg/camera-diaphragm.svg" alt=""/>*/}
                      <i className="fa fa-3x fa-code"/>
                    </div>
                    <div className="title_service">
                      <h3>Photography</h3>
                    </div>
                    <div className="text">
                      <p>Web design is a similar process of creation, with the intention of presenting the
                        content on electronic pages ...</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="inner">
                    <div className="icon">
                      <img className="svg" src="/image/svg/new-tab.svg" alt=""/>
                    </div>
                    <div className="title_service">
                      <h3>Web Design</h3>
                    </div>
                    <div className="text">
                      <p>Web design is a similar process of creation, with the intention of presenting the
                        content on electronic pages ...</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="inner">
                    <div className="icon">
                      <img className="svg" src="/image/svg/layers.svg" alt=""/>
                    </div>
                    <div className="title_service">
                      <h3>Branding</h3>
                    </div>
                    <div className="text">
                      <p>Web design is a similar process of creation, with the intention of presenting the
                        content on electronic pages ...</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="inner">
                    <div className="icon">
                      <img className="svg" src="/image/svg/share.svg" alt=""/>
                    </div>
                    <div className="title_service">
                      <h3>Social Media</h3>
                    </div>
                    <div className="text">
                      <p>Web design is a similar process of creation, with the intention of presenting the
                        content on electronic pages ...</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="inner">
                    <div className="icon">
                      <img className="svg" src="/image/svg/adobe-illustrator.svg" alt=""/>
                    </div>
                    <div className="title_service">
                      <h3>Illustrator</h3>
                    </div>
                    <div className="text">
                      <p>Web design is a similar process of creation, with the intention of presenting the
                        content on electronic pages ...</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="inner">
                    <div className="icon">
                      <img className="svg" src="/image/svg/seo-performance-marketing-graphic.svg" alt=""/>
                    </div>
                    <div className="title_service">
                      <h3>Marketing</h3>
                    </div>
                    <div className="text">
                      <p>Web design is a similar process of creation, with the intention of presenting the
                        content on electronic pages ...</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Services;