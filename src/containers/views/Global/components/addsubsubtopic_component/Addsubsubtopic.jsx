import React, { useState, useRef, useEffect } from 'react';
import './Addsubsubtopic.css';

const Addsubsubtopic = () => {
	const [topicdata, setTopicdata] = useState({
		topic_name: '',
		topic_id: '',
	});

	const [subtopicdata, setSubtopicdata] = useState({
		sub_topic_name: '',
		sub_topic_id: '',
	});

	const [subjectdata, setSubjectdata] = useState({
		subject_name: '',
		subject_id: '',
	});

	const [sub_exam_type_name, setSub_exam_type_name] = useState('');
	const [titleUpdate, setTitleUpdate] = useState({
		name: 'Add Sub Topics',
		type: 'Select Chapter',
		type1: 'Select Topics',
	});
	const [gettoken, setGettoken] = useState(localStorage.getItem('token'));
	const [list, setList] = useState([]);

	const [topiclist, setTopiclist] = useState([]);
	const [subtopiclist, setSubtopiclist] = useState([]);
	const [subjectlist, setSubjectlist] = useState([]);

	const [loader, setLoader] = useState(false);
	const [updateId, setUpdateId] = useState('');
	const [errMsg, setErrMsg] = useState('');

	useEffect(() => {
		setGettoken(gettoken);
		getallsubsubTopics(gettoken);
		getallsubject(gettoken);
	}, [gettoken]);

	const handleChangesubexam = (event) => {
		setSub_exam_type_name(event.target.value);
	};

	const topichandleChange = (event) => {
		const selectedIndex = topiclist[event.target.selectedIndex - 1];
		setTopicdata({
			...topicdata,
			topic_name: selectedIndex ? selectedIndex.topic_name : '',
			topic_id: selectedIndex ? selectedIndex.topic_id : '',
		});
		console.log(topiclist);
		if (selectedIndex) {
			subjectwiseTopic1(selectedIndex.topic_id);
		}
	};

	const subtopichandleChange = (event) => {
		const selectedIndex = subtopiclist[event.target.selectedIndex - 1];
		setSubtopicdata({
			...subtopicdata,
			sub_topic_name: selectedIndex ? selectedIndex.sub_topic_name : '',
			sub_topic_id: selectedIndex ? selectedIndex.sub_topic_id : '',
		});
	};

	const subjecthandleChange = (event) => {
		const selectedIndex = subjectlist[event.target.selectedIndex - 1];
		setSubjectdata({
			...subjectdata,
			subject_name: selectedIndex ? selectedIndex.subject_name : '',
			subject_id: selectedIndex ? selectedIndex.subject_id : '',
		});
		console.log(subjectlist);
		if (selectedIndex) {
			subjectwiseTopic(selectedIndex.subject_id);
		}
	};

	const getallsubsubTopics = (data) => {
		setLoader(true);
		fetch('http://54.251.156.235:4001/sub-sub-topics', {
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

				setTopicdata({
					topic_name: '',
					topic_id: '',
				});
				setSubtopicdata({
					sub_topic_name: '',
					sub_topic_id: '',
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
		setTitleUpdate({
			name: 'Add Sub Topics',
			type: 'Select Chapter',
			type1: 'Select Topics',
		});
		setUpdateId('');
		setSub_exam_type_name('');
	};

	const addsubexamtype = () => {
		if (topicdata.topic_name == '' && topicdata.topic_name.length == 0) {
			setErrMsg('Please select Chapter.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else if (
			subtopicdata.sub_topic_name == '' &&
			subtopicdata.sub_topic_name.length == 0
		) {
			setErrMsg('Please select Topics.');
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
				setTopicdata({
					topic_name: '',
					topic_id: '',
				});
				setSubtopicdata({
					sub_topic_name: '',
					sub_topic_id: '',
				});
				setSubjectdata({
					subject_name: '',
					subject_id: '',
				});
				setSub_exam_type_name('');
				return false;
			}

			const streamInput = {
				sub_sub_topic_name: sub_exam_type_name,
				sub_topic_id: subtopicdata.sub_topic_id,
			};
			console.log(streamInput);
			fetch('http://54.251.156.235:4001/sub-sub-topics', {
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
						setTopicdata({
							topic_name: '',
							topic_id: '',
						});
						setSubtopicdata({
							sub_topic_name: '',
							sub_topic_id: '',
						});
						setSubjectdata({
							subject_name: '',
							subject_id: '',
						});
						setSub_exam_type_name('');
						getallsubsubTopics(gettoken);
					} else {
						setErrMsg(responseData.message);
						setTopicdata({
							topic_name: '',
							topic_id: '',
						});
						setSubtopicdata({
							sub_topic_name: '',
							sub_topic_id: '',
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
		console.log(idd);
		fetch(`http://54.251.156.235:4001/sub-sub-topics/${idd}`, {
			method: 'delete',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: gettoken,
			},
		})
			.then((response) => response.json())
			.then((responseData) => {
				console.log(responseData);
				setErrMsg('Topics deleted successfully.');
				setTimeout(() => {
					setErrMsg('');
				}, 1500);
				getallsubsubTopics(gettoken);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const updateStream = (obj) => {
		setTitleUpdate({
			name: 'Update Sub Topics',
			type: 'Select Chapter',
			type1: 'Select Topics',
		});
		setSub_exam_type_name(obj.sub_sub_topic_name);
		setUpdateId(obj.sub_sub_topic_id);

		setSubjectdata({
			...subjectdata,
			subject_name: obj.subject_name,
			subject_id: obj.subject_id,
		});

		subjectwiseTopic(obj.subject_id);

		setTopicdata({
			...topicdata,
			topic_name: obj.topic_name,
			topic_id: obj.topic_id,
		});

		subjectwiseTopic1(obj.topic_id);

		setSubtopicdata({
			...subtopicdata,
			sub_topic_name: obj.sub_topic_name,
			sub_topic_id: obj.sub_topic_id,
		});
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
				setTopicdata({
					topic_name: '',
					topic_id: '',
				});
				setSubtopicdata({
					sub_topic_name: '',
					sub_topic_id: '',
				});
				setSubjectdata({
					subject_name: '',
					subject_id: '',
				});
				setSub_exam_type_name('');
				return false;
			}
			const streamInput = {
				sub_sub_topic_name: sub_exam_type_name,
				sub_topic_id: subtopicdata.sub_topic_id,
			};
			fetch(`http://54.251.156.235:4001/sub-sub-topics/${updateId}`, {
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

					getallsubsubTopics(gettoken);
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

	const subjectwiseTopic1 = (idd) => {
		fetch(
			`http://54.251.156.235:4001/sub-sub-topics/topic-wise-sub-topic/${idd}`,
			{
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					Authorization: gettoken,
				},
			}
		)
			.then((response) => response.json())
			.then((responseData) => {
				//console.log('response data data',+responseData.data);
				setSubtopiclist(responseData.data);
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
								value={topicdata.topic_name}
								className="form-control grid_75"
								onChange={topichandleChange}
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
							<span>{titleUpdate.type1}</span>
							<select
								name="sub_topic_name"
								value={subtopicdata.sub_topic_name}
								className="form-control grid_75"
								onChange={subtopichandleChange}
							>
								<option value="">Select topic name</option>
								{subtopiclist.map((txt, index) => (
									<option key={index} value={txt.sub_topic_name}>
										{txt.sub_topic_name}
									</option>
								))}
							</select>
						</div>

						<div className="row_full adtopic mar_b_15 inputAdd">
							<span>{titleUpdate.name}</span>
							<input
								type="text"
								name="sub_sub_topic_name"
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
										value="Add Sub Topics"
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
											Add Topics
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
								<table className="table table-responsive table-bordered">
									<thead>
										<tr>
											<th>Sr NO.</th>
											<th>Subject name</th>
											<th>Chapter Name</th>
											<th>Topics Name</th>
											<th>Sub Topics Name</th>
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
												<td>{txt.sub_sub_topic_name}</td>
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
														onClick={() => removeStream(txt)}
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

export default Addsubsubtopic;
