import firebase from 'firebase/app';
import 'firebase/database';
import {ACTION_UPDATE_ABILITIES} from "../actionTypes";

export const getAbilities = () => dispatch => {
  let ref = firebase.database().ref('my-abilities');
  ref.once('value').then((snapshot) => {
    const value = snapshot.val();
    dispatch({
      type: ACTION_UPDATE_ABILITIES,
      value: value
    })
  });
}