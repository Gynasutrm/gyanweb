import React from 'react';
import './Ieo.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';
const Ieo = () => {
	return (
		<section className="row_full">
			<div
				className="row_full pageBanner"
				style={{ background: `url(${images_path}aboutus.jpg)` }}
			>
				<span className="bgopct"></span>
				<div className="overLay">
					<h2 className="pageName">IEO</h2>
				</div>
			</div>

			<section className="row_full ieoCntr">
				<div className="container">
					<div className="row_full text-center">
						<h2 className="row_full" style={{ paddingBottom: '0px' }}>
							IEO – Overview
						</h2>
						<p className="row_full">
							IEO is focused on the usage of English language and it tests the
							students on the same.
						</p>
					</div>
					<div className="row_full ieoBox">
						<div className="boxshadowMid">
							<ul className="row_full midTable">
								<li className="titleList">
									<span>
										<strong style={{ fontWeight: '600' }}>Sr. No.</strong>
									</span>{' '}
									<span>
										<strong style={{ fontWeight: '600' }}>Particulars</strong>
									</span>{' '}
									<span>
										<strong style={{ fontWeight: '600' }}>Details</strong>
									</span>
								</li>
								<li className="mnHeight">
									<span>1</span>
									<span>Objective</span>
									<span>
										To help students test their English knowledge by competing
										with other students
									</span>
								</li>
								<li>
									<span>2</span>
									<span>Provider</span>
									<span>Science Olympiad Foundation</span>
								</li>
								<li>
									<span>3</span>
									<span>Eligibility</span>
									<span>Class 1 to 12 students</span>
								</li>
								<li>
									<span>4</span>
									<span>Application process</span>
									<span>Through respective schools</span>
								</li>
								<li>
									<span>5</span>
									<span>Exam dates</span>
									<span>
										Level 1 exam: October – November <br />
										Level 2 exam: February – March
									</span>
								</li>
								<li>
									<span>6</span>
									<span>Awards</span>
									<span>
										Up to INR 50,000 + Gold medal + Performance certificate
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section className="row_full ieoCntr">
				<div className="container">
					<div className="row_full text-center">
						<h2 className="row_full" style={{ paddingBottom: '0px' }}>
							IEO – Important Dates
						</h2>
						<p className="row_full">
							The IEO is organised around the same time each year. Students
							interested in appearing for IEO
							<br /> must be aware of the key dates so as to avoid missing the
							deadlines. The table below throws light on various key dates
							relevant to the IEO.
						</p>
					</div>
					<div className="row_full ieoBox">
						<div className="boxshadowMid">
							<p className="row_full text-center">
								<strong>Key dates for IEO</strong>
							</p>
							<ul className="row_full midTable">
								<li className="titleList">
									<span>
										<strong style={{ fontWeight: '600' }}>Sr. No.</strong>
									</span>{' '}
									<span>
										<strong style={{ fontWeight: '600' }}>Event</strong>
									</span>{' '}
									<span>
										<strong style={{ fontWeight: '600' }}>Key dates*</strong>
									</span>
								</li>
								<li className="mnHeight">
									<span>1</span>
									<span>Application deadline</span>
									<span>At least 30 days before the exam date</span>
								</li>
								<li>
									<span>2</span>
									<span>Level 1 exam </span>
									<span>October – November</span>
								</li>
								<li>
									<span>3</span>
									<span>Level 1 result</span>
									<span>December – January</span>
								</li>
								<li>
									<span>4</span>
									<span>Level 2 exam </span>
									<span>TFebruary – March</span>
								</li>
								<li>
									<span>5</span>
									<span>Level 2 result</span>
									<span>March – April</span>
								</li>
							</ul>
							<p
								className="row_full text-center"
								style={{ fontSize: '11px', paddingTop: '10px' }}
							>
								*The dates mentioned above are tentative and subject to change
								as per the discretion of the organiser (SOF).
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="row_full ieoCntr bgbox">
				<div className="container">
					<div className="row_full">
						<h3 className="row_full" style={{ paddingBottom: '0px' }}>
							IEO – Eligibility
						</h3>
						<p className="row_full">
							Students of Class 1 to 12 who are interested in competing with
							other students in order to assess their knowledge of English can
							participate in IEO. The Olympiad is a two-level competition where
							only the top performing students in Level 1 proceed to participate
							in Level 2 exam.
						</p>
					</div>

					<div className="row_full pad_t_b_15">
						<h3 className="row_full" style={{ paddingBottom: '0px' }}>
							Eligibility for Level 1 exam
						</h3>
						<p className="row_full">
							For Level 1 exam, there is no specific criterion as students of
							Class 1 to 12 can participate. Also, there is no requirement of
							minimum marks which in turn makes Level 1 exam open to a large
							number of students. All the students from the country or abroad
							enrolled in Class 1 to 12 are eligible.
						</p>
					</div>

					<div className="row_full">
						<h3 className="row_full" style={{ paddingBottom: '0px' }}>
							Eligibility for Level 2 exam
						</h3>
						<p className="row_full" style={{ margin: '0px' }}>
							Students performing well in the Level 1 exam are then shortlisted
							to appear for Level 2. The following are the eligible students for
							Level 2 exam:
						</p>
						<ul className="row_full">
							<li>
								<i className="fa fa-circle" aria-hidden="true"></i>
								<span>
									Top 5% of the students from each class who appeared for the
									Level 1 exam
								</span>
							</li>
							<li>
								<i className="fa fa-circle" aria-hidden="true"></i>
								<span> Top 25 zone wise and class wise rank holders</span>
							</li>
							<li>
								<i className="fa fa-circle" aria-hidden="true"></i>
								<span>
									{' '}
									Class toppers from each participating school where at least 10
									students from a class appear in the exam and scores 50%
									qualifying marks
								</span>
							</li>
							<li>
								<i className="fa fa-circle" aria-hidden="true"></i>
								<span>
									Top rank holder in case of section wise registration
								</span>
							</li>
						</ul>
						<p className="row_full" style={{ margin: '0px' }}>
							However, it must be noted that students from Class 1 and 2 will be
							ranked based on their performance in Level 1. Hence, they do not
							need to appear for Level 2 exam.
						</p>
					</div>
				</div>
			</section>

			<section
				className="row_full ieoCntr notbgElm"
				style={{ paddingBottom: '50px' }}
			>
				<div className="container">
					<div className="row_full">
						<h3 className="row_full" style={{ paddingBottom: '0px' }}>
							IEO – Exam structure
						</h3>
						<p className="row_full">
							IEO is conducted in two levels with top performing students in
							Level 1 then qualifying for Level 2. Here is how the exam is
							structured.
						</p>
					</div>

					<div className="row_full">
						<span className="levelTag">
							Level-1 <em></em>
						</span>
						<p className="row_full">
							<strong>
								The Level 1 exam has a relaxed eligibility criterion to promote
								a higher participation of students. Since there are no minimum
								marks, all the school students enrolled in class 1 to 12 can
								enter the Olympiad. The major highlights of Level 1 exam are:
							</strong>
						</p>
						<ul className="row_full">
							<li>
								<i className="fa fa-circle" aria-hidden="true"></i>
								<span>
									Level 1 is organised in the respective schools of the
									students. The exam is conducted during the school hours.
								</span>
							</li>
							<li>
								<i className="fa fa-circle" aria-hidden="true"></i>
								<span> The duration of the exam is 60 minutes.</span>
							</li>
							<li>
								<i className="fa fa-circle" aria-hidden="true"></i>
								<span>
									{' '}
									The exam is in the form of multiple-choice questions
									(objective-type). There are 35 questions for students of class
									1 to 4 and 50 questions for class 5 to 12 students.
								</span>
							</li>
							<li>
								<i className="fa fa-circle" aria-hidden="true"></i>
								<span> There are 4 sections in the question paper:</span>
								<ul className="innerulElm">
									<li>
										<i className="fa fa-circle-o" aria-hidden="true"></i>
										<span>Word and Structure knowledge (Section 1)</span>
									</li>
									<li>
										<i className="fa fa-circle-o" aria-hidden="true"></i>
										<span>Reading (Section 2)</span>
									</li>
									<li>
										<i className="fa fa-circle-o" aria-hidden="true"></i>
										<span>Spoken & Written Expression (Section 3)</span>
									</li>
									<li>
										<i className="fa fa-circle-o" aria-hidden="true"></i>
										<span>Achievers Section (Section 4)</span>
									</li>
								</ul>
							</li>
							<li>
								<i className="fa fa-circle" aria-hidden="true"></i>
								<span>
									There are separate question papers for each class and medium
									of the exam is English.
								</span>
							</li>
							<li>
								<i className="fa fa-circle" aria-hidden="true"></i>
								<span>
									{' '}
									The exam papers are designed from CBSE, ICSE/ISC and State
									Board syllabi.
								</span>
							</li>
						</ul>
					</div>

					<div className="row_full pad_t_15">
						<span className="levelTag">
							Level-2 <em></em>
						</span>
						<p className="row_full">
							Students with excellent performance in Level 1 exam qualify for
							Level 2 exam. Those studying in class 3 to 12 appear for the Level
							2 exam. Students of class 1 and 2 are judged based on their
							performance in Level 1 exam only and thus they need not appear for
							Level 2 exam. The following students are eligible to appear for
							Level 2 exam:
						</p>
						<ul className="row_full">
							<li>
								<i className="fa fa-circle" aria-hidden="true"></i>
								<span>Class wise top 5% candidates in Level 1 exam</span>
							</li>
							<li>
								<i className="fa fa-circle" aria-hidden="true"></i>
								<span>
									Class wise and zone wise top 25 rank holders in Level 1
								</span>
							</li>
							<li>
								<i className="fa fa-circle" aria-hidden="true"></i>
								<span>
									{' '}
									Class topper is eligible where at least 10 students appear in
									the exam and score 50% qualifying marks
								</span>
							</li>
						</ul>
					</div>

					<div className="row_full pad_t_15">
						<h3 className="row_full" style={{ paddingBottom: '0px' }}>
							IEO – Awards
						</h3>
						<p className="row_full">
							Based on their ranks, participating students will receive various
							awards. The number of awards, criteria for awards and specific
							award details are mentioned in the tables below.
						</p>
					</div>

					<div className="row_full pad_t_15">
						<h4 className="row_full" style={{ paddingBottom: '0px' }}>
							Awards for students
						</h4>
						<p className="row_full">
							Based on their ranks, participating students will receive various
							awards. The number of awards, criteria for awards and specific
							award details are mentioned in the tables below.
						</p>
					</div>

					<div className="row_full pad_t_15">
						<div className="awardBox">
							<div className="olympiadItem">
								<div className="row_full pad_b_30">
									<p className="row_full lineHeight28">
										<span className="levelTag">
											International Level<em></em>
										</span>{' '}
										Awards for Level 2 and for Classes 1 and 2
									</p>
									<div className="row_full ieoBox pad_t_15">
										<ul className="row_full midTable">
											<li className="row_full titleList">
												<span>
													<strong style={{ fontWeight: '600' }}>Rank</strong>
												</span>{' '}
												<span>
													<strong style={{ fontWeight: '600' }}>Awards</strong>
												</span>{' '}
												<span>
													<strong style={{ fontWeight: '600' }}>
														Number of awards
													</strong>
												</span>
											</li>
											<li className="row_full">
												<span>
													1<sup>st</sup>
												</span>
												<span>
													INR 50,000 Each + Gold Medal + Certificate of
													Outstanding Performance
												</span>
												<span>12</span>
											</li>
											<li className="row_full">
												<span>
													2<sup>nd</sup>
												</span>
												<span>
													INR 25,000 Each + Silver Medal + Certificate of
													Outstanding Performance
												</span>
												<span>12</span>
											</li>
											<li className="row_full">
												<span>
													3<sup>rd</sup>
												</span>
												<span>
													INR 10,000 Each + Bronze Medal + Certificate of
													Outstanding Performance
												</span>
												<span>12</span>
											</li>
										</ul>
									</div>
								</div>

								<div className="row_full pad_b_30">
									<p className="row_full lineHeight28">
										<span className="levelTag">
											Zonal leve<em></em>
										</span>{' '}
										Awards for Level 2 and for Classes 1 and 2
									</p>
									<div className="row_full ieoBox pad_t_15">
										<ul className="row_full midTable">
											<li className="row_full titleList">
												<span>
													<strong style={{ fontWeight: '600' }}>Rank</strong>
												</span>{' '}
												<span>
													<strong style={{ fontWeight: '600' }}>Awards</strong>
												</span>{' '}
												<span>
													<strong style={{ fontWeight: '600' }}>
														Number of awards
													</strong>
												</span>
											</li>
											<li className="row_full">
												<span>
													1<sup>st</sup>
												</span>
												<span>
													INR 5000 Each + Gold Medal + Certificate of Zonal
													Excellence
												</span>
												<span>240</span>
											</li>
											<li className="row_full">
												<span>
													2<sup>nd</sup>
												</span>
												<span>
													INR 2500 Each + Silver Medal + Certificate of Zonal
													Excellence
												</span>
												<span>240</span>
											</li>
											<li className="row_full">
												<span>
													3<sup>rd</sup>
												</span>
												<span>
													INR 1000 Each + Bronze Medal + Certificate of Zonal
													Excellence
												</span>
												<span>240</span>
											</li>
											<li className="row_full">
												<span>
													4<sup>th</sup> to 10<sup>th</sup>
												</span>
												<span>
													Gifts worth INR 1000 Each + Medal of Distinction +
													Certificate of Distinction + Certificate of Zonal
													Excellence
												</span>
												<span>1680</span>
											</li>
											<li className="row_full">
												<span>
													11<sup>th</sup> to 20<sup>th</sup>
												</span>
												<span>
													Certificate of Zonal Excellence + Medal of Distinction
													+ Certificate of Distinction +
												</span>
												<span>3600</span>
											</li>
											<li className="row_full">
												<span>
													26<sup>th</sup> Above
												</span>
												<span>Merit certificate</span>
												<span>All</span>
											</li>
										</ul>
									</div>
								</div>

								<div className="row_full pad_b_30">
									<p className="row_full lineHeight28">
										<span className="levelTag">
											Zonal leve<em></em>
										</span>{' '}
										Awards for Level 1 performance
									</p>
									<div className="row_full ieoBox pad_t_15">
										<ul className="row_full midTable">
											<li className="row_full titleList">
												<span>
													<strong style={{ fontWeight: '600' }}>Rank</strong>
												</span>{' '}
												<span>
													<strong style={{ fontWeight: '600' }}>Awards</strong>
												</span>{' '}
												<span>
													<strong style={{ fontWeight: '600' }}>
														Number of awards
													</strong>
												</span>
											</li>
											<li className="row_full">
												<span>1 to 25</span>
												<span>
													Medal of Distinction + Certificate of Distinction=
												</span>
												<span>240</span>
											</li>
											<li className="row_full">
												<span>26 and above</span>
												<span>Participation Certificate</span>
												<span>All</span>
											</li>
										</ul>
									</div>
								</div>

								<div className="row_full">
									<h4 className="row_full" style={{ paddingBottom: '0px' }}>
										Awards for schools
									</h4>
									<p className="row_full">
										There are awards for various top performing schools too. The
										tables below discuss the various awards for schools
										participating in the Olympiad.
									</p>
								</div>

								<div className="row_full pad_t_15 pad_b_30">
									<p className="row_full lineHeight28">
										<span className="levelTag">
											International level<em></em>
										</span>{' '}
										Awards at international level
									</p>
									<div className="row_full ieoBox pad_t_15">
										<ul className="row_full midTable">
											<li className="row_full titleList">
												<span>
													<strong style={{ fontWeight: '600' }}>
														Category
													</strong>
												</span>{' '}
												<span>
													<strong style={{ fontWeight: '600' }}>Awards</strong>
												</span>{' '}
												<span>
													<strong style={{ fontWeight: '600' }}>
														Number of awards
													</strong>
												</span>
											</li>
											<li className="row_full">
												<span>Best Principal</span>
												<span>INR 25000 Each + Citation + Trophy</span>
												<span>10</span>
											</li>
											<li className="row_full">
												<span>Best Teacher</span>
												<span>INR 10000 Each + Citation + Trophy</span>
												<span>10</span>
											</li>
										</ul>
									</div>
								</div>

								<div className="row_full pad_b_30">
									<p className="row_full lineHeight28">
										<span className="levelTag">
											Zonal level<em></em>
										</span>
										Awards at zonal level
									</p>
									<div className="row_full ieoBox pad_t_15">
										<ul className="row_full midTable">
											<li className="row_full titleList">
												<span>
													<strong style={{ fontWeight: '600' }}>
														Category
													</strong>
												</span>{' '}
												<span>
													<strong style={{ fontWeight: '600' }}>Awards</strong>
												</span>{' '}
												<span>
													<strong style={{ fontWeight: '600' }}>
														Number of awards
													</strong>
												</span>
											</li>
											<li className="row_full">
												<span>Best Principal</span>
												<span>INR 10000 Each + Citation + Trophy</span>
												<span>10</span>
											</li>
											<li className="row_full">
												<span>Best Teacher</span>
												<span>INR 5000 Each + Citation + Trophy</span>
												<span>60</span>
											</li>
										</ul>
									</div>
								</div>

								<div className="row_full">
									<p className="row_full lineHeight28">
										<span className="levelTag">
											District level<em></em>
										</span>
										Awards at district level
									</p>
									<div className="row_full ieoBox pad_t_15">
										<ul className="row_full midTable">
											<li className="row_full titleList">
												<span>
													<strong style={{ fontWeight: '600' }}>
														Category
													</strong>
												</span>{' '}
												<span>
													<strong style={{ fontWeight: '600' }}>Awards</strong>
												</span>{' '}
												<span>
													<strong style={{ fontWeight: '600' }}>
														Number of awards
													</strong>
												</span>
											</li>
											<li className="row_full">
												<span>Best Principal</span>
												<span>INR 2500 Each + Citation + Trophy</span>
												<span>500</span>
											</li>
											<li className="row_full">
												<span>Best Teacher</span>
												<span>INR 1000 Each + Citation + Trophy</span>
												<span>500</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
};

export default Ieo;
