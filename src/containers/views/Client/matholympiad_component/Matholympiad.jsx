import React from 'react';
import './Matholympiad.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';
const Matholympiad = () => {
	return (
		<section className="row_full">
			<div
				className="row_full pageBanner"
				style={{ background: `url(${images_path}aboutus.jpg)` }}
			>
				<span className="bgopct"></span>
				<div className="overLay">
					<h2 className="pageName">Math Olympiad</h2>
				</div>
			</div>

			<section className="row_full olymregisBox top">
				<div className="row_full">
					<div className="container">
						<div className="row_full" style={{ position: 'relative' }}>
							<div className="leftJeeBox">
								<h2 className="row_full">Stages of Mathematical Olympiad</h2>
								<p className="row_full">
									The Mathematical Olympiad Programme in India, which leads to
									participation of Indian students in the International
									Mathematical Olympiad (IMO) is organized by the Homi Bhabha
									Centre for Science Education (HBCSE) on behalf of the National
									Board for Higher Mathematics (NBHM) of the Department of
									Atomic Energy (DAE), Government of India. This programme is
									one of the major initiatives undertaken by the NBHM. Its main
									purpose is to spot mathematical talent among pre-university
									students in the country.
								</p>
								<p className="row_full">
									For the purpose of training and selection of students for the
									Olympiad contest, 25 regions all over the country have been
									designated and each assigned a Regional Coordinator (RC).
									Additionally, three groups (Central Board of Secondary
									Education (CBSE), Navodaya Vidyalaya Samiti (NVS) and Kendriya
									Vidyalaya Sangathana (KVS) have a ‘Regional Coordinator’ each.
									The Mathematical Olympiad programme consists of six stages.
								</p>
							</div>
							<img src={`${images_path}stages_olym.png`} />
						</div>
					</div>
				</div>
			</section>

			<section className="row_full ieoCntr notbgElm">
				<div className="container">
					<div className="row_full pad_t_25">
						<div className="olympiadItem">
							<div className="row_full">
								<span className="levelTag">
									Stage 1<em></em>
								</span>
								<p className="row_full">
									The first stage examination, the pre-Regional Mathematical
									Olympiad (PRMO) is a two and half hour examination with 30
									questions. The answer to each question is either a single
									digit number or a two digit number and will need to be marked
									on a machine readable OMR response sheet. The PRMO question
									paper will be in English and Hindi.
								</p>
							</div>
						</div>
						<div className="olympiadItem">
							<div className="row_full">
								<span className="levelTag">
									Stage 2<em></em>
								</span>
								<p className="row_full">
									The second stage examination, the Regional Mathematical
									Olympiad (RMO) is a three hour examination with six problems.
									The RMOs are offered in English, Hindi and other regional
									languages as deemed appropriate by the respective Regional
									Coordinators. The problems under each topic involve high level
									of difficulty and sophistication
								</p>
							</div>
						</div>
						<div className="olympiadItem">
							<div className="row_full">
								<span className="levelTag">
									Stage 3<em></em>
								</span>
								<p className="row_full">
									The best-perfroming students from the RMO (approximately 900)
									qualify for the third stage – the Indian National Mathematical
									Olympiad (INMO). The INMO is held on the third Sunday of
									January at 28 centres across the country.
								</p>
							</div>

							<div className="row_full" style={{ marginTop: '20px' }}>
								<span className="levelTag">
									Stage 5<em></em>
								</span>
								<p className="row_full">
									The selected team undergoes a rigorous training programme for
									about 8-10 days at HBCSE prior to its departure for the IMO
								</p>
							</div>
						</div>
						<div className="olympiadItem">
							<div className="row_full">
								<span className="levelTag">
									Stage 4<em></em>
								</span>
								<p className="row_full">
									The top students from the INMO (approximately 35) are invited
									for the fourth stage, the International Mathematical Olympiad
									Training Camp (IMOTC) held at HBCSE during April to May. At
									this camp orientation is provided to students for the
									International Mathematical Olympiad (IMO). Emphasis is laid on
									developing conceptual foundations and problem-solving skills.
									Several selection tests are held during this camp. On the
									basis of perfromance in these tests six students are selected
									to represent India at the IMO. Resource persons from different
									institutions across the country are invited to the training
									camps.
								</p>
							</div>
						</div>

						<div className="olympiadItem">
							<div className="row_full">
								<span className="levelTag">
									Stage 6<em></em>
								</span>
								<p className="row_full">
									The Olympiad programme culminates with the participation of
									the students in the IMO. The students are accompanied by 4
									teachers or mentors.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="row_full ieoCntr bgbox">
				<div className="container">
					<div className="highlightBox">
						<div className="row_full">
							<h3 className="row_full" style={{ paddingBottom: '0px' }}>
								International Mathematical Olympiad 2021 Exam Highlights
							</h3>
							<p className="row_full">
								<strong>IMO 2021 Exam Highlights</strong>
							</p>
						</div>
					</div>

					<div className="highlightBox">
						<div className="row_full">
							<h3 className="row_full" style={{ paddingBottom: '0px' }}>
								International Mathematical Olympiad 2021 Exam Dates
							</h3>
							<p className="row_full">
								<strong>IMO Exam Important Dates</strong>
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="row_full ieoCntr notbgElm">
				<div className="container">
					<div className="row_full text-center">
						<h3 className="row_full" style={{ paddingBottom: '0px' }}>
							International Mathematical Olympiad 2021
						</h3>
						<p className="row_full">
							The tests happening in a different country every year allow
							students to understand other cultures with a group of peers from
							all over the world. Commonly, lifelong friendships are forged at
							International Mathematical Olympiad 2021 events.
							<br /> Each country sends a team consisting of a maximum of six
							students, a team leader, and one or two official observers.
							<br /> The selection of students starts in the country of the
							students where students have to write several tests and attend
							workshops, after which the students who are going to represent the
							country are going to be selected. The list of stages for Indian
							selection is as given below.
						</p>
					</div>

					<div className="row_full pad_t_25">
						<div className="olympiadItem">
							<div className="row_full">
								<span className="levelTag">
									Stage 1<em></em>
								</span>
								<p className="row_full">
									Pre- Regional Mathematics Olympiad (PRMO) is the first stage
									for students in India aiming to appear in International
									Mathematical Olympiad. It is conducted all over India in a
									registered school, Kendriya Vidyalaya’s, or a Jawahar Navodaya
									Vidyalaya’s. Indian citizens born on or after August 1, 2000,
									and studying in classes 8, 9, 10, 11, and 12 are eligible to
									write PRMO 2021.
								</p>
							</div>
						</div>
						<div className="olympiadItem">
							<div className="row_full">
								<span className="levelTag">
									Stage 2<em></em>
								</span>
								<p className="row_full">
									Regional Mathematics Olympiad (RMO) is the second stage in
									International Mathematical Olympiad 2021 and is conducted by
									regional coordinators at selected centers in each region all
									over India. RMO is a descriptive exam with each student is
									given 6-7 problems to solve in 3 hours. The answer sheets are
									corrected by the team in each region, and the results are sent
									to HBCSE.
								</p>
							</div>
						</div>
						<div className="olympiadItem">
							<div className="row_full">
								<span className="levelTag">
									Stage 3<em></em>
								</span>
								<p className="row_full">
									Indian National Mathematics Olympiad is conducted by HBCSE,
									Mumbai, in 30 centers all over India. Students who qualified
									INMO are awarded INMO merit certificates, and the top 45
									students are invited to the next round.
								</p>
							</div>
						</div>
						<div className="olympiadItem">
							<div className="row_full">
								<span className="levelTag">
									Stage 4<em></em>
								</span>
								<p className="row_full">
									IMO Training Camp is conducted by HBCSE, Mumbai, and is the
									stage where students who are going to represent the country
									are selected. The camp consists of training as well as several
									selection tests.
								</p>
							</div>
						</div>
						<div className="olympiadItem">
							<div className="row_full">
								<span className="levelTag">
									Stage 5<em></em>
								</span>
								<p className="row_full">
									Six students selected from the group who have attended IMOTC
									undergo a rigorous training camp called the Pre Departure Camp
									at HBCSE, Mumbai, for 8-10 days. This training camp works on
									each student trying to better their theoretical knowledge.
								</p>
							</div>
						</div>
						<div className="olympiadItem">
							<div className="row_full">
								<span className="levelTag">
									Stage 6<em></em>
								</span>
								<p className="row_full">
									International Mathematical Olympiad 2021 is held in a member
									country. Students are invited to participate in the exam. It
									is a 10-day event with the first two days being the exam and
									the next few days being organized to bring students together.
									The result is declared at the end with only 50 or fewer
									students of the total 600 students being awarded gold medals.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="row_full olymregisBox">
				<div className="row_full">
					<div className="container">
						<div className="row_full" style={{ position: 'relative' }}>
							<div className="leftJeeBox">
								<h2 className="row_full">
									International Mathematical Olympiad
									<br /> 2021 Registration
								</h2>
								<p className="row_full">
									Students interested in participating in International
									Mathematical Olympiad 2021 have to first register for PRMO at
									the registration centers assigned by HBCSE. HBCSE will then
									assign an examination center closest to the registration
									center.
								</p>
								<ul className="row_full">
									<li className="row_full">
										<i className="fa fa-circle" aria-hidden="true"></i>
										<span>
											All registration centers are not examination centers.
										</span>
									</li>
									<li className="row_full">
										<i className="fa fa-circle" aria-hidden="true"></i>
										<span>
											Students can collect the admit cards for PRMO from their
											respective registration centers.
										</span>
									</li>
									<li className="row_full">
										<i className="fa fa-circle" aria-hidden="true"></i>
										<span>
											Students who have qualified for RMO have to visit HBCSE or
											MTA website to download the admit card and the letter of
											selection.
										</span>
									</li>
								</ul>
							</div>
							<img
								style={{ marginTop: '30px' }}
								src={`${images_path}math_oly.png`}
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="row_full ieoCntr pad_b_50">
				<div className="container">
					<div className="row_full text-center">
						<h2 className="row_full" style={{ paddingBottom: '0px' }}>
							IMO 2021 Syllabus
						</h2>
						<p className="row_full">
							Questions are chosen from the four topic areas of algebra,
							combinatorics, geometry, and number theory.
							<br />
							The International Mathematical Olympiad 2021 exam consists of four
							sections that are discussed below.
						</p>
						<p className="row_full">
							International Mathematical Olympiad 2021 Exam Sections
						</p>
					</div>
					<div className="row_full ieoBox pad_b_15">
						<div className="boxshadowMid olymsection">
							<ul className="row_full midTable ">
								<li className="titleList">
									<span>
										<strong style={{ fontWeight: '600' }}>Section</strong>
									</span>{' '}
									<span>
										<strong style={{ fontWeight: '600' }}>
											Date (Tentative)
										</strong>
									</span>
								</li>
								<li>
									<span>Section-1</span>
									<span>Logical Reasoning</span>
								</li>
								<li>
									<span>Section-2</span>
									<span>Mathematical Reasoning</span>
								</li>
								<li>
									<span>Section-3</span>
									<span>Everyday Mathematics</span>
								</li>
								<li>
									<span>Section-4</span>
									<span>Achievers Section</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
};

export default Matholympiad;
