import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { isAdminLoggedIn, isLoggedIn } from '../../../../utils';
import history from '../../../../utils/history';
import './Header_new.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';

const activeUser = [
	{ name: 'student', img_path: 'acess_1', active_imgpath: 'acess_1_active' },
	{ name: 'parent', img_path: 'acess_2', active_imgpath: 'acess_2_active' },
	{ name: 'school', img_path: 'acess_3', active_imgpath: 'acess_3_active' },
	{ name: 'employee', img_path: 'acess_4', active_imgpath: 'acess_4_active' },
];
const Header_new = ({ toggleModal }) => {
	const [mmenu, setMmenu] = useState(false);

	useEffect(() => {}, []);

	const mobileMenu = () => {
		setMmenu(!mmenu);
	};

	const submOpen = (idd) => {
		let x = document.getElementById(idd);
		if (x.style.display === 'block') {
			x.style.display = 'none';
		} else {
			x.style.display = 'block';
		}
	};

	const openModal = () => {
		toggleModal();
	};

	const logout = () => {
		const token = localStorage.getItem('token');
		fetch('http://54.251.156.235:4004/api/auth/logout', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: token,
			},
		})
			.then((response) => response.json())
			.then((responseData) => {
				console.log(responseData);
				if (responseData.statusCode === 200) {
					localStorage.removeItem('roles');
					localStorage.removeItem('token');
					history.push('/');
					refreshPage();
				} else {
					setErrorMsg(true);
					setTimeout(() => {
						setErrorMsg(false);
					}, 5000);
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const refreshPage = () => {
		window.location.reload();
	};

	return (
		<div className="row_full">
			<div className="preloader">
				<div className="loader">
					<svg className="spinner" viewBox="0 0 50 50">
						<circle
							className="path"
							cx="25"
							cy="25"
							r="20"
							fill="none"
							strokeWidth="5"
						></circle>
					</svg>
				</div>
			</div>

			<div className="leftFix">
				<Link to="/reachus">
					Reach Us <i className="fa fa-envelope-o" aria-hidden="true"></i>
				</Link>
			</div>

			<div className="rightFix">
				<Link to="/askyourque">
					<img src={`${images_path}24by7.png`} /> Ask Your Question 24*7{' '}
				</Link>
			</div>

			<header className="row_full headerCntr">
				<div className="row_full botHeader headerFix">
					<div className="container-flude">
						<div className="row_full" style={{ position: 'relative' }}>
							<i
								className="fa fa-bars mobileIcon"
								onClick={mobileMenu}
								aria-hidden="true"
							></i>
							{mmenu && (
								<ul className={`mobileMenu ${mmenu ? 'active' : null}`}>
									<i
										onClick={mobileMenu}
										className="fa mmClose fa-times"
										aria-hidden="true"
									></i>
									<li>
										<Link to="/spartners">School Partners</Link>
									</li>
									<li>
										<Link to="/news">News & Events</Link>
									</li>
									<li>
										<Link
											onClick={(n) => {
												submOpen('aboutGyan');
											}}
											className="bottomM"
										>
											About Gyansutrm{' '}
											<i className="fa fa-caret-down" aria-hidden="true"></i>
										</Link>
										<div id="aboutGyan" className="MMenuBox">
											<ul>
												<li>
													<Link to="/aboutus">About Us</Link>
												</li>
												<li>
													<Link to="/directormsg">Director's Message</Link>
												</li>
												<li>
													<Link to="/enviornment">Our Enviornment</Link>
												</li>
												<li>
													<Link to="/uniqueness">Our Uniqueness</Link>
												</li>
											</ul>
										</div>
									</li>

									<li>
										<Link
											onClick={(n) => {
												submOpen('studentCorn');
											}}
											className="bottomM"
										>
											Student's Corner{' '}
											<i className="fa fa-caret-down" aria-hidden="true"></i>
										</Link>
										<div id="studentCorn" className="MMenuBox">
											<ul>
												<li>
													<Link
														onClick={(n) => {
															submOpen('examM');
														}}
													>
														Exams{' '}
														<i
															className="fa fa-caret-down"
															aria-hidden="true"
														></i>
													</Link>
													<div id="examM" className="MMenuBox">
														<ul>
															<li>
																<Link to="/neet">NEET</Link>
															</li>
															<li>
																<Link
																	onClick={(n) => {
																		submOpen('neetM');
																	}}
																>
																	JEE{' '}
																	<i
																		className="fa fa-caret-down"
																		aria-hidden="true"
																	></i>
																</Link>
																<div id="neetM" className="MMenuBox">
																	<ul>
																		<li>
																			<Link to="/jeemains">MAINS</Link>
																		</li>
																		<li>
																			<Link to="/jeeadvance">ADVANCE</Link>
																		</li>
																	</ul>
																</div>
															</li>
															<li>
																<Link to="/kvpy">KVPY</Link>
															</li>
															<li>
																<Link to="/ntse">NTSE</Link>
															</li>
															<li>
																<Link to="/nse">NSE</Link>
															</li>
															<li>
																<Link
																	onClick={(n) => {
																		submOpen('olymM');
																	}}
																>
																	OLYMPIADS{' '}
																	<i
																		className="fa fa-caret-down"
																		aria-hidden="true"
																	></i>
																</Link>
																<div id="olymM" className="MMenuBox">
																	<ul>
																		<li>
																			<Link
																				onClick={(n) => {
																					submOpen('mathOlymM');
																				}}
																			>
																				Maths Olympiad{' '}
																				<i
																					className="fa fa-caret-down"
																					aria-hidden="true"
																				></i>
																			</Link>
																			<div id="mathOlymM" className="MMenuBox">
																				<ul>
																					<li>
																						<Link to="/prmo">PRMO</Link>
																					</li>
																					<li>
																						<Link to="/rmo">RMO</Link>
																					</li>
																					<li>
																						<Link to="/inmo">INMO</Link>
																					</li>
																				</ul>
																			</div>
																		</li>
																		<li>
																			<Link to="/nso">NSO</Link>
																		</li>
																		<li>
																			<Link to="/jso">JSO</Link>
																		</li>
																		<li>
																			<Link to="/iso">ISO</Link>
																		</li>
																	</ul>
																</div>
															</li>
														</ul>
													</div>
												</li>
												<li>
													<Link to="/expert">Expert Counselling</Link>
												</li>
												<li>
													<Link
														onClick={(n) => {
															submOpen('collegeM');
														}}
													>
														College Rankings{' '}
														<i
															className="fa fa-caret-down"
															aria-hidden="true"
														></i>
													</Link>
													<div id="collegeM" className="MMenuBox">
														<ul>
															<li>
																<Link to="/engineering">Engineering</Link>
															</li>
															<li>
																<Link to="/medical">Medical</Link>
															</li>
														</ul>
													</div>
												</li>
												<li>
													<Link to="/collegepredictors">
														College Predictors
													</Link>
												</li>
												<li>
													<Link
														onClick={(n) => {
															submOpen('examresM');
														}}
													>
														Exams Results{' '}
														<i
															className="fa fa-caret-down"
															aria-hidden="true"
														></i>
													</Link>
													<div id="examresM" className="MMenuBox">
														<ul>
															<li>
																<Link to="/neet">NEET</Link>
															</li>
															<li>
																<Link
																	onClick={(n) => {
																		submOpen('jeeM');
																	}}
																>
																	JEE{' '}
																	<i
																		className="fa fa-caret-down"
																		aria-hidden="true"
																	></i>
																</Link>
																<div id="jeeM" className="MMenuBox">
																	<ul>
																		<li>
																			<Link to="/jeemains">MAINS</Link>
																		</li>
																		<li>
																			<Link to="/jeeadvance">ADVANCE</Link>
																		</li>
																	</ul>
																</div>
															</li>
															<li>
																<Link to="/kvpy">KVPY</Link>
															</li>
															<li>
																<Link to="/ntse">NTSE</Link>
															</li>
															<li>
																<Link
																	onClick={(n) => {
																		submOpen('olympiadsM');
																	}}
																>
																	OLYMPIADS{' '}
																	<i
																		className="fa fa-caret-down"
																		aria-hidden="true"
																	></i>
																</Link>
																<div id="olympiadsM" className="MMenuBox">
																	<ul>
																		<li>
																			<Link to="/math_olympiad">
																				Maths Olympiad
																			</Link>
																		</li>
																		<li>
																			<Link to="/nse">NSE</Link>
																		</li>
																		<li>
																			<Link to="/nsejs">NSEJS</Link>
																		</li>
																		<li>
																			<Link to="/ieo">IEO</Link>
																		</li>
																		<li>
																			<Link to="/sofigko">SOF IGKO</Link>
																		</li>
																		<li>
																			<Link to="/sof">SOF</Link>
																		</li>
																	</ul>
																</div>
															</li>
														</ul>
													</div>
												</li>
											</ul>
										</div>
									</li>

									<li>
										<Link>Free Study Material</Link>
									</li>
									<li>
										<Link
											onClick={(n) => {
												submOpen('courseDtls');
											}}
											className="bottomM"
										>
											Course Details{' '}
											<i className="fa fa-caret-down" aria-hidden="true"></i>
										</Link>
										<div id="courseDtls" className="MMenuBox">
											<ul>
												<li>
													<Link to="/glivepremium">G-Live Premium</Link>
												</li>
												<li>
													<Link to="/glive">G-Live</Link>
												</li>
												<li>
													<Link to="/iglpro">i-GL Pro</Link>
												</li>
												<li>
													<Link to="/igpt">i-GPT</Link>
												</li>
												<li>
													<Link to="/pclass">Personal Classes</Link>
												</li>
											</ul>
										</div>
									</li>

									<li>
										<Link
											onClick={(n) => {
												submOpen('domainsId');
											}}
											className="bottomM"
										>
											Domains{' '}
											<i className="fa fa-caret-down" aria-hidden="true"></i>
										</Link>
										<div id="domainsId" className="MMenuBox">
											<ul>
												<li>
													<Link to="/pathsala">Pathsala</Link>
												</li>
												<li>
													<Link to="/egyan">E - Gyan</Link>
												</li>
												<li>
													<Link to="/cambridgeprogram">Cambridge Program</Link>
												</li>
												<li>
													<Link to="/contentdevelopment">
														Content Development
													</Link>
												</li>
											</ul>
										</div>
									</li>
									<li>
										{isLoggedIn() ? (
											<Link className="signIn" onClick={logout}>
												Log Out@@
											</Link>
										) : (
											<Link className="signIn" onClick={openModal}>
												Sign In@@
											</Link>
										)}
									</li>
								</ul>
							)}
							<div className="row_full pad_l_r_35 pos_rel">
								<div className="menuBox">
									<div className="left_menu">
										<div className="row_full menuHalfBox ">
											<ul className="subMenuParent">
												<li>
													<Link to="/spartners">School Partners</Link>
												</li>
												<li className="menuBotfix">
													<Link>Free Study Material</Link>
													<div className="subMenuBox">
														<ul>
															<li>
																<Link>NCERT Solutions</Link>
																<div className="subMenuBox1">
																	<ul>
																		<li>
																			<Link to="/ncertclass12">Class 12</Link>
																		</li>
																		<li>
																			<Link>Class 11</Link>
																		</li>
																		<li>
																			<Link>Class 10</Link>
																		</li>
																		<li>
																			<Link>Class 9</Link>
																		</li>
																	</ul>
																</div>
															</li>
															<li>
																<Link>Previous Year Papers</Link>
																<div className="subMenuBox1">
																	<ul>
																		<li>
																			<Link>CBSE Class 12</Link>
																		</li>
																		<li>
																			<Link>CBSE Class 10</Link>
																		</li>
																	</ul>
																</div>
															</li>
															<li>
																<Link>Sample Papers</Link>
																<div className="subMenuBox1">
																	<ul>
																		<li>
																			<Link>CBSE</Link>
																		</li>
																		<li>
																			<Link>Class 12</Link>
																		</li>
																		<li>
																			<Link>Class 10</Link>
																		</li>
																		<li>
																			<Link>Class 9</Link>
																		</li>
																		<li>
																			<Link>ICSE</Link>
																		</li>
																	</ul>
																</div>
															</li>
															<li>
																<Link>Reference Book Solutions</Link>
																<div className="subMenuBox1">
																	<ul>
																		<li>
																			<Link>RD Sharma Solutions</Link>
																		</li>
																		<li>
																			<Link>RS Aggarwal Solutions</Link>
																		</li>
																		<li>
																			<Link>HC Verma Solutions</Link>
																		</li>
																		<li>
																			<Link>
																				Lakhmir Singh Solutions Class 10
																			</Link>
																		</li>
																		<li>
																			<Link>
																				Lakhmir Singh Solutions Class 9
																			</Link>
																		</li>
																	</ul>
																</div>
															</li>

															<li>
																<Link>School Syllabus</Link>
																<div className="subMenuBox1">
																	<ul>
																		<li>
																			<Link>CBSE Board</Link>
																		</li>
																		<li>
																			<Link>ICSE Board</Link>
																		</li>
																	</ul>
																</div>
															</li>

															<li>
																<Link>Revision Notes</Link>
																<div className="subMenuBox1">
																	<ul>
																		<li>
																			<Link>Class 12</Link>
																		</li>
																		<li>
																			<Link>Class 11</Link>
																		</li>
																		<li>
																			<Link>Class 10</Link>
																		</li>
																		<li>
																			<Link>Class 9</Link>
																		</li>
																	</ul>
																</div>
															</li>

															<li>
																<Link>Important Questions</Link>
																<div className="subMenuBox1">
																	<ul>
																		<li>
																			<Link>Class 12</Link>
																		</li>
																		<li>
																			<Link>Class 11</Link>
																		</li>
																		<li>
																			<Link>Class 10</Link>
																		</li>
																		<li>
																			<Link>Class 9</Link>
																		</li>
																	</ul>
																</div>
															</li>
														</ul>
													</div>
												</li>
												<li>
													<Link className="bottomM">About Gyansutrm</Link>
													<div className="subMenuBox">
														<ul>
															<li>
																<Link to="/aboutus">About Us</Link>
															</li>
															<li>
																<Link to="/directormsg">
																	Director's Message
																</Link>
															</li>
															<li>
																<Link to="/enviornment">Our Enviornment</Link>
															</li>
															<li>
																<Link to="/uniqueness">Our Uniqueness</Link>
															</li>
														</ul>
													</div>
												</li>

												<li>
													<Link className="bottomM">Student's Corner</Link>
													<div className="subMenuBox">
														<ul>
															<li>
																<Link>Exams</Link>
																<div className="subMenuBox1">
																	<ul>
																		<li>
																			<Link to="/neet">NEET</Link>
																		</li>
																		<li>
																			<Link>JEE</Link>
																			<div className="subMenuBox2">
																				<ul>
																					<li>
																						<Link to="/jeemains">MAINS</Link>
																					</li>
																					<li>
																						<Link to="/jeeadvance">
																							ADVANCE
																						</Link>
																					</li>
																				</ul>
																			</div>
																		</li>
																		<li>
																			<Link to="/kvpy">KVPY</Link>
																		</li>
																		<li>
																			<Link to="/ntse">NTSE</Link>
																		</li>
																		<li>
																			<Link>OLYMPIADS</Link>
																			<div className="subMenuBox2">
																				<ul>
																					<li>
																						<Link to="/math_olympiad">
																							Maths Olympiad
																						</Link>
																					</li>
																					<li>
																						<Link to="/nse">NSE</Link>
																					</li>
																					<li>
																						<Link to="/nsejs">NSEJS</Link>
																					</li>
																					<li>
																						<Link to="/ieo">IEO</Link>
																					</li>
																					<li>
																						<Link to="/sofigko">SOF IGKO</Link>
																					</li>
																					<li>
																						<Link to="/sof">SOF</Link>
																					</li>
																				</ul>
																			</div>
																		</li>
																	</ul>
																</div>
															</li>
															<li>
																<Link to="/expert">Expert Counselling</Link>
															</li>
															<li>
																<Link>College Rankings</Link>
																<div className="subMenuBox1">
																	<ul>
																		<li>
																			<Link to="/engineering">Engineering</Link>
																		</li>
																		<li>
																			<Link to="/medical">Medical</Link>
																		</li>
																	</ul>
																</div>
															</li>
															<li>
																<Link to="/collegepredictors">
																	College Predictors
																</Link>
															</li>
															<li>
																<Link>Exams Results</Link>
																<div className="subMenuBox1">
																	<ul>
																		<li>
																			<Link to="/neet">NEET</Link>
																		</li>
																		<li>
																			<Link>JEE</Link>
																			<div className="subMenuBox2">
																				<ul>
																					<li>
																						<Link to="/jeemains">MAINS</Link>
																					</li>
																					<li>
																						<Link to="/jeeadvance">
																							ADVANCE
																						</Link>
																					</li>
																				</ul>
																			</div>
																		</li>
																		<li>
																			<Link to="/kvpy">KVPY</Link>
																		</li>
																		<li>
																			<Link to="/ntse">NTSE</Link>
																		</li>
																		<li>
																			<Link>OLYMPIADS</Link>
																			<div className="subMenuBox2">
																				<ul>
																					<li>
																						<Link to="/math_olympiad">
																							Maths Olympiad
																						</Link>
																					</li>
																					<li>
																						<Link to="/nse">NSE</Link>
																					</li>
																					<li>
																						<Link to="/nsejs">NSEJS</Link>
																					</li>
																					<li>
																						<Link to="/ieo">IEO</Link>
																					</li>
																					<li>
																						<Link to="/sofigko">SOF IGKO</Link>
																					</li>
																					<li>
																						<Link to="/sof">SOF</Link>
																					</li>
																				</ul>
																			</div>
																		</li>
																	</ul>
																</div>
															</li>
														</ul>
													</div>
												</li>
											</ul>
										</div>
									</div>

									<div className="logoBox">
										<a href="http://www.gyansutrm.com/">
											<img src={`${images_path}logo.png`} />
										</a>
									</div>

									<div className="left_menu right">
										<div className="row_full menuHalfBox">
											<ul className="subMenuParent botelm">
												<li>
													<Link to="/news">News & Events</Link>
												</li>
												{!isAdminLoggedIn() ? (
													<li>
														{isLoggedIn() ? (
															<Link className="signIn" onClick={logout}>
																Log Out
															</Link>
														) : (
															<Link className="signIn" onClick={openModal}>
																Sign In
															</Link>
														)}
													</li>
												) : (
													''
												)}
												<li>
													<Link className="bottomM">Course Details</Link>
													<div className="subMenuBox">
														<ul>
															<li>
																<Link to="/glivepremium">G-Live Premium</Link>
															</li>
															<li>
																<Link to="/glive">G-Live</Link>
															</li>
															<li>
																<Link to="/iglpro">i-GL Pro</Link>
															</li>
															<li>
																<Link to="/igpt">i-GPT</Link>
															</li>
															<li>
																<Link to="/pclass">Personal Classes</Link>
															</li>
														</ul>
													</div>
												</li>

												<li>
													<Link className="bottomM">Domains</Link>
													<div className="subMenuBox">
														<ul>
															<li>
																<Link to="/pathsala">Pathsala</Link>
															</li>
															<li>
																<Link to="/egyan">E - Gyan</Link>
															</li>
															<li>
																<Link to="/cambridgeprogram">
																	Cambridge Program
																</Link>
															</li>
															<li>
																<Link to="/contentdevelopment">
																	Content Development
																</Link>
															</li>
														</ul>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Header_new;
