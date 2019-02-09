import React, { Component } from 'react'

class Loader extends Component {
  constructor(props) {
    super(props)

    this.state = {loaded: false}
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaded: true,
      })
    }, 1200)
  }

  render() {
    return (
      <div className={`dct_tm_preloader ${this.state.loaded ? 'loaded' : ''}`}>
        <div className="spinner_wrap">
          <div className="spinner"></div>
        </div>
      </div>
    )
  }
}

export default Loader;