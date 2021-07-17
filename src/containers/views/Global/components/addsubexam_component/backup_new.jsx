import React, { useState, useRef, useEffect } from 'react';
import Select from 'react-select';
import './Addsubexam.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';

const Addsubexam = () => {
	const [sub_exam_type_name, setSub_exam_type_name] = useState('');
	const [titleUpdate, setTitleUpdate] = useState({
		name: 'Add sub exam type',
		type: 'Select Exam Type',
	});
	const [gettoken, setGettoken] = useState(localStorage.getItem('token'));
	const [list, setList] = useState([]);
	const [examlist, setExamlist] = useState({
		selectOptions: '',
		exam_type_name: '',
		id: '',
	});

	const [loader, setLoader] = useState(false);
	const [updateId, setUpdateId] = useState('');
	const [errMsg, setErrMsg] = useState('');

	useEffect(() => {
		setGettoken(gettoken);
		getallsubexamtype(gettoken);
		getallexamtype(gettoken);
	}, [gettoken]);

	const handleChange = (event) => {
		setSub_exam_type_name(event.target.value);
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
				const options = responseData.data.map((d) => ({
					value: d.id,
					label: d.exam_type_name,
				}));
				setExamlist({ selectOptions: options });
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
		if (examlist.label == '' && examlist.label.length == 0) {
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
				setSub_exam_type_name('');
				return false;
			}

			const streamInput = {
				exam_type_name: examlist.label,
				sub_exam_type_name: sub_exam_type_name,
				exam_type_id: examlist.value,
			};
			console.log(streamInput);

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
						setSub_exam_type_name('');
						getallsubexamtype(gettoken);
					} else {
						setErrMsg(responseData.message);
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

	const updateStream = (idd, name) => {
		setTitleUpdate({ name: 'Update sub exam type', type: 'Select Exam Type' });
		setSub_exam_type_name(name);
		setUpdateId(idd);
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
							<Select
								options={examlist.selectOptions}
								onChange={(e) => {
									getallexamtype(gettoken);
									setExamlist({ exam_type_name: e.label, id: e.value });
								}}
							/>
						</div>

						<div className="row_full adtopic mar_b_15 inputAdd">
							<span>{titleUpdate.name}</span>
							<input
								type="text"
								name="sub_exam_type_name"
								value={sub_exam_type_name}
								onChange={handleChange}
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
								<ul className="row_full">
									<li>
										<span className="grid_8">Sr NO.</span>
										<span className="grid_30">Exam Name</span>
										<span className="grid_30">Sub Exam Name</span>
										<span className="grid_30">Action</span>
									</li>
									{list.map((txt, v) => (
										<li key={txt.id}>
											<span className="grid_8">{v + 1}</span>
											<span className="grid_30">{txt.exam_type_name}</span>
											<span className="grid_30">{txt.sub_exam_type_name}</span>
											<span className="grid_30">
												<a
													className="btnpad btn btn-success btn-xs"
													onClick={() =>
														updateStream(
															txt.sub_exam_type_id,
															txt.sub_exam_type_name
														)
													}
													href="javascript:void(0);"
												>
													Edit
												</a>{' '}
												<a
													className="btnpad btn btn-alert btn-xs"
													href="javascript:void(0);"
													onClick={() => removeStream(txt.sub_exam_type_id)}
												>
													Delete
												</a>
											</span>
										</li>
									))}
								</ul>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Addsubexam;
