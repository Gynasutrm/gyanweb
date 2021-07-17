import React from 'react'
import './Egyan.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';
const Egyan = () => {
  return (
    <div className="row_full">
      <section className="row_full egyanCntr">
        <div className="container">
          <div className="row_full">
              <div className="egyanBox">
                  <p className="row_full">e-Gyan Learning App</p>
                  <h2 className="row_full">Agitated <span>Learners</span><br/> Change the <span>World</span></h2>
                  <p className="row_full">We Enjoy Gyansutrm way of learning</p>
                  <a>Register for Free</a>
              </div> 
              <div className="egyanBox">
                  <img src={`${images_path}egyan_bg.jpg`}/>
              </div>    
          </div>
        </div>
      </section>

      <section className="row_full egyanApp">
      <div className="container">
        <div className="row_full text-center">
            
          <h3 className="row_full">Why Gyansutrm’s<br/> e-Gyan App is Choice of Every Student</h3>
          <ul className="row_full">
              <li>
                <span className="eIcon"><img src={`${images_path}egyan_1.png`}/></span>
                <p>Conceptual understanding and learning from india's Top Educatiors</p>
              </li>

              <li>
                <span className="eIcon"><img src={`${images_path}egyan_2.png`}/></span>
                <p>G-SAMADHAN get 24x7 doubts cleared by Gyansutrm in House Experts</p>
              </li>

              <li>
                <span className="eIcon"><img src={`${images_path}egyan_3.png`}/></span>
                <p>Top-Notch Quality adaptable learning content for board & competitive Exams</p>
              </li>

              <li>
                <span className="eIcon"><img src={`${images_path}egyan_4.png`}/></span>
                <p>Get best in industry personalized Mentor guidance</p>
              </li>

              <li>
                <span className="eIcon"><img src={`${images_path}egyan_5.png`}/></span>
                <p>Get best platform learning according to student needs</p>
              </li>

              <li>
                <span className="eIcon"><img src={`${images_path}egyan_6.png`}/></span>
                <p>Get Jigyasa- Access of video library of question by our students</p>
              </li>

              <li>
                <span className="eIcon"><img src={`${images_path}egyan_7.png`}/></span>
                <p>G-Archive - A Archive of previous years competitive questions papers for practice and revision</p>
              </li>

              <li>
                <span className="eIcon"><img src={`${images_path}egyan_8.png`}/></span>
                <p>G-ABHYAS - AI based DPP for developing critical skilss to boost your rank in exams</p>
              </li>
          </ul>
          
        </div>
      </div>
    </section>

      <div className="row_full neetlearnBox" style={{background:`url(${images_path}neet/learnbg.jpg)`}}>
        <span className="fixtoplearnImg">
          <img src={`${images_path}neet/learntfixtop.png`}/>
        </span>
        <div className="row_full">
          <div className="container">
            <div className="row_full">
              <h2 className="row_full" style={{padding:'0px'}}>START YOUR LEARNING JOURNEY TO<br/> ACHIEVE SUCCESS IN NEET,JEE,NTSE,KVPY,OLYMPIADS,BOARDS WITH GYANSUTRM</h2>
              <div className="row_full disFlex">
                  <img src={`${images_path}egyan_bottom.png`}/>
              </div>

              <div className="row_full neetBtnBox disFlex">
                  <a>Book a Free Class Now</a>
                  <a>Registered Now</a>
              </div>
              </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Egyan