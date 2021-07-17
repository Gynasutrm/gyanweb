import React, { useState, useRef, useEffect } from 'react';
import './Exam.scss';
import _ from 'lodash';
import './../../../assets/scss/_common.scss';
import { EXAM } from './ExamConstant';
import * as api from '../../../../Global/apiHelper/Apihelper';
import { Link, useLocation, useHistory } from 'react-router-dom';
import Timer from './CountDown';

const Exam = (props) => {
	const { state } = useLocation();
	const history = useHistory();
	const [questionDetails, setQuestionDetails] = useState(state.startExam);
	const [loader, setLoader] = useState(false);
	const { totalquestions, questions_status, question } = questionDetails;
	const [selectedOption, setSelectionOption] = useState({
		index_id: question[0].serial_no,
		question_id: question[0].question_id,
		ques_response: _.isEmpty(state.startExam.is_already_save[0])
			? null
			: state.startExam.is_already_save[0].correct_options,
	});
	useEffect(() => {
		console.log(state);
	}, []);
	async function postButtonActionApi(url, postParam, isSetData) {
		setLoader(true);
		try {
			let response = await api.httpPostAsync(url, postParam);
			setLoader(false);
			if (isSetData) {
				reset();
				const selectedAns = {
					index_id: response.data.index_id,
					ques_response: _.isEmpty(response.data.is_already_save[0])
						? null
						: response.data.is_already_save[0].correct_options,
				};
				setSelectionOption({ ...selectedOption, ...selectedAns });
				setQuestionDetails(response.data ? response.data : []);
			}
		} catch (e) {}
	}
	async function getButtonActionApi(url, isSubmit) {
		setLoader(true);
		try {
			let response = await api.getAll(url, true);
			setLoader(false);
			if (isSubmit) {
				alert(response.message);
				history.push({
					pathname: '/studentegyan/test',
				});
			} else {
				const selectedAns = {
					index_id: response.data.index_id,
					ques_response: _.isEmpty(response.data.is_already_save[0])
						? null
						: response.data.is_already_save[0].correct_options,
				};
				setSelectionOption({ ...selectedOption, ...selectedAns });
				setQuestionDetails(response.data ? response.data : []);
			}
		} catch (e) {}
	}
	const handleSelectAnswer = (event, selectedOption) => {
		const selectedAnswer = {
			index_id: question[0].serial_no,
			ques_response: JSON.stringify([
				parseInt(EXAM.QUESTION_OPTION_RESPONSE[selectedOption.index]),
			]),
		};
		setSelectionOption({ ...selectedOption, ...selectedAnswer });
	};
	const handleCountDownAlert = (totalTime) => {
		if (totalTime === 1) {
			alert('Time Over');
			getButtonActionApi('commons/submit-test', true);
		}
	};
	const handleButtonAction = (type) => {
		if (type === 'reviewAndNext') {
			postButtonActionApi(
				'commons/mark-for-review',
				{
					index_id: question[0].serial_no,
				},
				true
			);
		} else if (type === 'saveAndNext') {
			if (checkIsLastQuestion()) {
				postButtonActionApi('commons/question-save', selectedOption, true);
			} else {
				if (selectedOption.ques_response) {
					postButtonActionApi(
						'commons/question-save-next',
						selectedOption,
						true
					);
				} else {
					console.log('Please select answer');
				}
			}
		} else if (type === 'clear') {
			postButtonActionApi(
				'commons/response-clear',
				{
					index_id: question[0].serial_no,
				},
				true
			);
		} else if (type === 'skipAndNext') {
			if (!questionDetails.is_last_question) {
				getButtonActionApi(
					`commons/question-index/${question[0].serial_no + 1}`
				);
			}
		} else if (type === 'submit') {
			getButtonActionApi('commons/submit-test', true);
		}
	};
	const handleQuestionIndexClick = (index) => {
		getButtonActionApi(`commons/question-index/${index}`);
	};
	const showQuestionStatusCount = (type) => {
		const filtered = totalquestions.filter((item) => item.status === type);
		return filtered.length;
	};
	const checkIsLastQuestion = () => {
		return totalquestions.length === question[0].serial_no;
	};
	const reset = () => {
		setSelectionOption({});
	};
	return (
		<div className="question-answer">
			{/* <div className="main-header">Header</div> */}
			<div className="content">
				<div className="left-content">
					<div className="sub-header">
						<div className="d-flex align-items-center pl-2 f-s-14">
							Time Left:
							<span className="ml-2 mr-2">
								<Timer
									totalMinutes={state.selectedTest.test_duration}
									alertModeTime={1}
									countDown={handleCountDownAlert}
								></Timer>
							</span>
						</div>
						<div className="marks">
							<span>
								Marks for correct answer:
								<span className="color-dark-green pl-1">
									{question[0].marks}
								</span>
							</span>
							<span className="color-dark-blue pl-1 pr-1">|</span>
							<span>
								Negative Marking:
								<span className="color-light-red">
									{question[0].negative_mark}
								</span>
							</span>
						</div>
					</div>
					<div className="question-wrapper">
						<div className="question-content p-3">
							<div className="question-description">
								<span className="pr-2">
									<strong>{question[0].serial_no})</strong>
								</span>
								<strong>
									<span
										dangerouslySetInnerHTML={{
											__html: question[0].problem_description,
										}}
									/>
								</strong>
							</div>
							<div className="divider mb-2"></div>
							<div className="question-option">
								<ul>
									{JSON.parse(question[0].multiple_options).map((option) => (
										<li className="checkbox">
											<label className="d-flex">
												<input
													type="radio"
													value={EXAM.QUESTION_OPTION_RESPONSE[option.index]}
													className="mr-3 mt-2"
													onChange={(event) =>
														handleSelectAnswer(event, option)
													}
													checked={
														`[${option.index + 1}]` ==
														selectedOption.ques_response
													}
													name={`option_${question[0].question_id}`}
												/>
												<span
													dangerouslySetInnerHTML={{
														__html: option.text,
													}}
												/>
											</label>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="footer d-flex justify-content-between">
							<div>
								<button
									type="button"
									className="btn-sm btn-border-info mr-2"
									onClick={() => handleButtonAction('reviewAndNext')}
								>
									Mark for Review & Next
								</button>
								<button
									type="button"
									className="btn-sm btn-border-info mr-2"
									onClick={() => handleButtonAction('clear')}
								>
									Clear Response
								</button>
								<button
									type="button"
									className="btn-sm btn-border-info mr-2"
									onClick={() => handleButtonAction('skipAndNext')}
								>
									Skip and Next
								</button>
							</div>
							<div>
								<button
									type="button"
									className="btn-sm btn-border-info"
									onClick={() => handleButtonAction('saveAndNext')}
								>
									Save & Next
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="right-content">
					<h4 className="header">{state.selectedTest.test_name}</h4>
					<p>Choose a question</p>

					<div className="question-list">
						<ul>
							{totalquestions.map((x, y) => (
								<li key={x.index}>
									<button
										type="button"
										className={`btn-sm btn-border-info question-index`}
										style={{
											background: `${EXAM.QUESTION_STATUS_COLOR[x.status]}`,
										}}
										onClick={() => handleQuestionIndexClick(x.index)}
									>
										{x.index}
									</button>
								</li>
							))}
						</ul>
					</div>
					<div className="question-type">
						<ul>
							{[
								{ id: 0, type: 'notVerified' },
								{ id: 1, type: 'notAnswered' },
								{ id: 2, type: 'reviewed' },
								{ id: 3, type: 'answered' },
							].map((x, y) => (
								<li className="mb-2" key={x.id}>
									<div className="d-flex">
										<div
											className="count"
											style={{
												background: `${EXAM.QUESTION_STATUS_COLOR[x.type]}`,
											}}
										>
											{showQuestionStatusCount(x.id)}
										</div>
										<div className="label">{EXAM.QUESTION_STATUS[x.type]}</div>
									</div>
								</li>
							))}
						</ul>
					</div>

					<div className="text-center pt-2">
						<button
							type="button"
							className="btn-sm btn-border-info"
							onClick={() => handleButtonAction('submit')}
						>
							Submit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Exam;
