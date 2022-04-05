import React,{useContext} from 'react'
import { NewsContext } from './NewsContext'

function Search() {
    const{search, handleChange, handleSubmit} = useContext(NewsContext)

    console.log(search)
  return (
    <div className='search'>
        <form>
            <input type="search" onChange={handleChange} value={search} />
            <button type='submit' onClick={handleSubmit}>Search</button>
        </form>
    </div>
  )
}

export default Search