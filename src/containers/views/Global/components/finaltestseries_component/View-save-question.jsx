import React, { useState, useRef, useEffect } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import renderHTML from 'react-render-html';
import './View-save-question.scss';
const ViewSavQuestion = (props) => {
	useEffect(() => {
		let dx = props.data.mongoData;
		console.log('hi..', dx);
	}, []);

	return (
		<div className="row_full popupCntr">
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
							Question Preview
						</h3>
						<Scrollbars style={{ height: 300 }}>
							<div
								className="question-preview d-flex"
								style={{
									justifyContent: 'flex-start',
									flexDirection: 'column',
								}}
							>
								{props?.data &&
									props?.data?.map((txt) => (
										<>
											<span
												className="question"
												style={{ display: 'flex', flexDirection: 'column' }}
												dangerouslySetInnerHTML={{
													__html: txt.mongoData.problem_description,
												}}
											/>
											<ol className="option">
												{JSON.parse(txt.mongoData.multiple_options).map(
													(option) => (
														<li>
															<span className="mr-3">{option.index + 1} )</span>
															<span
																dangerouslySetInnerHTML={{
																	__html: option.text,
																}}
															/>
														</li>
													)
												)}
											</ol>
										</>
									))}
							</div>
						</Scrollbars>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ViewSavQuestion;
