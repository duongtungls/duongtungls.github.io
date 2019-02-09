import React, { Component } from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getGeneralInfo} from "../store/actions/generalInfoActions";


class LeftSideBar extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { firstName, lastName } = this.props;

    return (
      <React.Fragment>
        <div className="dct_tm_leftpart_wrap">
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
                  <AnchorLink href="#about">About</AnchorLink>
                </li>
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
            <a className="dct_tm_resize" href="#"><i className="xcon-angle-left"></i></a>
          </div>
        </div>
        <Navbar dark expand="md" className="d-md-flex d-lg-none d-xl-none fixed-top bg-navbar">
          <NavbarBrand href="/">{firstName} {lastName}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto text-white" navbar>
              <NavItem>
                <AnchorLink className="nav-link" href="#home" onClick={this.toggle}>Home</AnchorLink>
              </NavItem>
              <NavItem>
                <AnchorLink className="nav-link" href="#about" onClick={this.toggle}>About</AnchorLink>
              </NavItem>
              <NavItem>
                <AnchorLink className="nav-link" href="#services" onClick={this.toggle}>Services</AnchorLink>
              </NavItem>
              <NavItem>
                <AnchorLink className="nav-link" href='#portfolio' onClick={this.toggle}>Portfolio</AnchorLink>
              </NavItem>
              <NavItem>
                <AnchorLink className="nav-link" href="#news" onClick={this.toggle}>News</AnchorLink>
              </NavItem>
              <NavItem>
                <AnchorLink className="nav-link" href="#contact" onClick={this.toggle}>Contact</AnchorLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </React.Fragment>

    )
  }
}

const mapStateToProps = (state) => ({
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
)(LeftSideBar)