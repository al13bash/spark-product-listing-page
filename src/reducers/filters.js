import { CHANGE_FILTERS } from '../actions/filters';

const initialState = {
  selectedColors: [],
  selectedCategories: [],
};

const filtersReducer = (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_FILTERS:
      return {...state, ...action.payload};
    default:
      return state;
  }
}

export default filtersReducer;
