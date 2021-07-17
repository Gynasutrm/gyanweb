import React from 'react'
import './Blogs.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';

const Blogs = () => {
  return (
    <section className="row_full">
      <div className="row_full pageBanner" style={{background:`url(${images_path}aboutus.jpg)`}}>
        <span className="bgopct"></span>
        <div className="overLay">
            <h2 className="pageName">Blog <span>“Learn the science of exam before learning science”</span></h2>
        </div>
      </div>

      <div className="row_full blogCntr">
        <div className="container">
        <div className="blogBox">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="row_full">
                    <ul className="row_full blogTab">
                      <li><a>Bioneeti</a></li>
                      <li><a>Jeeneeti</a></li>
                      <li><a>Build Your Neev</a></li>
                    </ul>

                    <div className="row_full">
                      <div className="blogLeft">
                        <div className="row_full blogItem">
                            <img src={`${images_path}blogs/img_1.jpg`}/>
                            <h3 className="row_full">Manthan on NEET with Experts</h3>
                            <p className="row_full">Eference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                        </div>

                        <div className="row_full blogItem">
                            <img src={`${images_path}blogs/img_2.jpg`}/>
                            <h3 className="row_full">Golden steps to follow for NEET Preperation</h3>
                            <p className="row_full">A conversation with our director’s & our Achiever’s in NEET”</p>
                        </div>

                        <div className="row_full blogItem">
                            <img src={`${images_path}blogs/img_3.jpg`}/>
                            <h3 className="row_full">Importance of Time management.</h3>
                            <p className="row_full">Eference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                        </div>

                        <div className="row_full blogItem">
                            <img src={`${images_path}blogs/img_4.jpg`}/>
                            <h3 className="row_full">Importance of NCERT in NEET.</h3>
                            <p className="row_full">Eference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                        </div>

                      </div>
                      <div className="blogLeft">
                        <div className="row_full blogMenu">
                          <p className="row_full"><strong>Podocast</strong></p>
                          <ul className="row_full">
                            <li><a>The Sutra to crack IIT-JEE.</a></li>
                            <li><a>Know about your exam brfore preparing for it.</a></li>
                            <li><a>Prerna for IIT-JEE Aspirant.</a></li>
                            <li><a>Bost your confidence in PCM by Gyansutrm Experts.</a></li>
                            <li><a>How to mange your time & schedulling of your syllabus.</a></li>
                            <li><a>Focus on your goals to ace your way towards success.</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      </div>
    </section>
  );
}
export default Blogs