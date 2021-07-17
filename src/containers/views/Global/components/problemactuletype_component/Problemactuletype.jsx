import React, { useState, useRef, useEffect } from 'react';
import './Problemactuletype.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';

const Problemactuletype = () => {
	const [subexamtype, setSubexamtype] = useState({
		problem_type_name: '',
		problem_type_id: '',
	});

	const [sub_exam_type_name, setSub_exam_type_name] = useState('');
	const [titleUpdate, setTitleUpdate] = useState({
		name: 'Add Problem Actule Type',
		type: 'Select problem type',
	});
	const [gettoken, setGettoken] = useState(localStorage.getItem('token'));
	const [list, setList] = useState([]);
	const [problemtype, setProblemtype] = useState([]);

	const [loader, setLoader] = useState(false);
	const [updateId, setUpdateId] = useState('');
	const [errMsg, setErrMsg] = useState('');

	useEffect(() => {
		setGettoken(gettoken);
		getallsubexamtype(gettoken);
		getallproblemtype(gettoken);
	}, [gettoken]);

	const handleChangesubexam = (event) => {
		setSub_exam_type_name(event.target.value);
	};

	const handleChange = (event) => {
		const selectedIndex = problemtype[event.target.selectedIndex - 1];
		setSubexamtype({
			...subexamtype,
			problem_type_name: selectedIndex ? selectedIndex.problem_type_name : '',
			problem_type_id: selectedIndex ? selectedIndex.problem_type_id : '',
		});
	};

	const getallsubexamtype = (data) => {
		setLoader(true);
		fetch('http://54.251.156.235:4001/problem-actual-types', {
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

	const getallproblemtype = (data) => {
		setLoader(true);
		fetch('http://54.251.156.235:4001/commons/getProbTypelist', {
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
				setProblemtype(responseData.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const cancleUpdate = () => {
		setTitleUpdate({
			name: 'Add Problem Actule Type',
			type: 'Select problem type',
		});
		setUpdateId('');
		setSub_exam_type_name('');
	};

	const addsubexamtype = () => {
		if (
			subexamtype.problem_type_name == '' &&
			subexamtype.problem_type_name.length == 0
		) {
			setErrMsg('Please select sub exam type.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else if (sub_exam_type_name == '' && sub_exam_type_name.length == 0) {
			setErrMsg('Please Add Problem Actule Type.');
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
					problem_type_name: '',
					problem_type_id: '',
				});
				setSub_exam_type_name('');
				return false;
			}

			const streamInput = {
				problem_type_name: subexamtype.problem_type_name,
				problem_actual_type_name: sub_exam_type_name,
				problem_type_id: subexamtype.problem_type_id,
			};
			console.log(streamInput);
			fetch('http://54.251.156.235:4001/problem-actual-types', {
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
						setSubexamtype({
							problem_type_name: '',
							problem_type_id: '',
						});
						setSub_exam_type_name('');
						getallsubexamtype(gettoken);
					} else {
						setErrMsg(responseData.message);
						setSubexamtype({
							problem_type_name: '',
							problem_type_id: '',
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
		fetch(`http://54.251.156.235:4001/problem-actual-types/${idd}`, {
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
		setTitleUpdate({
			name: 'Update Problem Actule Type type',
			type: 'Select problem type',
		});
		setSub_exam_type_name(name);
		setUpdateId(idd);

		setSubexamtype({
			...subexamtype,
			problem_type_name: examTypeName,
			problem_type_id: examTypeId,
		});
	};

	const editStream = () => {
		if (sub_exam_type_name == '' && sub_exam_type_name.length == 0) {
			setErrMsg('Please enter to Update Problem Actule Type.');
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
					problem_type_name: '',
					problem_type_id: '',
				});
				setSub_exam_type_name('');
				return false;
			}
			const streamInput = { problem_actual_type_name: sub_exam_type_name };
			console.log(streamInput);
			fetch(`http://54.251.156.235:4001/problem-actual-types/${updateId}`, {
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
								name="problem_type_name"
								className="form-control grid_75"
								value={subexamtype.problem_type_name}
								onChange={handleChange}
							>
								<option value="">Select problem type</option>
								{problemtype.map((txt, index) => (
									<option value={txt.problem_type_name} key={index}>
										{txt.problem_type_name}
									</option>
								))}
							</select>
						</div>

						<div className="row_full adtopic mar_b_15 inputAdd">
							<span>{titleUpdate.name}</span>
							<input
								type="text"
								name="problem_actual_type_name"
								value={sub_exam_type_name}
								onChange={handleChangesubexam}
								className="grid_75 form-control"
								placeholder="Add Problem Actule Type"
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
										value="Add Problem Actule Type"
									/>
								) : (
									<div className="row_fulll">
										<input
											type="submit"
											style={{ float: 'left', marginRight: '15px' }}
											onClick={editStream}
											className="custBtn btn btn-success"
											value="Update Problem Actule Type"
										/>
										<a
											onClick={cancleUpdate}
											className="addstrm"
											href="javascript:void(0)"
										>
											Add Problem Actule Type
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
													<th width="15%">Problem type name</th>
													<th width="17%">Problem actual type name</th>
													<th width="15%">Action</th>
												</tr>
											</thead>
											<tbody>
												{list.map((txt, v) => (
													<tr key={v}>
														<td>{v + 1}</td>
														<td>{txt.problem_type_name}</td>
														<td>{txt.problem_actual_type_name}</td>
														<td>
															<a
																className="btnpad btn btn-success btn-xs"
																onClick={() =>
																	updateStream(
																		txt.problem_actual_type_id,
																		txt.problem_actual_type_name,
																		txt.problem_type_name,
																		txt.problem_type_id
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
																	removeStream(txt.problem_actual_type_id)
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

export default Problemactuletype;
