import React, { useState, useRef, useEffect } from 'react';
import './Addexam.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';

const Addexam = () => {
	const [stream, setStream] = useState('');
	const [gettoken, setGettoken] = useState(localStorage.getItem('token'));
	const [list, setList] = useState([]);
	const [loader, setLoader] = useState(false);
	const [updateId, setUpdateId] = useState(null);
	const [updateStrm, setUpdateStrm] = useState('');
	const [errMsg, setErrMsg] = useState('');

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
			setErrMsg('Please enter to Add exam type.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else {
			if (!stream.match(/^[a-zA-Z0-9\s(\'\",.+\-:)]+$/)) {
				setErrMsg('Please enter valid exam.');
				setTimeout(() => {
					setErrMsg('');
				}, 1000);
				setStream('');
				return false;
			}
			const streamInput = { exam_type_name: stream };
			fetch('http://54.251.156.235:4001/exam-types', {
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
		fetch(`http://54.251.156.235:4001/exam-types/${idd}`, {
			method: 'delete',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: gettoken,
			},
		})
			.then((response) => response.json())
			.then((responseData) => {
				setErrMsg('Exam deleted successfully.');
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
	};

	const editStream = () => {
		if (updateStrm == '' && updateStrm.length == 0) {
			setErrMsg('Please enter to Update Exam.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else {
			if (!updateStrm.match(/^[a-zA-Z0-9\s(\'\",.+\-:)]+$/)) {
				setErrMsg('Please enter valid exam.');
				setTimeout(() => {
					setErrMsg('');
				}, 1000);
				setStream('');
				return false;
			}
			const streamInput = { exam_type_name: updateStrm };
			fetch(`http://54.251.156.235:4001/exam-types/${updateId}`, {
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
	return (
		<div className="row_full">
			<div className="container">
				<div className="row_full disp_flex">
					{updateId == null ? (
						<div className="middleboxArea">
							<h3>Add exam type</h3>
							<div className="row_full inputAdd">
								<input
									type="text"
									name="exam_type_name"
									value={stream}
									onChange={handleChange}
									className="grid_75 form-control"
									placeholder="Add exam type"
								/>
								<input
									type="submit"
									onClick={addStream}
									className="grid_20 btn custBtn btn-success"
									value="Add exam type"
								/>
								{errMsg ? <p className="errTag">{errMsg}</p> : null}
							</div>
						</div>
					) : (
						<div className="middleboxArea">
							<h3>Update Exam</h3>
							<div className="row_full inputAdd">
								<input
									type="text"
									name="exam_type_name"
									value={updateStrm}
									onChange={updatehandleChange}
									className="grid_75 form-control"
									placeholder="Update Exam"
								/>
								<input
									type="submit"
									onClick={editStream}
									className="grid_20 custBtn btn btn-success"
									value="Update Exam"
								/>
								{errMsg ? (
									<p className="errTag">{errMsg}</p>
								) : (
									<a
										onClick={cancleUpdate}
										className="addstrm"
										href="javascript:void(0)"
									>
										Add exam type
									</a>
								)}
							</div>
						</div>
					)}
				</div>

				<div className="row_full mar_t_35 disp_flex">
					<div className="middleboxArea">
						<div className="row_full detailsList listBox">
							{loader ? (
								<span className="loaderBox">
									<i className="fa fa-spinner fa-spin"></i>
									<em>Loading All records please wait...</em>
								</span>
							) : (
								<ul className="row_full">
									<li>
										<span>Sr NO.</span>
										<span>Exam Name</span>
										<span>Action</span>
									</li>
									{list.map((txt, v) => (
										<li key={v}>
											<span>{v + 1}</span>
											<span>{txt.exam_type_name}</span>
											<span>
												<a
													className="btnpad btn btn-success btn-xs"
													onClick={() =>
														updateStream(txt.exam_type_id, txt.exam_type_name)
													}
													href="javascript:void(0);"
												>
													Edit
												</a>{' '}
												<a
													className="btnpad btn btn-alert btn-xs"
													href="javascript:void(0);"
													onClick={() => removeStream(txt.exam_type_id)}
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

export default Addexam;
