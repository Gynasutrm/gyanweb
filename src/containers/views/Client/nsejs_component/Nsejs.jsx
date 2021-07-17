import React from 'react'
import './Nsejs.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';
const Nsejs = () => {
  return (
    <section className="row_full">

      <div className="row_full pageBanner" style={{background:`url(${images_path}aboutus.jpg)`}}>
        <span className="bgopct"></span>
        <div className="overLay">
            <h2 className="pageName">NSEJS</h2>
        </div>
      </div>

      <section className="row_full olymregisBox top">
        <div className="row_full">
          <div className="container">
            <div className="row_full text-center">
              <h2 className="row_full">NSEJS</h2>
              <p className="row_full">NSEJS is an acronym for National Standard Examination in Junior Science. NSEJS is the first stage exam of IJSO<br/> (International Junior Science Olympiad) program. NSEJS exam is conducted by IAPT (Indian Association of Physics Teachers).</p>
              <p className="row_full">A student want to go through successive stages of the program, he/she must enroll for NSEJS. NSEJS is held at a large number of centres in the country.<br/>So, lets know more details about IJSO and its stages and then we know about NSEJS.</p>
            </div>
          </div>
        </div>
      </section>
    
      <section className="row_full olymregisBox ijso mar_t_0">
        <div className="row_full">
          <div className="container">
            <div className="row_full" style={{position:'relative'}}>
              <div className="leftJeeBox">
                  <h2 className="row_full">IJSO</h2>
                  <p className="row_full">IJSO (International Junior Science Olympiad) program is a general science competition. It is an annual individual and team competition in the Natural Sciences for students who are under sixteen years old on 31st December of the competition</p>
                  <p className="row_full">IJSO has been established in recognition of the significance of the Natural Sciences in the general education of young people and in all aspects of their lives. It is a purely educational event.</p>
                  <p className="row_full"><strong>There are following main objectives of IJSO</strong></p>
                  <ul className="row_full">
                    <li className="row_full"><em>1</em><span>To stimulate the active interest of students in the Natural Sciences.</span></li>
                    <li className="row_full"><em>2</em><span>To promote their careers as scientists. </span></li>
                    <li className="row_full"><em>3</em><span> To enhance and develop international contacts in the Natural Sciences.</span></li>
                    <li className="row_full"><em>4</em><span>To promote future scientific collaboration.</span></li>
                    <li className="row_full"><em>5</em><span> To encourage the formation of friendships within the scientific community.</span></li>
                    <li className="row_full"><em>6</em><span>To offer the opportunity to compare the syllabus and educational trends in science education within the participating countries</span></li>
                  </ul>
              </div>
              <img src={`${images_path}ijso_1.png`}/>       
            </div>
          </div>
        </div>
      </section>

      <section className="row_full olymregisBox botfixImg mar_t_0">
        <div className="row_full">
          <div className="container">
              <div className="row_full ijsoStage text-center">
                  <h2 className="row_full">IJSO Stages</h2>
                  <p className="row_full">IJSO is a five stages examination. The stages of IJSO are as below:</p>
                  <ul className="row_full">
                    <li><em>Stage 1</em><span>NSEJS (National Standard Examination for Junior Science)</span></li>
                    <li><em>Stage 2</em><span>INJSO (Indian National<br/> Junior Science<br/> Olympiad)</span></li>
                    <li><em>Stage 3</em><span>OCSC (Orientation Cum Selection Camp)</span></li>
                    <li><em>Stage 4</em><span>PDT (Pre Departure Training)</span></li>
                    <li><em>Stage 5</em><span>IJSO (International<br/> Junior Science<br/> Olympiad)</span></li>
                  </ul>
                  <p className="row_full"><small>Lets discuss these stages one by one.</small></p>
              </div>
          </div>
        </div>
        <img src={`${images_path}ijso_botom.png`}/>       
      </section>

      <section className="row_full olymregisBox ijso mar_t_0">
        <div className="row_full">
          <div className="container">
            <div className="row_full" style={{position:'relative'}}>
              <div className="leftJeeBox">
                  <p className="row_full ftag"><span>NSEJS Conducting Body</span><small>The NSEJS is conducted by IAPT.</small></p>
                  <h2 className="row_full">Cut-Off for NSEJS Exam</h2>
                  <p className="row_full">The cut-off marks for National Standard Examination in Junior Science (NSEJS) is the minimum marks required to qualify NSEJS Level 1 Examination and be eligible for Level 2 Examination. NSEJS cut off marks has been released by Indian Association of Physics Teachers (IAPT).</p>
                  <p className="row_full"><strong>How cut off marks are calculated?</strong></p>
                  <ul className="row_full ulfa">
                    <li className="row_full"><i className="fa fa-circle" aria-hidden="true"></i><span>First, the average of marks scored by the Top 10 students is calculated.</span></li>
                    <li className="row_full"><i className="fa fa-circle" aria-hidden="true"></i><span>Then Merit Index (MI) and Minimum Admissible Score (MAS) is calculated. MAS is the actual cut off marks for NSEJS.</span></li>
                    <li className="row_full"><i className="fa fa-circle" aria-hidden="true"></i><span>MI = 80% of Average of Top 10 Scorers</span></li>
                    <li className="row_full"><i className="fa fa-circle" aria-hidden="true"></i><span> MAS = 50% of Average of Top 10 Scorers</span></li>
                  </ul>
              </div>
              <img style={{top:'15%'}} src={`${images_path}ijso_2.svg`}/>       
            </div>
          </div>
        </div>
      </section>


      <section className="row_full jeeWindow ijso">
        <div className="row_full">
          <div className="container">
            <div className="row_full">
              <div className="jeereservBox">
                <div className="row_full jeeBtn minHt430">
                  <a className="jeeBtnWidth"><span>Stage 2 INJSO</span></a>
                  <p>Based on performance in NSEJS, the top 300 students in order of merit qualify to appear for this Stage 2 INJSO (Indian National Junior Science Olympiad). In addition those students who have been exempted as described in the Enrolment page are also eligible to appear for INJSO.</p>
                  <p> NJSO unlike the NSEJS, is organized by HBCSE in about 15 centers in the country. On the basis of performance in INJSO, the top 35 students in the merit list will be selected for Stage 3: OCSC in Junior Science.</p>
                </div>
                <div className="row_full jeeBtn pad_t_25">
                  <a className="jeeBtnWidth"><span>Stage 4 PDT</span></a>
                  <p>PDT (Pre Departure Training) will be for the selected 6 member student team. They will undergo a rigorous training programme at HBCSE in theory and experiment.</p>
                  <p>Special laboratories are being developed at HBCSE for the purpose of experimental training. Resource persons from HBCSE and different institutions across the country will train the students.</p>
                </div>
              </div>

              <div className="jeereservBox right">
                <div className="row_full jeeBtn">
                  <a className="jeeBtnWidth"><span>Stage 3 OCSC</span></a>
                  <p>OCSC (Orientation Cum Selection Camp) in IJSO Stage 3 will be organized by HBCSE sometime in April to June for 2-3 weeks. The precise dates will be announced prior to or along with the announcement of the selection list for the OCSC.</p>
                  <p>The merit list of OCSC in Junior Science will be prepared on the basis of the combined theoretical and experimental score aggregated over all the tests in the camp, with 60% weightage for theory and 40% weightage for experiment.</p>
                  <p>Performance in previous stages (NSEJS and INJSO) will NOT be a consideration for the merit list and awards of the OCSC.</p>
                  <p>The top 6 in the OCSC merit list will be declared to be special merit awardees. These special merit awardees will be given Rs. 5,000 each in the form of books and cash. In addition, there will be special prizes to recognize meritorious performance in theory and experiments.</p>
                  <p>The 6 special merit awardees in Junior Science selected at the end of the OCSC will constitute the 6 member student team for the IJSO (International Junior Science Olympiad), provided they satisfy required criteria such as age limit, holding valid Indian passport, medical fitness, parental consent, etc.</p>
                </div>

                <div className="row_full jeeBtn pad_t_25">
                  <a className="jeeBtnWidth"><span>Stage 5 IJSO</span></a>
                  <p>In IJSO (International Junior Science Olympiad) exam, the 6 member students team and 3 teacher leaders will constitute the delegation to represent India.</p>
                  <p>Since IJSO is a general science competition, the IJSO syllabus is therefore not strictly divided into the disciplines biology, chemistry and physics but rather intends to highlight basic general concepts in science.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="row_full olymregisBox topfixImg mar_t_0">
        <img src={`${images_path}ijso_top.png`}/>  
        <div className="row_full">
          <div className="container">
              <div className="row_full ijsoStage text-center">
                  <h2 className="row_full">Selection of Students for Next Stage</h2>
              </div>
              <div className="row_full ieoBox">
                <div className="boxshadowMid">
                  <ul className="row_full midTable bgwhiteBox">
                    <li className="row_full titleList"><span><strong style={{fontWeight:'600'}}>Stage</strong></span> <span><strong style={{fontWeight:'600'}}>Exam</strong></span> <span><strong style={{fontWeight:'600'}}>Selection for Next Stage</strong></span></li>
                    <li className="row_full"><span>Stage 1</span><span>NSEJS</span><span>300 Students will be Selected</span></li>
                    <li className="row_full"><span>Stage 2</span><span>INJSO</span><span>35 Toppers will be Selected</span></li>
                    <li className="row_full"><span>Stage 3</span><span>OCSC</span><span>6 Students will be Selected</span></li>
                    <li className="row_full"><span>Stage 4</span><span>IJSO</span><span>Yet to be Announced</span></li>
                   </ul>
                </div>
              </div>  
          </div>
        </div>     
      </section>
      
    </section>
  );
}

export default Nsejs