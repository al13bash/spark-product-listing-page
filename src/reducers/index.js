import { combineReducers } from 'redux';
import productsReducer from './products';
import colorsReducer from './colors';
import categoriesReducer from './categories';
import filtersReducer from './filters';

export default combineReducers({
  products: productsReducer,
  colors: colorsReducer,
  categories: categoriesReducer,
  filters: filtersReducer,
});
