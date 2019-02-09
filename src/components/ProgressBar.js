import React, {Component} from 'react'
import PropTypes from 'prop-types';

class ProgressBar extends Component {
  constructor(props) {
    super(props)
    this.state = { progress: 0 }
  }

  componentDidMount() {
    this.setState({
      progress: this.props.progress
    })
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className="dct_tm_progress" data-color="#000">
        <span>
          <span className="label">{this.props.children}</span>
          <span className="number">
            {this.props.progress}%
          </span>
        </span>
        <div className="dct_tm_bar_bg">
          <div className="dct_tm_bar_wrap open">
            <div className="dct_tm_bar" style={{width: `${this.state.progress}%`, backgroundColor: 'rgb(0, 0, 0)'}} />
          </div>
        </div>
      </div>
    )
  }
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
}

export default ProgressBar;