import React, { useState, useRef, useEffect } from 'react';
import * as api from '../../apiHelper/Apihelper';
import './Addcourses.css';
import Viewcourses from './Viewcourses';

const images_path = process.env.PUBLIC_URL + '/assets/images/';

const mediumlist = [
	{ id: 1, medium_name: 'English', medium_id: 1 },
	{ id: 1, medium_name: 'Hindi', medium_id: 2 },
];

const Addcourses = () => {
	const [loader, setLoader] = useState(false);
	const [updateId, setUpdateId] = useState('');
	const [errMsg, setErrMsg] = useState('');

	const [openpopUp, setOpenpopUp] = useState(false);

	const [openview, setOpenview] = useState(false);

	const [courselistdata, setCourselistdata] = useState([]);

	const [gettoken, setGettoken] = useState(localStorage.getItem('token'));
	const [examlist, setExamlist] = useState([]);
	const [subexamlist, setSubexamlist] = useState([]);
	const [streamlist, setStreamlist] = useState([]);
	const [courselist, setCourselist] = useState([]);
	const [classlist, setClasslist] = useState([]);

	const [hideshow, setHideshow] = useState(false);
	const [getData, setGetData] = useState([]);

	const [getDataId, setGetDataId] = useState([]);

	const [hideshow1, setHideshow1] = useState(false);
	const [getData1, setGetData1] = useState([]);

	const [getData2, setGetData2] = useState({});
	const [getData3, setGetData3] = useState([]);

	const [getDataAll, setGetDataAll] = useState([]);

	const [titleUpdate, setTitleUpdate] = useState('Add Courses');

	const [viewdata, setViewdata] = useState('');

	const [course_codedata, setCourse_codedata] = useState('');
	const [course_namedata, setCourse_namedata] = useState('');

	const [streadata, setStreadata] = useState({
		stream_name: '',
		stream_id: '',
	});

	const [coursedata, setCoursedata] = useState({
		course_category_name: '',
		course_category_id: '',
	});

	const [mediumdata, setMediumdata] = useState({
		medium_name: '',
	});

	useEffect(() => {
		getallexam();
		getallstream();
		getallclass();
		getallcourse();
		getallcourseList();
	}, []);

	const selectOpt = () => {
		setHideshow(!hideshow);
	};

	const getValue = (obj) => {
		setHideshow(!hideshow);
		const found = getData.some((el) => el.class_id === obj.class_id);
		if (!found) {
			setGetData([
				...getData,
				{ class_id: obj.class_id, class_name: obj.class_name },
			]);
			setGetDataId([...getDataId, { class_id: obj.class_id }]);
		} else {
			alert('This class is already added!..');
			return false;
		}
	};

	const removeList = (idd) => {
		const values = [...getData];
		values.splice(idd, 1);
		setGetData(values);
	};

	const getValue1 = (x) => {
		setHideshow1(!hideshow1);
		const found = getDataAll.some((el) => el.exam_type_id === x.exam_type_id);
		if (!found) {
			setOpenpopUp(true);
			setGetData2({
				exam_type_id: x.exam_type_id,
				exam_type_name: x.exam_type_name,
			});
			getallsubexamByexamtypeId(x.exam_type_id);
		} else {
			alert('This exam type is already added!..');
			return false;
		}
	};

	const saveData = () => {
		setGetData3([]);
		setGetDataAll([
			...getDataAll,
			{
				exam_type_id: getData2.exam_type_id,
				exam_type_name: getData2.exam_type_name,
				subExamTypes: getData3,
			},
		]);
		setOpenpopUp(false);
	};

	const removeList1 = (e, index, x) => {
		e.stopPropagation();
		if (e.target.checked == true) {
			setGetData3([
				...getData3,
				{
					sub_exam_type_id: x.sub_exam_type_id,
					sub_exam_type_name: x.sub_exam_type_name,
				},
			]);
		} else {
			const values = [...getData3];
			values.splice(index, 1);
			setGetData3(values);
		}
	};

	const streamhandleChange = (event) => {
		const selectedIndex = streamlist[event.target.selectedIndex - 1];
		setStreadata({
			...streadata,
			stream_name: selectedIndex ? selectedIndex.stream_name : '',
			stream_id: selectedIndex ? selectedIndex.stream_id : '',
		});
	};

	const coursehandleChange = (event) => {
		const selectedIndex = courselist[event.target.selectedIndex - 1];
		setCoursedata({
			...coursedata,
			course_category_name: selectedIndex
				? selectedIndex.course_category_name
				: '',
			course_category_id: selectedIndex ? selectedIndex.course_category_id : '',
		});
	};

	const mediumhandleChange = (event) => {
		const selectedIndex = mediumlist[event.target.selectedIndex - 1];
		setMediumdata({
			...mediumdata,
			medium_name: selectedIndex ? selectedIndex.medium_name : '',
			medium_id: selectedIndex ? selectedIndex.medium_id : '',
		});
	};

	const course_codehandleChange = (event) => {
		setCourse_codedata(event.target.value);
	};

	const course_namehandleChange = (event) => {
		setCourse_namedata(event.target.value);
	};

	async function getallstream() {
		setLoader(true);
		try {
			let response = await api.getallstream();
			setLoader(false);
			setStreamlist(response.data);
		} catch (e) {}
	}

	async function getallsubexamByexamtypeId(idd) {
		try {
			let response = await api.getallsubexamByexamtypeId(idd);
			setSubexamlist(response.data);
		} catch (e) {}
	}

	async function getallexam() {
		setLoader(true);
		try {
			let response = await api.getallexam();
			setLoader(false);
			setExamlist(response.data);
		} catch (e) {}
	}

	async function getallcourse() {
		setLoader(true);
		try {
			let response = await api.getallcourse();
			setLoader(false);
			setCourselist(response.data);
		} catch (e) {}
	}

	async function getallclass() {
		setLoader(true);
		try {
			let response = await api.getallclass();
			setLoader(false);
			setClasslist(response);
		} catch (e) {}
	}

	const showPopup = () => {
		setOpenpopUp(!openpopUp);
	};

	async function getallcourseList() {
		setLoader(true);
		try {
			let response = await api.getallcourseList();
			setLoader(false);
			setCourselistdata(response.data);
		} catch (e) {}
	}

	async function removeCourselistdata(idd) {
		try {
			let response = await api.removeCourselistdata(idd);
			setErrMsg('Courses deleted successfully.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			getallcourseList();
		} catch (e) {}
	}

	const fireApi = () => {
		if (coursedata.course_category_name == '') {
			setErrMsg('Please select course category.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else if (streadata.stream_name == '') {
			setErrMsg('Please select stream.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else if (course_codedata == '') {
			setErrMsg('Please enter course code.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else if (course_namedata == '') {
			setErrMsg('Please enter course name.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else if (mediumdata.medium_name == '') {
			setErrMsg('Please select medium.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else if (getData.length == 0) {
			setErrMsg('Please select class.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else if (getDataAll.length == 0) {
			setErrMsg('Please select course exam type.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else {
			if (!course_codedata.match(/^[a-zA-Z0-9\s(\'\",.+\-:)]+$/)) {
				setErrMsg('Please enter valid course code.');
				setTimeout(() => {
					setErrMsg('');
				}, 1000);
				return false;
			}

			if (!course_namedata.match(/^[a-zA-Z0-9\s(\'\",.+\-:)]+$/)) {
				setErrMsg('Please enter valid course name.');
				setTimeout(() => {
					setErrMsg('');
				}, 1000);
				return false;
			}
			const streamInput = {
				course_category_id: coursedata.course_category_id,
				stream_id: streadata.stream_id,
				course_code: course_codedata,
				medium: mediumdata.medium_id,
				course_name: course_namedata,
				courseClasses: getDataId,
				courseExamTypes: getDataAll,
			};
			fetch('http://54.251.156.235:4001/courses', {
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
						setCoursedata({
							course_category_name: '',
							course_category_id: '',
						});

						setStreadata({
							stream_name: '',
							stream_id: '',
						});

						setCourse_codedata('');
						setCourse_namedata('');
						setMediumdata({ medium_name: '', medium_id: '' });
						setGetDataAll([]);
						setGetData([]);
						getallcourseList();
					} else {
						console.log(responseData.message);
					}
				})
				.catch((error) => {
					console.error(error);
				});
		}
	};

	const updateCourse = (obj) => {
		setTitleUpdate('Update Courses');
		setUpdateId(obj.course_id);

		setCoursedata({
			...coursedata,
			course_category_name: obj.course_category_name,
			course_category_id: obj.course_category_id,
		});

		setStreadata({
			...streadata,
			stream_name: obj.stream_name,
			stream_id: obj.stream_id,
		});

		setCourse_codedata(obj.course_code);
		setCourse_namedata(obj.course_name);

		setMediumdata({
			...mediumdata,
			medium_id: obj.medium,
		});
	};

	const editStream = () => {
		if (coursedata.course_category_name == '') {
			setErrMsg('Please select course category.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else if (streadata.stream_name == '') {
			setErrMsg('Please select stream.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else if (course_codedata == '') {
			setErrMsg('Please enter course code.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else if (course_namedata == '') {
			setErrMsg('Please enter course name.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else if (mediumdata.medium_name == '') {
			setErrMsg('Please select medium.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else if (getData.length == 0) {
			setErrMsg('Please select class.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else if (getDataAll.length == 0) {
			setErrMsg('Please select course exam type.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else {
			if (!course_codedata.match(/^[a-zA-Z0-9\s(\'\",.+\-:)]+$/)) {
				setErrMsg('Please enter valid course code.');
				setTimeout(() => {
					setErrMsg('');
				}, 1000);
				return false;
			}

			if (!course_namedata.match(/^[a-zA-Z0-9\s(\'\",.+\-:)]+$/)) {
				setErrMsg('Please enter valid course name.');
				setTimeout(() => {
					setErrMsg('');
				}, 1000);
				return false;
			}

			const streamInput = {
				course_category_id: coursedata.course_category_id,
				stream_id: streadata.stream_id,
				course_code: course_codedata,
				medium: mediumdata.medium_id,
				course_name: course_namedata,
				courseClasses: getDataId,
				courseExamTypes: getDataAll,
			};
			fetch(`http://54.251.156.235:4001/courses/${updateId}`, {
				method: 'PATCH',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: gettoken,
				},
				body: JSON.stringify(streamInput),
			})
				.then((response) => response.json())
				.then((responseData) => {
					setErrMsg('Courses updated successfully.');
					setTimeout(() => {
						setErrMsg('');
					}, 1500);

					setCoursedata({
						course_category_name: '',
						course_category_id: '',
					});

					setStreadata({
						stream_name: '',
						stream_id: '',
					});

					setCourse_codedata('');
					setCourse_namedata('');
					setMediumdata({ medium_name: '', medium_id: '' });
					setGetDataAll([]);
					setGetData([]);
					getallcourseList();
					setUpdateId('');
					cancleUpdate();
				})
				.catch((error) => {
					console.error(error);
				});
		}
	};

	const cancleUpdate = () => {
		setTitleUpdate('Add Courses');
		setCoursedata({
			course_category_name: '',
			course_category_id: '',
		});

		setStreadata({
			stream_name: '',
			stream_id: '',
		});

		setCourse_codedata('');
		setCourse_namedata('');
		setMediumdata({ medium_name: '', medium_id: '' });
		setGetDataAll([]);
		setGetData([]);
		setUpdateId('');
	};

	const viewData = (objData) => {
		setOpenview(!openview);
		openview == false ? setViewdata('') : setViewdata(objData);
		setViewdata(objData);
	};

	const removeListAll = (index) => {
		const finalArr = [...getDataAll];
		finalArr.splice(index, 1);
		setGetDataAll(finalArr);
	};

	const removeListbyIndex = (prevIndex, index) => {
		const finalArr = [...getDataAll];
		finalArr[prevIndex].subExamTypes.splice(index, 1);
		setGetDataAll(finalArr);
	};

	return (
		<div className="row_full">
			{openview ? <Viewcourses action={viewData} data={viewdata} /> : null}

			{openpopUp ? (
				<div className="row_full popupCntr">
					<div className="container">
						<div className="row_full disp_flex">
							<div
								className="midelmContent position_rel"
								style={{ width: 'auto' }}
							>
								<i
									onClick={() => showPopup()}
									className="fa closeRemove fa-times"
									aria-hidden="true"
								></i>
								<h3 className="row_full" style={{ textTransform: 'initial' }}>
									Sub Exam Type
								</h3>
								<span className="row_full selectedCls mar_b_10">
									{subexamlist.map((x, y) => (
										<em key={y}>
											<label>
												<span>{x.sub_exam_type_name}</span>{' '}
												<input
													id={y}
													onClick={(event) => removeList1(event, y, x)}
													type="checkbox"
													name="examtyped"
												/>
											</label>
										</em>
									))}
								</span>
								<a
									style={{ padding: '8px 30px' }}
									className="btn btn-primary"
									onClick={saveData}
									href="javascript:void(0);"
								>
									Ok
								</a>
							</div>
						</div>
					</div>
				</div>
			) : null}
			<div className="container">
				<div className="row_full disp_flex">
					<div className="middleboxArea larger">
						<h3 className="row_full mar_b_20 text-center">{titleUpdate}</h3>

						<div className="row_full mar_b_15">
							<div className="grid_49 adtopic">
								<span className="row_full">Course category</span>
								<select
									name="course_category_name"
									className="form-control row_full"
									value={coursedata.course_category_name}
									onChange={coursehandleChange}
								>
									<option value="">Course category</option>
									{courselist.map((txt, index) => (
										<option value={txt.course_category_name} key={index}>
											{txt.course_category_name}
										</option>
									))}
								</select>
							</div>

							<div className="grid_49 adtopic" style={{ float: 'right' }}>
								<span className="row_full">Stream</span>
								<select
									name="stream_name"
									className="form-control row_full"
									value={streadata.stream_name}
									onChange={streamhandleChange}
								>
									<option value="">Select stream</option>
									{streamlist.map((txt, index) => (
										<option value={txt.stream_name} key={index}>
											{txt.stream_name}
										</option>
									))}
								</select>
							</div>
						</div>

						<div className="row_full ">
							<div className="grid_49">
								<div className="row_full position_rel ">
									{getData.length > 0 ? (
										<span className="row_full selectedCls mar_b_10">
											{getData.map((x, y) => (
												<em
													style={{ padding: '5px 10px', marginTop: '0px' }}
													key={y}
													onClick={() => removeList(y)}
												>
													{x.class_name}{' '}
													<i className="fa fa-times" aria-hidden="true"></i>
												</em>
											))}
										</span>
									) : null}

									<div className="row_full position_rel">
										<span
											onClick={selectOpt}
											className="row_full multiSelect mar_b_10"
										>
											Select Class{' '}
											<i
												style={{ paddingTop: '3px' }}
												className="fa pull-right fa-angle-down"
												aria-hidden="true"
											></i>
										</span>
										{hideshow ? (
											<ul className="row_full multiUlElm mar_b_10">
												{classlist.map((x, y) => (
													<li key={y} onClick={() => getValue(x)}>
														{x.class_name}
													</li>
												))}
											</ul>
										) : null}
									</div>
								</div>
							</div>

							<div className="grid_49 position_rel " style={{ float: 'right' }}>
								<div className="row_full position_rel">
									{getDataAll.length > 0 ? (
										<span className="row_full selectedCls mar_b_10">
											{getDataAll.map((x, y) => (
												<>
													<em
														style={{ padding: '5px 10px', marginTop: '0px' }}
														key={y}
														onClick={() => removeListAll(y)}
													>
														{x.exam_type_name}{' '}
														<i className="fa fa-times" aria-hidden="true"></i>
													</em>

													{x.subExamTypes.length > 0 ? (
														<>
															{x.subExamTypes.map((x, y1) => (
																<em
																	style={{
																		padding: '5px 10px',
																		marginTop: '0px',
																	}}
																	key={x.sub_exam_type_id}
																	onClick={() => removeListbyIndex(y, y1)}
																>
																	{x.sub_exam_type_name}{' '}
																	<i
																		className="fa fa-times"
																		aria-hidden="true"
																	></i>
																</em>
															))}
														</>
													) : null}
												</>
											))}
										</span>
									) : null}

									<span
										onClick={() => {
											setHideshow1(!hideshow1);
										}}
										className="row_full multiSelect mar_b_10"
									>
										Select Course exam types{' '}
										<i
											style={{ paddingTop: '3px' }}
											className="fa pull-right fa-angle-down"
											aria-hidden="true"
										></i>
									</span>
									{hideshow1 ? (
										<ul className="row_full multiUlElm mar_b_10">
											{examlist.map((x, y) => (
												<li key={y} onClick={() => getValue1(x)}>
													{x.exam_type_name}
												</li>
											))}
										</ul>
									) : null}
								</div>
							</div>
						</div>

						<div className="row_full mar_b_15">
							<div className="row_full adtopic">
								<span className="row_full">Medium</span>
								<select
									name="medium"
									className="form-control row_full"
									value={mediumdata.medium_id}
									onChange={mediumhandleChange}
								>
									<option value="">Select medium</option>
									{mediumlist.map((txt, index) => (
										<option value={txt.medium_id} key={index}>
											{txt.medium_name}
										</option>
									))}
								</select>
							</div>
						</div>

						<div className="row_full mar_b_15 adtopic">
							<div className="grid_49">
								<span className="row_full">Course name</span>
								<input
									type="text"
									name="course_name"
									value={course_namedata}
									onChange={course_namehandleChange}
									className="row_full form-control"
									placeholder="Course name"
								/>
							</div>

							<div className="grid_49" style={{ float: 'right' }}>
								<span className="row_full">Course code</span>
								<input
									type="text"
									name="course_code"
									value={course_codedata}
									onChange={course_codehandleChange}
									className="row_full form-control"
									placeholder="Course code"
								/>
							</div>
						</div>

						<div className="row_full adtopic inputAdd">
							{errMsg ? (
								<p className="row_full errTag" style={{ marginBottom: '15px' }}>
									{errMsg}
								</p>
							) : null}
							<div className="row_full">
								{updateId == '' ? (
									<input
										onClick={fireApi}
										type="submit"
										className="btn custBtn btn-success"
										value="Save Courses"
									/>
								) : (
									<div className="row_fulll">
										<input
											type="submit"
											style={{ float: 'left', marginRight: '15px' }}
											onClick={editStream}
											className="custBtn btn btn-success"
											value="Update Courses"
										/>
										<a
											onClick={cancleUpdate}
											className="addstrm"
											href="javascript:void(0)"
										>
											Add Courses
										</a>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>

				<div className="row_full mar_t_35 disp_flex">
					<div className="middleboxArea larger">
						<div className="row_full detailsList listBox">
							{loader ? (
								<span className="loaderBox">
									<i className="fa fa-spinner fa-spin"></i>
									<em>Loading All records please wait...</em>
								</span>
							) : (
								<table className="table table-bordered">
									<thead>
										<tr>
											<th>Sr NO.</th>
											<th>Course name</th>
											<th>Course code</th>
											<th>Course category name</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										{courselistdata.map((txt, v) => (
											<tr key={v}>
												<td>{v + 1}</td>
												<td>{txt.course_name}</td>
												<td>{txt.course_code}</td>
												<td>{txt.course_category_name}</td>
												<td>
													<a
														className="btnpad btn btn-success btn-xs"
														onClick={() => updateCourse(txt)}
														href="javascript:void(0);"
													>
														Edit
													</a>{' '}
													<a
														className="btnpad btn btn-primary btn-xs"
														onClick={() => viewData(txt)}
														href="javascript:void(0);"
													>
														View
													</a>{' '}
													<a
														className="btnpad btn btn-danger btn-xs"
														href="javascript:void(0);"
														onClick={() => removeCourselistdata(txt.course_id)}
													>
														Delete
													</a>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Addcourses;
