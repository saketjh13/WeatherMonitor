import React from 'react'
import { useState } from 'react';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

function Search({ setQuery, query }) {
  const [city, setCity] = useState({query});
  // console.log(city)
  const clicked = () => {
    setQuery(city);
    // console.log(city);
  }
  
  return (
    <div className='flex flex-row justify-center items-center top-5 p-5'>
      <SearchSharpIcon className='flex scale-125 bg-slate-50 rounded-lg mx-3 hover:scale-150' size={10} onClick={clicked}></SearchSharpIcon>
      <input type='text' placeholder='Search by City' className='rounded-lg outline-indigo-400 w-2/3 h-7 left-20' onChange={(e) => { setCity(e.target.value) }}></input>
    </div>
  )
}

export default Search;
