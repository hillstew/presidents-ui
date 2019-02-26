import { combineReducers } from 'redux';
import { presidents } from './presidentsReducer';
import { hasErrored } from './errorReducer';
import { isLoading } from './loadingReducer';

export const rootReducer = combineReducers({
  presidents,
  hasErrored,
  isLoading
});
