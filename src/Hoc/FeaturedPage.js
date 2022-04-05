import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { NewsContext } from './NewsContext'
import Search from './Search'

function FeaturedPage() {
    const{blogs,data,isLoading} = useContext(NewsContext)
  return (
      <>
      <Search />
      <div className='container featuredpage'>
        <h2>Featured News</h2>
        {isLoading && <p>Please wait, loading...</p>}
        <ul>
            {data.length > 0 ? (
                data.map(item=>(
                    <li key={item.url}><Link to={{pathname: `${item.url}`}} target='_blank'>
                    {item.title}
                    </Link></li>
                ))
            ):(
                blogs.map(item=>(
                    <li key={item.url}><Link to={{pathname: `${item.url}`}} target='_blank'>
                    {item.title}
                    </Link></li>
                ))
            )
                
            }
        </ul>
    </div>
      </>
    
  )
}

export default FeaturedPage