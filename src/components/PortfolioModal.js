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
import Image from "./Image";

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
      modalIsOpen: false,
      project: null,
    };
  }


  openModal = (project) => {
    this.setState({
      modalIsOpen: true,
      project
    });

  }

  afterOpenModal = () => {
    if (window.hideTawkWidget) {
      window.hideTawkWidget();
    }
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
    if (window.showTawkWidget) {
      window.showTawkWidget()
    }
  }

  onExiting = () => {
    this.animating = true;
  }

  onExited= () => {
    this.animating = false;
  }

  next= () => {
    const { project } = this.state;
    if (!project || (project && !project.images)) {
      return
    }
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === project.images.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous = () => {
    const { project } = this.state;
    if (!project || (project && !project.images)) {
      return
    }
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? project.images.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex = (newIndex) => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }


  render() {
    const { activeIndex, project } = this.state;

    if (!project) {
      return(
        <div/>
      )
    }

    const slides = project.images.map((item, index) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={index}
        >
          <div className="img-wrapper">
            {/*<img src={item.src} alt={item.altText} />*/}
            <Image src={item} alt={project.name}/>

          </div>
          {/*<CarouselCaption captionText={`Title ${index}`} captionHeader={`caption ${index}`} />*/}
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
        <div className="h-100 portfolio-modal-container">
          <button type="button" className="close" aria-label="Close" onClick={this.closeModal}>
            <span aria-hidden="true">&times;</span>
          </button>
          <div className="d-lg-inline-flex d-md-flex flex-column w-100 row-custom h-100-custom">
            <div className="col-lg-8 col-sm-12 h-100-custom carousel-container">
              <Carousel
                className="current"
                activeIndex={activeIndex}
                next={this.next}
                pause={'hover'}
                interval={60000}
                previous={this.previous}
              >
                <CarouselIndicators items={project.images} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
              </Carousel>
            </div>

            <div className="col-lg-4 col-sm-12 h-100-custom portfolio-modal-content">
              <div className="h-100-custom overflow-auto">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text" dangerouslySetInnerHTML={{__html: decodeURIComponent(project.description) }} />
                <div className="text-primary d-inline-flex flex-wrap">
                  {project.tag && project.tag.map((item, index) => {
                    return(
                      <a key={index} className="mr-2">{`#${item}`}</a>
                    )
                  })}
                </div>
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