import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import rootReducer from './reducer';

const store = configureStore({
  reducer: rootReducer,
  // middleware: getDefaultMiddleWare => {
  //   if (__DEV__) {
  //     const createDebugger = require('redux-flipper').default;
  //     return getDefaultMiddleWare().concat(createDebugger());
  //   }
  //   return getDefaultMiddleWare();
  // },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
