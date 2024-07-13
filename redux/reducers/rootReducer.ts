// src/redux/reducers/index.ts (or wherever your rootReducer is defined)
import { combineReducers } from 'redux';
import authReducer from './authReducer'; // Example import
import characterReducer from './characterReducer'; // Example import

const rootReducer = combineReducers({
  auth: authReducer,
  characters: characterReducer,
  // Add more reducers as needed
});

export default rootReducer;
