import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import appointmentReducer from './appointment';
import serviceReducer from './service';
import barberReducer from './barber';
import clientReducer from './client';
import locationReducer from './location';
import cashRegisterReducer from './cashRegister';


const rootReducer = combineReducers({
  session,
  appointmentReducer,
  serviceReducer,
  barberReducer,
  clientReducer,
  locationReducer,
  cashRegisterReducer
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
