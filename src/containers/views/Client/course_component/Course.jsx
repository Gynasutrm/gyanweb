import  React, { useState , useRef, useEffect } from 'react';
import './Course.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';
const Course = ({plan,type,live}) => {
  const [onsuccess,setOnsuccess] = useState(false);
  const [goal,setGoal] = useState(false);
  useEffect(()=>{
    setOnsuccess(true);
    setGoal(false);
  },[]);

  const hidesignup = ()=>{
    setOnsuccess(false);
  }

  const getGoal = (()=>{
    setGoal(!goal);
  });


  return (
    <div>
      {onsuccess && (
        <div className="row_full blackBox">
            <div className="row_full midbox">
              <div className="gliveCntr">
                <i className="fa faclose fa-times" onClick={hidesignup} aria-hidden="true"></i>
                  <div className="gliveLogo">
                        <div className="row_full">
                          <img src={`${images_path}logo.png`}/>
                          <span>G-Live</span>
                        </div>
                    </div>
                  <div className="classBox row_full">
                    <h3>{plan}<br/>{type}</h3>
                    <div className="row_full text-center unlimitedTest"><span>Get Unlimited <br/>Access of All Courses</span></div>
                  </div>


                  <div className="row_full gradeCntr">
                    <h5>Let's find the best {live} plan</h5>
                    <div className="row_full gradeBox">
                      <h6>Select Grade</h6>
                      <ul>
                        <li><a onClick={getGoal}>9+10</a></li>
                        <li><a>9</a></li>
                        <li><a>10</a></li>
                        <li><a>10 & 11</a></li>
                        <li><a>11</a></li>
                        <li><a>12</a></li>
                        <li><a>12+</a></li>
                      </ul>
                    </div>

                    {goal?
                    <div className="row_full gradeBox goal">
                      <h6>Select Goal</h6>
                      <ul>
                        <li><a>JEE Mains</a></li>
                        <li><a>NEET</a></li>
                        <li><a>NTSE</a></li>
                        <li><a>OLYMPIADs</a></li>
                        <li><a>BOADRS</a></li>
                      </ul>
                    </div>
                    :null}

                  </div>
              </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Course;