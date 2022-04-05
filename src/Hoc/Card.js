import React from 'react'
import { Link } from 'react-router-dom'

function Card({pics,title,date,author,content,url}) {


  return (
    <div className='card'>
        <figure>
            <img src={pics} alt="post-pictures" />
        </figure>
        <div className="card-content">
            <Link to={{pathname: `${url}`}} target='_blank'>
                <h3 className="title">{title}</h3>
            </Link>
            <div className="lead">
                <h5>{date}</h5>
                <h5>{author}</h5>
            </div>
            <p className="content">
                {content} 
                <Link to={{pathname: `${url}`}} target='_blank'>....read more </Link>
            </p>
        </div>
    </div>
  )
}

export default Card