import React, {Component} from 'react'
import CountUp from "react-countup";
import TrackVisibility from 'react-on-screen';

const fn = value => <span className="dct_tm_counter">{value}</span>
class InfoCounting extends Component {

  render() {
    return (
      <div className="dct_tm_section">
        <div className="container">
          <div className="dct_tm_counter_wrap" data-col="4" data-delay="300">
            <ul className="dct_tm_counter_list dct_tm_miniboxes">
              <li>
                <div className="inner dct_tm_minibox">
                  <h3>
                    <TrackVisibility>
                      {({ isVisible }) => isVisible && <span>
                      <CountUp delay={0.5} start={0} end={2222} duration={3} />
                        {/*                    <span className="dct_tm_counter" data-from="0" data-to="2222"
                          data-speed="3000">
                      0
                    </span>*/}
                    </span>}
                    </TrackVisibility>
                  </h3>
                  <span>Projects Completed</span>
                </div>
              </li>
              <li>
                <div className="inner dct_tm_minibox">
                  <h3>
                    <TrackVisibility>
                      {({ isVisible }) => isVisible && <span>
                        <CountUp delay={0.5} start={0} end={333} duration={3} />
                      K
                    </span>}
                    </TrackVisibility>
                  </h3>
                  <span>Lines of Code</span>
                </div>
              </li>
              <li>
                <div className="inner dct_tm_minibox">
                  <h3>

                    <TrackVisibility>
                      {({ isVisible }) => isVisible && <span>
                        <CountUp delay={0.5} start={0} end={8888} duration={3} />
                    </span>}
                    </TrackVisibility>
                  </h3>
                  <span>Happy Clients</span>
                </div>
              </li>
              <li>
                <div className="inner dct_tm_minibox">
                  <h3>
                    <TrackVisibility>
                      {({ isVisible }) => isVisible && <span>
                        <CountUp delay={0.5} start={0} end={777} duration={3} />
                      +
                    </span>}
                    </TrackVisibility>
                  </h3>
                  <span>My Awwwards</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default InfoCounting;