import  React, { useState , useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Resume  from '../resume_component/Resume';
import './Career.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';

const Career = () => {
  const [resume,setResume] = useState(false);
  useEffect(() => {

  },[]);
  const uploadResume = ()=>{
    setResume(!resume);
  }

  return (
    <section className="row_full careerCntr">
      <div className="container">
        <div className="row">
            <div className="col col-sm-12 col-md-12 col-lg-12">
                <div className="row_full careerTitle text-center">
                  <h2 className="row_full">Career <span>Be the part of revolutio in Education</span></h2> 
                  <a className="careerBtn" onClick={uploadResume}>Submit Your Resume</a>
                </div>
            </div>
        </div>

        {resume?<Resume dataToddle={uploadResume}/>:null}

        <div className="row mob_no_pad pad_l_r_100">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="row_full careerImage">
                    <img src={`${images_path}career_img1.jpg`}/>
                </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="row_full careerImage">
                    <img src={`${images_path}career_img2.jpg`}/>
                </div>
            </div>
        </div>

        <div className="row mob_no_pad pad_l_r_120 text-center">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="row_full careerWelcome">
                    <h3 className="row_full">If You Are Eager to Learn &<br/> Earn <span>GYANSUTRM</span> Welcomes You......</h3>
                    <ul className="row_full">
                        <li>
                          <span className="icone1"></span>
                          <p className="row_full">We are building <br/>Team not just Hiring</p>
                        </li>
                        <li>
                          <span className="icone2"></span>
                          <p className="row_full">Best employee <br/>policy in industry</p>
                        </li>
                        <li>
                          <span className="icone3"></span>
                          <p className="row_full">Not a long <br/>hierarchy</p>
                        </li>
                        <li>
                          <span className="icone4"></span>
                          <p className="row_full">Direct- connect to <br/> ceo or director‘s.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="row careerPosition">
            <div className="col col-sm-12 col-md-12 col-lg-12">
                <div className="row_full">
                    <h4 className="row_full text-center">Open Positions <span>Here is the list of open positions that we are currently hiring. You can follow us on Linkedin to receive job updates.</span></h4>
                    
                    <ul className="row_full">
                        <li>
                          <span className="row_full">IHEs</span>
                          <p className="row_full"><em>Experience: 01 - 03 Years </em><em>Open Position: 5</em></p>
                        </li>

                        <li>
                          <span className="row_full">Doubt Expert</span>
                          <p className="row_full"><em>Experience: 01 - 03 Years</em><em>Open Position: 5</em></p>
                        </li>

                        <li>
                          <span className="row_full">Software Engineer</span>
                          <p className="row_full"><em>Experience: 01 - 03 Years </em><em>Open Position: 5</em></p>
                        </li>

                        <li>
                          <span className="row_full">Sales</span>
                          <p className="row_full"><em>Experience: 01 - 03 Years </em><em>Open Position: 5</em></p>
                        </li>

                        <li>
                          <span className="row_full">HR</span>
                          <p className="row_full"><em>Experience: 01 - 03 Years </em><em>Open Position: 5</em></p>
                        </li>

                        <li>
                          <span className="row_full">Account</span>
                          <p className="row_full"><em>Experience: 01 - 03 Years </em><em>Open Position: 5</em></p>
                        </li>

                        <li>
                          <span className="row_full">Marketing</span>
                          <p className="row_full"><em>Experience: 01 - 03 Years </em><em>Open Position: 5</em></p>
                        </li>

                        <li>
                          <span className="row_full">SMIs</span>
                          <p className="row_full"><em>Experience: 01 - 03 Years </em><em>Open Position: 5</em></p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="row mob_no_pad pad_l_r_120">
            <div className="col col-sm-12 col-md-12 col-lg-12">
                <div className="row_full careerLinkedin text-center">
                  <img src={`${images_path}linkedinBg.svg`}/>
                  <div className="row_full overLay">
                    <h5 className="row_full">You can follow us on LinkedIn to never<br/> miss a job opening update</h5>
                    <div className="row_full mob_m_t_20" style={{paddingTop:'25px'}}><a href="https://www.linkedin.com/in/gyan-sutrm-a6768a205/">Follow us on Linkedin</a></div>
                  </div>
                </div>
            </div>
        </div>
        
      </div>
    </section>
  );
}

export default Career