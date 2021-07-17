import React from 'react';
import './Reachus.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';

const Reachus = () => {
	return (
		<section className="row_full" style={{ paddingBottom: '30px' }}>
			<div
				className="row_full pageBanner"
				style={{ background: `url(${images_path}reachus.jpg)` }}
			>
				<span className="bgopct"></span>
				<div className="overLay">
					<h2 className="pageName">Reach Us</h2>
				</div>
			</div>

			<div className="row_full reachusCntr text-center">
				<div className="container">
					<div className="row">
						<div className="col col-sm-12 col-md-12 col-lg-12">
							<div className="row_full reachusbox">
								<h3 className="row_full">Connect With us at Below Details</h3>
								<ul className="row_full reachArea">
									<li>
										<span className="icon"></span>
										<p>Toll Free Number</p>
										<p>
											<strong>+91 7906641804</strong>
										</p>
									</li>
									<li className="mid">
										<span className="icon1"></span>
										<p>Location</p>
										<p>
											<strong>
												5/11, Vijay Nagar, <br /> Indore Madhya Pradesh, <br />{' '}
												452010 India
											</strong>
										</p>
									</li>
									<li>
										<span className="icon2"></span>
										<p>Email Address</p>
										<p>
											<strong>reachus@gyansutrm.com</strong>
										</p>
									</li>
								</ul>
							</div>

							<div
								className="row_full reachArea"
								style={{ marginTop: '20px', marginBottom: '25px' }}
							>
								<h3 className="row_full mar_b_20">Enquire Now</h3>
								<div className="contectBg">
									<form action="">
										<div className="form-group">
											<input
												type="text"
												className="form-control req"
												placeholder="First Name"
												rel="First Name"
											/>
										</div>
										<div className="form-group">
											<input
												type="text"
												className="form-control req"
												placeholder="Last Name"
												rel="Last Name"
											/>
										</div>
										<div className="form-group">
											<input
												type="text"
												className="form-control req email"
												placeholder="Email"
												rel="Email"
											/>
										</div>
										<div className="form-group">
											<input
												type="text"
												className="form-control req mobile"
												placeholder="Mobile no"
												rel="Mobile no"
											/>
										</div>

										<div className="form-group fullwdth">
											<textarea
												cols="4"
												rows="4"
												className="form-control req"
												placeholder="Enter Your Message Here"
												rel="Your Message Here"
											></textarea>
										</div>

										<div className="row_full">
											<div className="checkbox custChk">
												<label>
													<input type="checkbox" /> I'am not a robot
												</label>
											</div>
											<input
												type="submit"
												className="subreachus"
												style={{ borderRadius: '5px' }}
												value="submit"
											/>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Reachus;
