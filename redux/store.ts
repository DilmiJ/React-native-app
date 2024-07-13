import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import characterReducer from './reducers/characterReducer';
import profileReducer from '../redux/reducers/rootReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  characters: characterReducer,
  profile: profileReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;

export default store;
