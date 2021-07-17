import React, { useState, useRef, useEffect } from 'react';
import Signup from '../signup_component/Signup';
import './Jeemains.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';
const Jeemains = () => {
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
					<h2 className="pageName">Mains</h2>
				</div>
			</div>

			<section className="row_full jeeCntr">
				<div className="container">
					<div className="row_full">
						<h2 className="row_full">
							JEE – Mains: Entrance Saga
							<span>
								JEE entrance exams (JEE) conducted by NTA (National testing
								agency) for UG Engineering, Architecture and Applied science
								courses for NITs, IIITs, and GFTIs.
							</span>
						</h2>

						<div className="row_full jeeBox">
							<ul className="row_full">
								<li>
									<span>
										<img src={`${images_path}jee/jee_icon_1.svg`} />
									</span>
									<p>
										JEE Mains for UG entrance for <br />
										31 NITs <br />
										25 IIITs <br />
										28 GFTIS
									</p>
									<div className="botIcon">
										<img src={`${images_path}jee/jeeneet.png`} />
									</div>
								</li>

								<li>
									<span>
										<img src={`${images_path}jee/jee_icon_2.svg`} />
									</span>
									<p>CBT in Multiple Phase</p>
									<div className="botIcon">
										<img src={`${images_path}jee/jeeneet.png`} />
									</div>
								</li>

								<li>
									<span>
										<img src={`${images_path}jee/jee_icon_3.svg`} />
									</span>
									<p>Selection of best score to define AIR</p>
									<div className="botIcon">
										<img src={`${images_path}jee/jeeneet.png`} />
									</div>
								</li>

								<li>
									<span>
										<img src={`${images_path}jee/jee_icon_4.svg`} />
									</span>
									<p>JOSSA CSAB seat allocation</p>
									<div className="botIcon">
										<img src={`${images_path}jee/jeeneet.png`} />
									</div>
								</li>

								<li>
									<span>
										<img src={`${images_path}jee/jee_icon_5.svg`} />
									</span>
									<p>Admission into NITs' IITs of GFTIs</p>
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
							Latest News and Updates on JEE Main Exam
						</h2>
						<ul className="row_full jeeLink">
							<li>
								<a>JEE Main 2021 Information Brochure Released</a>
							</li>
							<li>
								<a>JEE Main 2021 Registration Process, Exam Dates Announced</a>
							</li>
							<li>
								<a>JEE Main To Be Held Four Times in 2021</a>
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
									<span>NTA information: JEE Main 2021</span>
									<span className="phaseicon">
										<img src={`${images_path}jee/phase.svg`} />
									</span>
								</a>
							</div>
							<p>
								JEE Mains 2021 information brochure can be viewed by clicking on
								the link
							</p>
						</div>

						<div className="row_full jeenewBox">
							<ul className="row_full midTable">
								<li className="titleList">
									<span>Phase</span>
									<span>Start Date</span>
									<span>Last Date</span>
								</li>
								<li>
									<span>Registrations:</span>
									<span>Dec, 16, 2020</span>
									<span>Jan, 16, 2020</span>
								</li>
								<li>
									<span>Admit Card</span>
									<span>----</span>
									<span>Last Date</span>
								</li>
								<li>
									<span>Phase 1 exam window</span>
									<span>Feb, 23, 2021</span>
									<span>Feb, 26, 2021</span>
								</li>
								<li>
									<span>Phase 2 exam window</span>
									<span>March, 15, 2021</span>
									<span>March, 18, 2021</span>
								</li>
								<li>
									<span>Phase 3 exam window</span>
									<span>April, 27,2021</span>
									<span>April, 30,2021</span>
								</li>
								<li>
									<span>Phase 4 exam window</span>
									<span>May, 24, 2021</span>
									<span>May, 28, 2021</span>
								</li>
							</ul>
						</div>
					</div>

					<div className="row_full textPattern">
						<h2 className="row_full">Test Pattern: JEE Mains 2021</h2>
						<ul className="row_full jeeLink textOnly">
							<li>1. Conduction in 4 Phases</li>
							<li>
								2. No of questions have to attempt any 75(25(20 single choice +
								5 Integer value based) per subject) out of 90(60 questions
								single choice + 30 questions integer based)
							</li>
							<li>
								3. Language of question paper will be in English, Hindi,
								Assamese, Bengali, Gujarati, Kannada, Marathi, Malayalam, Odia,
								Punjabi, Tamil, Telugu and Urdu
							</li>
						</ul>

						<div className="row_full">
							<div className="row_full jeeBtn" style={{ position: 'relative' }}>
								<a className="jmainBtn">
									<span>JEE Mains 2021</span>
								</a>
								<div className="borHoriZ small"></div>
							</div>

							<div className="row_full dispFlex">
								<ul className="jeeAgeBox">
									<li>
										<span>Age limit:</span> No age limit
									</li>
									<li>
										<span>Qualifying Exam:</span> Two-year Pre-University exam,
										JSW of NDA, SSCE, HSCVE, GCE (London/ Cambridge/ Sri Lanka)
										at the Advanced (A) level, HSCE (Cambridge University or IB,
										Geneva's
									</li>
									<li>
										<span>Academic score criteria:</span> 75% Marks or top 20
										percentile and 65% for SC/ST category and 50% for B.Arch/B.
										category for admissions in NITs, IIITs, and GFTIs.
									</li>
									<li>
										<span>Qualifying Marks:</span>There is no minimum Pass
										percentage for appearing in JEE Main exam. However, the
										applicant must pass their class 12 board of other equivalent
										examination
									</li>
								</ul>
							</div>

							<div className="row_full">
								<div
									className="tableBox first"
									style={{ position: 'relative' }}
								>
									<div className="row_full jeeBtn inline setWdth">
										<a className="jmainBtn">
											<span>Paper-1 B.Tech/B.E</span>
										</a>
										<div className="borHoriZft"></div>
									</div>
									<div className="borHorivft"></div>
									<ul
										className="row_full customUlElm jeeElmsm"
										style={{ marginRight: '20px', position: 'relative' }}
									>
										<div className="borHoriulFirst"></div>
										<li>
											Physics Mathematics Language Subject Any of following:
											Biotechnology, Biology, Chemistry, Tech Vocational
											Subjects
										</li>
									</ul>

									<ul className="row_full customUlElm jeeElmsm">
										<li>Question paper pattern & Marking scheme:</li>
										<li>
											1. Single correct options 20 Questions in each subject (+4
											for correct answer, -1 for incorrect answer,0 for
											unattempted)
										</li>
										<li>
											2. Integer based: 5 out of 10 in each subject (+4 for
											correct & 0 for incorrect answer and unattempted)
										</li>
									</ul>
								</div>

								<div className="tableBox last" style={{ position: 'relative' }}>
									<div className="row_full jeeBtn inline setWdth right">
										<a className="jmainBtn">
											<span>Paper-2 B.Arch/B.Plann</span>
										</a>
										<div className="borHoriZft last"></div>
									</div>
									<div className="borHorivft"></div>
									<ul
										className="row_full customUlElm jeeElmsm small"
										style={{ marginRight: '20px', position: 'relative' }}
									>
										<div
											className="borHoriulFirst"
											style={{ left: '66%' }}
										></div>
										<li>Mathematics Drawing and Aptitude</li>
									</ul>

									<ul
										className="row_full customUlElm jeeElmsm"
										style={{ marginRight: '20px' }}
									>
										<li>B.Arch Question paper pattern & Marking scheme:</li>
										<li>
											1. Mathematics & Aptitude (75 MCQs), (+4 for correct
											answer, -1 for incorrect answer, 0 for unattempted) and
											Drawing-2
										</li>
										<li>
											2. Integer Based: 5 out of 10 in each subject (+4 for
											correct & 0 incorrect answer and unattempted)
										</li>
									</ul>

									<ul
										className="row_full customUlElm jeeElmsm"
										style={{ position: 'relative' }}
									>
										<div
											className="borHoriulFirst"
											style={{ left: '15%' }}
										></div>
										<li>B.planning Question paper pattern & Marking scheme:</li>
										<li>
											1. Single correct option: 95 questions in mathematics,
											aptitude and planning (+4 for correct answer, -1 for
											incorrect answer, 0 for unattempted)
										</li>
										<li>
											2. Integer based: 5 out of 10 in each subject (+4 for
											correct & 0 for incorrect answer and unattempted
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
										categories for admissions through JEE Main are as follows:
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
										<span>JEE Main Syllabus</span>
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
											<span>Ray Optics</span>
											<span>Gaseous and Liquid State</span>
											<span>Vectors</span>
										</li>
										<li>
											<span>Semiconductors</span>
											<span>Chemical Kinetics</span>
											<span> 3D Geometry</span>
										</li>
										<li>
											<span>Gravitation</span>
											<span>Chemical Bonding</span>
											<span>Circles</span>
										</li>
										<li>
											<span>Alternating Current</span>
											<span>Coordination Compound</span>
											<span>Integral</span>
										</li>
										<li>
											<span>Electromagnetic Induction</span>
											<span>Aromatic Compounds</span>
											<span>Functions</span>
										</li>
										<li>
											<span>Kinematics</span>
											<span>P Block Elements</span>
											<span>Conic Sections</span>
										</li>
										<li>
											<span>Current Electricity</span>
											<span>Isomerism</span>
											<span>Quadratic Equation</span>
										</li>
										<li>
											<span>Magnetic Effects of Current</span>
											<span>Carboxylic Acids</span>
											<span>Binomial Theorem</span>
										</li>
										<li>
											<span>Bohr's Atomic Model</span>
											<span>Nuclear Chemistry</span>
											<span>Differentiability</span>
										</li>
										<li>
											<span>Thermodynamics</span>
											<span>Atomic Structure</span>
											<span>Sequence and Series</span>
										</li>
										<li>
											<span>EM Waves</span>
											<span>Electrochemistry</span>
											<span>Determinant and Matrices</span>
										</li>
										<li>
											<span>Magnetism</span>
											<span>Surface Chemistry</span>
											<span>Straight Lines</span>
										</li>
										<li>
											<span>Wave Optics</span>
											<span>D Block Elements</span>
											<span>Probability</span>
										</li>
										<li>
											<span>Oscillations</span>
											<span>Alkyl Halides</span>
											<span>Limits and Continuity</span>
										</li>
										<li>
											<span>Rotation</span>
											<span>Thermodynamics</span>
											<span>Application of Derivatives</span>
										</li>
										<li>
											<span>Electrostatics</span>
											<span>General Organic Chemistry</span>
											<span>Complex Numbers</span>
										</li>
										<li>
											<span>Properties of Matter</span>
											<span>Aldehydes and Ketones</span>
											<span>Area under the Curve</span>
										</li>
										<li>
											<span>Waves and Sound</span>
											<span>Biomolecules</span>
											<span>Permutation and combinations</span>
										</li>
										<li>
											<span>Unit and Dimension with measuring instrument</span>
											<span>Equilibrium</span>
											<span>Statistics</span>
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
								START YOUR LEARNING JOURNEY TO ACHIEVE SUCCESS IN JEE WITH
								GYANSUTRM
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

export default Jeemains;
