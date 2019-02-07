import {ACTION_UPDATE_AGE, ACTION_UPDATE_CV_URL, ACTION_UPDATE_GENERAL_INFO, ACTION_UPDATE_NAME,} from '../actionTypes'

const initialState = {
  name: null,
  firstName: null,
  lastName: null,
  email: null,
  jobTitles: null,
  definition: null,
  detail: null,
}

export default (state = initialState, action) => {
  switch (action.type) {

    case ACTION_UPDATE_NAME:
      return Object.assign({}, state, { name: action.name });

    case ACTION_UPDATE_GENERAL_INFO:
      return Object.assign({}, state, action.value);

    case ACTION_UPDATE_CV_URL:
      return Object.assign({}, state, {detail: Object.assign({}, state.detail, {cv_url: action.value})});

    case ACTION_UPDATE_AGE:
      return Object.assign({}, state, {detail: Object.assign({}, state.detail, {age: action.value})});

    default:
      return state
  }
}