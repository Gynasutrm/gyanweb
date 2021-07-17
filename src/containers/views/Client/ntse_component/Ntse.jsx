import React from 'react'
import './Ntse.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';
const Ntse = () => {
  return (
    <section className="row_full">

      <div className="row_full pageBanner" style={{background:`url(${images_path}aboutus.jpg)`}}>
        <span className="bgopct"></span>
        <div className="overLay">
            <h2 className="pageName">NTSE</h2>
        </div>
      </div>
      <section className="row_full jeeCntr bgwhite" style={{background:'#fff'}}>
        <div className="container">
          <div className="row_full">
            <div className="row_full ntseBox">
                <div className="row_full">
                  <h3 className="row_full text-center">NTSE</h3>
                  <p className="row_full text-center">Advantages of being an NTSE scholar are:</p>
                  <div className="row_full divSepht">
                    <div className="advantafeNtse">
                      <ul>
                        <li><i className="fa fa-circle" aria-hidden="true"></i><span>Scholarships for pursuing studies in sciences and social sciences up till doctoral level.</span></li>
                        <li><i className="fa fa-circle" aria-hidden="true"></i><span>For professional course like engineering or medicine, the scholarship is granted up to postgraduate level.</span></li>
                        <li><i className="fa fa-circle" aria-hidden="true"></i><span>Scholarships, each of 1250 INR per month is given to scholars from Class XI onwards.</span></li>
                        <li><i className="fa fa-circle" aria-hidden="true"></i><span>Scholarships, each of 2000 INR per month is given for UG, PG level.</span></li>
                        <li><i className="fa fa-circle" aria-hidden="true"></i><span>The scholarship for PhD programs is as per the UGC standards.</span></li>
                        <li><i className="fa fa-circle" aria-hidden="true"></i><span>Being an NTSE scholar instills supreme confidence to crack such competitive exams in future like JEE, NEET, OLYMPIOD.</span></li>
                        <li><i className="fa fa-circle" aria-hidden="true"></i><span>For advanced studies out of the country, an NTSE scholar is preferred .</span></li>

                        <li><i className="fa fa-circle" aria-hidden="true"></i><span>Those applying for US scholarships get additional marks for being an NTSE qualifier.</span></li>
                        <li><i className="fa fa-circle" aria-hidden="true"></i><span>Some colleges in India have seats reserved exclusively for NTSE scholars.</span></li>
                        <li><i className="fa fa-circle" aria-hidden="true"></i><span>NTSE scholar on resume is an added advantage when you apply for jobs or interviews.</span></li>
                        <li><i className="fa fa-circle" aria-hidden="true"></i><span>An NTSE scholar is given preference in government jobs as well.</span></li>
                        <li><i className="fa fa-circle" aria-hidden="true"></i><span>It is indeed helpful when appearing for interviews for IFS, IAS, IRS, IPS, etc.</span></li>
                        <li><i className="fa fa-circle" aria-hidden="true"></i><span>NTSE Scholars also get benefits during NDA selections.</span></li>
                        <li><i className="fa fa-circle" aria-hidden="true"></i><span>NTSE scholars can enjoy discounts on course materials and books at high school level so they afford to buy some very important and expensive books.</span></li>
                        <li><i className="fa fa-circle" aria-hidden="true"></i><span>In case a student needs to apply for admission to another school then NTSE scholars are always preferred.</span></li>
                        <li><i className="fa fa-circle" aria-hidden="true"></i><span>After passing out the exam of NTSE students can get their own recognition among their peer group and members of the families</span></li>
                      </ul>
                    </div>
                    <img src={`${images_path}ntse/img_1.jpg`}/>
                  </div>
                </div>
            </div> 

            <div className="row_full ntseBox achieveItem">
                <div className="row_full divSepht" style={{paddingTop:'60px'}}>
                  <img src={`${images_path}ntse/img_2.jpg`}/>
                  <div className="advantafeNtse">
                  <div className="row_full">
                    <h3 className="row_full">HOW TO ACHIEVE THIS GOAL</h3>
                    <p className="row_full">How Gyansutrm Helps to Crack NTSE</p>
                    <ul className="row_full">
                      <li><i className="fa fa-circle" aria-hidden="true"></i><span>Learn with scientific thinking </span></li>
                      <li><i className="fa fa-circle" aria-hidden="true"></i><span>Dedicated IHE </span></li>
                      <li><i className="fa fa-circle" aria-hidden="true"></i><span>DPP Abhyash</span></li>
                    </ul>
                  </div>

                  <div className="row_full">
                    <p className="row_full">FOR MAT</p>
                    <ul className="row_full">
                      <li><i className="fa fa-circle" aria-hidden="true"></i><span>Questions on analytical and logical reasoning</span></li>
                      <li><i className="fa fa-circle" aria-hidden="true"></i><span>Question on series, pattern perception, analogies, coding-decoding, classifications, hidden figures and problem-solving.</span></li>                    </ul>
                  </div>

                  <div className="row_full">
                    <p className="row_full">FOR SAT</p>
                    <ul className="row_full">
                      <li><i className="fa fa-circle" aria-hidden="true"></i><span>Questions on Science, Social science & Mathematics subjects specially design for NTSE</span></li>
                      <li><i className="fa fa-circle" aria-hidden="true"></i><span>Performance analysis at micro level </span></li>
                      <li><i className="fa fa-circle" aria-hidden="true"></i><span>NTSE Mock test series</span></li>
                    </ul>
                  </div>
                </div>
                </div>
            </div> 


            <div className="row_full ntseBox text-center" style={{padding:'35px 0 0 0'}}>
                <h3 style={{textTransform:'inherit'}} className="row_full">Eligibility Criterion</h3>
                <p className="row_full">Candidates should be below the age of 18 years.</p>
              <div className="row_full elcBox">
                  <div className="row_full">
                    <h4 className="row_full">NTSE Eligibility for Stage I (State level examination)</h4>
                    <p className="row_full">The candidate must be a Class X student from any Government/ Private schools in India.</p>
                    <ul className="row_full">
                      <li>There is no domicile restriction.</li>
                    </ul>
                    <p className="row_full"> The candidates studying in open or distance learning are also eligible to write NTSE</p>
                  </div>
              </div>

              <div className="row_full elcBox">
                  <div className="row_full">
                    <h4 className="row_full">NTSE Eligibility for Stage 2 (National level examination)</h4>
                    <p>Only the students who qualified in stage I are eligible to appear for Stage II examination. </p>
                    <ul className="row_full">
                      <li>The roll number, venue, date of examination details will be conveyed to the selected candidates by</li>
                    </ul>
                    <p className="row_full"> NCERT through its official website.</p>
                  </div>
              </div>

              <div className="row_full elcBox">
                  <div className="row_full">
                    <h4 className="row_full">NTSE Eligibility for Students Studying Abroad</h4>
                    <p className="row_full">Indian students studying abroad in Class X or equivalent are eligible to write stage 2 (second level examination) directly and are exempted from the stage 1 examination.</p>
                    <ul className="row_full">
                      <li>The candidate must have scored 60% in the previous year’s annual examination.</li>
                      <li> The candidate should appear for the examination in a centre in India.</li>
                      <li>The candidates must request through the Head of the Institution where he/she is studying, along with an attested copy of Class IX mark sheet. The request should reach the Head, Department of Educational Survey Division, NCERT, New Delhi by 31 December of the concerned year.</li>
                    </ul>
                    <p className="row_full">The selected candidate will receive the scholarship only if he/she decides to pursue studies in India.</p>
                  </div>
              </div>

              <div className="row_full ntseQualify">
                  <div className="row_full">
                    <div className="itemBox">
                      <h4 className="row_full">Eligibility Criterion</h4>
                      <ul>
                        <li><span style={{marginLeft:'-10px',marginRight:'10px'}}>Papers</span> <span>Maximum Marks</span> <span>Number of Questions</span> <span>Time Allotted</span></li>
                      </ul>
                      <ul className="row_full whiteUlElm">
                        <li><span>MAT</span> <span>100</span> <span>100</span> <span>120 Min</span></li>
                        <li><span>SAT (Mathematics, Science, Social Sciences)</span> <span>100</span> <span>100</span> <span>120 Min</span></li>
                      </ul>
                    </div>

                    <div className="itemBox">
                      <h4 className="row_full">NTSE Exam Marking Scheme (Paper 1 & Paper 2)</h4>
                      <ul className="row_full whiteUlElm" style={{marginTop:'15px'}}>
                        <li>Stage 1<br/>No negative marking for the wrong answer.</li>
                        <li>Stage 2<br/>1 Mark will be awarded for every correct answer. For every wrong answer, one-third of the marks will be deducted. No negative marking for questions left un-attempted.</li>
                      </ul>
                    </div>

                  </div>

                  <div className="row_full">
                    <div className="itemBox" style={{minHeight:'150px'}}>
                      <h4 className="row_full">NTSE Exam Qualifying Marks</h4>
                      <ul className="row_full whiteUlElm" style={{marginTop:'15px'}}>
                        <li>1. 40% Marks in each paper for General category students.</li>
                        <li> 2. 32% Marks in each paper for SC, ST & PH category students.</li>
                      </ul>
                    </div>

                    <div className="itemBox" style={{minHeight:'150px'}}>
                      <h4 className="row_full">NTSE Reservation</h4>
                      <ul className="row_full whiteUlElm last" style={{marginTop:'15px'}}>
                        <li><span>Category</span> <span>Reservation</span> <span>Scheduled Tribe</span> <span>7.5%</span></li>
                        <li><span>Schedule Caste</span> <span>15%</span> <span>Person with Disability</span> <span>3%</span></li>
                      </ul>
                    </div>

                  </div>
              </div>

            </div>
          </div>
        </div>
      </section>
     </section>
  );
}
export default Ntse