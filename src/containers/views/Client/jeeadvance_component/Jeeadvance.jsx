import React, { useState, useRef, useEffect } from 'react';
import Signup from '../signup_component/Signup';
import './Jeeadvance.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';
const Jeeadvance = () => {
	const [modalElm, setModalElm] = useState(false);
	const openModal = () => {
		setModalElm(!modalElm);
	};
	return (
		<section className="row_full">
			{modalElm ? <Signup toggleModal={openModal} /> : null}
			<div
				className="row_full pageBanner"
				style={{ background: `url(${images_path}aboutus.jpg)` }}
			>
				<span className="bgopct"></span>
				<div className="overLay">
					<h2 className="pageName">JEE ADVANCE</h2>
				</div>
			</div>

			<section className="row_full jeeCntr">
				<div className="container">
					<div className="row_full">
						<h2 className="row_full">
							JEE – Advanced: Entrance Saga
							<span>
								Joint entrance exams (JEE) conducted by NTA (National testing
								agency) for UG Engineering, Architecture and Applied science
								courses for IIITs, and GFTIs.
							</span>
						</h2>

						<div className="row_full jeeBox">
							<ul className="row_full">
								<li>
									<span>
										<img src={`${images_path}jee/jee_icon_1.svg`} />
									</span>
									<p style={{ paddingTop: '10px' }}>
										JEE Advanced for UG Entrance for
										<br />
										25 IIITs <br />9 Premier Institutes
									</p>
									<div className="botIcon">
										<img src={`${images_path}jee/jeeneet.png`} />
									</div>
								</li>

								<li>
									<span>
										<img src={`${images_path}jee/jee_icon_2.svg`} />
									</span>
									<p style={{ paddingTop: '50px' }}>CBT based exam</p>
									<div className="botIcon">
										<img src={`${images_path}jee/jeeneet.png`} />
									</div>
								</li>

								<li>
									<span>
										<img src={`${images_path}jee/jee_icon_3.svg`} />
									</span>
									<p style={{ paddingTop: '50px' }}>Score to Define AlR</p>
									<div className="botIcon">
										<img src={`${images_path}jee/jeeneet.png`} />
									</div>
								</li>

								<li>
									<span>
										<img src={`${images_path}jee/jee_icon_4.svg`} />
									</span>
									<p style={{ paddingTop: '30px' }}>
										JOSSA CSAB seat allocation
									</p>
									<div className="botIcon">
										<img src={`${images_path}jee/jeeneet.png`} />
									</div>
								</li>

								<li>
									<span>
										<img src={`${images_path}jee/jee_icon_5.svg`} />
									</span>
									<p style={{ paddingTop: '20px' }}>
										Admission into IIITs or 9 Premier Institutes
									</p>
									<div className="botIcon last">
										<img src={`${images_path}jee/jeeneet_last.png`} />
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section className="row_full jeenewsCntr">
				<div className="container">
					<div className="row_full">
						<h2 className="row_full">
							Latest News and Updates on JEE Advanced Exam
						</h2>
						<ul className="row_full jeeLink">
							<li>
								<a>JEE Advanced 2021 Information Brochure Released</a>
							</li>
							<li>
								<a>
									JEE Advanced 2021 Registration Process, Exam Dates Announced
								</a>
							</li>
						</ul>

						<div className="row_full jeeBtn">
							<div
								style={{
									width: '40%',
									margin: '0px auto',
									position: 'relative',
								}}
							>
								<a style={{ width: '100%' }}>
									<span>NTA information: JEE Advanced 2021</span>
								</a>
							</div>
							<p>
								JEE Advanced 2021 information brochure can be viewed by clicking
								on the link:
							</p>
						</div>

						<div className="row_full jeenewBox">
							<ul className="row_full midTable twice">
								<li className="titleList">
									<span>Registrations:</span>
									<span>Post JEE Main results</span>
								</li>
								<li>
									<span>Admit card </span>
									<span>-- </span>
								</li>
								<li>
									<span>Exam Date</span>
									<span>July 3rd 2021</span>
								</li>
								<li>
									<span>--</span>
									<span>
										Session I: 9 AM to 12 PM; Session II: <br />
										2:30 PM to 5:30 PM
										<br />
									</span>
								</li>
							</ul>
						</div>
					</div>

					<div className="row_full textPattern">
						<h2 className="row_full">Test Pattern: JEE Advanced 2021</h2>
						<ul className="row_full jeeLink textOnly">
							<li>
								1. No of questions have to attempt any 75(25(20 single choice +
								5 Integer value based) per subject) out of 90(60 questions
								single choice + 30 questions integer based)
							</li>
							<li>
								2. Language of question paper will be in English, Hindi,
								Assamese, Bengali, Gujarati, Kannada, Marathi, Malayalam, Odia,
								Punjabi, Tamil, Telugu and Urdu
							</li>
						</ul>

						<div className="row_full conductBox">
							<div className="conductItem">
								<div className="row_full jeeBtn">
									<a className="jmainBtn">
										<span>JEE Advanced is conducted by:</span>
									</a>
								</div>
								<p className="row_full jcondct">
									The seven IITs that are in charge of conducting JEE Advanced
								</p>

								<div className="row_full jeenewBox">
									<ul className="midTable">
										<li className="titleList">
											<span>IIT</span>
											<span>Email</span>
											<span>Phone Number</span>
										</li>
										<li>
											<span>IIT Bombay </span>
											<span>jeeadv@iitb.ac.in </span>
											<span>022-25720305 </span>
										</li>
										<li>
											<span>IIT Delhi </span>
											<span>jee@admin.iitd.ac.in </span>
											<span>011-26581067 </span>
										</li>
										<li>
											<span>IIT Kanpur </span>
											<span>jee@iitk.ac.in </span>
											<span>0512-2597335 </span>
										</li>
										<li>
											<span>IIT Madras </span>
											<span>jee@iitm.ac.in </span>
											<span>044-22578224 </span>
										</li>
										<li>
											<span>IIT Kharagpur </span>
											<span>jee@hijli.iitkgp.ernet.in </span>{' '}
											<span>03222-282101</span>
										</li>
										<li>
											<span>IIT Roorkee</span>
											<span>jeech@iitr.ernet.in </span>
											<span>01332-284272 </span>
										</li>
										<li>
											<span>IIT Guwahati</span>
											<span>jee@iitg.ernet.in</span>
											<span>0361-2582180</span>
										</li>
									</ul>
								</div>
							</div>

							<div className="conductItem right">
								<div className="row_full jeeBtn">
									<a className="jmainBtn">
										<span>Previous Year Statistics for JEE Advanced</span>
									</a>
								</div>

								<div className="row_full jeenewBox">
									<ul className="fourElm midTable">
										<li className="titleList">
											<span>Examination Year</span>
											<span>Eligible Candidates</span>
											<span>Registered Candidates</span>
											<span>Appeared Candidates</span>
										</li>
										<li>
											<span>2020</span>
											<span>2.50 Lakh </span>
											<span>1.60 Lakh </span>
											<span>1.51 Lakh </span>
										</li>
										<li>
											<span>2019 </span>
											<span>2.45 Lakh </span>
											<span>1.75 Lakh </span>
											<span>1.73 Lakh </span>
										</li>
										<li>
											<span>2018 </span>
											<span>2.24 Lakh </span>
											<span>1.60 Lakh </span>
											<span>1.57 Lakh </span>
										</li>
										<li>
											<span>2017 </span>
											<span>2.20 Lakh </span>
											<span>1.72 Lakh </span>
											<span>1.59 Lakh</span>
										</li>
										<li>
											<span>2016</span>
											<span>2 Lakh </span>
											<span>1.55 Lakh</span>
											<span>1.47 Lakh</span>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="row_full" style={{ marginTop: '50px' }}>
							<h2 className="row_full">
								JEE Advanced 2021 will be Conducting by IIT Kharagpur
							</h2>
							<div className="row_full jeeBtn" style={{ position: 'relative' }}>
								<a className="jmainBtn">
									<span>JEE Advanced 2021</span>
								</a>
								<div className="borHoriZ small"></div>
							</div>

							<div className="row_full dispFlex">
								<ul className="jeeAgeBox">
									<li>
										<span>Age limit:</span> The applicant should have born on or
										after 1st of October 1990
									</li>
									<li>
										<span>Qualifying Exam:</span>Candidates upto rank 2.50 lakh
										in JEE Mains
									</li>
									<li>
										<span>Academic score criteria:</span>No Criteria
									</li>
									<li>
										<span>Qualifying Marks:</span>There is no minimum pass
										percentage for appearing in JEE Main exam. However, the
										applicants must pass their class 12 board or other
										equivalent examination.
									</li>
								</ul>
							</div>

							<div className="row_full midsetBox">
								<div className="tableBox">
									<div className="row_full jeeBtn inline">
										<div className="borHoriZ"></div>
										<a className="jmainBtn">
											<span>Paper 1: Mathematics, Physics and Chemistry</span>
										</a>
									</div>
									<ul className="row_full customUlElm">
										<li>Question paper pattern & Marking scheme:</li>
										<li>
											<span>Section 1</span> – 6 multiple correct option type
											questions (+4 for all correct, +3, +2, +1 for partially
											correct answers, provided any incorrect option is not
											marked, -2 for Incorrect, 0 for unattempt.)
										</li>
										<li>
											<span>Section 2</span> – 8 Numerical Value based carrying
											(+3 for Correct, 0 for incorrect or unattempted)
										</li>
										<li>
											<span>Section 3</span> – 4 Single Correct multiple choice
											questions (+3 for correct Answer, -1 for incorrect, 0 for
											unattempted)
										</li>
									</ul>
								</div>

								<div className="tableBox">
									<div className="row_full jeeBtn inline">
										<div className="borHoriZ"></div>
										<a className="jmainBtn">
											<span>Paper 2: Mathematics, Physics and Chemistry</span>
										</a>
									</div>
									<ul className="row_full customUlElm">
										<li>Question paper pattern & Marking scheme:</li>
										<li>
											<span>Section 1</span> – 6 multiple correct option type
											questions (+4 for all correct, +3, +2, +1 for partially
											correct answers, provided any incorrect option is not
											marked, -2 for Incorrect, 0 for unattempt.)
										</li>
										<li>
											<span>Section 2</span> – 8 Numerical Value type questions
											(+3 for Correct, 0 for incorrect or unattempted)
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div
				className="row_full jeeAppBox"
				style={{ background: `url(${images_path}neet/neetbg.jpg)` }}
			>
				<span className="fixtopAppImg">
					<img src={`${images_path}neet/neetfixtop.png`} />
				</span>
				<div className="row_full">
					<div className="container">
						<div className="row_full">
							<div className="leftJeeBox">
								<h2 className="row_full">
									Credentials / Documents required for JEE registration:
								</h2>
								<ul className="row_full">
									<li>
										<i className="fa fa-circle" aria-hidden="true"></i>
										<span>
											Details of qualification certification in scanned form.
										</span>
									</li>
									<li>
										<i className="fa fa-circle" aria-hidden="true"></i>
										<span>
											Scanned copy of passport photograph. It has to be clear,
											in JPG/JPEG format and the image size has to be between 10
											kb–200 kb.
										</span>
									</li>
									<li>
										<i className="fa fa-circle" aria-hidden="true"></i>
										<span>
											Digital copy of the candidate’s signature in JPG/JPEG
											format with the image size between 4 kb–30 kb.
										</span>
									</li>
									<li>
										<i className="fa fa-circle" aria-hidden="true"></i>
										<span>
											Category certificate (SC/ST/OBC/EWS etc.) and the file
											size: 50kb to 300KB).
										</span>
									</li>
									<li>
										<i className="fa fa-circle" aria-hidden="true"></i>
										<span>
											PwD certificate (file size: 50kb to 300kb) in jpg/jpeg
											format.
										</span>
									</li>
									<li>
										<i className="fa fa-circle" aria-hidden="true"></i>
										<span>e-mail Id and mobile number.</span>
									</li>
								</ul>
							</div>

							<div className="leftJeeBox right">
								<img src={`${images_path}jee/jeeDoc.svg`} />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="row_full jeeWindow">
				<div className="row_full">
					<div className="container">
						<div className="row_full">
							<div className="jeereservBox">
								<div className="row_full jeeBtn">
									<a className="jeeBtnWidth">
										<span>Reservation Criteria</span>
									</a>
									<p>
										All India ranks will be provided based on the categorical
										reservation policy. The percentage reservations of
										categories for admissions through JEE Advanced are as
										follows:
									</p>
								</div>

								<div className="row_full jeenewBox">
									<ul className="row_full midTable half">
										<li className="titleList">
											<span>Category</span>
											<span>Reservation%</span>
										</li>
										<li>
											<span>OBC</span>
											<span>27</span>
										</li>
										<li>
											<span>SC</span>
											<span>15</span>
										</li>
										<li>
											<span>ST</span>
											<span>7.5</span>
										</li>
										<li>
											<span>PwD</span>
											<span>5</span>
										</li>
										<li>
											<span>Gen EWS</span>
											<span>10</span>
										</li>
										<li>
											<span>Women Candidates</span>
											<span>5</span>
										</li>
									</ul>
								</div>
							</div>

							<div className="jeereservBox right">
								<div className="row_full jeeBtn">
									<a className="jeeBtnWidth">
										<span>JEE Advanced Syllabus</span>
									</a>
								</div>

								<div className="row_full jeenewBox">
									<ul className="row_full midTable">
										<li className="titleList">
											<span>Physics</span>
											<span>Chemistry</span>
											<span>Maths</span>
										</li>

										<li>
											<span>Dimensional Analysis</span>
											<span>Energetics</span>
											<span>Quadratic Equations </span>
										</li>
										<li>
											<span>Laws of motion</span>
											<span>Electrochemistry</span>
											<span> Binomial Theorem </span>
										</li>
										<li>
											<span>Electric current</span>
											<span>Chemical Equilibrium</span>
											<span>Matrices </span>
										</li>
										<li>
											<span>Electromagnetic Induction</span>
											<span>Solid State </span>
											<span>Trigonometry </span>
										</li>
										<li>
											<span>Inertia</span>
											<span>Chemical Bonding</span>
											<span>Determinants </span>
										</li>
										<li>
											<span>Waves</span>
											<span>Chemical Kinetics </span>
											<span>Combinations </span>
										</li>
										<li>
											<span>Systems of particles</span>
											<span>Solutions </span>
											<span>Integration</span>
										</li>
										<li>
											<span>Electric Fields</span>
											<span>Surface Chemistry </span>
											<span>Limits</span>
										</li>
										<li>
											<span>Reflection</span>
											<span>Nuclear Chemistry </span>
											<span>Coordinate Geometry </span>
										</li>
										<li>
											<span>Nuclei</span>
											<span>Atomic Structure </span>
											<span>Differential Equations </span>
										</li>
										<li>
											<span>Gravitation </span>
											<span>Gaseous State</span>
											<span>Logarithms </span>
										</li>
										<li>
											<span>Capacitance</span>
											<span>Liquid State </span>
											<span>Complex Numbers </span>
										</li>
										<li>
											<span>Magnetic Fields</span>
											<span>Ores & Minerals </span>
											<span>Sequence and Series </span>
										</li>
										<li>
											<span>Kinematics</span>
											<span>Properties of Non-Metals </span>
											<span>Probability</span>
										</li>
										<li>
											<span>Fluid Pressure </span>
											<span>Preparation of Compounds</span>
											<span>Permutations </span>
										</li>
										<li>
											<span>Thermal Physics</span>
											<span>Properties of Compounds </span>
											<span>Differentiation </span>
										</li>
										<li>
											<span>Harmonic motions</span>
											<span>Qualitative Analysis </span>
											<span>Continuity </span>
										</li>
										<li>
											<span>Momentum </span>
											<span>Extractive Metallurgy </span>
											<span>Functions </span>
										</li>
										<li>
											<span>Atoms </span>
											<span>Preparation of Non-metals</span>
											<span>Inverse Trigonometry </span>
										</li>
										<li>
											<span>Refraction</span>
											<span>Transition Elements </span>
											<span>Vectors</span>
										</li>
										<li>
											<span>--</span>
											<span>Amino acids </span>
											<span> --</span>
										</li>
										<li>
											<span>--</span>
											<span>Practical Organic Chemistry </span>
											<span>--</span>
										</li>
										<li>
											<span>--</span>
											<span>Phenols </span>
											<span>--</span>
										</li>
										<li>
											<span>--</span>
											<span>Carbohydrate </span>
											<span>--</span>
										</li>
										<li>
											<span>--</span>
											<span>Ethers </span>
											<span>--</span>
										</li>
										<li>
											<span>--</span>
											<span>Reactions of Benzene </span>
											<span>--</span>
										</li>
										<li>
											<span>--</span>
											<span>Peptides</span>
											<span>--</span>
										</li>
										<li>
											<span>--</span>
											<span> Aldehydes </span>
											<span>--</span>
										</li>
										<li>
											<span>--</span>
											<span>Alkynes </span>
											<span>--</span>
										</li>
										<li>
											<span>--</span>
											<span>Alkenes </span>
											<span>--</span>
										</li>
										<li>
											<span>--</span>
											<span>Polymers </span>
											<span>--</span>
										</li>
										<li>
											<span>--</span>
											<span>Alcohols </span>
											<span>--</span>
										</li>
										<li>
											<span>--</span>
											<span>Carboxylic acids </span>
											<span>--</span>
										</li>
										<li>
											<span>--</span>
											<span>Alkyl halides </span>
											<span>--</span>
										</li>
										<li>
											<span>--</span>
											<span>Ketones </span>
											<span>--</span>
										</li>
										<li>
											<span>--</span>
											<span>Haloarenes</span>
											<span>--</span>
										</li>
									</ul>
								</div>
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
								START YOUR LEARNING JOURNEY TO ACHIEVE SUCCESS IN JEE ADVANCE
								WITH GYANSUTRM
							</h2>
							<div className="row_full disFlex">
								<img src={`${images_path}neet/jeefullimg.png`} />
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

export default Jeeadvance;
