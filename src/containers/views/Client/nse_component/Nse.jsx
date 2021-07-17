import React from 'react';
import './Nse.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';
const Nse = () => {
	return (
		<section className="row_full">
			<div
				className="row_full pageBanner"
				style={{ background: `url(${images_path}aboutus.jpg)` }}
			>
				<span className="bgopct"></span>
				<div className="overLay">
					<h2 className="pageName">NSE</h2>
				</div>
			</div>

			<section className="row_full jeeCntr bgwhite">
				<div className="container">
					<div className="row_full">
						<h2 className="row_full">
							NSE (National Standard Examination)
							<span>
								The International Olympiad (IO) programme follows a five stage
								process Stage one - National Standard Examinations (NSEs) in
								Physics, Chemistry, Biology,Astronomy, Junior Science organized
								by IAPT.
							</span>
						</h2>

						<div className="row_full" style={{ marginTop: '15px' }}>
							<h2 className="row_full">
								International Science Olympiad Stages
								<span>International Science Olympiad Stages</span>
							</h2>
						</div>

						<div className="row_full jeeBox nseList">
							<ul className="row_full">
								<li>
									<span>
										Stage-1 <em></em>
									</span>
									<p>
										<i className="fa fa-circle" aria-hidden="true"></i>
										<em className="rightdx">
											<strong>National Standard Examination (NSO)</strong>
										</em>
									</p>
									<p>
										<i className="fa fa-circle" aria-hidden="true"></i>
										<em className="rightdx">Exam Date: November 2020</em>
									</p>
									<p>
										<i className="fa fa-circle" aria-hidden="true"></i>
										<em className="rightdx">
											Question Pattern: Theoretical objective questions
										</em>
									</p>
									<p>
										<i className="fa fa-circle" aria-hidden="true"></i>
										<em className="rightdx">
											No. of Candidates: 20000-60000 students
										</em>
									</p>
									<p>
										<i className="fa fa-circle" aria-hidden="true"></i>
										<em className="rightdx">Exam Venue: Near your school</em>
									</p>
								</li>

								<li>
									<span>
										Stage-2 <em></em>
									</span>
									<p>
										<i className="fa fa-circle" aria-hidden="true"></i>
										<em className="rightdx">
											<strong>Indian National Olympiad (INO)</strong>
										</em>
									</p>
									<p>
										<i className="fa fa-circle" aria-hidden="true"></i>
										<em className="rightdx">Exam Date: January 2021</em>
									</p>
									<p>
										<i className="fa fa-circle" aria-hidden="true"></i>
										<em className="rightdx">
											Question Pattern: Theoretical objective & long questions
										</em>
									</p>
									<p>
										<i className="fa fa-circle" aria-hidden="true"></i>
										<em className="rightdx">
											No. of Candidates: 300-500 students
										</em>
									</p>
									<p>
										<i className="fa fa-circle" aria-hidden="true"></i>
										<em className="rightdx">
											Exam Venue: 18 centers across India
										</em>
									</p>
								</li>

								<li>
									<span>
										Stage-3 <em></em>
									</span>
									<p>
										<i className="fa fa-circle" aria-hidden="true"></i>
										<em className="rightdx">
											<strong>Orientation-Cum-Selection Camp (OCSC)</strong>
										</em>
									</p>
									<p>
										<i className="fa fa-circle" aria-hidden="true"></i>
										<em className="rightdx">Exam Date: April-June 2021</em>
									</p>
									<p>
										<i className="fa fa-circle" aria-hidden="true"></i>
										<em className="rightdx">
											Question Pattern: Theoretical & experimental sessions
										</em>
									</p>
									<p>
										<i className="fa fa-circle" aria-hidden="true"></i>
										<em className="rightdx">
											No. of Candidates: 35-50 students
										</em>
									</p>
									<p>
										<i className="fa fa-circle" aria-hidden="true"></i>
										<em className="rightdx">
											Exam Venue: Will be directed by the exam authorities
										</em>
									</p>
								</li>
							</ul>

							<div className="row_full padMid">
								<ul className="row_full">
									<li>
										<span>
											Stage-4 <em></em>
										</span>
										<p>
											<i className="fa fa-circle" aria-hidden="true"></i>
											<em className="rightdx">
												<strong>Pre-Departure Camp (PDC)</strong>
											</em>
										</p>
										<p>
											<i className="fa fa-circle" aria-hidden="true"></i>
											<em className="rightdx">Exam Date: July-November 2021</em>
										</p>
										<p>
											<i className="fa fa-circle" aria-hidden="true"></i>
											<em className="rightdx">
												Question Pattern: Theoretical & experimental sessions
											</em>
										</p>
										<p>
											<i className="fa fa-circle" aria-hidden="true"></i>
											<em className="rightdx">
												No. of Candidates: 4-6 Students
											</em>
										</p>
										<p>
											<i className="fa fa-circle" aria-hidden="true"></i>
											<em className="rightdx">Exam Venue: Same as OCSE</em>
										</p>
									</li>

									<li>
										<span>
											Stage-5 <em></em>
										</span>
										<p>
											<i className="fa fa-circle" aria-hidden="true"></i>
											<em className="rightdx">
												<strong>International Science Olympiad (ISO)</strong>
											</em>
										</p>
										<p>
											<i className="fa fa-circle" aria-hidden="true"></i>
											<em className="rightdx">Exam Date: July-December 2021</em>
										</p>
										<p>
											<i className="fa fa-circle" aria-hidden="true"></i>
											<em className="rightdx">
												Question Pattern: Theory & experiment competition
											</em>
										</p>
										<p>
											<i className="fa fa-circle" aria-hidden="true"></i>
											<em className="rightdx">
												No. of Candidates: 4-6 students
											</em>
										</p>
										<p>
											<i className="fa fa-circle" aria-hidden="true"></i>
											<em className="rightdx">
												Exam Venue: International Venue
											</em>
										</p>
									</li>
								</ul>
							</div>
						</div>

						<div className="row_full imporArea">
							<h2 className="row_full">
								Important Dates for Examination and Events
								<span>Important Dates for INO Exam</span>
							</h2>
						</div>

						<div className="row_full jeenewBox nseBelm">
							<ul className="row_full midTable twice">
								<li className="titleList">
									<span>Event</span>
									<span>Start Date</span>
								</li>
								<li>
									<span>Registration for centres </span>
									<span>To be announced </span>
								</li>
								<li>
									<span>Enrollment of candidates </span>
									<span>October 15, 2020 </span>
								</li>
								<li>
									<span>Last date for payment of fee and enrollment </span>
									<span>December 5, 2020 </span>
								</li>
								<li>
									<span>Display of marks </span>
									<span>February 2021 </span>
								</li>
								<li>
									<span>
										Announcement of list of candidates of MI & above MAS{' '}
									</span>
									<span>To be announced </span>
								</li>
								<li>
									<span>The final list of selected candidates for INO</span>
									<span>To be announced</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section className="row_full eligibalCntr">
				<div className="container">
					<div className="row_full">
						<div className="nseMeritBox">
							<div className="row_full">
								<h3 className="row_full">Eligibility</h3>
								<ul className="row_full">
									<li>1. Must be eligible to hold an Indian passport.</li>
									<li>
										2. Date of birth between July 1, 2001 and June 30, 2006,
										both days inclusive.
									</li>
									<li>
										3. Must be residing and studying in India since 30 November
										2018 or earlier. Must be studying in an Indian school system
										since 30 November 2018 or earlier.
									</li>
									<li>
										4. Must not have passed (or scheduled to complete) class XII
										board examination or equivalent earlier than November 30,
										2020.
									</li>
									<li>
										5. Must not have commenced (or planning to commence) studies
										in a university or equivalent institution by June 1, 2021.
									</li>
									<li>6. Must not be appearing for NSEJS 2020.</li>
								</ul>
							</div>

							<div className="row_full">
								<h3 className="row_full">Minimum Admissible Score (MAS) :</h3>
								<p className="row_full">
									To be eligible among 300 students for the evaluation of
									International Olympiad Qualifier (Part II) leading to the
									International Olympiad, a candidate must secure a score equal
									to or greater than a Minimum Admissible Score (MAS). The MAS
									for a given subject will be 50% of the average of the top ten
									scores in that subject rounded off to the nearest lower
									integer.
								</p>
							</div>

							<div className="row_full">
								<h3 className="row_full">Merit Index Clause:</h3>
								<p className="row_full">
									There will be a high score called the Merit Index (MI)
									associated with each subject in IOQ (Part I). The MI in a
									subject is defined as 80% of the average of the top ten scores
									in that subject rounded off to the nearest lower integer. All
									students with a score equal to or greater than merit index MI
									for the subject will automatically qualify for the IOQ (Part
									II) in that subject. For example, if the average of top ten
									scores in a certain subject is 92, then 80% of this is 73.6.
									Then the MI in that subject will be 73. All candidates with a
									score equal to or above 73 in IOQ (Part I) of that subject
									will automatically qualify for the evaluation of IOQ (Part
									II).
								</p>
							</div>

							<div className="row_full">
								<h3 className="row_full">Minimum Representation Clause:</h3>
								<p className="row_full">
									Notwithstanding the proportional representation clause the
									number of students selected for evaluation of IOQ (Part II)
									from each State and UT must be at least five, provided that
									the eligibility clause is satisfied. The above criteria are
									illustrated with the following examples: (i) Let the quota on
									the basis of the Proportional Representation Clause (c) for a
									State S be 20. Suppose 1 the number of students satisfying the
									Merit Index Clause (b) in a subject is 10. These 10 students
									will qualify for the evaluation of IOQ (Part II) in the given
									subject and an additional 10 students from the State S in the
									given 1 subject will be selected merit-wise, provided they
									satisfy the Eligibility Clause (a). (ii) Let the quota on the
									basis of the Proportional Representation Clause (c) for a
									State S be 20. Suppose the number of students satisfying the
									Merit Index Clause (b) in a subject is 30. In this case, all
									30 students will qualify for the evaluation of IOQ (Part II)
									in the given subject, and there will be no further selection
									from the StateS.
								</p>
							</div>

							<div className="row_full">
								<h3 className="row_full">Minimum Total Number Clause:</h3>
								<p className="row_full">
									In each subject, after all the above criteria have been
									applied, it is possible that the target number of 300 students
									to be selected for the evaluation of IOQ (Part II) is not
									reached (due to non-availability of enough number of students
									in some states who satisfy Minimum Admissible Score Clause .
									In such an event, additional students will be selected purely
									merit-wise, provided Eligibility Clause (a) is satisfied, till
									the target number of 300 is reached. Other clauses will not
									apply for these students. In case of a tie at the last
									position, all students with the same marks at this position
									will qualify for the evaluation of IOQ(Part II). There will be
									no other criterion or provision for the evaluation of IOQ
									(Part II).
								</p>
							</div>
						</div>

						<div className="nseMeritBox right">
							<div className="row_full">
								<h3 className="row_full">Language of Question Paper</h3>
								<p className="row_full">
									Question paper will be in English, Hindi, Gujarati, Bangla &
									Tamil (option during enrolment)
								</p>
							</div>

							<div className="row_full">
								<h3 className="row_full">
									Question Paper Pattern of IOQ Part I
								</h3>
								<ul className="row_full">
									<li>
										A) 24 multiple choice questions with one alternative
										correct. +3 marks credit for correct choice. -1 mark penalty
										for incorrect choice.
									</li>
									<li>
										B) 08 multiple choice questions with one or more than one
										correct alternatives. To get credit, all the correct
										option(s) and no incorrect option(s) should be marked.
									</li>
								</ul>
							</div>

							<div className="row_full">
								<h3 className="row_full">
									What are the details of the entire selection procedure?
								</h3>
								<p className="row_full">
									The aim of the first stage examination is to have a wide
									reach. To progressively increase this reach and to attain
									nationwide representation for Stage II without over all
									compromising on merit, the selection for the Stage II
									examination, i.e., International Olympiad Qualifier (Part II)
									the following scheme (Points (a) to (f)) is adopted.
								</p>
							</div>

							<div className="row_full">
								<h3 className="row_full">
									Proportional Representation Clause:
								</h3>
								<p className="row_full">
									Students from all States and UTs in India need to be
									encouraged to appear for the first stage examination and a
									nationwide representation for IOQ (Part II) is desirable. The
									quota for each State/UT used in National Talent Search
									Examination (NTSE) 2013-14, a nationwide competitive
									examination is used as the baseline for calculating the number
									of students qualifying for IOQ (Part II) in every subject from
									centres in that State or UT. Suppose the NTSE quota is S for a
									State, and the total for all States and UTs is T, then the
									total number of students to be selected for IOQ (Part II) from
									that State would be S/T times 300, rounded off to the nearest
									higher integer. This number will include those selected on the
									basis of the Merit Index. In the event of tie at the last
									position in the list, all students with same marks at this
									position will qualify for the evaluation of IOQ (Part II). The
									selected students must nevertheless satisfy the eligibility
									clause. The number to be selected from all the centres in each
									State or UT will be displayed on the IAPT and HBCSE websites.{' '}
									<a href="">
										(https://www.iapt.org.in;
										http://olympiads.hbcse.tifr.res.in)
									</a>
								</p>
							</div>

							<div className="row_full">
								<h3 className="row_full">
									Previous International Representation Clause:
								</h3>
								<p className="row_full">
									Candidates who have represented India in the International
									Olympiad on a previous occasion (IOAA, IBO, IChO, IJSO, IPhO,
									APhO and IAO-Jr.) will qualify for evaluation of IOQ part II
									in the respective subjects (irrespective of their score in IOQ
									part I). Such student shell be required to make a written
									request for the same to the National Coordinator Science
									Olympiads.
								</p>
							</div>

							<div className="row_full">
								<h3 className="row_full">
									Eligibility for IOQA and OCSC-Astronomy in 2021
								</h3>
								<p className="row_full">
									In order to encourage younger students to participate in
									Astronomy olympiad. The rules are as below:
								</p>

								<ul className="row_full">
									<li>
										1. The eligibility criterian for IOQA(Part I) has been given
										above.
									</li>
									<li>
										2. The student pool of IOQA(Part I)will be divided into two
										groups:
										<ul>
											<li>
												(i). Group A:Students who are in Class XII as of Nov.
												30, 2020.
											</li>
											<li>
												(ii). Group B: Students who are in Class XI or lower as
												of November 30, 2020.
											</li>
										</ul>
									</li>
									<li>
										3. For the evaluation of IOQA (Part II), a target number of
										250 students will be selected from each group. Thus, a total
										of 500 students will be selected.
									</li>
									<li>
										4. The MI and MAS will be calculated separately for each of
										these groups.
									</li>
									<li>
										5. All the clauses [(a) to (f) above)] of selection will be
										applied separately to each group.
									</li>
									<li>
										6. The question papers of IOQA (Part I) and IOQA (Part II)
										will be identical for the two groups.
									</li>
								</ul>

								<p className="row_full">
									There will be no other criterion or provision for the
									evaluation of IOQA (Part II). All these IOQ (Part II) are to
									be organized by HOMI BHABHA CENTRE for SCIENCE EDUCATION
									(HBCSE) Mumbai. For the next stage students are chosen on the
									basis of their performance at these IOQ. These students in
									each subject attend Orientation Cum Selection Camp (OCSC) in
									respective discipline for about 2 weeks at HOMI BHABHA CENTRE
									for SCIENCE EDUCATION (HBCSE) Mumbai. Indian team to
									participate in International Olympiad is selected from the
									OCSC in respective subjects.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
};

export default Nse;
