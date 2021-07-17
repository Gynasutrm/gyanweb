import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { useParams, useLocation } from 'react-router-dom';
import * as api from '../../apiHelper/Apihelper';
import _ from 'lodash';
import './Test4.css';
import { API_URL } from '../../../../../common/constant/api-constant';
import {
	toastEmitterError,
	toastEmitterSuccess,
} from '../../../../../common/component/Toaster/ToastEmitter';
import ViewSavQuestion from '../finaltestseries_component/View-save-question';

const Test4 = () => {
	const { state } = useLocation();
	const [openpopUp, setOpenpopUp] = useState(false);
	const [viewdata, setViewdata] = useState('');
	const [openview, setOpenview] = useState(false);
	const [gettoken, setGettoken] = useState(localStorage.getItem('token'));
	const [loader, setLoader] = useState(false);
	const [questionList, setQuestionList] = useState([]);
	const [selectedQuestionList, setSelectedQuestionList] = useState([]);
	const [selectedQuestionArray, setSelectedQuestionArray] = useState([]);
	const [selectedAllFieldData, setSelectedFieldData] = useState({
		streamId: '',
		classId: '',
		examTypeId: '',
		subExamTypeId: '',
		subjectExamTypeId: '',
		subjectId: '',
		topicId: '',
		subTopicId: '',
		subSubTopicId: '',
		problemDiffTypeId: '',
	});

	var test = [];

	const [streamlist, setStreamList] = useState([]);
	const [classList, setClassList] = useState([]);
	const [examTypeList, setExamTypeList] = useState([]);
	const [subExamTypeList, setSubExamTypeList] = useState([]);
	const [subjectList, setSubjectList] = useState([]);
	const [topicList, setTopicList] = useState([]);
	const [subTopicList, setSubTopicList] = useState([]);
	const [subSubTopicList, setSubSubTopicList] = useState([]);
	const [problemDifficultyList, setProblemDifficultyList] = useState([]);

	const [streadata, setStreadata] = useState({
		stream_name: '',
		stream_id: '',
	});
	const handleSelectChange = (event, key) => {
		const currentState = {
			...state,
			[key]: !_.isEmpty(event.target.value) ? parseInt(event.target.value) : '',
		};
		if (key === 'examTypeId') {
			getApiData(setSubExamTypeList, 'exam-types/get-sub-exams', [
				event.target.value,
			]);
		} else if (key === 'subjectId') {
			getApiData(setTopicList, 'topics/topic-by-subject', [event.target.value]);
		} else if (key === 'topicId') {
			getApiData(setSubTopicList, 'sub-sub-topics/topic-wise-sub-topic', [
				event.target.value,
			]);
		} else if (key === 'subTopicId') {
			getApiData(
				setSubSubTopicList,
				'sub-sub-topics/subtopic-wise-sub-subtopic',
				[event.target.value]
			);
		} else if (key === 'subjectExamTypeId') {
			getApiData(setTopicList, 'topics/topic-by-subject', [event.target.value]);
		}
		setSelectedFieldData((prevState) => ({
			...prevState,
			...currentState,
		}));
		getFilterQuestion(currentState);
	};
	const resetField = () => {
		console.log('Reset');
	};
	const viewData = (objData) => {
		setOpenpopUp(!openpopUp);
		openpopUp == false ? setViewdata('') : setViewdata(objData);
		setViewdata(objData);
	};
	const getApiData = (setIdentifierState, url, params) => {
		setLoader(true);
		if (_.size(params)) {
			params.forEach((param) => {
				url = `${url}/${param}`;
			});
		}
		api.httpGet(url).then((response) => {
			setLoader(false);
			// if (isMounted) {
			setIdentifierState(response);
			// }
		});
	};

	useEffect(() => {
		let isMounted = true;
		setSelectedFieldData((prevState) => ({
			...prevState,
			...state,
		}));
		getAllStream(isMounted);
		getAllClass(isMounted);
		getAllSubject(isMounted);
		getProblemDifficultyList(isMounted);
		getExamTypeList(isMounted);
		/**
		 * get filter question list
		 */
		getFilterQuestion(state);
		return () => (isMounted = false);
	}, []);

	async function getExamTypeList(isMounted) {
		setLoader(true);
		try {
			let response = await api.getAll('exam-types');
			setLoader(false);
			if (isMounted) {
				setExamTypeList(response.data);
			}
		} catch (e) {}
	}
	async function getProblemDifficultyList(isMounted) {
		setLoader(true);
		try {
			let response = await api.getAll('problem-actual-types');
			setLoader(false);
			if (isMounted) {
				setProblemDifficultyList(response.data);
			}
		} catch (e) {}
	}
	async function getAllClass(isMounted) {
		setLoader(true);
		try {
			let response = await api.getallclass();
			setLoader(false);
			if (isMounted) {
				setClassList(response);
			}
		} catch (e) {}
	}
	async function getAllSubject(isMounted) {
		setLoader(true);
		try {
			let response = await api.getallsubject();
			setLoader(false);
			if (isMounted) {
				setSubjectList(response.data);
			}
		} catch (e) {}
	}
	async function getAllStream(isMounted) {
		setLoader(true);
		try {
			let response = await api.getallstream();
			setLoader(false);
			if (isMounted) {
				setStreamList(response.data);
			}
		} catch (e) {}
	}
	async function getFilterQuestion(param) {
		const postParam = {
			test_id: param.testId ? param.testId : '',
			stream_id: param.streamId ? param.streamId : '',
			class_id: param.classId ? param.classId : '',
			subject_id: param.subjectId ? param.subjectId : '',
			topic_id: param.topicId ? param.topicId : '',
			sub_topic_id: param.subTopicId ? param.subTopicId : '',
			sub_sub_topic_id: param.subSubTopicId ? param.subSubTopicId : '',
			exam_type_id: param.examTypeId ? param.examTypeId : '',
			sub_exam_type_id: param.subExamTypeId ? param.subExamTypeId : '',
			problem_actual_type_id: '',
		};
		try {
			let response = await api.httpPost(
				'test-questions/filter-question',
				postParam
			);
			setLoader(false);
			// setQuestionList(resetSelectionQuestionList(response));
			setQuestionList(response.ques_not_in_test);
			setSelectedQuestionList(response.ques_in_test);
		} catch (e) {}
	}

	const handleInputChange = (event, id, isSource) => {
		if (isSource) {
			questionList.forEach((item) => {
				if (item.question_id === parseInt(id)) {
					item.isSelected = event.target.checked;
				}
			});
			setQuestionList((prevState) => questionList);
		} else {
			selectedQuestionList.forEach((item) => {
				if (item.question_id === parseInt(id)) {
					item.isSelected = event.target.checked;
				}
			});
			setSelectedQuestionList((prevState) => selectedQuestionList);
		}
	};
	const saveQuestionDetails = () => {
		if (!validateSelectedQuestion()) {
			const streamInput = {
				test_id: state.testId,
				questionArr: selectedQuestionList.map((item) => {
					return {
						question_id: parseInt(item.question_id),
						marks: parseInt(item.marks),
						negative_mark: item.negative_mark
							? parseInt(item.negative_mark)
							: null,
						serial_no: parseInt(item.serial_no),
					};
				}),
			};
			fetch(`${API_URL.BASE_URL}test-questions/update-index-marks`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: gettoken,
				},
				body: JSON.stringify(streamInput),
			})
				.then((response) => response.json())
				.then((responseData) => {
					setLoader(false);
					if (responseData.statusCode == 200) {
						toastEmitterSuccess(responseData.message);
					} else {
						toastEmitterError(responseData.message);
					}
				})
				.catch((error) => {
					console.error(error);
				});
		}
	};
	const submitQuestionDetails = () => {
		// if (!validateSelectedQuestion()) {
		const streamInput = {
			test_id: state.testId,
		};
		fetch(`${API_URL.BASE_URL}test-questions/final-submit`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: gettoken,
			},
			body: JSON.stringify(streamInput),
		})
			.then((response) => response.json())
			.then((responseData) => {
				if (responseData.statusCode == 200) {
					toastEmitterSuccess(responseData.message);
					if (responseData.data) {
						viewData(responseData.data);
					}
				} else {
					toastEmitterError(
						`Before submit, Please click save. ${responseData.message}`
					);
				}
				setLoader(false);
			})
			.catch((error) => {
				console.error(error);
			});
		// }
	};
	const addRemoveQuestion = (selectedQuestionList, URL, method) => {
		const streamInput = {
			test_id: state.testId,
			questionArr: selectedQuestionList.map((item) => item.question_id),
		};
		let header = {
			method: method,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: gettoken,
			},
		};
		if (method === 'POST') {
			header = {
				...header,
				body: JSON.stringify(streamInput),
			};
		}
		fetch(`${API_URL.BASE_URL}${URL}`, header)
			.then((response) => response.json())
			.then((responseData) => {
				setLoader(false);
			})
			.catch((error) => {
				console.error(error);
			});
	};
	const validateSelectedQuestion = () => {
		let isError = false;
		selectedQuestionList.forEach((item) => {
			item.serial_no = item.serial_no ? item.serial_no.toString() : '';
			item.marks = item.marks ? item.marks.toString() : '';
			if (_.isEmpty(item.serial_no)) {
				isError = true;
				toastEmitterError('Serial No is required.');
			} else if (_.isEmpty(item.marks)) {
				isError = true;
				toastEmitterError('Marks is required.');
			}
		});
		return isError;
	};
	const onInputChangeHandler = (event, selectedQuestion, key) => {
		const updateQuestionList = selectedQuestionList.map((item) => {
			if (item.question_id === selectedQuestion.question_id) {
				return {
					...item,
					[key]: event.target.value,
				};
			}
			return item;
		});
		setSelectedQuestionList((prevState) => {
			return [...updateQuestionList];
		});
	};
	const resetSelectionQuestionList = (list) => {
		return list.map((item) => ({ ...item, isSelected: false }));
	};
	const handleOnClickAddRemoveList = (isAdd) => {
		if (isAdd) {
			let selectedList = questionList.filter((item) => item.isSelected);
			const sourceList = questionList.filter((item) => !item.isSelected);
			selectedList = selectedList.map((item) => {
				return {
					...item,
					isSelected: false,
					serial_no: '',
					positive_mark: '',
					negative_mark: '',
				};
			});
			setSelectedQuestionList((prevState) => {
				return [...prevState, ...selectedList];
			});
			setQuestionList((prevState) => sourceList);
			addRemoveQuestion(
				[...selectedQuestionList, ...selectedList],
				'test-questions/add-questions',
				'POST'
			);
		} else {
			const selectedList = selectedQuestionList.filter(
				(item) => item.isSelected
			);
			const sourceList = selectedQuestionList.filter(
				(item) => !item.isSelected
			);
			setSelectedQuestionList(resetSelectionQuestionList(sourceList));
			setQuestionList(
				resetSelectionQuestionList([...questionList, ...selectedList])
			);
			selectedList.forEach((item) => {
				addRemoveQuestion(
					sourceList,
					`test-questions/delete-qsn/${state.testId}/${item.question_id}`,
					'DELETE'
				);
			});
		}
	};

	return (
		<div className="row_full">
			{openpopUp ? <ViewSavQuestion action={viewData} data={viewdata} /> : null}
			{openview ? (
				<div className="row_full popupCntr">
					<div className="container">
						<div className="row_full disp_flex">
							<div
								className="midelmContent position_rel"
								style={{ width: '35%' }}
							>
								<div className="row_full" style={{ padding: '0px 10px' }}>
									<h3
										className="row_full mar_b_15"
										style={{ textTransform: 'initial' }}
									>
										Title
									</h3>

									<div className="row_full mar_b_15">
										<input
											type="text"
											name="question_mark"
											value=""
											className="row_full form-control"
											placeholder="Question Mark"
										/>
									</div>
									<div className="row_full mar_b_15">
										<input
											type="text"
											name="s_no"
											value=""
											className="row_full form-control"
											placeholder="S.No"
										/>
									</div>

									<div className="row_full">
										<a className="okAction" hre="javascript:void(0)">
											Ok
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : null}

			<div className="container">
				<div className="row_full disp_flex">
					{state ? (
						<div className="middleboxArea larger">
							<h3 className="row_full mar_b_25 adqtitle">Add Question</h3>

							<div className="row_full mar_b_15">
								<div className="grid_32 mar_r_15">
									<span className="row_full">Stream</span>
									<select
										name="stream_name"
										className="form-control grid_75"
										value={state.streamId}
									>
										<option value="">Select stream</option>
										{streamlist.map((txt, index) => (
											<option value={txt.stream_id} key={index}>
												{txt.stream_name}
											</option>
										))}
									</select>
								</div>

								<div className="grid_32 mar_r_15">
									<span className="row_full">Class</span>
									<select
										name="stream"
										className="row_full form-control"
										value={state.classId}
									>
										<option value="">Select class</option>
										{classList.map((txt, index) => (
											<option value={txt.class_id} key={index}>
												{txt.class_name}
											</option>
										))}
									</select>
								</div>

								<div className="grid_32">
									<span className="row_full">Exam Type</span>
									<select
										name="stream"
										className="row_full form-control"
										value={selectedAllFieldData.exam_type}
										onChange={(event) =>
											handleSelectChange(event, 'examTypeId')
										}
									>
										<option value="">Select Exam Type</option>
										{examTypeList.map((txt, index) => (
											<option value={txt.exam_type_id} key={index}>
												{txt.exam_type_name}
											</option>
										))}
									</select>
								</div>
							</div>

							<div className="row_full mar_b_15">
								<div className="grid_32 mar_r_15">
									<span className="row_full">Sub exam type</span>
									<select
										name="stream"
										className="row_full form-control"
										value={selectedAllFieldData.sub_exam_type}
										onChange={(event) =>
											handleSelectChange(event, 'subExamTypeId')
										}
									>
										<option value="">Select Sub Exam Type</option>
										{subExamTypeList.map((txt, index) => (
											<option value={txt.sub_exam_type_id} key={index}>
												{txt.sub_exam_type_name}
											</option>
										))}
									</select>
								</div>
								<div className="grid_32 mar_r_15">
									<span className="row_full">Subject</span>
									<select
										name="stream"
										className="row_full form-control"
										onChange={(event) => handleSelectChange(event, 'subjectId')}
									>
										<option value="">Select Subject Type</option>
										{subjectList.map((txt, index) => (
											<option value={txt.subject_id} key={index}>
												{txt.subject_name}
											</option>
										))}
									</select>
								</div>

								<div className="grid_32">
									<span className="row_full">Chapter</span>
									<select
										name="topic"
										className="row_full form-control"
										onChange={(event) => handleSelectChange(event, 'topicId')}
									>
										<option value="">Select Chapter</option>
										{topicList.map((txt, index) => (
											<option value={txt.topic_id} key={index}>
												{txt.topic_name}
											</option>
										))}
									</select>
								</div>
							</div>
							<div className="row_full mar_b_15">
								<div className="grid_32 mar_r_15">
									<span className="row_full">Topic</span>
									<select
										name="sub_topic"
										className="row_full form-control"
										onChange={(event) =>
											handleSelectChange(event, 'subTopicId')
										}
									>
										<option value="">Select topic</option>
										{subTopicList.map((txt, index) => (
											<option value={txt.sub_topic_id} key={index}>
												{txt.sub_topic_name}
											</option>
										))}
									</select>
								</div>
								<div className="grid_32 mar_r_15">
									<span className="row_full">Sub Topic</span>
									<select
										name="sub_sub_topic"
										className="row_full form-control"
										onChange={(event) =>
											handleSelectChange(event, 'subSubTopicId')
										}
									>
										<option value="">Select Sub Topic</option>
										{subSubTopicList.map((txt, index) => (
											<option value={txt.sub_sub_topic_id} key={index}>
												{txt.sub_sub_topic_name}
											</option>
										))}
									</select>
								</div>

								<div className="grid_32">
									<span className="row_full">Problem difficulty</span>
									<select
										name="problem_difficulty"
										className="row_full form-control"
										onChange={(event) =>
											handleSelectChange(event, 'problemDiffTypeId')
										}
									>
										<option value="">Select Problem difficulty</option>
										{problemDifficultyList.map((txt, index) => (
											<option value={txt.problem_type_id} key={index}>
												{txt.problem_type_name}
											</option>
										))}
									</select>
								</div>
							</div>

							<div className="row_full mar_b_15">
								<div className="grid_45 padding_r_10">
									<span className="row_full">Source Question List</span>
									<div className="row_full itemCntr">
										<Scrollbars style={{ height: 300 }}>
											{questionList.map((txt, v) => (
												<ul className="row_full">
													<li>
														<div className="checkbox">
															<label>
																<input
																	type="checkbox"
																	value=""
																	onChange={(event) =>
																		handleInputChange(
																			event,
																			txt.question_id,
																			true
																		)
																	}
																/>
																<span
																	dangerouslySetInnerHTML={{
																		__html: txt.mongoData.problem_description,
																	}}
																/>
																<ol>
																	{JSON.parse(
																		txt.mongoData.multiple_options
																	).map((option) => (
																		<li>
																			<span style={{ width: '8%' }}>
																				{option.index + 1} )
																			</span>
																			<span
																				dangerouslySetInnerHTML={{
																					__html: option.text,
																				}}
																			/>
																		</li>
																	))}
																</ol>
															</label>
														</div>
													</li>
												</ul>
											))}
										</Scrollbars>
									</div>
								</div>

								<div className="grid_10">
									<button
										className="addMore"
										onClick={() => handleOnClickAddRemoveList(true)}
									>
										Add
									</button>
									<button
										className="addMore mt-1"
										onClick={() => handleOnClickAddRemoveList(false)}
									>
										Remove
									</button>
								</div>

								<div className="grid_45 float_right">
									<span className="row_full">Selected Question List</span>
									<div className="row_full itemCntr" id="datalist">
										<Scrollbars style={{ height: 300 }}>
											{selectedQuestionList.map((txt, v) => (
												<ul className="row_full">
													<li>
														<div className="checkbox">
															<label>
																<input
																	type="checkbox"
																	value=""
																	onChange={(event) =>
																		handleInputChange(
																			event,
																			txt.question_id,
																			false
																		)
																	}
																/>
																<span
																	dangerouslySetInnerHTML={{
																		__html: txt.mongoData.problem_description,
																	}}
																/>
															</label>
														</div>
														<div className="row_full mar_b_10 d-flex mt-3">
															<div className="mr-2">
																<span className="">Serial No</span>
																<input
																	type="number"
																	name="serial_no"
																	required
																	value={txt.serial_no}
																	className="w-100 form-control"
																	onChange={(event) =>
																		onInputChangeHandler(
																			event,
																			txt,
																			'serial_no'
																		)
																	}
																/>
															</div>

															<div className="mr-2">
																<span className="">Marks</span>
																<input
																	type="number"
																	name="marks"
																	required
																	value={txt.marks}
																	className="w-100 form-control"
																	onChange={(event) =>
																		onInputChangeHandler(event, txt, 'marks')
																	}
																/>
															</div>

															<div className="mr-2">
																<span className="">Negative Marks</span>
																<input
																	type="number"
																	name="negative_mark"
																	required
																	value={txt.negative_mark}
																	onChange={(event) =>
																		onInputChangeHandler(
																			event,
																			txt,
																			'negative_mark'
																		)
																	}
																	className="w-100 form-control"
																/>
															</div>
														</div>
													</li>
												</ul>
											))}
										</Scrollbars>
									</div>
								</div>
							</div>

							<div className="row_full">
								<button
									className="pull-right btn btn-success"
									disabled={_.size(selectedQuestionList) ? false : true}
									onClick={submitQuestionDetails}
								>
									Submit
								</button>
								<button
									className="pull-right btn btn-success mr-3"
									disabled={_.size(selectedQuestionList) ? false : true}
									onClick={saveQuestionDetails}
								>
									Save
								</button>
							</div>
						</div>
					) : (
						''
					)}
				</div>
			</div>
		</div>
	);
};

export default Test4;
