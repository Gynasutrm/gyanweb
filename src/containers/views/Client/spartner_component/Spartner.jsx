import React from 'react'
import './Spartner.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';
const Spartner = () => {
  return (
    <section className="row_full">

      <div className="row_full pageBanner" style={{background:`url(${images_path}aboutus.jpg)`}}>
        <span className="bgopct"></span>
        <div className="overLay">
            <h2 className="pageName">School Partner's</h2>
        </div>
      </div>


      <div className="row_full spartner">
        <div className="container">
          <div className="row_full">
            <h3 className="row_full">Our Partners</h3>
            <p>In addition to working with K-12 schools, Schools That Can collaborates with innovators – industry leaders, entrepreneurs, and other nonprofits – to support our programs and offer new initiatives.</p>
          </div>
        </div>
      </div>

      <div className="row_full spartner">
        <div className="row_full">
            <div className="row_full"><img src={`${images_path}spartners.png`}/></div>
        </div>
      </div>

      <div className="row_full spartner">
        <div className="container">
          <div className="row_full">
            <h3 className="row_full">Become A Partner</h3>
            <p>Are you interested in bringing Real-World Learning to students and schools? Partner with Gyansutrm to support schools across the country as they strive to better prepare their students for a rapidly changing world. We partner with innovative schools who are eager to share their practices with the broader community, program and service providers with similar missions, companies looking to strengthen and diversify their talent pool, and philanthropists who wish to invest in important interventions for our next generation of leaders. Complete the form below to start the conversation and someone from our team will be in touch.</p>
            <div className="row_full pad_t_20px"><a className="btn btn-primary" href="">Join Us</a></div>
          </div>        
        </div>
      </div>
      
    </section>
  );
}
export default Spartner