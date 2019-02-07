import {
  ACTION_UPDATE_ABILITIES,
} from '../actionTypes'

const initialState = {
  title: null,
  description: null,
  abilities: null,
}

export default (state = initialState, action) => {
  switch (action.type) {

    case ACTION_UPDATE_ABILITIES:
      return Object.assign({}, state, action.value);

    default:
      return state
  }
}