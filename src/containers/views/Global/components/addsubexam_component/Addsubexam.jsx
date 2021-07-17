import React, { useState, useRef, useEffect } from 'react';
import './Addsubexam.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';

const Addsubexam = () => {
	const [subexamtype, setSubexamtype] = useState({
		exam_type_name: '',
		exam_type_id: '',
	});

	const [sub_exam_type_name, setSub_exam_type_name] = useState('');
	const [titleUpdate, setTitleUpdate] = useState({
		name: 'Add sub exam type',
		type: 'Select Exam Type',
	});
	const [gettoken, setGettoken] = useState(localStorage.getItem('token'));
	const [list, setList] = useState([]);
	const [examlist, setExamlist] = useState([]);

	const [loader, setLoader] = useState(false);
	const [updateId, setUpdateId] = useState('');
	const [errMsg, setErrMsg] = useState('');

	useEffect(() => {
		setGettoken(gettoken);
		getallsubexamtype(gettoken);
		getallexamtype(gettoken);
	}, [gettoken]);

	const handleChangesubexam = (event) => {
		setSub_exam_type_name(event.target.value);
	};

	const handleChange = (event) => {
		setSubexamtype({
			...subexamtype,
			exam_type_name: event.target.selectedIndex
				? examlist[event.target.selectedIndex - 1].exam_type_name
				: '',
			exam_type_id: event.target.selectedIndex
				? examlist[event.target.selectedIndex - 1].exam_type_id
				: '',
		});
	};

	const getallsubexamtype = (data) => {
		setLoader(true);
		fetch('http://54.251.156.235:4001/sub-exam-types', {
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

	const getallexamtype = (data) => {
		setLoader(true);
		fetch('http://54.251.156.235:4001/exam-types', {
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
				setExamlist(responseData.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const cancleUpdate = () => {
		setTitleUpdate({ name: 'Add sub exam type', type: 'Select Exam Type' });
		setUpdateId('');
		setSub_exam_type_name('');
	};

	const addsubexamtype = () => {
		if (
			subexamtype.exam_type_name == '' &&
			subexamtype.exam_type_name.length == 0
		) {
			setErrMsg('Please select sub exam type.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else if (sub_exam_type_name == '' && sub_exam_type_name.length == 0) {
			setErrMsg('Please Add sub exam type.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else {
			if (!sub_exam_type_name.match(/^[a-zA-Z0-9\s(\'\",.+\-:)]+$/)) {
				setErrMsg('Please enter valid sub exam type.');
				setTimeout(() => {
					setErrMsg('');
				}, 1000);
				setSubexamtype({
					exam_type_name: '',
					exam_type_id: '',
				});
				setSub_exam_type_name('');
				return false;
			}

			const streamInput = {
				exam_type_name: subexamtype.exam_type_name,
				sub_exam_type_name: sub_exam_type_name,
				exam_type_id: subexamtype.exam_type_id,
			};
			console.log('hi... ', streamInput);

			fetch('http://54.251.156.235:4001/sub-exam-types', {
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
						setSubexamtype({
							exam_type_name: '',
							exam_type_id: '',
						});
						setSub_exam_type_name('');
						getallsubexamtype(gettoken);
					} else {
						setErrMsg(responseData.message);
						setSubexamtype({
							exam_type_name: '',
							exam_type_id: '',
						});
						setSub_exam_type_name('');
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
		fetch(`http://54.251.156.235:4001/sub-exam-types/${idd}`, {
			method: 'delete',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: gettoken,
			},
		})
			.then((response) => response.json())
			.then((responseData) => {
				setErrMsg('Sub Exam deleted successfully.');
				setTimeout(() => {
					setErrMsg('');
				}, 1500);
				getallsubexamtype(gettoken);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const updateStream = (idd, name, examTypeName, examTypeId) => {
		setTitleUpdate({ name: 'Update sub exam type', type: 'Select Exam Type' });
		setSub_exam_type_name(name);
		setUpdateId(idd);

		setSubexamtype({
			...subexamtype,
			exam_type_name: examTypeName,
			exam_type_id: examTypeId,
		});
	};

	const editStream = () => {
		if (sub_exam_type_name == '' && sub_exam_type_name.length == 0) {
			setErrMsg('Please enter to Update Sub Exam.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else {
			if (!sub_exam_type_name.match(/^[a-zA-Z0-9\s(\'\",.+\-:)]+$/)) {
				setErrMsg('Please enter valid exam.');
				setTimeout(() => {
					setErrMsg('');
				}, 1000);
				setSubexamtype({
					exam_type_name: '',
					exam_type_id: '',
				});
				setSub_exam_type_name('');
				return false;
			}
			const streamInput = { sub_exam_type_name: sub_exam_type_name };
			console.log(streamInput);
			fetch(`http://54.251.156.235:4001/sub-exam-types/${updateId}`, {
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
					setErrMsg('Exam updated successfully.');
					setTimeout(() => {
						setErrMsg('');
					}, 1500);

					getallsubexamtype(gettoken);
					setUpdateId('');
					setSub_exam_type_name('');
					cancleUpdate();
				})
				.catch((error) => {
					console.error(error);
				});
		}
	};
	return (
		<div className="row_full">
			<div className="container">
				<div className="row_full disp_flex">
					<div className="middleboxArea">
						<h3 className="row_full mar_b_20 text-center">
							{titleUpdate.name}
						</h3>
						<div className="row_full adtopic mar_b_15 inputAdd">
							<span>{titleUpdate.type}</span>
							<select
								name="exam_type_name"
								className="form-control grid_75"
								value={subexamtype.exam_type_name}
								onChange={handleChange}
							>
								<option value="">Select Exam Type</option>
								{examlist.map((txt, index) => (
									<option value={txt.exam_type_name} key={index}>
										{txt.exam_type_name}
									</option>
								))}
							</select>
						</div>

						<div className="row_full adtopic mar_b_15 inputAdd">
							<span>{titleUpdate.name}</span>
							<input
								type="text"
								name="sub_exam_type_name"
								value={sub_exam_type_name}
								onChange={handleChangesubexam}
								className="grid_75 form-control"
								placeholder="Add sub exam type"
							/>
						</div>

						<div className="row_full adtopic inputAdd">
							<span>&nbsp;</span>
							<div className="grid_75">
								{updateId == '' ? (
									<input
										type="submit"
										onClick={addsubexamtype}
										className="btn custBtn btn-success"
										value="Add sub exam type"
									/>
								) : (
									<div className="row_fulll">
										<input
											type="submit"
											style={{ float: 'left', marginRight: '15px' }}
											onClick={editStream}
											className="custBtn btn btn-success"
											value="Update Sub Exam"
										/>
										<a
											onClick={cancleUpdate}
											className="addstrm"
											href="javascript:void(0)"
										>
											Add sub exam type
										</a>
									</div>
								)}
							</div>
							{errMsg ? <p className="errTag">{errMsg}</p> : null}
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
								<>
									<div className="table-responsive table-bordered table-striped ">
										<table className="table">
											<thead>
												<tr>
													<th width="5%">#</th>
													<th width="15%">Exam Name</th>
													<th width="17%">Sub Exam Name</th>
													<th width="15%">Action</th>
												</tr>
											</thead>
											<tbody>
												{list.map((txt, v) => (
													<tr key={v}>
														<td>{v + 1}</td>
														<td>{txt.exam_type_name}</td>
														<td>{txt.sub_exam_type_name}</td>
														<td>
															<a
																className="btnpad btn btn-success btn-xs"
																onClick={() =>
																	updateStream(
																		txt.sub_exam_type_id,
																		txt.sub_exam_type_name,
																		txt.exam_type_name,
																		txt.exam_type_id
																	)
																}
																href="javascript:void(0);"
															>
																Edit
															</a>{' '}
															<a
																className="btnpad btn btn-alert btn-xs"
																href="javascript:void(0);"
																onClick={() =>
																	removeStream(txt.sub_exam_type_id)
																}
															>
																Delete
															</a>
														</td>
													</tr>
												))}
											</tbody>
										</table>
									</div>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Addsubexam;
