import axios from 'axios';

export const FETCH_QUOTE_START = 'FETCH_QUOTE_START';
export const FETCH_QUOTE_SUCCESS = 'FETCH_QUOTE_SUCCESS';
export const FETCH_QUOTE_FAILURE = 'FETCH_QUOTE_FAILURE';

export const fetchQuotes = () => dispatch => {
  dispatch({type: FETCH_QUOTE_START});
  axios
  .get('https://quote-garden.herokuapp.com/api/v2/quotes/random')
  .then(res => {
    console.log('res data', res);
    dispatch({type: FETCH_QUOTE_SUCCESS, payload: res.data.quote.quoteText});
  }).catch(err => dispatch({type: FETCH_QUOTE_FAILURE, payload: err.data}));
};

