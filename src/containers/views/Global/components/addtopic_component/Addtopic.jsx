import React, { useState, useRef, useEffect } from 'react';
import './Addtopic.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';

const Addtopic = () => {
	const [subjectname, setSubjectname] = useState({
		subject_name: '',
		subject_id: '',
	});

	const [topicname, setTopicname] = useState('');
	const [titleUpdate, setTitleUpdate] = useState({
		name: 'Add Chapter',
		type: 'Select Subject',
	});
	const [gettoken, setGettoken] = useState(localStorage.getItem('token'));
	const [list, setList] = useState([]);
	const [examlist, setExamlist] = useState([]);

	const [loader, setLoader] = useState(false);
	const [updateId, setUpdateId] = useState('');
	const [errMsg, setErrMsg] = useState('');

	useEffect(() => {
		setGettoken(gettoken);
		getallTopics(gettoken);
		getallsubject(gettoken);
	}, [gettoken]);

	const handleChangesubexam = (event) => {
		setTopicname(event.target.value);
	};

	const handleChange = (event) => {
		const selectedIndex = examlist[event.target.selectedIndex - 1];
		setSubjectname({
			...subjectname,
			subject_name: selectedIndex ? selectedIndex.subject_name : '',
			subject_id: selectedIndex ? selectedIndex.subject_id : '',
		});
	};

	const getallTopics = (data) => {
		setLoader(true);
		fetch('http://54.251.156.235:4001/topics', {
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
				setExamlist(responseData.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const cancleUpdate = () => {
		setTitleUpdate({ name: 'Add Chapter', type: 'Select Subject' });
		setUpdateId('');
		setTopicname('');
	};

	const addsubjectname = () => {
		if (
			subjectname.subject_name == '' &&
			subjectname.subject_name.length == 0
		) {
			setErrMsg('Please select subject.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else if (topicname == '' && topicname.length == 0) {
			setErrMsg('Please Add Chapter.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else {
			if (!topicname.match(/^[a-zA-Z0-9\s(\'\",.+\-:)]+$/)) {
				setErrMsg('Please enter valid topic.');
				setTimeout(() => {
					setErrMsg('');
				}, 1000);
				setSubjectname({
					subject_name: '',
					subject_id: '',
				});
				setTopicname('');
				return false;
			}

			const streamInput = {
				subject_name: subjectname.subject_name,
				topic_name: topicname,
				subject_id: subjectname.subject_id,
			};
			fetch('http://54.251.156.235:4001/topics', {
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
						setSubjectname({
							subject_name: '',
							subject_id: '',
						});
						setTopicname('');
						getallTopics(gettoken);
					} else {
						setErrMsg(responseData.message);
						setSubjectname({
							subject_name: '',
							subject_id: '',
						});
						setTopicname('');
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
		fetch(`http://54.251.156.235:4001/topics/${idd}`, {
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

	const updateStream = (idd, name, subjectName, subjectId) => {
		setTitleUpdate({ name: 'Update Chapter', type: 'Select Subject' });
		setTopicname(name);
		setUpdateId(idd);

		setSubjectname({
			...subjectname,
			subject_name: subjectName,
			subject_id: subjectId,
		});
	};

	const editStream = () => {
		if (topicname == '' && topicname.length == 0) {
			setErrMsg('Please enter to Update Chapter.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else {
			if (!topicname.match(/^[a-zA-Z0-9\s(\'\",.+\-:)]+$/)) {
				setErrMsg('Please enter valid topic.');
				setTimeout(() => {
					setErrMsg('');
				}, 1000);
				setSubjectname({
					subject_name: '',
					subject_id: '',
				});
				setTopicname('');
				return false;
			}
			const streamInput = {
				topic_name: topicname,
				subject_id: subjectname.subject_id,
			};
			fetch(`http://54.251.156.235:4001/topics/${updateId}`, {
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
					setTopicname('');
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
								name="subject_name"
								value={subjectname.subject_name}
								className="form-control grid_75"
								onChange={handleChange}
							>
								<option value="">{titleUpdate.type}</option>
								{examlist.map((txt, index) => (
									<option value={txt.subject_name} key={index}>
										{txt.subject_name}
									</option>
								))}
							</select>
						</div>

						<div className="row_full adtopic mar_b_15 inputAdd">
							<span>{titleUpdate.name}</span>
							<input
								type="text"
								name="topic_name"
								value={topicname}
								onChange={handleChangesubexam}
								className="grid_75 form-control"
								placeholder="Add Chapter"
							/>
						</div>

						<div className="row_full adtopic inputAdd">
							<span>&nbsp;</span>
							<div className="grid_75">
								{updateId == '' ? (
									<input
										type="submit"
										onClick={addsubjectname}
										className="btn custBtn btn-success"
										value="Add Chapter"
									/>
								) : (
									<div className="row_fulll">
										<input
											type="submit"
											style={{ float: 'left', marginRight: '15px' }}
											onClick={editStream}
											className="custBtn btn btn-success"
											value="Update Chapter"
										/>
										<a
											onClick={cancleUpdate}
											className="addstrm"
											href="javascript:void(0)"
										>
											Add Chapter
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
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										{list.map((txt, v) => (
											<tr key={txt.id}>
												<td>{v + 1}</td>
												<td>{txt.subject_name}</td>
												<td>{txt.topic_name}</td>
												<td>
													<a
														className="btnpad btn btn-success btn-xs"
														onClick={() =>
															updateStream(
																txt.topic_id,
																txt.topic_name,
																txt.subject_name,
																txt.subject_id
															)
														}
														href="javascript:void(0);"
													>
														Edit
													</a>{' '}
													<a
														className="btnpad btn btn-alert btn-xs"
														href="javascript:void(0);"
														onClick={() => removeStream(txt.topic_id)}
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

export default Addtopic;
