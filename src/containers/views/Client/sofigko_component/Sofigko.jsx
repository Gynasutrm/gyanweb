import React from 'react';
import './Sofigko.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';
const Sofigko = () => {
	return (
		<section className="row_full">
			<div
				className="row_full pageBanner"
				style={{ background: `url(${images_path}aboutus.jpg)` }}
			>
				<span className="bgopct"></span>
				<div className="overLay">
					<h2 className="pageName">SOF IGKO Exam 2021</h2>
				</div>
			</div>

			<section className="row_full sofTitle figko">
				<div className="container">
					<div className="row_full text-center">
						<h2 className="row_full" style={{ paddingBottom: '0px' }}>
							SOF IGKO 2021 Highlights
						</h2>
						<p className="row_full">
							Here is the glimpse of international general knowledge Olympiad
							Exam conducted by Science Olympiad Foundation.
						</p>
					</div>

					<div className="row_full jeenewBox sof">
						<ul className="row_full midTable">
							<li className="first text-center">
								<span>
									<strong style={{ fontWeight: '600' }}>
										International General Knowledge Olympiad 2021
									</strong>
								</span>
							</li>
							<li className="titleList first text-center">
								<span>
									<strong style={{ fontWeight: '600' }}>
										SOF IGKO 2021 Highlights
									</strong>
								</span>
							</li>
							<li>
								<span>SOF IEO Deadline</span>
								<span>31 October 2020</span>
							</li>
							<li>
								<span style={{ minHeight: '76px' }}>SOF IGKO Exam Dates</span>
								<span>
									<strong style={{ fontWeight: '600' }}>Set A:</strong> 7 & 8
									November 2020 <br />
									<strong style={{ fontWeight: '600' }}>Set B:</strong> 21& 22
									November 2020 <br />
									<strong style={{ fontWeight: '600' }}>Set C:</strong> 5 & 6
									December 2020
								</span>
							</li>
							<li>
								<span>Class/Course</span>
								<span>Class I to X</span>
							</li>
							<li>
								<span>Scholarship Type</span>
								<span>Awards and Prizes</span>
							</li>
							<li>
								<span>Age</span>
								<span>N/A</span>
							</li>
							<li>
								<span>Gender</span>
								<span>All</span>
							</li>
							<li>
								<span>Religion</span>
								<span>All</span>
							</li>
							<li>
								<span>State</span>
								<span>All</span>
							</li>
							<li>
								<span>Country</span>
								<span>All</span>
							</li>
							<li>
								<span>Registration</span>
								<span>India</span>
							</li>
							<li>
								<span>State</span>
								<span>SOF IEO Registration</span>
							</li>
						</ul>
					</div>
				</div>
			</section>

			<div
				className="row_full jeeAppBox supportBg figko"
				style={{ marginBottom: '0px' }}
			>
				<span className="fixtopAppImg">
					<img src={`${images_path}jee/expertfixtop.png`} />
				</span>
				<div className="row_full">
					<div className="container">
						<div className="row_full" style={{ position: 'relative' }}>
							<div className="leftJeeBox">
								<h2 className="row_full">How to Apply for IGKO 2021?</h2>
								<p>
									Simple steps to apply for the International GK Olympiad are
									listed below.
								</p>
								<ul className="row_full suprdx">
									<li>
										<i className="fa fa-circle" aria-hidden="true"></i>
										<span>
											Students can only apply through their respective schools
										</span>
									</li>
									<li>
										<i className="fa fa-circle" aria-hidden="true"></i>
										<span>
											Each school can register by sending a request mail to the
											SOF office.
										</span>
									</li>
									<li>
										<i className="fa fa-circle" aria-hidden="true"></i>
										<span>
											The prospectus of the Olympiad will be sent to all the
											registered schools.
										</span>
									</li>
									<li>
										<i className="fa fa-circle" aria-hidden="true"></i>
										<span>
											The schools need to collect a registration fee of Rs. 125
											from each participating student.
										</span>
									</li>
									<li>
										<i className="fa fa-circle" aria-hidden="true"></i>
										<span>
											Schools can charge an additional amount of charge up to
											Rs.25 per student towards honorarium of charge,
											remuneration to teachers & guides, and other expenses for
											the conduction of exams.
										</span>
									</li>
									<li>
										<i className="fa fa-circle" aria-hidden="true"></i>
										<span>
											Then, the school has to submit the registration forms
											before the deadline to SOF.
										</span>
									</li>
									<li>
										<i className="fa fa-circle" aria-hidden="true"></i>
										<span>
											Schools incur no charge for the conduction of the exam
										</span>
									</li>
									<li>
										<i className="fa fa-circle" aria-hidden="true"></i>
										<span>
											Students suffering from major physical disabilities and
											children of martyred defense soldiers have a fee
											exemption.
										</span>
									</li>
								</ul>
							</div>
							<img className="rightfxdx" src={`${images_path}jee/sof_1.svg`} />
						</div>
					</div>
				</div>
			</div>

			<div
				className="row_full jeeAppBox text-center ifgkobtn"
				style={{
					margin: '0px',
					background: `url(${images_path}neet/neetbg.jpg)`,
				}}
			>
				<div className="row_full">
					<div className="container">
						<div className="row_full">
							<h2 className="row_full">IGKO 2021 Exam Pattern</h2>
							<p className="row_full">
								The exam pattern consists of two groups. The first group
								consists of classes 1 to 4, while the second batch consists of
								classes 5 to 10. SOF IGKO 2021 exam pattern is for classes 1 to
								10 is mentioned below in the tabular format.
							</p>
							<div className="row_full">
								<a href="javascript:void(0);">
									SOF IGKO Exam Pattern for Classes 1 to 4
								</a>
								<a href="javascript:void(0);">
									SOF IGKO Exam Pattern for Classes 5 to 10
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="row_full conductBox sofigko">
				<div className="container">
					<div className="conductItem">
						<h5>JSOF IGKO Exam Pattern for Classes 1 to 4</h5>
						<div className="row_full jeenewBox sof">
							<ul className="midTable">
								<li className="first text-center">
									<span>
										<strong>
											The exam pattern for classes 1 to 4 is given below.
										</strong>
									</span>
								</li>
								<li className="titleList">
									<span>Section</span>
									<span>Questions in Each Section</span>
									<span>Marks</span>
								</li>
								<li>
									<span>General awareness </span>
									<span>20</span>
									<span>20</span>
								</li>
								<li>
									<span>Current affairs </span>
									<span>5</span>
									<span>5</span>
								</li>
								<li>
									<span>Life skills </span>
									<span>5</span>
									<span>5</span>
								</li>
								<li>
									<span>Achievers </span>
									<span>5</span>
									<span>10</span>
								</li>
								<li>
									<span>section Total </span>
									<span>35</span> <span>40</span>
								</li>
							</ul>
						</div>
					</div>

					<div className="conductItem right">
						<h5>SOF IGKO Exam Pattern for Classes 5 to 10</h5>
						<div className="row_full jeenewBox sof">
							<ul className="midTable">
								<li className="first text-center">
									<span>
										<strong>
											The exam pattern for classes 5 to 10 is given below.
										</strong>
									</span>
								</li>
								<li className="titleList">
									<span>Section</span>
									<span>Questions in Each Section</span>
									<span>Marks</span>
								</li>
								<li>
									<span>General awareness </span>
									<span>30</span>
									<span>30</span>
								</li>
								<li>
									<span>Current affairs </span>
									<span>10</span>
									<span>10</span>
								</li>
								<li>
									<span>Life skills </span>
									<span>5</span>
									<span>5</span>
								</li>
								<li>
									<span>Achievers </span>
									<span>5</span>
									<span>15</span>
								</li>
								<li>
									<span>section Total </span>
									<span>50</span> <span>60</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div
				className="row_full jeeAppBox supportBg figkosm"
				style={{ margin: '0px' }}
			>
				<div className="row_full">
					<div className="container">
						<div className="row_full" style={{ position: 'relative' }}>
							<div className="leftJeeBox">
								<h2 className="row_full">
									SOF IGKO Exam 2021 Terms and Conditions
								</h2>
								<p>
									You can go through the following terms and conditions to learn
									all about the exam:
								</p>
								<ul className="row_full suprdx">
									<li>
										<i className="fa fa-circle" aria-hidden="true"></i>
										<span>
											A minimum of 10 students must register from each school
											for the exam.
										</span>
									</li>
									<li>
										<i className="fa fa-circle" aria-hidden="true"></i>
										<span>
											Since there are three exam dates, a school can pick one
											date as per their convenience.
										</span>
									</li>
									<li>
										<i className="fa fa-circle" aria-hidden="true"></i>
										<span>Each date will have different question papers.</span>
									</li>
									<li>
										<i className="fa fa-circle" aria-hidden="true"></i>
										<span>
											The duration of the exam for all the classes is 60
											minutes.
										</span>
									</li>
									<li>
										<i className="fa fa-circle" aria-hidden="true"></i>
										<span>
											The examination will take place only during school hours.
										</span>
									</li>
									<li>
										<i className="fa fa-circle" aria-hidden="true"></i>
										<span>
											SOF is responsible for distributing the cash prize if
											there are two or more applicants who get the same rank.
										</span>
									</li>
								</ul>
							</div>
							<img className="rightfx" src={`${images_path}jee/sof_2.svg`} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Sofigko;
