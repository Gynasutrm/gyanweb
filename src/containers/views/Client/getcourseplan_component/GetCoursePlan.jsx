import  React, { useState , useRef, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link,useHistory } from "react-router-dom";
import './GetCoursePlan.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';

const GetCoursePlan = () => {  
  const [ulwidth,setUlwidth] = useState(null);
  const [loginData,setLoginData] = useState(false);


  const [chkCategory,setCategoryParam] = useState({
    isglp:false,
    isgl:false,
    isigp:false,
    isig:false,
    ispc:false
});

  const [queryParam,setQueryParam] = useState({
    category_id:"",
    grade:"",
    goal:""
});

  const instaRef = useRef(null)
  const expertRef = useRef(null);
  const liwidthGet = useRef(null);
  const [trendingulwdth,setTrendingulwdth] = useState(null);

  useEffect(() => {
    var query = window.location.search.substring(1);
    const getQueryParams = () => window.location.search.replace('?', '').split('&').reduce((r,e) => (r[e.split('=')[0]] = decodeURIComponent(e.split('=')[1]), r), {});
    const m = getQueryParams(query);
    const category_id=m['category_id'];
    const grade=m['grade'];
    const goal=m['goal'];

    setQueryParam({
      ...queryParam,
      category_id:parseInt(m['category_id']),
      grade:m['grade'],
      goal:m['goal']
  });

  if(category_id==1){
    setCategoryParam({
      isglp:true
    })
  }
  else if(category_id==2){
    setCategoryParam({
      isgl:true
    })
  }
  if(category_id==3){
    setCategoryParam({
      isigp:true
    })
  }
  else if(category_id==4){
    setCategoryParam({
      isig:true
    })
  }
  if(category_id==5){
    setCategoryParam({
      ispc:true
    })
  }


  // console.log(queryParam);
    // getState();

    let sliderLength = document.querySelectorAll('.testimonialBox li').length;
    let marginElm = sliderLength*15;
    let ulWidth = parseInt(sliderLength*liwidthGet.current.offsetWidth)+marginElm;
    setUlwidth(ulWidth);

    let trendingBoxLength = document.querySelectorAll('.trendingBox li').length;
    let trndmarginElm = trendingBoxLength*20;
    let trndulWidth = parseInt(trendingBoxLength*liwidthGet.current.offsetWidth)+trndmarginElm;
    setTrendingulwdth(trndulWidth);

    const persistState = localStorage.getItem('validauth');
    if(persistState) {
      setLoginData(true);
    }

  },[liwidthGet.current]);

  const instaScroll = () => instaRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  const expertScroll = () => expertRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

  let trendingcount = 0;
  const trendingSlide = (rel,ulelm,main)=>{
  let sliderLength = document.querySelectorAll('.'+main+' li').length;
  let element = document.querySelector('.'+ulelm);
  let liWidth = liwidthGet.current.offsetWidth;
  let gapElm = 0;
  ulelm=='sliderUlwidth'?gapElm=15:gapElm=20;
  let z = 0;
  if(rel=='left'){
    if(-trendingcount<sliderLength-2){
      trendingcount--;
      let marginLi = trendingcount*gapElm;
      z = parseInt(liWidth*trendingcount)+marginLi;
      element.style.webkitTransform = 'translateX('+z+'px)';
    }
  }else{
    if(trendingcount<0){
      trendingcount++;
      let marginLi = trendingcount*gapElm;
      z = parseInt(liWidth*trendingcount)+marginLi;
      element.style.webkitTransform = 'translateX('+z+'px)';
    }
  }
}


  return (
    <section className="row_full" style={{paddingBottom:'30px'}}>

      <div className="row_full pageBanner" style={{background:`url(${images_path}aboutus.jpg)`}}>
        <span className="bgopct"></span>
        <div className="overLay">
            <h2 className="pageName">Course Plans For</h2>
            <p>Category - {queryParam.category_id}, Grade - {queryParam.grade}, Goal - {queryParam.goal}</p>
        </div>
      </div>

      <div className="container">
        <div className="row_full trendingCntr">
        <div className="container">
          <div className="row_full">
              <p className="row_full lightText text-center mar_0">LEARN ON YOUR SCHEDULE</p>
              <h3 className="row_full text-center">Course Plans</h3>
              <div className="row_full trendingBox">
                  <i onClick={(n,ul,main)=>{trendingSlide('left','courseList','trendingBox')}} class="fa leftslideT fa-chevron-left" aria-hidden="true"></i>
                  <i onClick={(n,ul,main)=>{trendingSlide('right','courseList','trendingBox')}} class="fa leftslideT fa-chevron-right" aria-hidden="true"></i>
                  <div className="row_full" style={{overflow:'hidden'}}>
                    <ul className="courseList" style={{width:trendingulwdth}}>
                    <li ref={liwidthGet}>
                      <div className="row_full imageLearn">
                        <img src={`${images_path}trend_img1.jpg`}/>
                        <span className="row_full blackOpc"></span>
                        <div className="row_full overLayBox">
                        
                        {chkCategory.isglp && (
                          <span className="glpremium">G-Live<br/>Premium</span>
                        )}
                        {chkCategory.isgl && (
                          <span className="glpremium">G-Live<br/></span>
                        )}
                        {chkCategory.isigp && (
                          <span className="glpremium">i-GL<br/>Pro</span>
                        )}
                        {chkCategory.isig && (
                          <span className="glpremium">i-GPT<br/></span>
                        )}
                        {chkCategory.ispc && (
                          <span className="glpremium">Personal<br/>Classis</span>
                        )}                        

                          <p><a>Join a Free Live Class</a></p>
                        </div>
                      </div>

                      <div className="row_full contentLearn">
                          <h3>NEET + KVPY + OLYMPIAD LIVE PREMIUM <span></span></h3>
                          <div className="row_full ulList">
                            <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i> <span>Interactive Live classes (PCB)</span></div>
                            <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i> <span>24 X 7 Doubt Solution</span></div>
                            <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i> <span>G-Samadhan Live doubt session</span></div>
                            <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i> <span>Jigyasha (doubt video library access)</span></div>
                            <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i> <span>i-GL (interactive Gyansutrm Library)</span></div>
                            <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i> <span>PracTest Series</span></div>
                            <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i> <span>Performance analysis</span></div>
                            <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i> <span>Immediate remidial actions</span></div>
                          </div>
                          
                          {chkCategory.isglp && (
                          // <a className="subBtn">Buy Now</a>
                          <Link className="subBtn" to="/glivepremium">Buy Now</Link>
                          )}
                          {chkCategory.isgl && (
                            <Link className="subBtn" to="/glive">Buy Now</Link>
                          )}
                          {chkCategory.isigp && (
                           <Link className="subBtn" to="/iglpro">Buy Now</Link>
                          )}
                          {chkCategory.isig && (
                            <Link className="subBtn" to="/igpt">Buy Now</Link>
                          )}
                          {chkCategory.ispc && (
                            <Link className="subBtn" to="/pclass">Buy Now</Link>
                          )}
                        

                      </div>
                    </li>

                    <li>
                      <div className="row_full imageLearn">
                        <img src={`${images_path}trend_img1.jpg`}/>
                        <span className="row_full blackOpc"></span>
                        <div className="row_full overLayBox">
                        {chkCategory.isglp && (
                          <span className="glpremium">G-Live<br/>Premium</span>
                        )}
                        {chkCategory.isgl && (
                          <span className="glpremium">G-Live<br/></span>
                        )}

                          <p><a>Join a Free Live Class</a></p>
                        </div>
                      </div>

                      <div className="row_full contentLearn">
                          <h3>JEE (MAINS +ADVANCED) LIVE<span></span></h3>
                          <div className="row_full ulList">
                            <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>Interactive Live classes (PCB)</span></div>
                            <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>24 X 7 Doubt Solution</span></div>
                            <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>G-Samadhan Live doubt session</span></div>
                            <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>Jigyasha (doubt video library access)</span></div>
                            <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>i-GL (interactive Gyansutrm Library)</span></div>
                            <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>PracTest Series</span></div>
                            <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>Performance analysis</span></div>
                            <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>Immediate remidial actions</span></div>
                          </div>
                          <a className="subBtn">Buy Now</a>
                      </div>
                    </li>

                    <li>
                      <div className="row_full imageLearn">
                        <img src={`${images_path}trend_img1.jpg`}/>
                        <span className="row_full blackOpc"></span>
                        <div className="row_full overLayBox">
                          <span className="glpremium">G-Live<br/>Premium</span>
                          <p><a>Join a Free Live Class</a></p>
                        </div>
                      </div>

                      <div className="row_full contentLearn">
                          <h3>JEE (MAINS + ADVANCE) + KVPY + OLYMPIAD LIVE PREMIUM<span></span></h3>
                          <div className="row_full ulList">
                          <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>Interactive Live classes (PCM)</span></div>
                            <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>24 X 7 Doubt Solution</span></div>
                            <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>G-Samadhan Live doubt session</span></div>
                            <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>Jigyasha (doubt video library access)</span></div>
                            <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>i-GL (interactive Gyansutrm Library)</span></div>
                            <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>PracTest Series</span></div>
                            <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>Performance analysis</span></div>
                            <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>Immediate remidial actions</span></div>
                          </div>
                          <a className="subBtn">Buy Now</a>
                      </div>
                    </li>
                  
                    <li>
                      <div className="row_full imageLearn">
                        <img src={`${images_path}trend_img1.jpg`}/>
                        <span className="row_full blackOpc"></span>
                        <div className="row_full overLayBox">
                          <span className="glpremium">G-Live<br/>Premium</span>
                          <p><a>Join a Free Live Class</a></p>
                        </div>
                      </div>

                      <div className="row_full contentLearn">
                          <h3>NEET LIVE<span></span></h3>
                          <div className="row_full ulList">
                            <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>Interactive Live classes (PCB)</span></div>
                              <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>24 X 7 Doubt Solution</span></div>
                              <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>G-Samadhan Live doubt session</span></div>
                              <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>Jigyasha (doubt video library access)</span></div>
                              <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>PracTest Series</span></div>
                              <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>Performance analysis</span></div>
                              <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>Immediate remidial actions</span></div>
                          </div>
                          <a className="subBtn">Buy Now</a>
                      </div>
                    </li>

                    <li>
                      <div className="row_full imageLearn">
                        <img src={`${images_path}trend_img1.jpg`}/>
                        <span className="row_full blackOpc"></span>
                        <div className="row_full overLayBox">
                          <span className="glpremium">G-Live<br/>Premium</span>
                          <p><a>Join a Free Live Class</a></p>
                        </div>
                      </div>

                      <div className="row_full contentLearn">
                          <h3>JEE (MAINS + SLEET*) LIVE<span></span></h3>
                          <div className="row_full ulList">
                              <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>Interactive Live classes (PCM)</span></div>
                              <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>24 X 7 Doubt Solution</span></div>
                              <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>G-Samadhan Live doubt session</span></div>
                              <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>Jigyasha (doubt video library access)</span></div>
                              <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>PracTest Series</span></div>
                              <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>Performance analysis</span></div>
                              <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>Immediate remidial actions</span></div>
                          </div>
                          <a className="subBtn">Buy Now</a>
                      </div>
                    </li>

                    <li>
                      <div className="row_full imageLearn">
                        <img src={`${images_path}trend_img1.jpg`}/>
                        <span className="row_full blackOpc"></span>
                        <div className="row_full overLayBox">
                          <span className="glpremium">G-Live<br/>Premium</span>
                          <p><a>Join a Free Live Class</a></p>
                        </div>
                      </div>

                      <div className="row_full contentLearn">
                          <h3>NEET PHYSICS-LIVE<span></span></h3>
                          <div className="row_full ulList">
                            <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>Interactive Live classes (PCM)</span></div>
                            <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>24 X 7 Doubt Solution</span></div>
                            <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>G-Samadhan Live doubt session</span></div>
                            <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>Jigyasha (doubt video library access)</span></div>
                            <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>Performance analysis</span></div>
                            <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>Immediate remidial actions</span></div>
                          </div>
                          <a className="subBtn">Buy Now</a>
                      </div>
                    </li>
                  
                    <li>
                      <div className="row_full imageLearn">
                        <img src={`${images_path}trend_img1.jpg`}/>
                        <span className="row_full blackOpc"></span>
                        <div className="row_full overLayBox">
                          <span className="glpremium">G-Live<br/>Premium</span>
                          <p><a>Join a Free Live Class</a></p>
                        </div>
                      </div>

                      <div className="row_full contentLearn">
                          <h3>NEET BIOLOGY- LIVE<span></span></h3>
                          <div className="row_full ulList">
                            <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>Interactive Live classes</span></div>
                            <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>24 X 7 Doubt Solution</span></div>
                            <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>G-Samadhan Live doubt session</span></div>
                            <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>Jigyasha (doubt video library access)</span></div>
                            <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>Performance analysis</span></div>
                            <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>Immediate remidial actions</span></div>
                          </div>
                          <a className="subBtn">Buy Now</a>
                      </div>
                    </li>

                    <li>
                      <div className="row_full imageLearn">
                        <img src={`${images_path}trend_img1.jpg`}/>
                        <span className="row_full blackOpc"></span>
                        <div className="row_full overLayBox">
                          <span className="glpremium">G-Live<br/>Premium</span>
                          <p><a>Join a Free Live Class</a></p>
                        </div>
                      </div>

                      <div className="row_full contentLearn">
                          <h3>NEET CHEMISTRY- LIVE<span></span></h3>
                          <div className="row_full ulList">
                              <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>Interactive Live classes</span></div>
                              <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>24 X 7 Doubt Solution</span></div>
                              <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>G-Samadhan Live doubt session</span></div>
                              <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>Jigyasha (doubt video library access)</span></div>
                              <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>Performance analysis</span></div>
                              <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>Immediate remidial actions</span></div>
                          </div>
                          <a className="subBtn">Buy Now</a>
                      </div>
                    </li>

                    <li>
                      <div className="row_full imageLearn">
                        <img src={`${images_path}trend_img1.jpg`}/>
                        <span className="row_full blackOpc"></span>
                        <div className="row_full overLayBox">
                          <span className="glpremium">G-Live<br/>Premium</span>
                          <p><a>Join a Free Live Class</a></p>
                        </div>
                      </div>

                      <div className="row_full contentLearn">
                          <h3>JEE MATHEMATICS - LIVE<span></span></h3>
                          <div className="row_full ulList">
                              <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>Interactive Live classes</span></div>
                              <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>24 X 7 Doubt Solution</span></div>
                              <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>G-Samadhan Live doubt session</span></div>
                              <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>Jigyasha (doubt video library access)</span></div>
                              <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>Performance analysis</span></div>
                              <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>Immediate remidial actions</span></div>
                          </div>
                          <a className="subBtn">Buy Now</a>
                      </div>
                    </li>
                  
                    <li>
                      <div className="row_full imageLearn">
                        <img src={`${images_path}trend_img1.jpg`}/>
                        <span className="row_full blackOpc"></span>
                        <div className="row_full overLayBox">
                          <span className="glpremium">G-Live<br/>Premium</span>
                          <p><a>Join a Free Live Class</a></p>
                        </div>
                      </div>

                      <div className="row_full contentLearn">
                          <h3>JEE PHYSICS- LIVE<span></span></h3>
                          <div className="row_full ulList">
                              <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>Interactive Live classes</span></div>
                              <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>24 X 7 Doubt Solution</span></div>
                              <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>G-Samadhan Live doubt session</span></div>
                              <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>Jigyasha (doubt video library access)</span></div>
                              <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>Performance analysis</span></div>
                              <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>Immediate remidial actions</span></div>
                          </div>
                          <a className="subBtn">Buy Now</a>
                      </div>
                    </li>

                    <li>
                      <div className="row_full imageLearn">
                        <img src={`${images_path}trend_img1.jpg`}/>
                        <span className="row_full blackOpc"></span>
                        <div className="row_full overLayBox">
                          <span className="glpremium">G-Live<br/>Premium</span>
                          <p><a>Join a Free Live Class</a></p>
                        </div>
                      </div>

                      <div className="row_full contentLearn">
                          <h3>JEE CHEMISTRY- LIVE<span></span></h3>
                          <div className="row_full ulList">
                              <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>Interactive Live classes</span></div>
                              <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>G-Samadhan Live doubt session</span></div>
                              <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>Performance analysis</span></div>
                              <div className="row_full"><i class="fa fa-circle" aria-hidden="true"></i><span>Immediate remidial actions</span></div>
                          </div>
                          <a className="subBtn">Buy Now</a>
                      </div>
                    </li>
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

export default GetCoursePlan
