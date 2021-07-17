import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as api from '../../apiHelper/Apihelper';
import './Finaltestseries.scss';

const Finaltestseries = () => {
	/*=================Test series ========================*/
	const [loader, setLoader] = useState(false);
	const [updateId, setUpdateId] = useState('');
	const [errMsg, setErrMsg] = useState('');
	const [openpopUp, setOpenpopUp] = useState(false);
	const [testseriesdata, setTestseriesdata] = useState([]);
	const [selectedTest, setSelectedTest] = useState({});
	const [gettoken, setGettoken] = useState(localStorage.getItem('token'));
	const [course_categoryList, setCourse_categoryList] = useState([]);
	const [subexamlist, setSubexamlist] = useState([]);
	const [streamlist, setStreamlist] = useState([]);
	const [courselist, setCourselist] = useState([]);
	const [classlist, setClasslist] = useState([]);
	const [hideshow1, setHideshow1] = useState(false);
	const [getData2, setGetData2] = useState({});
	const [getData3, setGetData3] = useState([]);
	const [getDataAll, setGetDataAll] = useState([]);
	const [titleUpdate, setTitleUpdate] = useState('Add Test Series');
	const [test_series_namedata, setTest_series_namedata] = useState('');
	const [hidetestSeries, setHidetestSeries] = useState(true);

	const [streadata, setStreadata] = useState({
		stream_name: '',
		stream_id: '',
	});

	const [classdata, setClassdata] = useState({
		class_name: '',
		class_id: '',
	});

	const [testtypedata, setTesttypedata] = useState({
		test_type_name: '',
		test_type_id: '',
	});

	useEffect(() => {
		getallcourse();
		getallstream();
		getallclass();
		getalltesttype();
		getalltestseries();
	}, []);

	/*=================Test series ========================*/

	const getValue1 = (x) => {
		setHideshow1(!hideshow1);
		const found = getDataAll.some(
			(el) => el.course_category_id === x.course_category_id
		);
		if (!found) {
			setOpenpopUp(true);
			setGetData2({
				course_category_id: x.course_category_id,
				course_category_name: x.course_category_name,
			});
			getallcoursebycategoryId(x.course_category_id);
		} else {
			alert('This course category type is already added!..');
			return false;
		}
	};

	const saveData = () => {
		setGetData3([]);
		setGetDataAll([
			...getDataAll,
			{
				course_category_id: getData2.course_category_id,
				course_category_name: getData2.course_category_name,
				course_ids: getData3,
			},
		]);
		setOpenpopUp(false);
		console.log(getDataAll);
	};

	const removeList1 = (e, index, x) => {
		e.stopPropagation();
		if (e.target.checked == true) {
			setGetData3([
				...getData3,
				{ course_id: x.course_id, course_name: x.course_name },
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

	const classhandleChange = (event) => {
		const selectedIndex = classlist[event.target.selectedIndex - 1];
		setClassdata({
			...classdata,
			class_name: selectedIndex ? selectedIndex.class_name : '',
			class_id: selectedIndex ? selectedIndex.class_id : '',
		});
	};

	const test_typehandleChange = (event) => {
		const selectedIndex = courselist[event.target.selectedIndex - 1];
		setTesttypedata({
			...testtypedata,
			test_type_name: selectedIndex ? selectedIndex.test_type_name : '',
			test_type_id: selectedIndex ? selectedIndex.test_type_id : '',
		});
	};

	const test_series_namehandleChange = (event) => {
		setTest_series_namedata(event.target.value);
	};

	async function getallstream() {
		setLoader(true);
		try {
			let response = await api.getallstream();
			setLoader(false);
			setStreamlist(response.data);
		} catch (e) {}
	}

	async function getallcoursebycategoryId(idd) {
		try {
			let response = await api.getallcoursebycategoryId(idd);
			if (response.statusCode == 203) {
				setSubexamlist(response.message);
			} else {
				setSubexamlist(response.data);
			}
		} catch (e) {}
	}

	async function getallcourse() {
		setLoader(true);
		try {
			let response = await api.getallcourse();
			setLoader(false);
			setCourse_categoryList(response.data);
		} catch (e) {}
	}

	async function getalltesttype() {
		setLoader(true);
		try {
			let response = await api.getalltesttype();
			setLoader(false);
			setCourselist(response.data);
		} catch (e) {}
	}

	async function getallclass() {
		setLoader(true);
		try {
			let response = await api.getallclass();
			console.log(response);
			setLoader(false);
			setClasslist(response);
		} catch (e) {}
	}

	const showPopup = () => {
		setOpenpopUp(!openpopUp);
	};

	async function getalltestseries() {
		setLoader(true);
		try {
			let response = await api.getalltestseries();
			setLoader(false);
			setTestseriesdata(response.data);
		} catch (e) {}
	}

	async function removetestSeries(idd) {
		try {
			let response = await api.removetestSeries(idd);
			setErrMsg('Test series deleted successfully.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			getalltestseries();
		} catch (e) {}
	}

	const fireApi = () => {
		if (streadata.stream_name == '') {
			setErrMsg('Please select stream.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else if (testtypedata.test_type_name == '') {
			setErrMsg('Please select test type name.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else if (classdata.class_name == '') {
			setErrMsg('Please select class name.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else if (test_series_namedata == '') {
			setErrMsg('Please enter test series name.');
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
			if (!test_series_namedata.match(/^[a-zA-Z0-9\s(\'\",.+\-:)]+$/)) {
				setErrMsg('Please enter valid test series name.');
				setTimeout(() => {
					setErrMsg('');
				}, 1000);
				return false;
			}
			const streamInput = {
				test_type_id: testtypedata.test_type_id,
				stream_id: streadata.stream_id,
				test_series_name: test_series_namedata,
				class_id: classdata.class_id,
				courseCatAndCourseID: getDataAll,
			};

			fetch('http://54.251.156.235:4001/test-series', {
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
					console.log(responseData);
					if (responseData.statusCode == 200) {
						setTesttypedata({
							test_type_name: '',
							test_type_id: '',
						});

						setStreadata({
							stream_name: '',
							stream_id: '',
						});

						setClassdata({
							class_name: '',
							class_id: '',
						});

						setTest_series_namedata('');
						setGetDataAll([]);
						getalltestseries();
					} else {
						console.log(responseData.message);
					}
				})
				.catch((error) => {
					console.error(error);
				});
		}
	};
	const updateTestseries = (obj) => {
		console.log(obj);
		setTitleUpdate('Update Test Series');
		setUpdateId(obj.test_series_id);

		setTesttypedata({
			...testtypedata,
			test_type_name: obj.test_type_name,
			test_type_id: obj.test_type_id,
		});

		setStreadata({
			...streadata,
			stream_name: obj.stream_name,
			stream_id: obj.stream_id,
		});

		setClassdata({
			...classdata,
			class_name: obj.class_name,
			class_id: obj.class_id,
		});

		setTest_series_namedata(obj.test_series_name);
	};

	const editStream = () => {
		if (streadata.stream_name == '') {
			setErrMsg('Please select stream.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else if (testtypedata.test_type_name == '') {
			setErrMsg('Please select test type name.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else if (classdata.class_name == '') {
			setErrMsg('Please select class name.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else if (test_series_namedata == '') {
			setErrMsg('Please enter test series name.');
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
			if (!test_series_namedata.match(/^[a-zA-Z0-9\s(\'\",.+\-:)]+$/)) {
				setErrMsg('Please enter valid test series name.');
				setTimeout(() => {
					setErrMsg('');
				}, 1000);
				return false;
			}

			const streamInput = {
				test_type_id: testtypedata.test_type_id,
				stream_id: streadata.stream_id,
				test_series_name: test_series_namedata,
				class_id: classdata.class_id,
			};
			fetch(`http://54.251.156.235:4001/test-series/${updateId}`, {
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
					setErrMsg('Test series updated successfully.');
					setTimeout(() => {
						setErrMsg('');
					}, 1500);

					setTesttypedata({
						test_type_name: '',
						test_type_id: '',
					});

					setStreadata({
						stream_name: '',
						stream_id: '',
					});

					setClassdata({
						class_name: '',
						class_id: '',
					});

					setTest_series_namedata('');
					setGetDataAll([]);
					getalltestseries();
					setUpdateId('');
					cancleUpdate();
				})
				.catch((error) => {
					console.error(error);
				});
		}
	};

	const cancleUpdate = () => {
		setTitleUpdate('Add Test Series');
		setTesttypedata({
			test_type_name: '',
			test_type_id: '',
		});

		setStreadata({
			stream_name: '',
			stream_id: '',
		});

		setClassdata({
			class_name: '',
			class_id: '',
		});
		setTest_series_namedata('');
		setGetDataAll([]);
		setUpdateId('');
	};

	const removeListAll = (index) => {
		const finalArr = [...getDataAll];
		finalArr.splice(index, 1);
		setGetDataAll(finalArr);
	};

	const removeListbyIndex = (prevIndex, index) => {
		const finalArr = [...getDataAll];
		finalArr[prevIndex].course_ids.splice(index, 1);
		setGetDataAll(finalArr);
	};

	const addtest = (obj) => {
		setSelectedTest(obj);
		setHidetestSeries(!hidetestSeries);
		setTestdata({
			test_series_name: obj.test_series_name,
			test_series_id: obj.test_series_id,
		});
	};

	/*========Test function ===========*/
	const [testUpdateId, setTestUpdateId] = useState('');
	const [editordata, setEditordata] = useState({ test_instruction: '' });
	const [testlistdata, setTestlistdata] = useState([]);
	const [testTitleUpdate, setTestTitleUpdate] = useState('Add Test');

	const [testdata, setTestdata] = useState({
		test_series_name: '',
		test_series_id: '',
	});

	const [formData, setFormData] = useState({
		test_name: '',
		test_start_date: '',
		test_end_date: '',
		test_time: '',
		test_duration: '',
		test_total_marks: '',
		test_passing_marks: '',
		test_negative_marking: '',
		test_total_question: '',
	});

	useEffect(() => {
		getalltest();
	}, []);

	const formDatahandleChange = (event) => {
		const { name, value } = event.target;
		const list = { ...formData };
		list[name] = value;
		setFormData(list);
	};

	async function getalltest() {
		setLoader(true);
		try {
			let response = await api.getalltest();
			setLoader(false);
			setTestlistdata(response.data);
		} catch (e) {}
	}

	async function removetest(idd) {
		try {
			let response = await api.removetest(idd);
			setErrMsg('Test deleted successfully.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			getalltest();
		} catch (e) {}
	}

	const fireTestApi = () => {
		if (testdata.test_series_name == '') {
			setErrMsg('Please select test series name.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else {
			const streamInput = {
				test_series_id: testdata.test_series_id,
				test_name: formData.test_name,
				test_start_date: formData.test_start_date,
				test_end_date: formData.test_end_date,
				test_time: formData.test_time,
				test_duration: formData.test_duration,
				test_total_marks: formData.test_total_marks,
				test_passing_marks: formData.test_passing_marks,
				test_negative_marking: formData.test_negative_marking,
				test_total_question: formData.test_total_question,
				test_instruction: JSON.stringify(editordata.test_instruction),
			};

			fetch('http://54.251.156.235:4001/tests', {
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
						clearData();
						getalltest();
					} else {
						console.log(responseData.message);
					}
				})
				.catch((error) => {
					console.error(error);
				});
		}
	};

	const updateTestCourse = (obj) => {
		setTestTitleUpdate('Update Test');
		setTestUpdateId(obj.test_id);

		setFormData({
			test_name: obj.test_name,
			test_start_date: obj.test_start_date,
			test_end_date: obj.test_end_date,
			test_time: obj.test_time,
			test_duration: obj.test_duration,
			test_total_marks: obj.test_total_marks,
			test_passing_marks: obj.test_passing_marks,
			test_negative_marking: obj.test_negative_marking,
			test_total_question: obj.test_total_question,
		});

		setTestdata({
			test_series_name: obj.test_series_name,
			test_series_id: obj.test_series_id,
		});

		setEditordata({ test_instruction: obj.test_instruction });
		console.log(editordata.test_instruction);
	};

	const editTestStream = () => {
		if (testdata.test_series_name == '') {
			setErrMsg('Please select test series name.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else {
			const streamInput = {
				test_series_id: testdata.test_series_id,
				test_name: formData.test_name,
				test_start_date: formData.test_start_date,
				test_end_date: formData.test_end_date,
				test_time: formData.test_time,
				test_duration: formData.test_duration,
				test_total_marks: formData.test_total_marks,
				test_passing_marks: formData.test_passing_marks,
				test_negative_marking: formData.test_negative_marking,
				test_total_question: formData.test_total_question,
				test_instruction: JSON.stringify(editordata.test_instruction),
			};

			fetch(`http://54.251.156.235:4001/tests/${testUpdateId}`, {
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
					setErrMsg('Test updated successfully.');
					setTimeout(() => {
						setErrMsg('');
					}, 1500);

					clearData();
					getalltest();
					setTestUpdateId('');
					cancleTestUpdate();
				})
				.catch((error) => {
					console.error(error);
				});
		}
	};

	const cancleTestUpdate = () => {
		setTestTitleUpdate('Add Test');
		clearData();
		setTestUpdateId('');
	};

	const detailSolution = (e, editor) => {
		setEditordata({ test_instruction: editor.getData() });
	};

	const clearData = () => {
		setFormData({
			test_name: '',
			test_start_date: '',
			test_end_date: '',
			test_time: '',
			test_duration: '',
			test_total_marks: '',
			test_passing_marks: '',
			test_negative_marking: '',
			test_total_question: '',
		});

		setTestdata({
			test_series_name: '',
			test_series_id: '',
		});

		setEditordata({ test_instruction: '' });
	};

	const backtoTestSeries = () => {
		clearData();
		setHidetestSeries(!hidetestSeries);
	};

	return (
		<div className="row_full final-series">
			{hidetestSeries ? (
				<div className="row_full">
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
										<h3
											className="row_full"
											style={{ textTransform: 'initial' }}
										>
											Course name
										</h3>
										{subexamlist == 'No Category Found' ? (
											<span className="row_full selectedCls mar_b_10">
												{subexamlist}
											</span>
										) : (
											<>
												<span className="row_full selectedCls mar_b_10">
													{subexamlist.map((x, y) => (
														<em key={y}>
															<label>
																<span>{x.course_name}</span>{' '}
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
											</>
										)}
									</div>
								</div>
							</div>
						</div>
					) : null}

					<div className="container">
						<div className="row_full disp_flex">
							<div className="middleboxArea larger">
								<h3 className="row_full mar_b_20 text-center">{titleUpdate}</h3>

								<div className="row_full mar_b_15 adtopic">
									<div className="grid_49">
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

									<div className="grid_49" style={{ float: 'right' }}>
										<span className="row_full">Test type</span>
										<select
											name="test_type_name"
											className="form-control row_full"
											value={testtypedata.test_type_name}
											onChange={test_typehandleChange}
										>
											<option value="">Select test type</option>
											{courselist.map((txt, index) => (
												<option value={txt.test_type_name} key={index}>
													{txt.test_type_name}
												</option>
											))}
										</select>
									</div>
								</div>

								<div className="row_full adtopic">
									<div className="grid_49 mar_b_15">
										<div className="row_full position_rel">
											<div className="row_full position_rel">
												<span className="row_full">Class</span>
												<select
													name="stream_name"
													className="form-control row_full"
													value={classdata.class_name}
													onChange={classhandleChange}
												>
													<option value="">Select class</option>
													{classlist.map((txt, index) => (
														<option value={txt.class_name} key={index}>
															{txt.class_name}
														</option>
													))}
												</select>
											</div>
										</div>
									</div>

									<div className="grid_49 mar_b_15" style={{ float: 'right' }}>
										<span className="row_full">Test series name</span>
										<input
											type="text"
											name="test_series_name"
											value={test_series_namedata}
											onChange={test_series_namehandleChange}
											className="row_full form-control"
											placeholder="Test series name"
										/>
									</div>
								</div>

								<div className="row_full mar_b_15">
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
															{x.course_category_name}{' '}
															<i className="fa fa-times" aria-hidden="true"></i>
														</em>

														{x.course_ids.length > 0 ? (
															<>
																{x.course_ids.map((x, y1) => (
																	<em
																		style={{
																			padding: '5px 10px',
																			marginTop: '0px',
																		}}
																		key={x.course_id}
																		onClick={() => removeListbyIndex(y, y1)}
																	>
																		{x.course_name}{' '}
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
											Select Course category name{' '}
											<i
												style={{ paddingTop: '3px' }}
												className="fa pull-right fa-angle-down"
												aria-hidden="true"
											></i>
										</span>
										{hideshow1 ? (
											<ul className="row_full multiUlElm mar_b_10">
												{course_categoryList.map((x, y) => (
													<li key={y} onClick={() => getValue1(x)}>
														{x.course_category_name}
													</li>
												))}
											</ul>
										) : null}
									</div>
								</div>

								<div className="row_full adtopic inputAdd">
									{errMsg ? (
										<p
											className="row_full errTag"
											style={{ marginBottom: '15px' }}
										>
											{errMsg}
										</p>
									) : null}
									<div className="row_full">
										{updateId == '' ? (
											<input
												onClick={fireApi}
												type="submit"
												className="btn custBtn btn-success"
												value="Save Test Series"
											/>
										) : (
											<div className="row_fulll">
												<input
													type="submit"
													style={{ float: 'left', marginRight: '15px' }}
													onClick={editStream}
													className="custBtn btn btn-success"
													value="Update Test Series"
												/>
												<a
													onClick={cancleUpdate}
													className="addstrm"
													href="javascript:void(0)"
												>
													Add Test Series
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
													<th className="serial-number">Sr NO.</th>
													<th>Stream name</th>
													<th>Class name</th>
													<th>Test type name</th>
													<th>Test series name</th>
													<th>Action</th>
												</tr>
											</thead>
											<tbody>
												{testseriesdata.map((txt, v) => (
													<tr key={v}>
														<td>{v + 1}</td>
														<td>{txt.stream_name}</td>
														<td>{txt.class_name}</td>
														<td>{txt.test_type_name}</td>
														<td>{txt.test_series_name}</td>
														<td>
															<a
																className="btnpad btn btn-success btn-xs"
																onClick={() => updateTestseries(txt)}
																href="javascript:void(0);"
															>
																Edit
															</a>{' '}
															<a
																className="btnpad btn btn-danger btn-xs"
																href="javascript:void(0);"
																onClick={() =>
																	removetestSeries(txt.test_series_id)
																}
															>
																Delete
															</a>{' '}
															<a
																className="btnpad btn btn-primary btn-xs"
																style={{ marginTop: '8px' }}
																onClick={() => addtest(txt)}
																href="javascript:void(0);"
															>
																Add Test
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
			) : (
				<div className="row_full" style={{ position: 'relative' }}>
					<a
						onClick={backtoTestSeries}
						className="bttestseries btn btn-info btn-sm"
						href="javascript:void(0);"
					>
						Back to test series
					</a>
					<div className="container">
						<div className="row_full disp_flex">
							<div className="middleboxArea larger">
								<h3 className="row_full mar_b_20 text-center">
									{testTitleUpdate}
								</h3>

								<div className="row_full mar_b_15 adtopic">
									<div className="grid_49">
										<span className="row_full">Test series</span>
										<input
											type="text"
											readOnly
											name="test_series_name"
											value={testdata.test_series_name}
											className="row_full form-control"
											placeholder="Test Series name"
										/>
									</div>

									<div className="grid_49" style={{ float: 'right' }}>
										<span className="row_full">Test name</span>
										<input
											type="text"
											name="test_name"
											value={formData.test_name}
											onChange={formDatahandleChange}
											className="row_full form-control"
											placeholder="Test name"
										/>
									</div>
								</div>

								<div className="row_full adtopic">
									<div className="grid_49 mar_b_15">
										<div className="row_full position_rel">
											<div className="row_full position_rel">
												<span className="row_full">Test start date</span>
												<input
													type="date"
													name="test_start_date"
													value={formData.test_start_date}
													onChange={formDatahandleChange}
													className="row_full form-control"
													placeholder="Test start date"
												/>
											</div>
										</div>
									</div>

									<div className="grid_49 mar_b_15" style={{ float: 'right' }}>
										<span className="row_full">Test end date</span>
										<input
											type="date"
											name="test_end_date"
											value={formData.test_end_date}
											onChange={formDatahandleChange}
											className="row_full form-control"
											placeholder="Test end date"
										/>
									</div>
								</div>

								<div className="row_full adtopic">
									<div className="grid_49 mar_b_15">
										<div className="row_full position_rel">
											<div className="row_full position_rel">
												<span className="row_full">Test time</span>
												<input
													type="time"
													name="test_time"
													value={formData.test_time}
													onChange={formDatahandleChange}
													className="row_full form-control"
													placeholder="Test time"
												/>
											</div>
										</div>
									</div>

									<div className="grid_49 mar_b_15" style={{ float: 'right' }}>
										<span className="row_full">Test duration</span>
										<input
											type="text"
											name="test_duration"
											value={formData.test_duration}
											onChange={formDatahandleChange}
											className="row_full form-control"
											placeholder="Test duration"
										/>
									</div>
								</div>

								<div className="row_full adtopic">
									<div className="grid_49 mar_b_15">
										<div className="row_full position_rel">
											<div className="row_full position_rel">
												<span className="row_full w-100middleboxArea">
													Test total marks
												</span>
												<input
													type="text"
													name="test_total_marks"
													value={formData.test_total_marks}
													onChange={formDatahandleChange}
													className="row_full form-control"
													placeholder="Test total marks"
												/>
											</div>
										</div>
									</div>

									<div className="grid_49 mar_b_15" style={{ float: 'right' }}>
										<span className="row_full" style={{ width: '100%' }}>
											Test passing marks
										</span>
										<input
											type="text"
											name="test_passing_marks"
											value={formData.test_passing_marks}
											onChange={formDatahandleChange}
											className="row_full form-control"
											placeholder="Test passing marks"
										/>
									</div>
								</div>

								<div className="row_full adtopic">
									<div className="grid_49 mar_b_15">
										<div className="row_full position_rel">
											<div className="row_full position_rel">
												<span className="row_full" style={{ width: '100%' }}>
													Test negative marking
												</span>
												<input
													type="text"
													name="test_negative_marking"
													value={formData.test_negative_marking}
													onChange={formDatahandleChange}
													className="row_full form-control"
													placeholder="Test negative marking"
												/>
											</div>
										</div>
									</div>

									<div className="grid_49 mar_b_15" style={{ float: 'right' }}>
										<span className="row_full" style={{ width: '100%' }}>
											Test total question
										</span>
										<input
											type="text"
											name="test_total_question"
											value={formData.test_total_question}
											onChange={formDatahandleChange}
											className="row_full form-control"
											placeholder="Test total question"
										/>
									</div>
								</div>

								<div className="row_full adtopic">
									<div className="row_full mar_b_15">
										<span className="row_full" style={{ width: '100%' }}>
											Test instruction
										</span>
										<CKEditor
											editor={ClassicEditor}
											config={{
												entities: false,
												basicEntities: false,

												// plugins: [ Essentials ],
												ckfinder: {
													// The URL that the images are uploaded to.
													//   uploadUrl: "/upload",
													uploadUrl:
														'http://54.251.156.235:4001/questions/upload',
													//   {"uploaded":true,"url":"2697935-200.png"}

													// Enable the XMLHttpRequest.withCredentials property.
													withCredentials: true,

													// Headers sent along with the XMLHttpRequest to the upload server.
													headers: {
														// "X-CSRF-TOKEN": "CSFR-Token",
														Authorization: gettoken,
													},
												},
											}}
											data={editordata.test_instruction}
											onChange={detailSolution}
										/>
									</div>
								</div>

								<div className="row_full adtopic inputAdd">
									{errMsg ? (
										<p
											className="row_full errTag"
											style={{ marginBottom: '15px' }}
										>
											{errMsg}
										</p>
									) : null}
									<div className="row_full">
										{testUpdateId == '' ? (
											<input
												onClick={fireTestApi}
												type="submit"
												className="btn custBtn btn-success"
												value="Save Test"
											/>
										) : (
											<div className="row_fulll">
												<input
													type="submit"
													style={{ float: 'left', marginRight: '15px' }}
													onClick={editTestStream}
													className="custBtn btn btn-success"
													value="Update Test"
												/>
												<a
													onClick={cancleTestUpdate}
													className="addstrm"
													href="javascript:void(0)"
												>
													Add Test
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
													<th className="serial-number">Sr no.</th>
													<th>Test series name</th>
													<th>Test name</th>
													<th>Test duration</th>
													<th className="action-column">Action</th>
												</tr>
											</thead>
											<tbody>
												{testlistdata.map((txt, v) => (
													<tr key={v}>
														<td>{v + 1}</td>
														<td>{txt.test_series_name}</td>
														<td>{txt.test_name}</td>
														<td>{txt.test_duration}</td>
														<td>
															<a
																className="btnpad btn btn-success btn-xs mr-2"
																onClick={() => updateTestCourse(txt)}
																href="javascript:void(0);"
															>
																Edit
															</a>
															<a
																className="btnpad btn btn-danger btn-xs mr-2"
																href="javascript:void(0);"
																onClick={() => removetest(txt.test_id)}
															>
																Delete
															</a>

															<Link
																className="btnpad btn btn-info btn-xs"
																to={{
																	pathname: '/global/finaltestseries/test4',
																	state: {
																		testId: txt.test_id,
																		streamId: selectedTest.stream_id,
																		classId: selectedTest.class_id,
																	},
																}}
															>
																<span className="menu-title">Add Question</span>
															</Link>
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
			)}
		</div>
	);
};

export default Finaltestseries;
