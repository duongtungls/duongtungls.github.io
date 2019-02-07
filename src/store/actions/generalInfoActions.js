import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import moment from "moment";
import {ACTION_UPDATE_AGE, ACTION_UPDATE_CV_URL, ACTION_UPDATE_GENERAL_INFO, ACTION_UPDATE_NAME} from "../actionTypes";

export const getGeneralInfo = () => dispatch => {
  let ref = firebase.database().ref('general-info');
  ref.once('value').then((snapshot) => {
    const value = snapshot.val();
    dispatch({
      type: ACTION_UPDATE_GENERAL_INFO,
      value: value
    })
    if (value && value.detail && value.detail.cv_url) {
      dispatch(getDownloadCvUrl(value.detail.cv_url))
    }
    if (value && value.detail && value.detail.birthday) {
      dispatch(calculateAge(value.detail.birthday))
    }
  });
}

export const getDownloadCvUrl = (gsUrl) => dispatch => {

  var gsReference = firebase.storage().refFromURL(gsUrl)

  gsReference.getDownloadURL().then((url) => {
    dispatch({
      type: ACTION_UPDATE_CV_URL,
      value: url
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

export const calculateAge = (birthday) => dispatch => {
  if (!birthday) return;

  const time = moment(birthday, 'DD/MM/YYYY')
  const now = moment();

  const diff = now.diff(time, 'years');

  dispatch({
    type: ACTION_UPDATE_AGE,
    value: diff
  })
}