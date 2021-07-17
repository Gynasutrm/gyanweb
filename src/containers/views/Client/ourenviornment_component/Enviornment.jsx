import React from 'react';
import './Enviornment.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';

const Enviornment = () => {
	return (
		<section className="row_full" style={{ paddingBotom: '50px' }}>
			<div
				className="row_full pageBanner"
				style={{ background: `url(${images_path}childSafety.jpg)` }}
			>
				<span className="bgopct"></span>
				<div className="overLay">
					<h2 className="pageName">Our Enviornment</h2>
				</div>
			</div>
			<div className="row_full">
				<div className="container">
					<div className="row_full">
						<div
							className="row_full childContent"
							style={{ paddingTop: '50px' }}
						>
							<div className="childImgBox">
								<img src={`${images_path}child_safety_1.png`} />
							</div>
							<div className="childDataBox right">
								<h3 className="row_full">Child Safety First</h3>
								<p>
									Creating safe learning environment for every child Click{' '}
									<a href="">here to read Gyansutrm’s Child Safety Policy</a>
								</p>
								<p>
									At Gyansutrm, we continue to enhance the online learning space
									for our students to ensure holistic development through
									Innovative and novel learning approaches.
								</p>
								<p>
									Gyansutrm understand the importance of safety and security of
									its students while they consistently adapting to the new
									e-learning environment. Thus, Gyansutrm’s top priorities were
									set with the best interest of our students in mind.
								</p>
							</div>
						</div>

						<div className="row_full childContent">
							<div className="childDataBox">
								<h3 className="row_full">
									We Provide a Safe Environment For Every Child to Learn.
								</h3>
								<p>
									We have become India’s first eduTech company to adopt a ZERO
									TOLERANCE towards unsavory practices like online bullying,
									defamation, stalking, abusive language and any other action
									that makes a child uncomfortable while attending any Paid or
									Free online session(s).
								</p>
								<p>
									{' '}
									We have a competent Child Safety Team that includes legal
									experts, counsellors and external experts and works with the
									leadership. The mandate is to ensure that children are safe
									online on an ongoing basis
								</p>
							</div>
							<div className="childImgBox right">
								<img src={`${images_path}child_safety_2.png`} />
							</div>
						</div>

						<div className="row_full childContent">
							<div className="childImgBox">
								<img src={`${images_path}child_safety_3.png`} />
							</div>
							<div className="childDataBox right">
								<h3 className="row_full">
									Safety Measures at Gyansutrm’s Regular Courses:
								</h3>
								<p>
									The Regular classes are tightly supervised and regulated by
									multiple 'Class Teachers' as well as a “In House expert” in
									charge.
								</p>
								<p>
									The role of a classroom teacher is not only to resolve
									relevant student doubts (LIVE) during school hours, but also
									to moderate the chat conversation. And any inappropriate
									behavior will result in the immediate blockage of the pupil by
									the teacher.
								</p>
							</div>
						</div>

						<div className="row_full childContent">
							<div className="childDataBox">
								<h3 className="row_full">
									The Regular Classes are Integrated With Automated Profanity
									Filters to Check Inappropriate Texts / Pictures / Recordings.
								</h3>
								<p>
									In case of any unwanted / unpleasant behavior by any student
									during class hours towards another student/ or anyone
									concerned, the Class Teachers and / In House expert in charge
									will inform the Child Safety Team (CST) of Gyansutrm, who will
									send a warning (verbal / written) to the student and / or
									parents / guardian of the student.
								</p>
								<p>
									{' '}
									By maintaining the best interests of the child, a suitable
									counselling session may be suggested for the child by the
									Gyansutrm Child Safety Team.
								</p>
							</div>
							<div className="childImgBox right">
								<img src={`${images_path}child_safety_4.jpg`} />
							</div>
						</div>

						<div className="row_full childContent">
							<div className="childImgBox">
								<img src={`${images_path}child_safety_5.png`} />
							</div>
							<div className="childDataBox right">
								<h3 className="row_full">
									Safety measures in Free G-Live Classes:
								</h3>
								<p>
									The Free G-LIVE Classes are integrated with automated
									profanity filters to check inappropriate texts / pictures /
									recordings.
								</p>
								<p>
									{' '}
									Further the chats during the sessions are closely monitored
									and regulated by the moderator of the session.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className="row_full jeeAppBox supportBg envirElm"
				style={{ margin: '0px' }}
			>
				<div className="row_full">
					<div className="container">
						<div className="row_full" style={{ position: 'relative' }}>
							<div className="leftJeeBox">
								<h2 className="row_full">
									Further Steps to Ensure Safety and Positive Learning
									Environment:
								</h2>
								<p>
									Guided by our vision to create the finest cohort of online
									education platforms for student, we understand that the safety
									and wellbeing of every student and educator is absolutely
									essential. To provide a healthy and secure learning
									environment, Gyansutrm has introduced a set of strict ZERO
									Tolerance Policy, which every staff at Gyansutrm/student/
									their parents/ their guardians/ the educators will adhere to
									during and beyond class hours.
								</p>
								<p>
									<strong style={{ fontWeight: '700' }}>
										Please see the list of conduct prohibited in Gyansutrm’s
										LIVE Sessions below:
									</strong>
								</p>
								<ul className="row_full suprdx">
									<li>
										<i className="fa fa-circle" aria-hidden="true"></i>
										<span>
											Disrupt the orderly conduct of classes in the form of
											action, speech or any other form.
										</span>
									</li>
									<li>
										<i className="fa fa-circle" aria-hidden="true"></i>
										<span>
											Using loud or offensive language or displaying temper
											during class hours.
										</span>
									</li>
									<li>
										<i className="fa fa-circle" aria-hidden="true"></i>
										<span>
											Sending abusive messages or threats to any STUDENT/ others
											concerned within the Gyansutrm community, through any
											medium (including Social Media).
										</span>
									</li>
									<li>
										<i className="fa fa-circle" aria-hidden="true"></i>
										<span>
											Defamatory, offensive or derogatory comments, pictures,
											videos regarding Gyansutrm or any of the
											pupils/parents/staff/governors at the Gyansutrm platform
											or on Facebook or other public/social sites.
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
											Use of physical, verbal or written aggression towards
											another adult or child.
										</span>
									</li>
								</ul>
							</div>
							<img
								className="rightfx"
								src={`${images_path}child_safety_6.jpg`}
							/>
						</div>
					</div>
				</div>
			</div>

			<div
				className="row_full"
				style={{
					padding: '30px 0',
					marginTop: '20px',
					borderTop: '1px solid #efefef',
				}}
			>
				<div className="container">
					<div className="row_full">
						<div
							className="row_full childContent"
							style={{ borderBottom: 'none' }}
						>
							<div className="childDataBox lastelm text-center">
								<p>
									In case a child feels uncomfortable in a particular class, or
									if you come across anyone who misbehaves or shows disorderly
									conduct during the sessions/linked to the sessions, you can
									report the incident at the following helpline number:
									________________ or email <a href="">report@Gyansutrm.com</a>,
									in writing or voice record their message (with details of the
									class, and screenshot of the incident if possible) mentioning
									the particular reason/s of their discomfort.
								</p>
								<p>
									The Gyansutrm’s Child Safety team will examine incidents with
									the highest priority.
								</p>
								<p>
									Appropriate action will be taken against anyone who
									contravenes the standards established by Gyansutrm.
								</p>
								<p>
									With the goal of making online education safe for children, we
									ask for your support and cooperation. Team Gyansutrm
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Enviornment;
