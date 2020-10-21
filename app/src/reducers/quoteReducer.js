import { FETCH_QUOTE_START, FETCH_QUOTE_SUCCESS, FETCH_QUOTE_FAILURE } from '../actions/quoteActions';

export const initialState = {
  loading: false,
  errors: 'ERROR! Please check your address...',
  quote: ''
};

export const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUOTE_START:
      return {
        ...state,
        loading: true
      };
    case FETCH_QUOTE_SUCCESS:
      return {
        ...state,
        quote: action.payload,
        loading: false,
        errors: ''
      };
    case FETCH_QUOTE_FAILURE:
      return {
        ...state,
        errors: state.errors,
        loading: false
      };
    default:
      return state
  }
};

export default quoteReducer