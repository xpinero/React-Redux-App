import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuotes } from './actions/quoteActions';
import QuoteOfTheDay from './components/QuoteOfTheDay.js';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const errors = useSelector(state => state.errors);

  useEffect(() => {
    dispatch(fetchQuotes());
  }, [])

  return (
    <div className="App">
     <h1 className='Header'>Random quote of the day</h1>
     <QuoteOfTheDay />
     <button onClick={() => dispatch(fetchQuotes())}>Next Quote</button>
     {errors ? <p>{errors}</p> : <></>}
    </div>
  );
}

export default App;
