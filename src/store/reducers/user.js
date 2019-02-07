import {
  ACTION_UPDATE_USER_INFO
} from '../actionTypes'

const initialState = {
  userInfo: null,
}

export default (state = initialState, action) => {
  switch (action.type) {

    case ACTION_UPDATE_USER_INFO:
      return Object.assign({}, state, { userInfo: action.user });
    default:
      return state
  }
}