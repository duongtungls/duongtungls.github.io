import React, {Component} from 'react';
import '../styles/styles.scss';
import AnchorLink from "react-anchor-link-smooth-scroll";
import Loader from "../components/Loader";
import LeftSideBar from "../components/LeftSideBar";
import MainContent from "../components/MainContent";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {getGeneralInfo} from "../store/actions/generalInfoActions";
import {getAbilities} from "../store/actions/abilityActions";

class Index extends Component {

  constructor(props) {
    super(props)

    this.state = {loaded: false}
  }

  componentDidMount() {
    this.props.getGeneralInfo();
    this.props.getAbilities();

    setTimeout(() => {
      this.setState({
        loaded: true,
      })
    }, 1000)
  }
  render() {
    return (
      <div className="arlo_tm_wrapper_all">

        <div id="arlo_tm_popup_blog">
          <div className="container">
            <div className="inner_popup scrollable"></div>
          </div>
          <span className="close"><a href="#"></a></span>
        </div>
        <Loader/>
        
        <div className="arlo_tm_content">
          <LeftSideBar/>
          <MainContent/>
          <a className="arlo_tm_totop" href="#"></a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.userInfo,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getGeneralInfo,
      getAbilities
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)
