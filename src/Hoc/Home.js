import React from 'react';
import FeaturedNews from './FeaturedNews';
import Main from './Main';
import Search from './Search';

function Home() {
  return (
    <>
    <Search />
    <div className='container home'>
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-8 col-sm-12">
                <Main />
            </div>
            <div className="col-md-3 next">
              <h2>Recent News</h2>
                <FeaturedNews />
            </div>
        </div>
        
    </div>
    </>
    
  )
}

export default Home