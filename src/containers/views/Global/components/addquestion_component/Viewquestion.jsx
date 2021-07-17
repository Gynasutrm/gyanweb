import React, { useState, useRef, useEffect } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import renderHTML from 'react-render-html';
const Viewquestion = (props) => {
	useEffect(() => {
		let dx = props.data.mongoData;
		console.log('hi..', dx);
	}, []);

	return (
		<div className="row_full popupCntr">
			<div className="container">
				<div className="row_full disp_flex">
					<div className="midelmContent position_rel">
						<i
							onClick={() => props.action()}
							className="fa closeRemove fa-times"
							aria-hidden="true"
						></i>
						<div className="row_full">
							<h3
								className="row_full mar_b_15"
								style={{ textTransform: 'initial' }}
							>
								Question Details
							</h3>
							<Scrollbars style={{ height: 300 }}>
								<ul className="questUlElm row_full">
									<li>
										<span>Class</span>
										<span>{props.data.class_name}</span>
									</li>
									<li>
										<span>Stream</span>
										<span>{props.data.stream_name}</span>
									</li>
									<li>
										<span>Sub topic</span>
										<span>{props.data.sub_sub_topic_name}</span>
									</li>
									<li>
										<span>Subject</span>
										<span>{props.data.subject_name}</span>
									</li>

									<li>
										<span>Problem difficulty</span>
										<span>{props.data.problem_difficulty_name}</span>
									</li>
									<li>
										<span>Problem actual type</span>
										<span>{props.data.problem_actual_type_name}</span>
									</li>

									<li>
										<span>Problem description</span>
										<span>
											{renderHTML(props.data.mongoData.problem_description)}
										</span>
									</li>
								</ul>
							</Scrollbars>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Viewquestion;
