import { createStore, combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import characterReducer from './reducers/characterReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  characters: characterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
