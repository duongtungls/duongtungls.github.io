import React, {Component} from 'react'
import Typed from "react-typed";
import ProgressBar from "./ProgressBar";
import {connect} from "react-redux";
import TrackVisibility from 'react-on-screen';
import {getGeneralInfo} from "../store/actions/generalInfoActions";
import {bindActionCreators} from "redux";


class About extends Component {

  render() {

    const { firstName, lastName, definition, detail, abilities } = this.props;

    return (
      <React.Fragment>
        <div className="arlo_tm_section relative" id="about">
          <div className="arlo_tm_about_wrapper_all">
            <div className="container">
              <div className="arlo_tm_title_holder">
                <h3>About Me</h3>
                <span>Main informations about me</span>
              </div>
              <div className="arlo_tm_about_wrap">
                <div className="author_wrap">
                  <div className="leftbox">
                    <div className="about_image_wrap parallax" data-relative-input="true">
                      <div className="image layer" data-depth="0.1">
                        <img src="/image/about/avatar-550x640.jpg" alt=""/>
                        <div className="inner" style={{backgroundImage: 'url(/image/about/avatar-550x640.jpg)'}}></div>
                      </div>
                      <div className="border layer" data-depth="0.2">
                        <img src="/image/about/avatar-550x640.jpg" alt=""/>
                        <div className="inner"></div>
                      </div>
                    </div>

                  </div>
                  <div className="rightbox">
                    <div className="arlo_tm_mini_title_holder">
                      <h4>I'm {firstName} {lastName} and <Typed
                        strings={this.props.jobTitles || []}
                        typeSpeed={40}
                        backSpeed={50}
                        loop >
                        <span className="arlo_tm_animation_text_word" />
                      </Typed></h4>
                    </div>
                    <div className="definition">
                      <p dangerouslySetInnerHTML={{__html: definition }}></p>
                    </div>
                    {detail && <div className="about_short_contact_wrap">
                      <ul>
                        <li>
                          <span><label>Birthday:</label> {detail.birthday}</span>
                        </li>
                        {detail && detail.age && <li>
                          <span><label>Age:</label> {detail.age}</span>
                        </li>}
                        <li>
                          <span><label>City:</label> {detail.city}</span>
                        </li>
                        <li>
                          <span><label>Interests:</label> {detail.interest}</span>
                        </li>
                        <li>
                          <span><label>Study:</label> {detail.study}</span>
                        </li>
                        <li>
                          <span><label>Degree:</label> {detail.degree}</span>
                        </li>
                        <li>
                          <span><label>Website:</label> <a href="#">{detail.website}</a></span>
                        </li>
                        <li>
                                <span><label>Mail:</label> <a
                                  href={`mailto:${detail.email}`}>{detail.email}</a></span>
                        </li>
                        <li>
                          <span><label>Phone:</label> <a href="#">{detail.phone}</a></span>
                        </li>
                        <li>
                          <span><label>GitHub:</label> <a href="#">{detail.github}</a></span>
                        </li>
                      </ul>
                    </div>}
                    <div className="buttons_wrap">
                      <ul>
                        <li>
                          {detail && detail.cv_url && <a href={detail.cv_url}><span>Download CV</span></a>}
                        </li>
                        <li className="anchor">
                          <a href="#contact"><span>Send Message</span></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="arlo_tm_section">
          <div className="arlo_tm_skills_wrap">
            <div className="container">
              <div className="inner_wrap">
                <div className="leftbox">
                  {abilities && abilities.title && <div className="arlo_tm_mini_title_holder">
                    <h4>{abilities.title || ''}</h4>
                  </div>}
                  {abilities && abilities.description && <p>{abilities.description}</p>}
                </div>
                <div className="rightbox">
                  <div className="progress_bar_wrap_total">
                    <div className="arlo_tm_progress_wrap" data-size="small" data-round="c" data-strip="off">
                      {abilities && abilities.abilities && <TrackVisibility once>
                        {({ isVisible }) => isVisible && <React.Fragment>
                          {
                            abilities.abilities.map((item, index) =>
                              <ProgressBar key={index} progress={item.percent}>
                                {item.name} - <span className="experience">{item.description}</span>
                              </ProgressBar>
                            )
                          }
                        </React.Fragment>}
                      </TrackVisibility>}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  jobTitles: state.general.jobTitles,
  firstName: state.general.firstName,
  lastName: state.general.lastName,
  definition: state.general.definition,
  detail: state.general.detail,
  abilities: state.abilities,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getGeneralInfo,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About)