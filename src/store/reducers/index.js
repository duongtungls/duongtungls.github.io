import { combineReducers } from 'redux';
import user from './user';
import general from "./general";
import abilities from "./abilities";

export default combineReducers({
  user,
  general,
  abilities,
})
