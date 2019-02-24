import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import {ACTION_UPDATE_CV_URL, ACTION_UPDATE_PORTFOLIO, ACTION_UPDATE_PORTFOLIO_PROJECT} from "../actionTypes";

export const getPortfolio = () => dispatch => {
  let ref = firebase.database().ref('portfolio');
  ref.once('value').then((snapshot) => {
    const value = snapshot.val();

    var returnArr = [];

    const projects = snapshot.child('projects');

    projects.forEach(function(childSnapshot) {
      var item = childSnapshot.val();
      console.log({item})
      item.key = childSnapshot.key;

      returnArr.push(item);
    });

    value.projects = returnArr;
    dispatch({
      type: ACTION_UPDATE_PORTFOLIO,
      value: value
    })

  });
}
const snapshotToArray = snapshot => {
  return Object.entries(snapshot).map(e => {
    console.log('snapshotToArray')
    return Object.assign(e[1], { key: e[0] })
  });
}
export const getPortfolioProjectImageUrl = (projects) => dispatch => {
  projects.map(item => {
    item.images.map((image, index) => {
      var gsReference = firebase.storage().refFromURL(image)

      gsReference.getDownloadURL().then((url) => {
        item.images[index] = url;

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
    })
  })

  dispatch({
    type: ACTION_UPDATE_PORTFOLIO_PROJECT,
    value: projects
  })

}