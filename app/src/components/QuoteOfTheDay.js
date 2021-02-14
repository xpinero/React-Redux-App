import React from 'react';
import { useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';

const QuoteOfTheDay = () => {
  const {loading, quote} = useSelector(state => state);

  return (
    <h2 className='TheQuote'>
      {loading ? <Loader /> : quote} 
    </h2>
  )
};

export default QuoteOfTheDay;