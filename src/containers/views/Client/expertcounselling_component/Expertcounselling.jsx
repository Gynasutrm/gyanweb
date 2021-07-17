import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './Expertcounselling.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';

const goal = [
  {city:'goal',packages:[
    {name:'NEET'},
    {name:'JEE'},
    {name:'KVPY'},
    {name:'NTSE'},
    {name:'OLYMPIAD'},
    {name:'BOARD EXAM'},
    {name:'ILETS'},
    {name:'TOEFL'},
    {name:'SSC'},
    {name:'UPSC'},
  ]}
];

const Expertcounselling = () => {
  const [city,setCity] = useState(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
  }, []);

  const handleClickOutside = (event)=>{
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setCity(null);
    }
  }
  
  const [selectedValue, setSelectedValue] = useState([]);
  const handleUpdateValue=(itemValue, itemIndex)=>{
      const updateSelectedValue = [...selectedValue];
      updateSelectedValue[itemIndex]=itemValue;
      setSelectedValue(updateSelectedValue);
      setCity(null);
  }

  return (
    <section className="row_full">
      <div className="row_full pageBanner" style={{background:`url(${images_path}aboutus.jpg)`}}>
        <span className="bgopct"></span>
        <div className="overLay">
            <h2 className="pageName">Expert Counselling</h2>
        </div>
      </div>
      <section className="row_full jeeCntr bgwhite" style={{background:'#fff'}}>
        <div className="container">
          <div className="row_full">
            <div className="row_full expertCBox">
              <div className="expertLeft">
                <h3 className="row_full">EXPERT COUNSLING <span></span></h3>
                <p className="row_full">Are you looking for career guidance? You want solution for your real time problems during competitive exam prep you landed here right</p>
              </div>
              <img src={`${images_path}jee/expertImg_1.png`}/>
            </div>  

            <div className="row_full responArea">
              <img src={`${images_path}jee/expertImg_2.jpg`}/>
            </div> 
          </div>
        </div>
      </section>

      <div className="row_full jeeAppBox supportBg">
        <span className="fixtopAppImg">
          <img src={`${images_path}jee/expertfixtop.png`}/>
        </span>
        <div className="row_full">
          <div className="container">
            <div className="row_full" style={{position:'relative'}}>
              <div className="leftJeeBox">
                  <h2 className="row_full">Strengths weaknesses and<br/>abilities to give right direction/support</h2>
                  <p>personalize counselling plan for 9th, 10th, 11th, 12th</p>
                  <ul className="row_full suprdx">
                    <li><img src={`${images_path}jee/sm_icon_1.jpg`}/><span>For every Class students who want to ace in his/her career</span></li>
                    <li><img src={`${images_path}jee/sm_icon_2.jpg`}/><span>Get best sutras by our top-class coach</span></li>
                    <li><img src={`${images_path}jee/sm_icon_3.jpg`}/><span>Get three 45 minute sessions with career coach.</span></li>
                    <li><img src={`${images_path}jee/sm_icon_4.jpg`}/><span>Get help in entrance exam and college admission</span></li>
                    <li><img src={`${images_path}jee/sm_icon_5.jpg`}/><span>Parent interactions and actionable outcomes from session</span></li>
                    <li><img src={`${images_path}jee/sm_icon_6.jpg`}/><span>Make ideal college list for Admissons</span></li>
                    <li><img src={`${images_path}jee/sm_icon_7.jpg`}/><span>Pay online and access services immediately</span></li>
                  </ul>
              </div>
                <a className="getuPlan" href="javascript:void(0);">Get your <br/>plan<br/> @1500/-</a>
                <img src={`${images_path}jee/expertImg_3.svg`}/>       
            </div>
          </div>
        </div>
      </div>

      <div className="row_full treeImgCntr">
        <div className="container">
          <div className="row_full meetExpert text-center">
              <h2 className="row_full">Personal Mentoring for Competitive Preparation</h2>
              <p><strong>Meet with our Expert</strong></p>

              <div className="row_full" style={{marginTop:'10px'}}>
                <div className="expFormBox">
                <div className="row_full">
                <form action="">

                  {goal.map((key,val)=>(
                    <div key={val} className="form-group customwdth" style={{position:'relative'}}>
                        <input type="text" autoComplete="off" className="form-control" onClick={()=>{setCity(key.city)}} placeholder="Select Your Goal" name="goal" value={selectedValue[val]}/>
                        <i className="fa posAbs1 fa-angle-down"></i>
                          {key.city===city ? <ul ref={wrapperRef} className="goalBox">
                            {key.packages.map((pak,ind)=>(
                              <li key={ind} onClick={(value,index) => handleUpdateValue(pak.name,val)} >{pak.name}</li> 
                            ))}                          
                          </ul>:null}
                    </div>
                  ))}

                  <div className="form-group customwdth">
                    <input type="text" className="form-control" placeholder="Name"/>
                  </div>
                  <div className="form-group customwdth">
                    <input type="text" className="form-control" placeholder="Email Id"/>
                  </div>
                  <div className="form-group customwdth">
                    <input type="text" className="form-control" placeholder="Mobile No"/>
                  </div>
                  <div className="checkbox chkText">
                    <label><input type="checkbox"/><span>By accepting you are expressly agreeing to Gyansurtm's <strong>term of use</strong> and <Link style={{color:'#1860CC',fontWeight:'700'}} to="/privacy_policy">privacy policy</Link></span></label>
                  </div>
                  <input type="submit" value="Meet with Expert"className="mwexbtn"/>
                </form>
                </div>
              </div>
              </div>
          </div>
        </div>
        <div className="row_full imgHeight">
          <img src={`${images_path}jee/expertImg_4.svg`}/>       
        </div>
      </div>
      </section>

  );
}

export default Expertcounselling