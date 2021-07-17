import React from 'react'
import './Askyourquestion.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';
const Askyourquestion = () => {
  return (
    <section className="row_full">
      <div className="row_full pageBanner" style={{background:`url(${images_path}aboutus.jpg)`}}>
        <span className="bgopct"></span>
        <div className="overLay">
            <h2 className="pageName">24x7 Support</h2>
        </div>
      </div>

      <div className="row_full blogCntr">
        <div className="container">
        <div className="supportBox">
            <h3 className="row_full text-center">Ask Your Questions 24 x 7</h3>
            <p className="row_full text-center">We will make it possible to solve your Queries ASAP</p>
            
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="row_full">
                  <div className="supportMid">
                    <div className="supportItem">
                        <img src={`${images_path}support_1.jpg`}/>
                    </div>

                    <div className="supportItem">
                        <img src={`${images_path}support_2.jpg`}/>
                    </div>
                  </div>
                </div>

                <div className="row_full queryBox">
                  <h3 className="row_full text-center">24 x 7 Ask Your Expert Package</h3>

                  <div className="row_full pad_l_r_100">
                    <ul className="row_full">
                        <li className="row_full">500 question/year plan ------ 3500 Rs<a>Buy Now</a></li>
                        <li className="row_full one">1000 question/year plan ------ 6000 Rs<a>Buy Now</a></li>
                        <li className="row_full two">Unlimited question/year plan ------ 13000 Rs<a>Buy Now</a></li>
                    </ul>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Askyourquestion