import React from 'react'
import './Pathsala.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';
const Pathsala = () => {
  return (
    <section className="row_full">
      <div className="row_full pageBanner pathsala" style={{background:`url(${images_path}pathshala.jpg)`}}>
        <span className="bgopct"></span>
        <div className="overLay">
            <h2 className="pageName">PATHSHALA</h2>
        </div>
      </div>

      <div className="row_full">
        <div className="container">
          <div className="row_full">
              <ul className="row_full pathsalaList">
                <li>
                  <span><img src={`${images_path}pathshala_icon1.png`}/></span>
                  <p>Revise you lecture many times any time</p>
                </li>

                <li>
                  <span><img src={`${images_path}pathshala_icon2.png`}/></span>
                  <p>G-Samadhaan</p>
                </li>

                <li>
                  <span><img src={`${images_path}pathshala_icon3.png`}/></span>
                  <p>e-Abhyas</p>
                </li>

                <li>
                  <span><img src={`${images_path}pathshala_icon4.png`}/></span>
                  <p>Microlevel TPR</p>
                </li>

                <li>
                  <span><img src={`${images_path}pathshala_icon5.png`}/></span>
                  <p>Dedicated Digital Manager</p>
                </li>

                <li>
                  <span><img src={`${images_path}pathshala_icon6.png`}/></span>
                  <p>Dedicated Gyansutrm In house experts</p>
                </li>

                <li>
                  <span><img src={`${images_path}pathshala_icon7.png`}/></span>
                  <p>Online test taking at your fingertips</p>
                </li>

            </ul>

            <div className="row_full">
              <div className="row_full egyanSetup text-center">
                <img src={`${images_path}egyan_9.png`}/>
                <p>Modest interactive classroom setup</p>
                <a className="egyanBtn">e-Gyan</a>
              </div>

              <div className="row_full text-center featureCntr">
                <div className="featureBox">
                  <span className="posabsElm1"></span>
                  <span className="posabsElm"></span>
                  <h3 className="row_full">Feature of PATHSHALA</h3>
                  <ul className="row_full">
                    <li>Modest DIGI-FORMAT of learning in your school.</li>
                    <li> Free access to “e-Gyan” for digital learning.</li>
                    <li> Online test feature on your Fingertips.</li>
                    <li> No separate competitive coaching required.</li>
                    <li> Preparation for all competitive exams (JEE, NEET, NTSE, KVPY, NSE P/C/B/JS OLYMPIAD) with school curriculum.</li>
                    <li> Free access to recorded lectures after school.</li>
                  </ul>
                </div>

                <div className="featureBox">
                  <img src={`${images_path}egyan_10.jpg`}/>
                </div>

              </div>

              <div className="row_full imgEgyaan text-center">
                  <img src={`${images_path}egyan_10.png`}/>
              </div>
            </div>
          </div>
        </div>
      </div>


     </section>
  );
}

export default Pathsala