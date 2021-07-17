import React, { useState, useRef, useEffect } from 'react';
import './Neet.css';
import Signup from '../signup_component/Signup';
const images_path = process.env.PUBLIC_URL + '/assets/images/';
const Neet = () => {
	const [modalElm, setModalElm] = useState(false);
	const statsRef = useRef();
	const [scroll, setScroll] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			setScroll(window.scrollY > 240 && window.scrollY < 820);
		});
	}, []);

	const moveElm = () => {
		window.scrollTo({
			top: statsRef.current.offsetTop,
			behavior: 'smooth',
		});
	};
	const openModal = () => {
		setModalElm(!modalElm);
	};

	return (
		<section className="row_full">
			{modalElm ? <Signup toggleModal={openModal} /> : null}
			<div
				className="row_full pageBanner"
				style={{ background: `url(${images_path}neet.jpg)` }}
			>
				<span className="bgopct"></span>
				<div className="overLay">
					<h2 className="pageName">Neet</h2>
				</div>
			</div>

			<div className="row_full">
				<div className="container">
					<div className="row">
						<div className="col col-sm-12 col-md-12 col-lg-12">
							<div className="row_full neetCntr">
								<div className={`neetBox ${scroll ? 'fixCntr' : ''}`}>
									<ul className="row_full neetTab">
										<li onClick={moveElm}>What is NEET?</li>
										<li onClick={moveElm}>NEET Highlights</li>
										<li onClick={moveElm}>NEET important dates 2021</li>
										<li onClick={moveElm}>NEET eligibility criteria 2021</li>

										<li onClick={moveElm}>NEET application form 2021</li>
										<li onClick={moveElm}>Steps and Registration Process</li>
										<li onClick={moveElm}>Preparation of NEET</li>
										<li onClick={moveElm}>NEET Admit Card</li>
									</ul>
								</div>

								<div className="neetBox right">
									<div ref={statsRef} className="row_full neetTitle">
										<h2 className="row_full">NEET 2021</h2>
										<p className="row_full">
											National Testing Agency- gyansutrm.com/article/nta NEET
											2021 The National Eligibility Cum Entrance Test (NEET- UG)
											is sole annual undergraduate national entrance exam for
											MBBS and BDS courses in India. Both AIIMS and JIPMER MBBS
											examinations have also been merged with NTA{' '}
											<a>
												( National Testing Agency- gyansutrm.com/article/nta )
											</a>
										</p>
									</div>

									<div className="row_full neetFacts">
										<ul className="row_full">
											<li>
												<span>
													<img src={`${images_path}neet/icon_1.svg`} />
												</span>
												<h3>NEET 2021 FACTS</h3>
											</li>

											<li>
												<span>
													<img src={`${images_path}neet/icon_2.svg`} />
												</span>
												<h3>
													NEET 2021 IMPORTANT <br />
													DATES AND EVENTS
												</h3>
											</li>

											<li>
												<span>
													<img src={`${images_path}neet/icon_3.svg`} />
												</span>
												<h3>
													NEET 2021 <br />
													ELIGIBILATED CRITERIA
												</h3>
											</li>
										</ul>
									</div>

									<div ref={statsRef} className="row_full neetCriteria">
										<h2 className="row_full">
											NEET 2021 Eligibilities Criteria
										</h2>
										<div className="row_full">
											<div className="qulImage">
												<img src={`${images_path}neet/neet_eligi.svg`} />
											</div>
											<div className="qulImage right">
												<h4 className="row_full">QUALIFICATION</h4>
												<div className="row_full">
													<ul className="row_full">
														<li>
															<i
																className="fa fa-circle"
																aria-hidden="true"
															></i>
															<span>
																Candidate must have cleared class 12 or
																equivalent from recognized institute.
															</span>
														</li>
														<li>
															<i
																className="fa fa-circle"
																aria-hidden="true"
															></i>
															<span>
																Candidate who are appearing for class 12 or
																equivalent with Physics, Chemistry and
																Biology/Biotechnology in summer 2021 can also
																apply for NEET 2021.
															</span>
														</li>
														<li>
															<i
																className="fa fa-circle"
																aria-hidden="true"
															></i>
															<span>
																Candidate who have completed Class 12 or
																equivalent Physics, Chemistry and
																Biology/Biotechnology from an open schools are
																also eligible.
															</span>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>

									<div ref={statsRef} className="row_full minimumElig">
										<div className="eligibilBox">
											<h4 className="row_full">
												<img src={`${images_path}neet/minimum.svg`} /> MINIMUM
												MARKS REQUIRED
											</h4>
											<ul className="row_full">
												<li>
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>General category : 50%</span>
												</li>
												<li>
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>PWD category: 45%</span>
												</li>
												<li>
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>SC/ST/OBC: 40%</span>
												</li>
											</ul>
										</div>

										<div className="eligibilBox">
											<h4 className="row_full">
												<img src={`${images_path}neet/location.svg`} />{' '}
												Nationality
											</h4>
											<ul className="row_full">
												<li>
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Indian National</span>
												</li>
												<li>
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Non-Resident Indians (NRIs)</span>
												</li>
												<li>
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Overseas Citizen of India (OCI)</span>
												</li>
												<li>
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Persons with Indian Origin (PIO)</span>
												</li>
												<li>
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Foreign Nationals</span>
												</li>
											</ul>
										</div>

										<div className="eligibilBox">
											<h4 className="row_full">
												<img src={`${images_path}neet/age-group.svg`} />
												Age as On Dec 31, 2021
											</h4>
											<ul className="row_full">
												<li>
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Minimum age 17 yrs</span>
												</li>
												<li>
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Minimum age 25 yrs</span>
												</li>
												<li>
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>
														Relaxation of 5 years in upper age limit is given to
														SC, ST, OBC-NCL and Pwd.
													</span>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className="row_full neetAppBox"
				style={{ background: `url(${images_path}neet/neetbg.jpg)` }}
			>
				<span className="fixtopAppImg">
					<img src={`${images_path}neet/neetfixtop.png`} />
				</span>
				<div className="row_full">
					<div className="container">
						<div className="row_full">
							<h2 className="row_full">NEET 2021 Application Process</h2>
							<ul className="row_full">
								<li>
									<span className="circleBg">
										<img
											className="mar_l_5"
											src={`${images_path}neet/icon_4.svg`}
										/>
									</span>
									<span className="attachIcon">
										<img
											className="mar_l_5"
											src={`${images_path}neet/attach_icon_1.png`}
										/>
									</span>
									<div className="row_full desctext">
										Online Registration visit the official website
										ntaneet.nic.in in 2nd week of December
									</div>
								</li>
								<li>
									<span className="attachIconLeft">
										<img
											className="mar_l_5"
											src={`${images_path}neet/attach_icon_left.png`}
										/>
									</span>
									<span className="attachIcon">
										<img
											className="mar_l_5"
											src={`${images_path}neet/attach_icon_2.png`}
										/>
									</span>
									<span className="circleBg">
										<img
											className="mar_l_5"
											src={`${images_path}neet/icon_5.svg`}
										/>
									</span>
									<div className="row_full desctext">
										Filing of NEET UG application form requires the personal and
										academic details.
									</div>
								</li>
								<li>
									<span className="attachIconLeft">
										<img
											className="mar_l_5"
											src={`${images_path}neet/attach_icon_left.png`}
										/>
									</span>
									<span className="attachIcon">
										<img
											className="mar_l_5"
											src={`${images_path}neet/attach_icon_3.png`}
										/>
									</span>
									<span className="circleBg">
										<img src={`${images_path}neet/icon_6.svg`} />
									</span>
									<div className="row_full desctext">
										Uploading requires scanned copies of photographs, signature,
										left-hand thumb impression and class 10 certificate.
									</div>
								</li>
								<li>
									<span className="attachIconLeft">
										<img
											className="mar_l_5"
											src={`${images_path}neet/attach_icon_left.png`}
										/>
									</span>
									<span className="attachIcon">
										<img
											className="mar_l_5"
											src={`${images_path}neet/attach_icon_4.png`}
										/>
									</span>
									<span className="circleBg">
										<img src={`${images_path}neet/icon_7.svg`} />
									</span>
									<div className="row_full desctext">
										Pay application fee (General-1500/ , General-EWS/OBC-NCL-
										1400/ , SC/PWD/Transgender- 800/-
									</div>
								</li>
								<li>
									<span className="attachIconLeft">
										<img
											className="mar_l_5"
											src={`${images_path}neet/attach_icon_left.png`}
										/>
									</span>
									<span className="attachIcon last">
										<img
											className="mar_l_5"
											src={`${images_path}neet/attach_icon_5.png`}
										/>
									</span>
									<span className="circleBg">
										<img src={`${images_path}neet/icon_8.svg`} />
									</span>
									<div className="row_full desctext">
										Take a printout of the confermation page and preserve it for
										future reference.
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="row_full neetWindow">
				<div className="row_full">
					<div className="container">
						<div className="row_full pad_a_100">
							<div className="qulImage">
								<h2 className="row_full">NEET 2021 CORRECTION WINDOW</h2>
								<div className="row_full">
									<p>
										The correction window for NEET application form 2021 will be
										activated in the last week of January. Candidates can use
										this opportunity to make the desired changes to their NEET
										2021 application forms. This facility will be provided by
										NTA for candidates who wish to make changes to the details
										filled in the application form of NEET 2021.
									</p>
									<p>
										Using the NTA NEET 2021 correction window, candidates can
										change any detail that they had filled during the
										application process.
									</p>
								</div>
							</div>
							<div className="qulImage right">
								<img src={`${images_path}neet/neetwindow.svg`} />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className="row_full neetlearnBox"
				style={{ background: `url(${images_path}neet/learnbg.jpg)` }}
			>
				<span className="fixtoplearnImg">
					<img src={`${images_path}neet/learntfixtop.png`} />
				</span>
				<div className="row_full">
					<div className="container">
						<div className="row_full">
							<h2 className="row_full">
								START YOUR LEARNING JOURNEY TO ACHIEVE SUCCESS IN NEET WITH
								GYANSUTRM
							</h2>
							<div className="row_full disFlex">
								<img src={`${images_path}neet/neetfullImg.png`} />
							</div>

							<div className="row_full neetBtnBox disFlex">
								<a>Book a Free Class Now</a>
								<a onClick={openModal}>Registered Now</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Neet;
