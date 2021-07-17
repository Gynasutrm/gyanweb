import React from 'react';
import './Ncertsolutionclass12.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';
const Ncertsolutionclass12 = () => {
	return (
		<section className="row_full ncertBg">
			<div className="row_full ncertCntr">
				<div className="container">
					<div className="row_full ncertImgBox">
						<img src={`${images_path}ncert_lib.png`} />
						<h2 className="row_full">NCERT Solutions for Class 12</h2>
					</div>
				</div>
			</div>

			<div className="row_full pad_b_50">
				<div className="container">
					<div className="row_full">
						<div className="ncertItem left">
							<p className="ncertTitle">CBSE Class 12 Study Materials</p>

							<ul className="row_full ncertSolLink">
								<li>
									<a>Revision Notes for Class 12 </a>
								</li>
								<li>
									<a>Important Questions for Class 12</a>
								</li>
								<li>
									<a> Class 12 Maths Formulas</a>
								</li>
								<li>
									<a>CBSE Previous Year Question Paper</a>
								</li>
								<li>
									<a>CBSE Sample Paper for Class 12</a>
								</li>
								<li>
									<a> CBSE Syllabus for Class 12 </a>
								</li>
								<li>
									<a>NCERT Exemplar Solutions for Class 12</a>
								</li>
								<li>
									<a> RD Sharma Solutions for Class 12 </a>
								</li>
								<li>
									<a>JEE Previous Year Question Paper</a>
								</li>
								<li>
									<a>NEET Previous Year Question Paper</a>
								</li>
							</ul>
						</div>

						<div className="ncertItem">
							<h4>NCERT Solutions for Class 12 - All Subjects</h4>
							<p>
								Now get access to comprehensively researched ncert class 12 PDFs
								to prepare well for your exams. 12th is one of the most integral
								grades of every student’s life. It not only is the deciding
								factor for your higher studies but also shapes you as an
								individual. Students tend to go through extreme stress while
								finding the right study material for preparing for their exams.
								NCERT solutions for class 12 are extensively designed after
								thorough research by experts to ensure that students have a less
								stressful and enjoyable learning experience. All the PDF
								solutions are available for all subjects, along with meticulous
								additional question banks to help students reach their highest
								potential. Now visit our official webpage to clear your doubts
								and find the PDFs of chapters you’re looking for.
							</p>
							<h4>NCERT Solutions for Class 12 Books</h4>

							<ul className="row_full ncertSolLink last">
								<li>
									<a>
										{' '}
										NCERT Solutions for Class 12 Maths{' '}
										<i className="fa fa-angle-right" aria-hidden="true"></i>
									</a>
								</li>
								<li>
									<a>
										{' '}
										NCERT Solutions for Class 12 Physics{' '}
										<i className="fa fa-angle-right" aria-hidden="true"></i>
									</a>
								</li>
								<li>
									<a>
										{' '}
										NCERT Solutions for Class 12 Chemistry{' '}
										<i className="fa fa-angle-right" aria-hidden="true"></i>
									</a>
								</li>
								<li>
									<a>
										{' '}
										NCERT Solutions for Class 12 Biology{' '}
										<i className="fa fa-angle-right" aria-hidden="true"></i>
									</a>
								</li>
							</ul>
							<h4>NCERT Solutions for Class 12 in Hindi Medium</h4>

							<ul className="row_full ncertSolLink last">
								<li className="row_full">
									<a>
										NCERT Solutions for Class 12 Maths in Hindi{' '}
										<i className="fa fa-angle-right" aria-hidden="true"></i>
									</a>
								</li>
								<li className="row_full">
									<a>
										NCERT Solutions for Class 12 Physics in Hindi{' '}
										<i className="fa fa-angle-right" aria-hidden="true"></i>
									</a>
								</li>
								<li className="row_full">
									<a>
										NCERT Solutions for Class 12 Chemistry in Hindi
										<i className="fa fa-angle-right" aria-hidden="true"></i>
									</a>
								</li>
								<li className="row_full">
									<a>
										{' '}
										NCERT Solutions for Class 12 Biology in Hindi{' '}
										<i className="fa fa-angle-right" aria-hidden="true"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Ncertsolutionclass12;
