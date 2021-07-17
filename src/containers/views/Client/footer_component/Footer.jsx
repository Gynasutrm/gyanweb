import { Link } from "react-router-dom";
import "./Footer.css";
const images_path = process.env.PUBLIC_URL + "/assets/images/";

function Footer() {
  return (
    <div>
      <section className="footerCntr section-bg-2 pad_t_60px pad_b_40px">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 footerBox">
              <div className="footerBox_item">
                <a>
                  <img
                    src={`${images_path}logo.png`}
                    alt="footer logo"
                    className="footer_logo"
                  />
                </a>
                <ul className="list-items footer-address">
                  <li>
                    <a>+91 7906641804</a>
                  </li>
                  <li>
                    <a style={{ textTransform: "initial" }} className="mail">
                      reachus@gyansutrm.com
                    </a>
                  </li>
                  <li style={{ lineHeight: "28px" }}>
                    5/11, Vijay Nagar,
                    <br />
                    Indore Madhya Pradesh, 452010 India
                  </li>
                </ul>
                <h3 className="footer_title font_s_17 mt-4">We are on</h3>
                <ul className="social-profile">
                  <li>
                    <a href="https://www.facebook.com/Gyansutrm-115953730371906/">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/gyansutrm">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/gyansutrm/">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/gyan-sutrm-a6768a205/">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCoTfGD34Vu7SVvSEJo_N8fw">
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 footerBox">
              <div className="footerBox_item">
                <h3 className="footer_title">Company</h3>
                <span className="section-divider"></span>
                <ul className="list-items">
                  <li>
                    <Link to="/aboutus">About Us</Link>
                  </li>
                  <li>
                    <Link to="/reachus">Reach Us</Link>
                  </li>
                  <li>
                    <Link to="/career">Become a G-IHE</Link>
                  </li>
                  <li>
                    <Link to="/blogs">Blogs</Link>
                  </li>
                  <li>
                    <Link to="/ourresult">Our Result</Link>
                  </li>
                  <li>
                    <Link to="/career">Career</Link>
                  </li>
                  <li>
                    <Link to="/privacy_policy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 footerBox">
              <div className="footerBox_item">
                <h3 className="footer_title">Courses</h3>
                <span className="section-divider"></span>
                <ul className="list-items">
                  <li>
                    <Link to="/glivepremium">G-Live Premium</Link>
                  </li>
                  <li>
                    <Link to="/iglpro" style={{ textTransform: "inherit" }}>
                      i-GL PRO
                    </Link>
                  </li>
                  <li>
                    <Link to="/neet">NEET</Link>
                  </li>
                  <li>
                    <Link to="/jeemains">JEE</Link>
                  </li>
                  <li>
                    <Link to="/">Meritorious</Link>
                  </li>
                  <li>
                    <Link to="/">Gyansutrm Premiere League</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 footerBox">
              <div className="footerBox_item">
                <h3 className="footer_title">Download App</h3>
                <span className="section-divider"></span>
                <ul className="footer_btnBox">
                  <li>
                    <a href="#" className="theme-btn">
                      <i className="fa fa-apple icon-element"></i>
                      <span className="app-titles">
                        <span className="app__subtitle">Download on the</span>
                        <span className="app__title">App Store</span>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="theme-btn">
                      <i className="fa fa-android icon-element"></i>
                      <span className="app-titles">
                        <span className="app__subtitle">Get in on</span>
                        <span className="app__title">Google Play</span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyrightBox">
            <div className="row align-items-center">
              <div className="col-lg-10">
                <p className="copyDesc">
                  &copy; 2020. All Rights Reserved. by <a href="">Gyansutrm.</a>
                </p>
              </div>
              <div className="col-lg-2"></div>
            </div>
          </div>
        </div>
      </section>
      <div id="scroll-top">
        <i className="fa fa-angle-up" title="Go top"></i>
      </div>
    </div>
  );
}
export default Footer;
