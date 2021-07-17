import React, { useState, useRef, useEffect } from 'react';
import './Addtest.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';

const Addtest = () => {
	const [stream, setStream] = useState('');
	const [gettoken, setGettoken] = useState(localStorage.getItem('token'));
	const [list, setList] = useState([]);
	const [loader, setLoader] = useState(false);
	const [updateId, setUpdateId] = useState(null);
	const [updateStrm, setUpdateStrm] = useState('');
	const [errMsg, setErrMsg] = useState('');
	const [addElm, setAddElm] = useState('');

	useEffect(() => {
		setGettoken(gettoken);
		allStream(gettoken);
	}, [gettoken]);

	const handleChange = (event) => {
		setStream(event.target.value);
	};

	const updatehandleChange = (event) => {
		setUpdateStrm(event.target.value);
	};

	const allStream = (data) => {
		setLoader(true);
		fetch('http://54.251.156.235:4001/subjects', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: data,
			},
		})
			.then((response) => response.json())
			.then((responseData) => {
				setLoader(false);
				setList(responseData.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const cancleUpdate = () => {
		setUpdateId(null);
		setUpdateStrm('');
	};

	const addStream = () => {
		if (stream == '' && stream.length == 0) {
			setErrMsg('Please enter to Add Topic.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else {
			if (!stream.match(/^[a-zA-Z0-9\s(\'\",.+\-:)]+$/)) {
				setErrMsg('Please enter valid subject.');
				setTimeout(() => {
					setErrMsg('');
				}, 1000);
				setStream('');
				return false;
			}
			const streamInput = { subject_name: stream };
			fetch('http://54.251.156.235:4001/subjects', {
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
						setStream('');
						allStream(gettoken);
					} else {
						setErrMsg(responseData.message);
						setStream('');
						setTimeout(() => {
							setErrMsg('');
						}, 1000);
					}
				})
				.catch((error) => {
					console.error(error);
				});
		}
	};

	const removeStream = (idd) => {
		fetch(`http://54.251.156.235:4001/subjects/${idd}`, {
			method: 'delete',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: gettoken,
			},
		})
			.then((response) => response.json())
			.then((responseData) => {
				setErrMsg('Subject deleted successfully.');
				setTimeout(() => {
					setErrMsg('');
				}, 1500);
				allStream(gettoken);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const updateStream = (idd, name) => {
		setUpdateId(idd);
		setUpdateStrm(name);
		onAdd();
	};

	const editStream = () => {
		if (updateStrm == '' && updateStrm.length == 0) {
			setErrMsg('Please enter to Update Topic.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else {
			if (!updateStrm.match(/^[a-zA-Z0-9\s(\'\",.+\-:)]+$/)) {
				setErrMsg('Please enter valid subject.');
				setTimeout(() => {
					setErrMsg('');
				}, 1000);
				setStream('');
				return false;
			}
			const streamInput = { subject_name: updateStrm };
			fetch(`http://54.251.156.235:4001/subjects/${updateId}`, {
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
					setErrMsg('Subject updated successfully.');
					setTimeout(() => {
						setErrMsg('');
					}, 1500);

					allStream(gettoken);
					setUpdateId('');
					setUpdateStrm('');
					cancleUpdate();
				})
				.catch((error) => {
					console.error(error);
				});
		}
	};

	const onAdd = () => {
		setAddElm(!addElm);
	};
	return (
		<div className="row_full">
			<div className="container">
				{addElm ? (
					<div className="row_full disp_flex">
						{updateId == null ? (
							<div className="middleboxArea">
								<h3 className="row_full mar_b_20 text-center">Add Topic</h3>
								<div className="row_full adtopic mar_b_15 inputAdd">
									<span>Select Class</span>
									<input
										type="text"
										name="stream_name"
										value={stream}
										onChange={handleChange}
										className="grid_75 form-control"
										placeholder="Add Stream"
									/>
								</div>
								<div className="row_full adtopic mar_b_15 inputAdd">
									<span>Select Class</span>
									<select
										name="class"
										className="form-control grid_75"
										onChange={handleChange}
									>
										<option value="">Select Class</option>
										<option value="1">Select Class 1</option>
										<option value="2">Select Class 2</option>
										<option value="3">Select Class 3</option>
									</select>
								</div>
								<div className="row_full adtopic mar_b_15 inputAdd">
									<span>Exam Type</span>
									<select
										name="exam_type"
										className="form-control grid_75"
										onChange={handleChange}
									>
										<option value="">Select Exam Type</option>
										<option value="1">Exam 1</option>
										<option value="2">Exam 2</option>
										<option value="3">Exam 3</option>
									</select>
								</div>
								<div className="row_full adtopic mar_b_15 inputAdd">
									<span>Subject</span>
									<select
										name="subject"
										className="form-control grid_75"
										onChange={handleChange}
									>
										<option value="">Select Subject</option>
										<option value="1">Subject 1</option>
										<option value="2">Subject 2</option>
										<option value="3">Subject 3</option>
									</select>
								</div>
								<div className="row_full adtopic mar_b_15 inputAdd">
									<span>Topic Name</span>
									<select
										name="topic_name"
										className="form-control grid_75"
										onChange={handleChange}
									>
										<option value="">Select Topic Name</option>
										<option value="1">Topic 1</option>
										<option value="2">Topic 2</option>
										<option value="3">Topic 3</option>
									</select>
								</div>
								<div className="row_full adtopic inputAdd">
									<span>&nbsp;</span>
									<div className="grid_75">
										<input
											type="submit"
											onClick={addStream}
											className="btn custBtn btn-success"
											value="Add Topic"
										/>
									</div>
									{errMsg ? <p className="errTag">{errMsg}</p> : null}
								</div>
							</div>
						) : (
							<div className="middleboxArea">
								<h3 className="row_full mar_b_20 text-center">Update Topic</h3>
								<div className="row_full adtopic mar_b_15 inputAdd">
									<span>Select Stream</span>
									<select
										name="stream"
										className="form-control grid_75"
										onChange={updatehandleChange}
									>
										<option value="">Select Stream</option>
										<option value="1">Select Stream 1</option>
										<option value="2">Select Stream 2</option>
										<option value="3">Select Stream 3</option>
									</select>
								</div>
								<div className="row_full adtopic mar_b_15 inputAdd">
									<span>Select Class</span>
									<select
										name="class"
										className="form-control grid_75"
										onChange={updatehandleChange}
									>
										<option value="">Select Class</option>
										<option value="1">Select Class 1</option>
										<option value="2">Select Class 2</option>
										<option value="3">Select Class 3</option>
									</select>
								</div>
								<div className="row_full adtopic mar_b_15 inputAdd">
									<span>Exam Type</span>
									<select
										name="exam_type"
										className="form-control grid_75"
										onChange={updatehandleChange}
									>
										<option value="">Select Exam Type</option>
										<option value="1">Exam 1</option>
										<option value="2">Exam 2</option>
										<option value="3">Exam 3</option>
									</select>
								</div>
								<div className="row_full adtopic mar_b_15 inputAdd">
									<span>Subject</span>
									<select
										name="subject"
										className="form-control grid_75"
										onChange={updatehandleChange}
									>
										<option value="">Select Subject</option>
										<option value="1">Subject 1</option>
										<option value="2">Subject 2</option>
										<option value="3">Subject 3</option>
									</select>
								</div>
								<div className="row_full adtopic mar_b_15 inputAdd">
									<span>Topic Name</span>
									<select
										name="topic_name"
										className="form-control grid_75"
										onChange={updatehandleChange}
									>
										<option value="">Select Topic Name</option>
										<option value="1">Topic 1</option>
										<option value="2">Topic 2</option>
										<option value="3">Topic 3</option>
									</select>
								</div>
								<div className="row_full adtopic inputAdd">
									<span>&nbsp;</span>
									<div className="grid_75">
										<input
											type="submit"
											onClick={editStream}
											className="custBtn btn btn-success"
											value="Update Topic"
										/>
									</div>
									{errMsg ? (
										<p className="errTag">{errMsg}</p>
									) : (
										<a
											onClick={cancleUpdate}
											className="addstrm"
											href="javascript:void(0)"
										>
											Add Topic
										</a>
									)}
								</div>
							</div>
						)}
					</div>
				) : null}
				<div className="row_full mar_t_35 disp_flex">
					<div className="middleboxArea">
						<div className="row_full detailsList listBox">
							{loader ? (
								<span className="loaderBox">
									<i className="fa fa-spinner fa-spin"></i>
									<em>Loading All records please wait...</em>
								</span>
							) : (
								<div className="row_full">
									<a
										className="text text-danger pull-right"
										onClick={onAdd}
										href="javascript:void(0)"
									>
										{addElm == true ? 'Hide Topic' : 'Add Topic'}
									</a>
									<ul className="row_full mar_t_5">
										<li>
											<span>Sr NO.</span>
											<span>Subject Name</span>
											<span>Action</span>
										</li>
										{list.map((txt, v) => (
											<li key={txt.id}>
												<span>{v + 1}</span>
												<span>{txt.subject_name}</span>
												<span>
													<a
														className="btnpad btn btn-success btn-xs"
														onClick={() =>
															updateStream(txt.id, txt.subject_name)
														}
														href="javascript:void(0);"
													>
														Edit
													</a>{' '}
													<a
														className="btnpad btn btn-alert btn-xs"
														href="javascript:void(0);"
														onClick={() => removeStream(txt.id)}
													>
														Delete
													</a>
												</span>
											</li>
										))}
									</ul>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Addtest;
