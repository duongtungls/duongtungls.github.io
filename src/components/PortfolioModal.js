import React, { Component } from 'react'
import Modal from 'react-modal';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import Img from 'react-image'
import PropTypes from "prop-types";
import ProgressBar from "./ProgressBar";

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.75)'
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    width                 : '90%',
    height                : '90%',
    border                : 'none',
    padding               : '0',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    overflow              : 'hidden',
    transform             : 'translate(-50%, -50%)',
  }
};

const items = [
  {
    src: 'https://source.unsplash.com/random/1920x1080',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://source.unsplash.com/random/500x800',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://source.unsplash.com/random/800x600',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

class PortfolioModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      modalIsOpen: false
    };
  }


  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal = () => {

  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  onExiting = () => {
    this.animating = true;
  }

  onExited= () => {
    this.animating = false;
  }

  next= () => {
    console.log('next')
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex = (newIndex) => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }


  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <div className="img-wrapper">
            {/*<img src={item.src} alt={item.altText} />*/}
            <Img
              src={item.src} alt={item.altText}
              loader={
                <div className="w-100 h-100 d-flex justify-content-center align-items-center bg-loader">
                  <div className="spinner-grow text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              }
            />
          </div>
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="h-100">
          <button type="button" className="close" aria-label="Close" onClick={this.closeModal}>
            <span aria-hidden="true">&times;</span>
          </button>
          <div className="d-inline-flex row w-100 h-100">
            <div className="col-8 h-100">
              <Carousel
                className="current"
                activeIndex={activeIndex}
                next={this.next}
                pause={'hover'}
                interval={60000}
                previous={this.previous}
              >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
              </Carousel>
            </div>

            <div className="col-4 h-100 portfolio-modal-content">
              <div className="h-100 overflow-auto">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, postea docendi vix ei, no tollit perpetua vim. Sed ei inani ancillae, eu facilisis suavitate dissentias duo. Mea nemore laoreet consequuntur ei, pri nobis eruditi cu. An tamquam copiosae philosophia has, ei tation integre mea.

                  Option alienum necessitatibus ex usu, quo suas tollit appetere eu, sit utinam doctus mentitum id. In sed soluta oblique scriptorem, cu vocibus comprehensam usu, verear aliquam id eum. Sed aliquip oporteat disputationi no, mei dicta inimicus definiebas cu. Habeo omittam suavitate an sed. Ius te zril nemore.
                </p>
              </div>
            </div>

          </div>
        </div>
      </Modal>
    )
  }
}

Modal.setAppElement('#root');

/*PortfolioModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
}*/

export default PortfolioModal;