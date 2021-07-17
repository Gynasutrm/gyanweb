import React from 'react'
import './Notfound.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';
const Notfound = () => {
  return (
    <section className="row_full text-center notfoundCntr">
      <div className="container">
        <div className="row_full">
          <h2>404-<span> Not Found</span></h2>
        </div>
      </div>  
    </section>
  );
}

export default Notfound