import React, { Component } from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";

class LeftSideBar extends Component {

  render() {
    return (
      <div className="arlo_tm_leftpart_wrap">
        <div className="leftpart_inner">
          <div className="logo_wrap">
            <a href="#"><img src="/image/logo/desktop-logo.png" alt=""/></a>
          </div>
          <div className="menu_list_wrap">
            <ul className="anchor_nav">
              <li>
                <AnchorLink href="#home">Home</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#about">About</AnchorLink></li>
              <li>
                <AnchorLink href="#services">Services</AnchorLink>
              </li>
              <li>
                <AnchorLink href='#portfolio'>Portfolio</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#news">News</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#contact">Contact</AnchorLink>
              </li>
            </ul>
          </div>
          <div className="leftpart_bottom">
            <div className="social_wrap">
              <ul>
                <li><a href="#"><i className="xcon-facebook"></i></a></li>
                <li><a href="#"><i className="xcon-twitter"></i></a></li>
                <li><a href="#"><i className="xcon-linkedin"></i></a></li>
                <li><a href="#"><i className="xcon-instagram"></i></a></li>
                <li><a href="#"><i className="xcon-behance"></i></a></li>
              </ul>
            </div>
          </div>
          <a className="arlo_tm_resize" href="#"><i className="xcon-angle-left"></i></a>
        </div>
      </div>
    )
  }
}

export default LeftSideBar;