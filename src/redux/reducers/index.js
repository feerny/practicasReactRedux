import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import logEdadReducer from './logEdadReducer';

const rootReducer = combineReducers({
    count: counterReducer,
    logEdad:logEdadReducer
  });
  
  export default rootReducer;
  