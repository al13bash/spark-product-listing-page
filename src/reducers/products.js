import products from '../config/products';
import { CHANGE_COLOR } from '../actions/products';

const initialState = products;

const productsReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_COLOR:
      return state.map((item) =>
        item.id === action.productId ? {...item, selectedColor: action.colorId} : item)
    default:
      return state;
  }
}

export default productsReducer;
