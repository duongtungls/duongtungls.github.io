import React, {Component} from 'react'
import PortfolioModal from "./PortfolioModal";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getGeneralInfo} from "../store/actions/generalInfoActions";
import {convertSnakeCase} from "../common/utils";
import $ from "jquery";
import Image from "./Image";

class Portfolio extends Component {

  openModal = (event, project) => {
    event.preventDefault();
    if (this.modal) {
      this.modal.openModal(project)
    }
    return false;
  }

  componentDidMount() {

  }

  render() {

    const {
      title,
      description,
      category,
      projects,
    } = this.props;

    return (
      <div className="dct_tm_section relative" id="portfolio">
        <PortfolioModal ref={ref => this.modal = ref}/>

        <div className="dct_tm_portfolio_wrapper_all">
          <div className="dct_tm_second_portfolio">
            <div className="container">
              <div className="dct_tm_portfolio_wrap">
                <div className="dct_tm_title_holder portfolio">
                  <h3>{title}</h3>
                  <span>{description}</span>
                </div>
                <div className="dct_tm_portfolio_titles"></div>
                <ul className="dct_tm_portfolio_filter">
                  <li><a href="#" className="current" data-filter="*">All</a></li>
                  { category && category.map((item, index) => {
                    return(
                      <li key={index}>
                        <a href="#" data-filter={`.${convertSnakeCase(item)}`}>{item}</a>
                      </li>
                    )
                  })}
                </ul>
                <ul className="dct_tm_portfolio_list">
                  {projects && projects.map((item, index) => {
                    return(
                      <li key={index} className={convertSnakeCase(item.category[0])}>
                        <div className="entry dct_tm_portfolio_animation_wrap" data-title={item.name}
                             data-category={convertSnakeCase(item.category[0])}>
                          <a className="zoom" href="#" onClick={e => this.openModal(e, item)}>
                            <div className="img-wrapper">
                              <Image src={item.images[0]} alt=""/>
                            </div>
                            <div className="dct_tm_portfolio_image_main" data-img-url={item.images[0]}></div>
                          </a>
                        </div>
                      </li>
                    )
                  })}

                </ul>
              </div>
            </div>
          </div>


        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  title: state.portfolio.title,
  description: state.portfolio.description,
  category: state.portfolio.category,
  projects: state.portfolio.projects,
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
)(Portfolio)