import React, { useState, useRef, useEffect } from 'react';
import './Kvpy.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';

const Kvpy = () => {
	const Committees = [
		{
			id: 1,
			name: 'National Advisory Committee (NAC)',
			subTab: [{ id: 1, title: 'NAC Committee' }],
		},
		{
			id: 1,
			name: 'Management Committee',
			subTab: [{ id: 2, title: 'KVPY Management Committee' }],
		},
		{
			id: 1,
			name: 'Core Committee',
			subTab: [{ id: 3, title: 'Core Committee' }],
		},
	];

	const dataElm = [
		{
			id: 1,
			title:
				'Some friends from my School/College are planning to take the KVPY aptitude test. Can we ask our School/College authorities to request bulk applications for us?',
			subData: [
				{
					content:
						'Candidates must apply through online only. No hard copy of the application is available. Bulk applications from school/college authorities will not be entertained.',
				},
			],
		},
		{
			id: 2,
			title:
				'What is the meaning of the phrase computer based test? I have never taken such a test before.',
			subData: [
				{
					content:
						'The phrase means that the test will be conducted using an easy-to-use portal on a computer. No prior experience with using computers is needed to opt for such a test. In fact, students who choose to take the computer based test will be directed to a web link that contains a mock aptitude test hosted on the same portal. This will allow them to get familiar with all features of the testing environment.',
				},
			],
		},
		{
			id: 3,
			title: 'Can I take a computer based test in Hindi?',
			subData: [{ content: 'Yes.' }],
		},
		{
			id: 4,
			title: 'What is the syllabus for the aptitude test ?',
			subData: [
				{
					content:
						'There is no prescribed syllabus for the aptitude test. The aptitude test aims to test the understanding and analytical ability of the student than his/her factual knowledge. However, students are tested for the syllabus up to class X/XII/1st year of  B.Sc./B.S./B.Stat./B.Math./Int. M.Sc./M.S. as applicable.',
				},
			],
		},
		{
			id: 5,
			title: 'What is the eligibility criteria for  KVPY 2020 ?',
			subData: [
				{
					content:
						'(a) Stream SA: Students enrolled in the XI Standard (Science Subjects) during the academic year 2020-21 and having secured a minimum of 75% (65% for SC/ST/PWD) marks in aggregate in MATHEMATICS and SCIENCE subjects (Physics/Chemistry/Biology) in the X Standard Board Examination. ',
				},
				{
					content:
						'Students promoted through both the Summative Assessments-II conducted by the school and conducted by the Board are eligible to apply, if they satisfy eligibility criteria. If the students have obtained a letter grade in the qualified examination, they are requested to convert it into an appropriate % marks and fill-up the application form.',
				},
				{
					content:
						'(b) Stream SX: Students enrolled in XII standard / (+2) during the academic year 2020-21 and aspiring to join an undergraduate program in Basic Sciences (B.Sc./B.S./B.Stat./B.Math./Int. M.Sc./M.S.) for the session 2021-22 provided they have secured a minimum of 75% (65% for SC/ST/PWD) marks in aggregate in MATHEMATICS and SCIENCE subjects (Physics/Chemistry/Biology) in the X Standard Board Examination. They must secure 60% (50% for SC/ST/PWD) marks in aggregate in MATHEMATICS and SCIENCE subjects (Physics/Chemistry/Biology) in the XII standard Board Examination before taking up the fellowship, if awarded.',
				},
				{
					content:
						'(c) Stream SB: Students enrolled in the 1st Year of an undergraduate program in sciences (B.Sc./B.S./ B.Stat./B.Math./Int. M.Sc./M.S.) during the academic year 2020-21 and having secured a minimum of 60% (50% for SC/ST/PWD) marks in aggregate in Science subjects (Physics/Chemistry/Biology) in the XII/(+2) Standard Board Examination.  In the 1st year final examination of B.Sc./B.S./B.Math./B.Stat./Int. M.Sc./M.S. they must secure 60% (50% for SC/ST/PWD) marks before taking up the fellowship, if awarded.',
				},
			],
		},
		{
			id: 6,
			title:
				'Is it necessary that the students have to study all the four subjects i.e. Physics, Chemistry, Biology and Mathematics?',
			subData: [
				{
					content:
						'In the Stream-SA  all questions are compulsory (Science and Mathematics) In respect of the streams SB and SX , there will be four sections in Part I (Physics, Chemistry, Biology and Mathematics) and four sections in Part II (Physics, Chemistry, Biology and Mathematics).  Candidates  may answer any THREE of the four subjects in Part I and any TWO of the four subjects in Part II. In case candidate attempts  more sections, best of three in Part I and best of two in Part II is considered.',
				},
			],
		},
		{
			id: 7,
			title: 'When does the KVPY advertisement come in the newspapers?',
			subData: [
				{
					content:
						'The advertisement for the KVPY Fellowship appears in all the national dailies on the Technology day (May 11), and on the second Sunday of July every year.',
				},
			],
		},
		{
			id: 8,
			title: 'Can I avail the KVPY Fellowship along with a merit scholarship?',
			subData: [
				{
					content:
						'KVPY does not allow its Fellows to receive simultaneously fellowship /scholarship from more than one source, either government or private. In case they are in receipt of any other fellowship or scholarship, they will have to relinquish it in order to avail the KVPY Fellowship.',
				},
			],
		},
		{
			id: 9,
			title: 'When can I get the application form?',
			subData: [
				{
					content:
						'The KVPY is publishing its detailed advertisement on 2nd Sunday of the month of July every year. The application form can be obtained after the publication of the advt. ',
				},
			],
		},
		{
			id: 10,
			title: 'When should I submit application form?',
			subData: [
				{
					content:
						'The last date for submission of the application form will be notified in the detailed advertisement published during July every year. ',
				},
			],
		},
		{
			id: 11,
			title:
				'Whom should I contact in case of Examination centre related queries?',
			subData: [
				{
					content:
						'The students can send their queries through e-mail which will be answered.',
				},
			],
		},
		{
			id: 12,
			title:
				'I have a scanned copy of my photograph/signature/caste certificate, the file size of which exceeds the limit mentioned in the online application form.  What should I do?',
			subData: [{ content: 'Please compress the file and then upload it.' }],
		},
		{
			id: 13,
			title: 'When and How do I download ADMIT CARD ?',
			subData: [
				{
					content:
						'Candidates may download ADMIT CARD during 2nd week of January 2021 by logging in to their application portal at KVPY website. Details regarding Examination venue and seat number will be available in the admit card.',
				},
			],
		},
		{
			id: 14,
			title: 'EXAMINATION DATE & TIME:  31st January 2021',
			subData: [
				{
					content:
						'STREAM SA : Forenoon  9:30 AM to 12:30 PM (Candidates should report at 8AM)',
				},
				{
					content:
						'STREAM SB/SX : Afternoon 2:30 PM to 5:30 PM (Candidates should report at 1 PM)',
				},
			],
		},
	];

	const [selectedQues, setselectedQues] = useState(dataElm[0].id);
	const updateVisibleQuestion = (id) => {
		setselectedQues(id);
	};

	return (
		<section className="row_full">
			<div
				className="row_full pageBanner"
				style={{ background: `url(${images_path}aboutus.jpg)` }}
			>
				<span className="bgopct"></span>
				<div className="overLay">
					<h2 className="pageName">ABOUT KVPY</h2>
				</div>
			</div>

			<div className="row_full kvpyCntr">
				<div className="container">
					<div className="row_full">
						<div className="img">
							<img src={`${images_path}kvpy.jpg`} />
						</div>
						<div className="content">
							<p>
								The Kishore Vaigyanik Protsahan Yojana (KVPY) is an on-going
								National Program of Fellowship in Basic Sciences, initiated and
								funded by the Department of Science and Technology, Government
								of India, to attract exceptionally highly motivated students for
								pursuing basic science courses and research career in science.
							</p>
							<p>
								The objective of the program is to identify students with talent
								and aptitude for research; help them realize their academic
								potential; encourage them to take up research careers in
								Science, and ensure the growth of the best scientific minds for
								research and development in the country. The advertisement for
								the KVPY Fellowship appears in all the national dailies normally
								on the Technology Day (May 11) and the Second Sunday of July
								every year.
							</p>
							<p>
								Selection of the students is made from those studying in XI
								standard to 1st year of any undergraduate Program in Basic
								Sciences namely B.Sc./B.S./B.Stat./B.Math./Int. M.Sc./M.S. in
								Mathematics, Physics, Chemistry and Biology having aptitude for
								scientific research. Special groups / Committees are set up at
								IISc to screen the applications and conduct an aptitude test at
								various centres in the country. Based on the performance in the
								aptitude test, short-listed students are called for an interview
								which is the final stage of the selection procedure. For
								receiving a fellowship, both aptitude test and interview marks
								are considered.
							</p>
							<p>
								Generous fellowships are provided up to the pre-Ph.D. level to
								the selected KVPY Fellows.
							</p>
						</div>
					</div>
				</div>
			</div>

			<section className="row_full olymregisBox kvpyimg ijso mar_t_0">
				<div className="row_full">
					<div className="container">
						<div className="row_full" style={{ position: 'relative' }}>
							<div className="leftJeeBox">
								<h2 className="row_full">About KVPY</h2>
								<p className="row_full">
									The "Kishore Vaigyanik Protsahan Yojana" (KVPY) is a program
									started in 1999 by the Department of Science and Technology
									(DST), Government of India to encourage students who are
									studying Basic Sciences to take up research career in Science.
									The aim of the program is to identify and encourage talented
									and motivated students to pursue career in research.
								</p>
								<p className="row_full">
									This program aims to assist the students to realize their
									potential and to ensure that the best scientific talent is
									groomed for research and development in the country. Generous
									fellowship and contingency grant are provided to the selected
									KVPY Fellows up to the pre Ph.D. level or 5 years whichever is
									earlier. In addition, summer camps for the KVPY Fellows are
									organized in prestigious research and educational institutions
									in the country.
								</p>
								<p className="row_full">
									The Department of Science and Technology, the nodal agency of
									the Government has entrusted the overall responsibility for
									organizing and running the KVPY Program to the Indian
									Institute of Science, Bangalore and set up a Management
									Committee and a National Advisory Committee (NAC) for
									overseeing its implementation. A core committee looks after
									both the day-to-day and academic aspects of the KVPY Program.
								</p>
							</div>
							<img src={`${images_path}kvpy1.png`} />
						</div>
					</div>
				</div>
			</section>

			<div className="row_full kvpyCntr">
				<div className="container">
					<div className="row_full disp_flex">
						<div className="midkvpy">
							<h3 className="row_full">Committees</h3>
							<ul className="row_full tab">
								<li>
									National Advisory
									<br /> Committee (NAC)
								</li>
								<li>
									Management
									<br /> Committee
								</li>
								<li>
									Core <br />
									Committee
								</li>
							</ul>

							<div className="row_full kvpyAccordian">
								<div className="row_full item">
									<div className="row_full heading">
										NAC Committee
										<i
											className="fa pull-right fa-caret-down"
											aria-hidden="true"
										></i>
									</div>
									<div className="row_full data">
										<ul className="row_full">
											<li>
												<span className="bold">
													KVPY National Advisory Committee (NAC) consists of the
													following members
												</span>
											</li>
											<li>
												<i className="fa fa-circle" aria-hidden="true"></i>
												<span>Secretary, DST, Govt. of India, Chairman</span>
											</li>
											<li>
												<i className="fa fa-circle" aria-hidden="true"></i>
												<span>Director, IISc Co-Chairman</span>
											</li>
											<li>
												<span className="bold">Members:</span>
											</li>
											<li>
												<i className="fa fa-circle" aria-hidden="true"></i>
												<span>
													Prof. K. N. Ganesh, Director, IISER - Tirupati
												</span>
											</li>
											<li>
												<i className="fa fa-circle" aria-hidden="true"></i>
												<span>
													{' '}
													Prof. Dinesh Singh, Chancellor, K R Mangalam
													University
												</span>
											</li>
											<li>
												<i className="fa fa-circle" aria-hidden="true"></i>
												<span>
													{' '}
													Prof. Bimal Roy, Chairperson, National Statistical
													Commission
												</span>
											</li>
											<li>
												<i className="fa fa-circle" aria-hidden="true"></i>
												<span> Prof. R. V. Hosur, TIFR, Mumbai</span>
											</li>
											<li>
												<i className="fa fa-circle" aria-hidden="true"></i>
												<span> Prof. Ramakrishna Ramaswamy, IIT-Delhi</span>
											</li>
											<li>
												<i className="fa fa-circle" aria-hidden="true"></i>
												<span>
													{' '}
													Prof. Chandrima Shaha, Professor of Eminence, NII-New
													Delhi{' '}
												</span>
											</li>
											<li>
												<i className="fa fa-circle" aria-hidden="true"></i>
												<span> Head, INSPIRE,</span>
											</li>
											<li>
												<i className="fa fa-circle" aria-hidden="true"></i>
												<span> DST Convener, KVPY, IISc</span>
											</li>
										</ul>
									</div>
								</div>

								<div className="row_full item">
									<div className="row_full heading">
										KVPY Management Committee
										<i
											className="fa pull-right fa-caret-down"
											aria-hidden="true"
										></i>
									</div>
									<div className="row_full data">
										<ul className="row_full">
											<li>
												<span className="bold">
													Director, IISc - Chairman (Ex-officio)
												</span>
											</li>
											<li>
												<span className="bold">Members:</span>
											</li>
											<li>
												<i className="fa fa-circle" aria-hidden="true"></i>
												<span>
													Prof. T K Chandrashekar, NISER , Bhubaneshwar
												</span>
											</li>
											<li>
												<i className="fa fa-circle" aria-hidden="true"></i>
												<span>Dr. A. Mukhopadhyay, Head, INSPIRE, DST</span>
											</li>
											<li>
												<i className="fa fa-circle" aria-hidden="true"></i>
												<span>
													Prof. R.N. Mukherjee, Director, IISER, Kolkata
												</span>
											</li>
											<li>
												<i className="fa fa-circle" aria-hidden="true"></i>
												<span>
													Prof. N. Satyamurthy, Director, IISER, Mohali
												</span>
											</li>
											<li>
												<i className="fa fa-circle" aria-hidden="true"></i>
												<span>
													Prof. M.K. Choudhuri, VC, Tezpur University, Assam
												</span>
											</li>
											<li>
												<i className="fa fa-circle" aria-hidden="true"></i>
												<span>Prof. Ram Rajasekharan, Director, CFTRI</span>
											</li>
											<li>
												<i className="fa fa-circle" aria-hidden="true"></i>
												<span>Prof. B.K. Thelma, University of Delhi</span>
											</li>
											<li>
												<i className="fa fa-circle" aria-hidden="true"></i>
												<span>
													Prof. W.N. Gade, VC, Savitribai Phule Pune University
												</span>
											</li>
											<li>
												<i className="fa fa-circle" aria-hidden="true"></i>
												<span>Convener, KVPY, from IISc</span>
											</li>
											<li>
												<i className="fa fa-circle" aria-hidden="true"></i>
												<span>Members of the Core Committee (IISc)</span>
											</li>
										</ul>
									</div>
								</div>

								<div className="row_full item">
									<div className="row_full heading">
										Core Committee
										<i
											className="fa pull-right fa-caret-down"
											aria-hidden="true"
										></i>
									</div>
									<div className="row_full data">
										<ul className="row_full">
											<li>
												<span className="bold">
													All the members of this committee are from Indian
													Institute of Science, Bangalore.
												</span>
											</li>
											<li>
												<span className="bold">Members:</span>
											</li>
											<li>
												<i className="fa fa-circle" aria-hidden="true"></i>
												<span>
													Prof. A K Nandakumaran (Convener, KVPY) Dept. of
													Mathematics
												</span>
											</li>
											<li>
												<i className="fa fa-circle" aria-hidden="true"></i>
												<span>
													Prof. Patrick D' Silva Dept. of Biochemistry
												</span>
											</li>
											<li>
												<i className="fa fa-circle" aria-hidden="true"></i>
												<span>
													Prof. Abha Misra (Co-Convener, KVPY) Dept. of
													Instrumentation & Applied Physics
												</span>
											</li>
											<li>
												<i className="fa fa-circle" aria-hidden="true"></i>
												<span>
													Prof. Santanu Mukherjee Dept. of Organic Chemistry
												</span>
											</li>
											<li>
												<i className="fa fa-circle" aria-hidden="true"></i>
												<span>
													Prof. Abhishek Kumar Singh Dept. of Materials Research{' '}
												</span>
											</li>
											<li>
												<i className="fa fa-circle" aria-hidden="true"></i>
												<span>Prof. Thirupathi Gudi Dept. of Mathematics</span>
											</li>
											<li>
												<i className="fa fa-circle" aria-hidden="true"></i>
												<span>Prof. Manish Jain Dept. of Physics</span>
											</li>
											<li>
												<i className="fa fa-circle" aria-hidden="true"></i>
												<span>
													Prof. Vishwesha Guttal Centre for Ecological sciences
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

			<section className="row_full olymregisBox botfixImg mar_t_0">
				<div className="row_full">
					<div className="container">
						<div className="row_full kvbpyelm">
							<h2 className="row_full">Fellowships</h2>
							<ul className="feloshipBox">
								<li style={{ borderRadius: 'none' }}>
									<span>Basic Sciences</span>
									<span>Monthly Fellowship</span>
									<span>Annual Contingency Gran</span>
								</li>
								<li style={{ borderRadius: 'none' }}>
									<span>
										SA/SX/SB - during 1st to 3rd years of -
										B.Sc./B.S./B.Stat./B.Math. / Integrated M.Sc. /M.S.
									</span>
									<span>Rs. 5000</span>
									<span>Rs. 20000</span>
								</li>
								<li style={{ borderRadius: 'none' }}>
									<span>
										SA/SX/SB - during M. Sc. / 4th to 5th years of Integrated
										M.Sc. /M.S./M.Math. /M.Stat.
									</span>
									<span>Rs. 7000</span>
									<span>Rs. 28000</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<img src={`${images_path}ijso_botom.png`} />
			</section>

			<section className="row_full renewalCntr">
				<div className="row_full">
					<div className="container">
						<div className="row_full item">
							<h3>Renewal/Continuation of Fellowship</h3>
							<p>
								The Fellow continues to study Basic Science courses in
								school/junior college/university, and maintains a minimum level
								of academic performance of first class or 60% (50% for
								SC/ST/PWD) marks in aggregate or equivalent grade points and the
								students has to necessarily pass all the subjects prescribed for
								that particular academic year (two semesters in case of semester
								system) and should have obtained the above specified percentage
								of marks. In the course work, in each academic year, the
								marks/grades will have to be certified by the Dean or Head of
								the Institution. The fellowship will be discontinued if the
								above marks/grade is not obtained. However, if the fellow passes
								all the subjects and obtains greater than 60% ((50% for
								SC/ST/PWD) marks in the subsequent years, the fellowship can be
								renewed only from that year onwards, again with the condition
								that the fellow should obtain 60% (50% for SC/ST/PWD) marks in
								aggregate every year. This is effective from 2012 awardees
								onwards. The Student is eligible to receive the KVPY fellowship
								upto Pre-PhD level or 5 years whichever is earlier.{' '}
							</p>
							<p>
								In addition to the above, participation and satisfactory
								performance in the Summer Camp in the first year and Summer
								project every year thereafter is required for renewal of the
								fellowship.
							</p>
							<p>
								{' '}
								KVPY Fellows who opt out of the basic science
								(B.Sc./B.S./B.Stat./B.Math./Int. M.Sc./M.S.) stream at any stage
								will forfeit the Fellowship and Contingency Grant forthwith. The
								fellowship for the students selected under the stream SA/SX/SB
								will be started after the XII Standard/ (+2) / I year UG, only
								if they pursue an undergraduate course in Basic Sciences, that
								are, B.Sc./B.S./B.Stat./B.Math./Int. M.Sc./M.S. in Chemistry,
								Physics, Mathematics, Statistics, Biochemistry, Microbiology,
								Cell Biology, Ecology, Molecular Biology, Botany, Zoology,
								Physiology, Biotechnology, Neurosciences, Bioinformatics, Marine
								Biology, Geology, Human Biology, Genetics, Biomedical Sciences,
								Applied Physics, Materials Science, Environmental Science or
								Geophysics.
							</p>
						</div>

						<div className="row_full item">
							<h3>Summer Program</h3>
							<p>
								Participation and satisfactory performance in the summer
								programme/Project each year from the second year
								(B.Sc./B.S./B.Math./B.Stat /Integrated M.Sc./Integrated M.S.)
								onwards in an academic Institution of National or International
								repute or a DSIR approved research labs (in case of private lab
								or institutions) is mandatory for renewal of the Fellowship. The
								report on the summer programme /project together with the
								assessment report from the mentor will have to be forwarded
								along with the course performance certificate etc. for renewal
								purpose from second year of B.Sc./B.S./B.Math./B.Stat
								/Integrated M.Sc./Integrated M.S. program.
							</p>
						</div>

						<div className="row_full item">
							<h3>Other Privileges</h3>
							<p>
								Each KVPY Fellow will be issued an Identity Card so as to have
								access to National Laboratories/ Universities who have agreed to
								extend special privileges like library, laboratory facilities,
								etc. to KVPY Fellows on production of the ID card.
							</p>
						</div>

						<div className="row_full item">
							<h3>Our Goal</h3>
							<p>
								We hope that the award of the Fellowship to a student acts as an
								encouragement and motivation to take up research in a subject in
								B.S. (Basic Sciences) of their liking that induces the student
								to choose a research career.
							</p>

							<div className="row_full">
								<div className="reviseEgbl">
									Please see the <span>revised eligibility</span> for SA and SB
									candidate in the advertisement for the year KVPY 2020
								</div>
							</div>

							<p>
								<span className="bold">
									The KVPY Fellowships are given to Indian Nationals to Study in
									India
								</span>{' '}
								(Students intending to pursue/pursing under graduate program
								under Distance Education scheme/correspondence course of any
								university are not eligible to apply).
							</p>

							<p>
								<span className="bold">Stream SA :</span> Students enrolled in
								XI Standard (Science Subjects) during the academic year 2020-21
								and having secured a minimum of 75% (65% for SC/ST/PWD) marks in
								aggregate in MATHEMATICS and SCIENCE subjects in the X Standard
								Board examination immediately in the preceding academic year are
								eligible to appear for Aptitude test.
							</p>
							<p>
								{' '}
								The fellowship of the students selected under this stream will
								be activated only if they join an undergraduate course in Basic
								Sciences (B.Sc./B.S./B.Stat./B.Math./Int. M.Sc./Int. M.S.) in
								the academic year 2022-23 after having secured a minimum of 60%
								(50% for SC/ST/PWD) marks in aggregate in Science subjects in
								the XII standard/(+2) Board Examination. During the interim
								period of one year they will be invited for the National Science
								(Vijyoshi) Camp and their travel expenses and local hospitality
								will be met by KVPY.
							</p>

							<p>
								<span className="bold">Stream SX:</span> Students enrolled in
								XII Standard/ (+2) (Science subjects) during the academic year
								2020–21 and aspiring to join undergraduate program in Basic
								Sciences namely Physics/Chemistry/Mathematics & Biology leading
								to B.Sc./B.S./B.Stat./B.Math./Int. M.Sc./Int. M.S. for the
								session 2021–22 provided they have secured a minimum of 75% (65%
								for SC/ST/PWD) marks in aggregate in MATHEMATICS and SCIENCE
								subjects (Physics/Chemistry/ Biology) in the X Standard Board
								Examination during the academic year 2018-19 are eligible to
								appear for the Aptitude test.{' '}
							</p>
							<p>
								The fellowship of the students selected under this stream will
								be activated only if they join an undergraduate course in Basic
								sciences (B.Sc./B.S./B.Stat./B.Math./Int. M.Sc./Int. M.S.) in
								the academic year 2020-21 after having secured a minimum of 60%
								(50% for SC/ST/PWD) marks in aggregate in MATHEMATICS and
								SCIENCE subjects (Physics/Chemistry/Biology) in the XII standard
								Board Examination during academic year 2020-21.
							</p>
							<p>
								{' '}
								Students in their 2nd year of study in Cambridge International
								Examination Board and aspiring to join an UG program (viz.
								B.Sc./B.S./B.Stat./B.Math./Int. M.Sc./Int. M.S.)in Basic
								Sciences namely Physics, Chemistry, Mathematics and Biology in
								the Academic year 2020-21 are eligible to apply provided they
								have secured a minimum of 75% (65% for SC/ST/PWD) marks in
								aggregate in MATHEMATICS and SCIENCE subjects
								(Physics/Chemistry/Biology) in the X Standard Board Examination.
								They must secure 60% (50% for SC/ST/PWD) marks in aggregate in
								MATHEMATICS and SCIENCE subjects (Physics/Chemistry/Biology) in
								the XII standard Board Examination before taking up the
								fellowship, if awarded.
							</p>

							<p>
								<span className="bold">Stream SB:</span> Students enrolled in
								the 1st year of undergraduate program in Basic Sciences namely
								Physics/Chemistry/Mathematics & Biology leading to
								B.Sc./B.S./B.Stat./B.Math./Int. M.Sc./Int. M.S. during the
								academic year 2020–21 and having secured a minimum of 60% (50%
								for SC/ST/PWD) marks in aggregate in MATHEMATICS and SCIENCE
								subjects (Physics/Chemistry/Biology) in the XII Standard Board
								Examination are eligible to appear for the Aptitude test. In the
								1st year final examination of B.Sc./B.S./B.Math./B.Stat./Int.
								M.Sc./Int. M.S. they must secure 60% (50% for SC/ST/PWD) marks
								before taking up the fellowship, if awarded.
							</p>
						</div>

						<div className="row_full item">
							<h3>Empowerment initiative in the KVPY Fellowship Program:</h3>
							<p>
								1. A certain number of additional fellowships exclusively for
								the students belonging to SC/ST community under the various
								streams as stated above will be operated.
							</p>
							<p>
								2. A certain number of fellowships under various streams as
								stated above will be operated exclusively for students under the
								category of Persons With Disability (Physically and Visually
								Challenged)
							</p>
							<p>
								Students enrolled in an undergraduate course in Basic Sciences,
								that is, B.Sc./B.S./B.Stat./B.Math./Int. M.Sc./Int. M.S. in
								Chemistry, Physics, Mathematics, Statistics, Biochemistry,
								Microbiology, Cell Biology, Ecology, Molecular Biology, Botany,
								Zoology, Physiology, Biotechnology, Neurosciences,
								Bioinformatics, Marine Biology, Geology, Human Biology,
								Genetics, Biomedical Sciences, Applied Physics, Geophysics,
								Materials Science or Environmental Science are eligible for KVPY
								fellowship.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="row_full olymregisBox botfixImg mar_t_0">
				<div className="row_full">
					<div className="container">
						<div className="row_full selectionKvpy">
							<div className="left">
								<h3>Selection Procedure</h3>
								<div className="row_full">
									<span>Aptitude Test:</span>
									<p>
										Candidates meeting the eligibility criteria for various
										streams, will be called for aptitude test conducted both in
										Hindi and English at different centers across the country on
										Sunday, the 31st January 2021.
									</p>
								</div>
								<div className="row_full">
									<span>Admit Card</span>
									<p>
										Students may download the admit card for the aptitude test
										from the website from the second week of January 2021
									</p>
								</div>
							</div>
							<div className="right">
								<img className="notabs" src={`${images_path}kvpy2.svg`} />
							</div>
						</div>
					</div>
				</div>
				<img src={`${images_path}ijso_botom.png`} />
			</section>

			<section className="row_full kvpyAppCntr">
				<div className="row_full">
					<div className="container">
						<div className="row_full">
							<div className="kvpyAppBox">
								<img src={`${images_path}kvpyappimg.jpg`} />
							</div>

							<div className="kvpyAppBox">
								<h3 className="row_full">
									Applications
									<span>
										Application for KVPY-2020 must be done online only.
									</span>
								</h3>
								<ul className="row_full">
									<li>
										<span>1</span>Registration
									</li>
									<li>
										<span>2</span>Filling personal and academic details,
										choosing test centres and uploading photo, signature and
										other certificates, as applicable.
									</li>
									<li>
										<span>3</span>Payment of application fees. Please note that
										you must pay the application fee only at the KVPY
										application portal. This can be done by using a Credit Card,
										ATM-Debit Card or Net Banking. No other means of payment
										will be accepted. Once the payment is successful and
										application is submitted, no refund of application fee will
										be done
									</li>
								</ul>

								<h4 className="row_full">
									The application fees for KVPY-2020 are as follows:
								</h4>
								<p style={{ color: '#6E6E6E' }}>
									For General/OBC Category: Rs. 1250, For SC/ST/PWD: Rs. 625
									(Bank Charges extra)
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="row_full olymregisBox kvpyimg ijso mar_t_0">
				<div className="row_full">
					<div className="container">
						<div className="row_full">
							<div className="kvpyFaq">
								<h2 className="row_full">
									<span className="icon"></span>FAQ's
									<br />
									Frequently Asked Question
								</h2>

								<div className="row_full kvpyFaqAcro">
									{dataElm.map((item) => (
										<div className="row_full item">
											<div
												className="row_full heading kvpyAccElm"
												onClick={() => {
													updateVisibleQuestion(item.id);
												}}
											>
												<span>{item.title}</span>
												<i
													className={
														item.id == selectedQues
															? 'fa fadown fa-chevron-up'
															: 'fa fadown fa-chevron-down'
													}
													aria-hidden="true"
												></i>
											</div>
											{item.id == selectedQues ? (
												<div className="row_full data">
													{item.subData.map((datv) => (
														<p>{datv.content}</p>
													))}
												</div>
											) : null}
										</div>
									))}
								</div>
							</div>
							<div className="kvpyFaq">
								<div className="row_full plzTop">
									<span className="fixlicon"></span>
									<p className="fnt_s_18">
										<strong className="bold">
											Please bring the Admit Card along with you for the
											examination. In addition to the admit card, students must
											bring valid School/College ID or Aadhar Card or Passport
											with clear photograph. Produce the same to the invigilator
											on request. Students without the Admit Card and valid ID
											will not be permitted to appear for the aptitude test.
										</strong>
									</p>
									<p>
										1. You are advised to go over to the examination center{' '}
										<span className="bold">at least an hour</span> before the
										commencement of the test.
									</p>
									<p>
										2. The room numbers in which the test will be conducted will
										be displayed in each center.
									</p>
									<p>
										3. You are <span className="bold">NOT</span> permitted to
										carry calculators or any electronic devices.{' '}
										<em>
											Virtual calculators will be made available on the computer
											screen.
										</em>{' '}
										<span className="bold">
											You will be provided sheets for rough work.
										</span>
									</p>
									<p>
										4. Carrying/use of mobile phone, I-pod, portable hard disc,
										pen drive, data card, pagers inside the examination hall is
										strictly prohibited and{' '}
										<span className="bold">
											no provisions have been made for their safe custody at
											test centers
										</span>
									</p>
								</div>
								<div className="row_full plzBot">
									<h4 className="row_full">Result</h4>
									<ul className="row_full">
										<li>
											KVPY Fellowship Award - 2019
											<br />
											<a href="">Click here</a>
										</li>
										<li>
											KVPY 2019 - Results of Aptitude test and Interview
											<br />
											<a href="">Click here to check your marks</a>
										</li>
										<li>
											KVPY Fellowship Award - 2018
											<br />
											<a href="">Click here</a>
										</li>
										<li>
											KVPY 2018 - Results of Aptitude test and Interview
											<br />
											<a href="">Click here to check your marks</a>
										</li>
										<li>
											KVPY Fellowship Award - 2017
											<br />
											<a href="">Click here</a>
										</li>
										<li>
											KVPY 2017 - Results of Aptitude test and Interview
											<br />
											<a href="">Click here to check your marks</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
};

export default Kvpy;
