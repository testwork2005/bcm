import { combineReducers } from 'redux';
import sessionReducer from './session';
import userReducer from './user';
import messageReducer from './message';
import passedReducer from './twofactor'
import orderReducer from './order'
const rootReducer = combineReducers({
  sessionState: sessionReducer,
  userState: userReducer,
  messageState: messageReducer,
  twofactorState:passedReducer,
  orderState:orderReducer,
});

export default rootReducer;
