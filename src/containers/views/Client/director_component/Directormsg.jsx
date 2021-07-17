import React from 'react'
import './Directormsg.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';

const Directormsg = () => {
  return (
    <section className="row_full">
      <div className="row_full pageBanner" style={{background:`url(${images_path}reachus.jpg)`}}>
        <span className="bgopct"></span>
        <div className="overLay">
            <h2 className="pageName">Director's Message</h2>
        </div>
      </div>
      <div className="row_full directorBox">
        <div className="container">
          <div className="row_full">
            <h3 className="row_full">Director's Message</h3>
            <div className="row_full DirLogo">
              <div className="rBoxdata">
                <p>Greetings to my dear students and to the best people at the back of every child “Dear Parents”.</p>
                <p>As a pedagogue, I have heard so many students that they are unable to balance their school academics and their competitive studies. They find themselves trapped on a roller coaster of competitive studies and school academics.</p>

                <p>Nobody’s around to help them. Parents always want to see their children grow up in a good educational environment so they want to provide them a better academic system. 
  But in many cases, everything fails because no one is analysing student’s interest, their learning adaptabilities and their basics.
  </p>

  <p>I always thought of solving those problems with academics.
  In Gyansutrm, we promise to reduce the burden, make learning a desire for happiness and for life, with robust tools from the digital era.
  </p>

  <p><strong>We are committed to the delivery of our interactive program for schools and digital learning.</strong>
  <br/><a>BEST WISHES!</a> 
  </p>
              </div>
              <img src={`${images_path}img_2.jpg`}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Directormsg
