
import React, {useContext} from 'react';
import Card from './Card';
import { NewsContext } from './NewsContext';

function CardCollection() {

    const {blogs,isLoading, data} = useContext(NewsContext)
    
  return (
    <div className='card-collection'>
        {isLoading && <p style={{textAlign:'center', margin:'6em 0'}}>Loading..., Please wait.</p>}
        {
           data.length > 0 ? (
            data.map((item)=> item.urlToImage &&(
                <Card key={item.url} pics={item.urlToImage}
                date={item.publishedAt} content={item.content} author={item.author} title={item.title} url={item.url}/>
            ))
           ) :(
            blogs.map((item)=> item.urlToImage && (
              <Card key={item.url} pics={item.urlToImage}
              date={item.publishedAt} content={item.content} author={item.author} title={item.title} url={item.url}/>
          ))
          )
        }
    </div>
  )
}

export default CardCollection