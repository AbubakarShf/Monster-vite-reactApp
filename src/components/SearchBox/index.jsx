import React from "react"
import "./style.css"
const SearchBox = ({ placeHolder, handleChange }) => {
  return (
    <div className='App'>
      <input
        className='search'
        type='search'
        placeholder={placeHolder}
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchBox
