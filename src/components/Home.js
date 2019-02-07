import React, { Component } from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import Typed from 'react-typed';
import {connect} from "react-redux";
import {getGeneralInfo} from "../store/actions/generalInfoActions";
import {bindActionCreators} from "redux";

const strings = ["Freelancer", "Mobile developer", "Web Developer", "React Native Developer"];

class Home extends Component {

  componentDidMount() {
    this.arlo_tm_animate_text()
  }

  arlo_tm_animate_text(){

/*    var animateSpan			=

    animateSpan.typed({
      strings: ["Freelancer", "Mobile developer", "Web Developer", "React Native Developer"],
      loop: true,
      startDelay: 1e3,
      backDelay: 2e3
    });*/
  }


  render() {
    return (
      <div className="arlo_tm_section" id="home">
        <div className="arlo_tm_hero_header_wrap">
          <div className="arlo_tm_universal_box_wrap">
            <div className="bg_wrap">
              <div className="overlay_image hero jarallax" data-jarallax data-speed="0.1"></div>
              <div className="overlay_color hero"></div>
            </div>
            <div className="content hero">
              <div className="inner_content">
                <div className="image_wrap">
                  <img src={process.env.PUBLIC_URL + "/image/about/avatar.jpg"} alt=""/>
                </div>
                <div className="name_holder">
                  <h3>{this.props.firstName} <span>{this.props.lastName}</span></h3>
                </div>
                <div className="text_typing">
                  <p>I'm a <Typed
                    strings={this.props.jobTitles || []}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                    <span className="arlo_tm_animation_text_word" />
                  </Typed></p>
                </div>
              </div>
            </div>
            <div className="arlo_tm_arrow_wrap bounce anchor">
              <AnchorLink href="#about"><i className="xcon-angle-double-down"></i></AnchorLink>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  jobTitles: state.general.jobTitles,
  firstName: state.general.firstName,
  lastName: state.general.lastName,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getGeneralInfo
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)