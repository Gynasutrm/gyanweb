import React from 'react';
import './Studymat.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';
const Studymat = () => {
	return (
		<section className="row_full" style={{ paddingBottom: '30px' }}>
			<div
				className="row_full pageBanner"
				style={{ background: `url(${images_path}aboutus.jpg)` }}
			>
				<span className="bgopct"></span>
				<div className="overLay">
					<h2 className="pageName">Free Study Material</h2>
				</div>
			</div>

			<div className="container">
				<div className="row">
					<div className="col col-sm-12 col-md-12 col-lg-12">
						<div className="row_full aboutContent">
							<h3 className="spartner_title font_w_semi-bold">
								Free Study Material
							</h3>
							<span className="section-divider"></span>

							<p>
								For any queries <br />
								<a href="">Contact us on reachus@gyansutrm.com</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Studymat;
