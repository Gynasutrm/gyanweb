import React from 'react'
import './Uniqueness.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';

const Uniqueness = () => {
  return (
    <section className="row_full" style={{paddingBottom:'30px'}}>

      <div className="row_full pageBanner" style={{background:`url(${images_path}uniqueness.jpg)`}}>
        <span className="bgopct"></span>
        <div className="overLay">
            <h2 className="pageName">Our Uniqueness</h2>
        </div>
      </div>

      <div className="row_full">
        <div className="container">
          <div className="row_full uniqueContent" style={{display:'none'}}>
              <h3 className="row_full">Gyansutrm strives to serve student an analytical<br/> and smart learning admiring academic growth exponentially.</h3>
              <img src={`${images_path}uniqueGyan.jpg`}/>
              {/*<div className="row_full imgtag pad_t_40px">
                        <ul className="smartLerBox">
                          <li>
                            <span className="directionIcon first"></span>
                            <span className="icon"><img src={`${images_path}uniqueness_1.png`} alt="Smart Learning"/></span>
                            <h4>Dual mode smart learning </h4>
                            <p style={{width:'64%'}}>Real time education and hybrid mode through PATHSHALA and e-GYAN</p>
                          </li>

                          <li className="leftMar">
                            <span className="directionIcon"></span>
                            <span className="icon"><img src={`${images_path}uniqueness_2.png`} alt="Smart Learning"/></span>
                            <h4>Sanskaar</h4>
                            <p style={{width:'62%'}}>Academic Exploration with Moral education with Motivational theme</p>
                          </li>

                          <li>
                            <span className="directionIcon last"></span>
                            <span className="icon"><img src={`${images_path}uniqueness_3.png`} alt="Smart Learning"/></span>
                            <h4>e-GYAN and 24x7: ask your Experts</h4>
                            <p>Quick and easy access over the internet at a fraction of the costs makes e-learning more affordable then traditional learning</p>
                          </li>
                        </ul>
                            <img className="uniqueImg" src={`${images_path}uniqueGyan.png`}/>
                        <ul className="smartLerBox right">
                          <li className="first">
                            <span className="dirLeft first"></span>
                            <span className="icon"><img src={`${images_path}uniqueness_4.png`} alt="Smart Learning"/></span>
                            <h4>Flexible "AI interface" of Doubt resolution</h4>
                            <p>Its mode of delivery and flexibility makes e-learning more effective because it is in sync with the learners</p>
                          </li>

                          <li className="rightMar">
                            <span className="dirLeft"></span>
                            <span className="icon max"><img src={`${images_path}uniqueness_5.png`} alt="Smart Learning"/></span>
                            <h4>Time and Cost Effective</h4>
                            <p>Unbiased with supplementary source (coaching and tuition ) of wasting money and time but focusing to serve subject oriented education under the guidance of experienced and innovative educators.</p>
                          </li>

                          <li>
                            <span className="dirLeft last"></span>
                            <span className="icon"><img src={`${images_path}uniqueness_6.png`} alt="Smart Learning"/></span>
                            <h4>Higher Comprehension</h4>
                            <p>INTERACTIVE TOOLS through e-learning platforms healps learners absorb contents 60% faster.</p>
                          </li>
                        </ul>
              </div>*/}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Uniqueness