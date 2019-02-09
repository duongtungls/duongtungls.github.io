import React, { Component } from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import InfoCounting from "./InfoCounting";
import News from "./News";
import ContactMe from "./ContactMe";

class MainContent extends Component {

  render() {
    return (
      <div className="dct_tm_rightpart">
        <div className="rightpart_inner">
          <Home/>
          <About/>
          <Services/>
          <Portfolio/>
          <Testimonials/>
          <InfoCounting/>
          <News/>
          <ContactMe/>
        </div>
      </div>
    )
  }
}

export default MainContent;