import {
  ACTION_UPDATE_PORTFOLIO, ACTION_UPDATE_PORTFOLIO_PROJECT,
} from '../actionTypes'

const initialState = {
  title: null,
  description: null,
  category: null,
  projects: null
}

export default (state = initialState, action) => {
  switch (action.type) {

    case ACTION_UPDATE_PORTFOLIO:
      return Object.assign({}, state, action.value);

    case ACTION_UPDATE_PORTFOLIO_PROJECT:
      return Object.assign({}, state, { projects: action.value });

    default:
      return state
  }
}