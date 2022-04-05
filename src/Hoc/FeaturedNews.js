import React, {useContext} from 'react'
import { NewsContext } from './NewsContext';
import {Link} from 'react-router-dom';

function FeaturedNews() {
  const {blogs} = useContext(NewsContext)
  return (
    <div className='featured'>
      <ul>
        {
            blogs.map(item =>(
              <li key={item.url}>
                <Link to={{pathname: `${item.url}`}} target='_blank'>{item.title}</Link>
              </li>
            ))
        }
      </ul>
    </div>
  )
}

export default FeaturedNews