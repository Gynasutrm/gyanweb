import React from 'react'
import './Aboutus.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';
const Aboutus = () => {
  return (
    <section className="row_full" style={{paddingBottom:'30px'}}>

      <div className="row_full pageBanner" style={{background:`url(${images_path}about_banner.jpg)`}}>
        <span className="bgopct"></span>
        <div className="overLay">
            <h2 className="pageName">Envisioning India's Education</h2>
        </div>
      </div>
      <div className="row_full">
        <div className="container">
          <div className="row_full">
              <div className="row_full aboutGyan">
                  <div className="row_full aboutLogo_ab">
                      <img src={`${images_path}about_img_1.png`}/>
                      <div className="aboutBoxdata_ab">
                        <h3 className="row_full">Envisioning India's Education</h3>
                        <p className="row_full">Gyansutrm is India’s advanced EdTech organisation evolved to nourish fundamental roots of the education envisioned by virtue of revolutionary Digital and classical approach of learning. It redefines the tenets of competitive guidance of offline teaching in schools by providing “PATHSHALA”, a digital way of learning, making schools competition ready.</p>
                      </div>
                      <img src={`${images_path}about_img_2.png`}/>
                  </div>
                  <div className="row_full midicon_about">
                      <span className="directionLeft"></span>
                      <span className="directionRight"></span>
                      <img src={`${images_path}about_img_6.png`}/>
                  </div>
                </div>
              </div>
          </div>
      </div>
    
      <div className="row_full jeeAppBox supportBg figko" style={{padding:'50px 0 30px 0',marginBottom:'0px'}}>
        <span className="fixtopAppImg">
          <img src={`${images_path}jee/expertfixtop.png`}/>
        </span>
        <div className="row_full">
          <div className="container">
            <div className="row_full aboutfixImg" style={{position:'relative'}}>
              <div className="leftJeeBox aboutleft" style={{width:'55%'}}>
                  <ul className="row_full suprdx" style={{paddingTop:'40px'}}>
                    <li style={{paddingBottom:'15px'}}><span>Our dedication, determination, diligence and consistent support of students and their guardians have catapulted us as a force to reckon within the field of pre-engineering, medical and high school.We provide services to reform the paradigm shift in favour of quality in place of quantity in the arena of the competitive field to make students intellectual. Our efforts in empowering traditional teaching by evolving the new way of teaching with adaptation of learning skills of every student.</span></li>
                    <li><span>We combine top-notch subject mentors “G-IHE (Gyansutrm’s In House Experts)”, Adoptable learning content, robust technologies, personal kind approach of mentoring by motivation for outcome of best from students.Our mission to model the path of success of students by transforming ‘academic burden’ to ‘scholastic gladden’.</span></li>
                  </ul>
              </div>
                <img style={{width:'auto',bottom:'50px'}} className="rightfxdx" src={`${images_path}about_img_4.png`}/>       
            </div>
          </div>
        </div>
      </div>
  
  </section>
  );
}

export default Aboutus