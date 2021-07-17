import React from 'react'
import './News.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';
const News = () => {
  return (
    <section className="row_full" style={{paddingBottom:'30px'}}>

      <div className="row_full pageBanner" style={{background:`url(${images_path}news.jpg)`}}>
        <span className="bgopct"></span>
        <div className="overLay">
            <h2 className="pageName">News & Events</h2>
        </div>
      </div>

      <div className="row_full">
      <div className="container">
        <div className="row">
            <div className="col col-sm-12 col-md-12 col-lg-12">
                <div className="row_full innerContent">

                    <h2 className="page_Head">News & Events</h2>
                
                </div>
            </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default News