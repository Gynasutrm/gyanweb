import React, { useState, useRef, useEffect } from 'react';
import './Igpt.css';
import Course from '../course_component/Course';
const images_path = process.env.PUBLIC_URL + '/assets/images/';
const Igpt = () => {
	useEffect(() => {}, []);

	return (
		<section className="row_full">
			<div
				className="row_full glBoxbg"
				style={{ background: `url(${images_path}glive_bg.jpg)` }}
			>
				<span className="row_full glBoxbgBot">
					<img src={`${images_path}glBoxbgBot.png`} />
				</span>
				<div className="container">
					<div className="row_full glBox text-center">
						<p className="row_full">
							<small>Grade 8 - 8PTNMTS</small>
							<a className="change">Change</a>
						</p>
						<h2 className="row_full">
							<img src={`${images_path}igpt_title.png`} />
						</h2>
					</div>
				</div>
			</div>

			{/*<Course/>*/}

			<div className="row_full glBoxContBox">
				<div className="container">
					<div className="row_full fixonBg">
						<div className="glBoxContItem">
							<div className="row_full plan">Plan</div>
							<div className="row_full days text-center">
								<p className="row_full">210 Days</p>
								<div className="row_full">
									<a className="freeTrial">Free Trial</a>
								</div>
							</div>

							<div className="row_full includeData">
								<p className="row_full">Included in this plan</p>
								<ul className="row_full">
									<li>computer based test.</li>
									<li>
										Best in class Test performance Report Year long tests.
									</li>
									<li>Live performance board</li>
								</ul>
							</div>

							<div className="row_full payable text-center">
								<p className="row_full">Amount Payable: ₹0(FREE)</p>
								<div className="row_full">
									<a className="activateBtn">ACTIVATE FREE TRIAL</a>
								</div>
							</div>
						</div>

						<div className="glBoxContItemR">
							<ul className="row_full abutList">
								<li className="active">
									About<span> i-GPT</span>
								</li>
								<li>FAQ's</li>
							</ul>

							<div className="row_full pad_a_25">
								<div className="row_full abtDetails">
									<ul className="row_full">
										<li>
											<i className="fa fa-check-circle" aria-hidden="true"></i>
											<span>Seperate test for different exams pattern</span>
										</li>
										<li>
											<i className="fa fa-check-circle" aria-hidden="true"></i>
											<span>
												Track your performance with year long test and test
												series
											</span>
										</li>
										<li>
											<i className="fa fa-check-circle" aria-hidden="true"></i>
											<span>Live test performance</span>
										</li>
										<li>
											<i className="fa fa-check-circle" aria-hidden="true"></i>
											<span>
												Get comparison of your performance with the large pool
												of students in real time
											</span>
										</li>
										<li>
											<i className="fa fa-check-circle" aria-hidden="true"></i>
											<span>Track your bloom level attempt timing</span>
										</li>
										<li style={{ float: 'left' }}>
											<i className="fa fa-check-circle" aria-hidden="true"></i>
											<span>
												Get Comparison of questions attempt time with ideal time
											</span>
										</li>
										<li className="row_full">
											<i className="fa fa-check-circle" aria-hidden="true"></i>
											<span>
												The overall focus of the Academic Performance Analysis
												is on the improvement in the subject knowledge,
												understanding of the fundamentals behind scientific
												concepts, application of the concepts in problem solving
												with speed & accuracy through rigorous practice and
												persistence.
											</span>
										</li>
									</ul>
								</div>

								<div className="row_full abtDetails three">
									<h3 className="row_full">i-GPT comprises</h3>
									<ul className="row_full autoHet">
										<li>
											<i className="fa fa-check-circle" aria-hidden="true"></i>
											<span>Computer Based Test</span>
										</li>
										<li>
											<i className="fa fa-check-circle" aria-hidden="true"></i>
											<span>Champion test series Contains -------- Tests.</span>
										</li>
										<li>
											<i className="fa fa-check-circle" aria-hidden="true"></i>
											<span>Relevent level of questions for NTSE.</span>
										</li>
										<li>
											<i className="fa fa-check-circle" aria-hidden="true"></i>
											<span>4.Answer Key and Detailed Solutions.</span>
										</li>
										<li>
											<i className="fa fa-check-circle" aria-hidden="true"></i>
											<span>Micro level Test performance analysis.</span>
										</li>
									</ul>
								</div>

								<div className="row_full abtDetails three noborderBot">
									<h3 className="row_full">Why i-GPT PRO is the top-one?</h3>
									<ul className="row_full cusheight">
										<li>
											<i className="fa fa-check-circle" aria-hidden="true"></i>
											<span>Best in class test performance analysis.</span>
										</li>
										<li>
											<i className="fa fa-check-circle" aria-hidden="true"></i>
											<span>
												All India Ranking Measure where you stand see your
												performance benchmarking at All India Level by taking
												this test series.
											</span>
										</li>
										<li>
											<i className="fa fa-check-circle" aria-hidden="true"></i>
											<span>
												The SMI Team regularly develops/updates/enriches the
												work of Question Development
											</span>
										</li>
										<li style={{ float: 'left' }}>
											<i className="fa fa-check-circle" aria-hidden="true"></i>
											<span>
												The SMI Team also studies the changing needs of the
												students and develops the new academic products
												according to these changing needs.
											</span>
										</li>
										<li>
											<i className="fa fa-check-circle" aria-hidden="true"></i>
											<span>
												Multi device platform you can take test on your Desktop
												Tablet or mobile phones.
											</span>
										</li>
										<li>
											<i className="fa fa-check-circle" aria-hidden="true"></i>
											<span>
												Get immediate result reports and Analytics to help the
												students analyse their strengths and weakness
											</span>
										</li>
										<li>
											<i className="fa fa-check-circle" aria-hidden="true"></i>
											<span>
												Live performance board on your dashboard so that you can
												daily easily get to know your performance
											</span>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="glBoxContItemR mar_t_25">
							<div className="row_full pad_a_25">
								<div className="row_full abtDetails full">
									<h3 className="row_full ">Frequently Asked Questions</h3>
									<ul className="row_full mar_t_15">
										<li>
											<i className="fa fa-plus" aria-hidden="true"></i>
											<span>What is Gyansturm Premium Subscription?</span>
										</li>
										<li>
											<i className="fa fa-minus" aria-hidden="true"></i>
											<span>
												What are the benefits of subscription?
												<div className="row_full innerData">
													<p>
														Subscription is a promise that we will take care of
														all your academic needs during the time period of
														subscription. It's not a course, it's time that you
														are getting.
													</p>
												</div>
											</span>
										</li>

										<li>
											<i className="fa fa-plus" aria-hidden="true"></i>
											<span>
												What are the languages in which courses are available?
											</span>
										</li>

										<li>
											<i className="fa fa-plus" aria-hidden="true"></i>
											<span>Do I need a special device to attend classes?</span>
										</li>

										<li>
											<i className="fa fa-plus" aria-hidden="true"></i>
											<span>
												Is there a limit to the number of courses I can access
												as part of this subscription?
											</span>
										</li>

										<li>
											<i className="fa fa-plus" aria-hidden="true"></i>
											<span>
												Can I pay the subscription fee on a monthly basis?
											</span>
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
};

export default Igpt;
