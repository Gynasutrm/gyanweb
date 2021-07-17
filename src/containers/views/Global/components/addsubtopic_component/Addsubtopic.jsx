import React, { useState, useRef, useEffect } from 'react';
import './Addsubtopic.css';

const Addsubtopic = () => {
	const [subexamtype, setSubexamtype] = useState({
		topic_name: '',
		topic_id: '',
	});

	const [subjectdata, setSubjectdata] = useState({
		subject_name: '',
		subject_id: '',
	});

	const [sub_exam_type_name, setSub_exam_type_name] = useState('');
	const [titleUpdate, setTitleUpdate] = useState({
		name: 'Add Topics',
		type: 'Select Chapter',
	});
	const [gettoken, setGettoken] = useState(localStorage.getItem('token'));
	const [list, setList] = useState([]);
	const [topiclist, setTopiclist] = useState([]);

	const [subjectlist, setSubjectlist] = useState([]);

	const [loader, setLoader] = useState(false);
	const [updateId, setUpdateId] = useState('');
	const [errMsg, setErrMsg] = useState('');

	useEffect(() => {
		setGettoken(gettoken);
		getallTopics(gettoken);
		getallsubject(gettoken);
	}, [gettoken]);

	const handleChangesubexam = (event) => {
		setSub_exam_type_name(event.target.value);
	};

	const handleChange = (event) => {
		const selectedIndex = topiclist[event.target.selectedIndex - 1];
		setSubexamtype({
			...subexamtype,
			topic_name: selectedIndex ? selectedIndex.topic_name : '',
			topic_id: selectedIndex ? selectedIndex.topic_id : '',
		});
	};

	const subjecthandleChange = (event) => {
		const selectedIndex = subjectlist[event.target.selectedIndex - 1];
		setSubjectdata({
			...subjectdata,
			subject_name: selectedIndex ? selectedIndex.subject_name : '',
			subject_id: selectedIndex ? selectedIndex.subject_id : '',
		});
		if (selectedIndex) {
			subjectwiseTopic(selectedIndex.subject_id);
		}
	};

	const getallTopics = (data) => {
		setLoader(true);
		fetch('http://54.251.156.235:4001/sub-topics', {
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

				setSubexamtype({
					topic_name: '',
					topic_id: '',
				});
				setSubjectdata({
					subject_name: '',
					subject_id: '',
				});
				setSub_exam_type_name('');
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const cancleUpdate = () => {
		setTitleUpdate({ name: 'Add Topics', type: 'Select Chapter' });
		setUpdateId('');
		setSub_exam_type_name('');
	};

	const addsubexamtype = () => {
		if (subexamtype.topic_name == '' && subexamtype.topic_name.length == 0) {
			setErrMsg('Please select Chapter.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else if (
			subjectdata.subject_name == '' &&
			subjectdata.subject_name.length == 0
		) {
			setErrMsg('Please select Subject.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else if (sub_exam_type_name == '' && sub_exam_type_name.length == 0) {
			setErrMsg('Please Add Topics.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else {
			if (!sub_exam_type_name.match(/^[a-zA-Z0-9\s(\'\",.+\-:)]+$/)) {
				setErrMsg('Please enter valid topic.');
				setTimeout(() => {
					setErrMsg('');
				}, 1000);
				setSubexamtype({
					topic_name: '',
					topic_id: '',
				});
				setSubjectdata({
					subject_name: '',
					subject_id: '',
				});
				setSub_exam_type_name('');
				return false;
			}

			const streamInput = {
				sub_topic_name: sub_exam_type_name,
				topic_id: subexamtype.topic_id,
			};
			fetch('http://54.251.156.235:4001/sub-topics', {
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
							topic_name: '',
							topic_id: '',
						});
						setSubjectdata({
							subject_name: '',
							subject_id: '',
						});
						setSub_exam_type_name('');
						getallTopics(gettoken);
					} else {
						setErrMsg(responseData.message);
						setSubexamtype({
							topic_name: '',
							topic_id: '',
						});
						setSubjectdata({
							subject_name: '',
							subject_id: '',
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
		fetch(`http://54.251.156.235:4001/sub-topics/${idd}`, {
			method: 'delete',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: gettoken,
			},
		})
			.then((response) => response.json())
			.then((responseData) => {
				setErrMsg('Chapter deleted successfully.');
				setTimeout(() => {
					setErrMsg('');
				}, 1500);
				getallTopics(gettoken);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const updateStream = (obj) => {
		setTitleUpdate({ name: 'Update Topics', type: 'Select Chapter' });
		setSub_exam_type_name(obj.sub_topic_name);
		setUpdateId(obj.sub_topic_id);

		setSubexamtype({
			...subexamtype,
			topic_name: obj.topic_name,
			topic_id: obj.topic_id,
		});

		setSubjectdata({
			...subjectdata,
			subject_name: obj.subject_name,
			subject_id: obj.subject_id,
		});

		subjectwiseTopic(obj.subject_id);
	};

	const editStream = () => {
		if (sub_exam_type_name == '' && sub_exam_type_name.length == 0) {
			setErrMsg('Please enter to Update Topics.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else {
			if (!sub_exam_type_name.match(/^[a-zA-Z0-9\s(\'\",.+\-:)]+$/)) {
				setErrMsg('Please enter valid topic.');
				setTimeout(() => {
					setErrMsg('');
				}, 1000);
				setSubexamtype({
					topic_name: '',
					topic_id: '',
				});
				setSubjectdata({
					subject_name: '',
					subject_id: '',
				});
				setSub_exam_type_name('');
				return false;
			}
			const streamInput = {
				sub_topic_name: sub_exam_type_name,
				topic_id: subexamtype.topic_id,
			};
			fetch(`http://54.251.156.235:4001/sub-topics/${updateId}`, {
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
					setErrMsg('Topic updated successfully.');
					setTimeout(() => {
						setErrMsg('');
					}, 1500);

					getallTopics(gettoken);
					setUpdateId('');
					setSub_exam_type_name('');
					cancleUpdate();
				})
				.catch((error) => {
					console.error(error);
				});
		}
	};

	const getallsubject = (data) => {
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
				setSubjectlist(responseData.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const subjectwiseTopic = (idd) => {
		fetch(`http://54.251.156.235:4001/sub-topics/subject-wise-topic/${idd}`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: gettoken,
			},
		})
			.then((response) => response.json())
			.then((responseData) => {
				setTopiclist(responseData.data);
			})
			.catch((error) => {
				console.error(error);
			});
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
							<span>Select Subject</span>
							<select
								name="subject_name"
								value={subjectdata.subject_name}
								className="form-control grid_75"
								onChange={subjecthandleChange}
							>
								<option value="">Select Subject</option>
								{subjectlist.map((txt, index) => (
									<option value={txt.subject_name} key={index}>
										{txt.subject_name}
									</option>
								))}
							</select>
						</div>

						<div className="row_full adtopic mar_b_15 inputAdd">
							<span>{titleUpdate.type}</span>
							<select
								name="topic_name"
								value={subexamtype.topic_name}
								className="form-control grid_75"
								onChange={handleChange}
							>
								<option value="">Select Chapter name</option>
								{topiclist.map((txt, index) => (
									<option key={index} value={txt.topic_name}>
										{txt.topic_name}
									</option>
								))}
							</select>
						</div>

						<div className="row_full adtopic mar_b_15 inputAdd">
							<span>{titleUpdate.name}</span>
							<input
								type="text"
								name="sub_topic_name"
								value={sub_exam_type_name}
								onChange={handleChangesubexam}
								className="grid_75 form-control"
								placeholder="Add Topics"
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
										value="Add Topics"
									/>
								) : (
									<div className="row_fulll">
										<input
											type="submit"
											style={{ float: 'left', marginRight: '15px' }}
											onClick={editStream}
											className="custBtn btn btn-success"
											value="Update Topics"
										/>
										<a
											onClick={cancleUpdate}
											className="addstrm"
											href="javascript:void(0)"
										>
											Add Topics@
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
								<table className="table table-bordered">
									<thead>
										<tr>
											<th>Sr NO.</th>
											<th>Subject name</th>
											<th>Chapter Name</th>
											<th>Topics Name</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										{list.map((txt, v) => (
											<tr key={txt.id}>
												<td>{v + 1}</td>
												<td>{txt.subject_name}</td>
												<td>{txt.topic_name}</td>
												<td>{txt.sub_topic_name}</td>
												<td>
													<a
														className="btnpad btn btn-success btn-xs"
														onClick={() => updateStream(txt)}
														href="javascript:void(0);"
													>
														Edit
													</a>{' '}
													<a
														className="btnpad btn btn-alert btn-xs"
														href="javascript:void(0);"
														onClick={() => removeStream(txt.sub_topic_id)}
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

export default Addsubtopic;
