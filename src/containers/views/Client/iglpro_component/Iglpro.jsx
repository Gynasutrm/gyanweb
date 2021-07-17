import React, { useState, useRef, useEffect } from 'react';
import './Iglpro.css';
import Course from '../course_component/Course';
const images_path = process.env.PUBLIC_URL + '/assets/images/';
const Iglpro = () => {
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
							<small>Grade 8 - 8iGL2MPR</small>
							<a className="change">Change</a>
						</p>
						<h2 className="row_full">
							<img src={`${images_path}iglpro.png`} />
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
									<li>Unlimited LIVE Interactive Classes</li>
									<li>Test Series & Analysis</li>
									<li>DPP & Digital Notes</li>
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
									About<span> i-GL Pro</span>
								</li>
								<li>FAQ's</li>
							</ul>

							<div className="row_full pad_a_25">
								<div className="row_full abtDetails">
									<ul className="row_full">
										<li>
											<i className="fa fa-check-circle" aria-hidden="true"></i>
											<span>
												Uniquely designed interective video lectures for
												Academics.
											</span>
										</li>
										<li>
											<i className="fa fa-check-circle" aria-hidden="true"></i>
											<span>
												Ace your concepts with India's Best In House Gyansutrm
												Experts
											</span>
										</li>
										<li>
											<i className="fa fa-check-circle" aria-hidden="true"></i>
											<span>Live DPP discussions</span>
										</li>
										<li>
											<i className="fa fa-check-circle" aria-hidden="true"></i>
											<span>Subjects: Science, Mathematics</span>
										</li>
										<li>
											<i className="fa fa-check-circle" aria-hidden="true"></i>
											<span>Taught in English and Hindi both</span>
										</li>
									</ul>
								</div>

								<div className="row_full abtDetails three">
									<h3 className="row_full">i-GL PRO comprises</h3>
									<ul className="row_full autoHet">
										<li>
											<i className="fa fa-check-circle" aria-hidden="true"></i>
											<span>Interactive video lecture.</span>
										</li>
										<li>
											<i className="fa fa-check-circle" aria-hidden="true"></i>
											<span>Subjective Tests</span>
										</li>
										<li>
											<i className="fa fa-check-circle" aria-hidden="true"></i>
											<span>Best in class performance report.</span>
										</li>
										<li>
											<i className="fa fa-check-circle" aria-hidden="true"></i>
											<span>Multiple Test for Boards exam</span>
										</li>
										<li>
											<i className="fa fa-check-circle" aria-hidden="true"></i>
											<span>e-Notes and assignment.</span>
										</li>
									</ul>
								</div>

								<div className="row_full abtDetails three noborderBot">
									<h3 className="row_full">Why i-GL PRO is the top-one?</h3>
									<ul className="row_full">
										<li>
											<i className="fa fa-check-circle" aria-hidden="true"></i>
											<span>
												Master your topic by revising it any time & many time
											</span>
										</li>
										<li>
											<i className="fa fa-check-circle" aria-hidden="true"></i>
											<span>
												"Progressive recorded lectures by Top-Notch educators."
											</span>
										</li>
										<li>
											<i className="fa fa-check-circle" aria-hidden="true"></i>
											<span>
												Designed to accelerate the efficiency of learners and
												transform their weakness into their strengths.
											</span>
										</li>
										<li>
											<i className="fa fa-check-circle" aria-hidden="true"></i>
											<span>best in class study material in e-pdf format.</span>
										</li>
										<li>
											<i className="fa fa-check-circle" aria-hidden="true"></i>
											<span>
												You can choose a G-IHE who believes in you more than
												yourself.
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

export default Iglpro;
