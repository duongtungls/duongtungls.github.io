import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import user from './user';
import general from "./general";
import abilities from "./abilities";
import portfolio from "./portfolio";

export default combineReducers({
  form: reduxFormReducer, // mounted under "form"
  user,
  general,
  abilities,
  portfolio,
})
