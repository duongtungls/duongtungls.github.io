import React, { Component } from 'react'

class Testimonials extends Component {

  render() {
    return (
      <div className="arlo_tm_section" id="testimonials">
        <div className="arlo_tm_testimonials_wrapper_all">
          <div className="arlo_tm_universal_box_wrap">
            <div className="bg_wrap">
              <div className="overlay_image testimonial jarallax" data-speed="0"></div>
              <div className="overlay_color testimonial"></div>
            </div>
            <div className="content testimonial">
              <div className="arlo_tm_testimonial_wrap">
                <div className="container">
                  <div className="carousel_wrap">
                    <ul className="owl-carousel">
                      <li className="item">
                        <div className="inner">
                          <div className="quotebox_wrap">
                            <i className="xcon-quote-left"></i>
                          </div>
                          <div className="definitions_wrap">
                            <p>“Arlo team are easy to work with and helped me make amazing websites in a short
                              amount of time. Thanks guys for works.”</p>
                          </div>
                          <div className="name_holder">
                            <p>Antonio Baraley, CEO Founder</p>
                          </div>
                        </div>
                      </li>
                      <li className="item">
                        <div className="inner">
                          <div className="quotebox_wrap">
                            <i className="xcon-quote-left"></i>
                          </div>
                          <div className="definitions_wrap">
                            <p>“We were looking for a logo with a touch of modernism. Arlo grasped our needs and
                              produced a stunning design.”</p>
                          </div>
                          <div className="name_holder">
                            <p>Calena Gomez, AOC Designer</p>
                          </div>
                        </div>
                      </li>
                      <li className="item">
                        <div className="inner">
                          <div className="quotebox_wrap">
                            <i className="xcon-quote-left"></i>
                          </div>
                          <div className="definitions_wrap">
                            <p>“Awesome to work with Arlo. Good organized, easy to communicate with, responsive
                              with next iterations.”</p>
                          </div>
                          <div className="name_holder">
                            <p>Torren Winston, Photographer.</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Testimonials;