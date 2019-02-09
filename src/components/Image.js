import React, { Component } from 'react'
import Img from "react-image";
import firebase from 'firebase/app';
import 'firebase/storage';

class Image extends Component {
  constructor(props) {
    super(props)
    this.state = {
      src: null,
    }
  }

  componentDidMount() {
    if (this.props.src && this.isFirebaseStorage()) {
      let gsReference = firebase.storage().refFromURL(this.props.src)

      gsReference.getDownloadURL().then((url) => {

        this.setState({
          src: url
        })

      }).catch((error) => {

        console.log('error', error)
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/object-not-found':
            // File doesn't exist
            break;

          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;

          case 'storage/canceled':
            // User canceled the upload
            break;

          case 'storage/unknown':
            // Unknown error occurred, inspect the server response
            break;
        }
      });
    }
  }

  isFirebaseStorage = () => this.props && this.props.src && this.props.src.toLowerCase().startsWith("gs://");

  render() {
    const props = this.props;
    const { src } = this.state;
    if (this.isFirebaseStorage() && !src) {
      return(
        <div className="w-100 h-100 d-flex justify-content-center align-items-center bg-loader">
          <div className="spinner-grow text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )
    }
    return (
      <Img
        src={!this.isFirebaseStorage() ? props.src : src} alt={props.altText}
        loader={
          <div className="w-100 h-100 d-flex justify-content-center align-items-center bg-loader">
            <div className="spinner-grow text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        }/>
    )
  }
}

export default Image;