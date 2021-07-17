import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import * as api from '../../apiHelper/Apihelper';
import './Registration.scss';
import { Link } from 'react-router-dom';

const axios = require('axios');
const images_path = process.env.PUBLIC_URL + '/assets/images/';

const Registration = (props) => {
	const [gettoken, setGettoken] = useState(localStorage.getItem('token'));
	useEffect(() => {
		setGettoken(gettoken);
		getallusertype(gettoken); //use
	}, [gettoken]);

	const [userType, setUserType] = useState({
		user_type_name: '',
		user_type_id: '',
		user_id: '',
		school_name: '',
		school_id: '',
	});
	const [usertypelist, setUserTypelist] = useState([]);
	const [userlist, setUserlist] = useState([]);
	const [pathshalaList, setPathshalaList] = useState([]);
	const [showlist, setShowlist] = useState(false);

	const [sub_exam_type_name, setSub_exam_type_name] = useState('');
	const [titleUpdate, setTitleUpdate] = useState({
		name: 'Add sub exam type',
		type: 'Select Exam Type',
	});

	const [loader, setLoader] = useState(false);
	const [updateId, setUpdateId] = useState('');
	const [errMsg, setErrMsg] = useState('');

	const [norecordMsg, setRecordMsg] = useState('');

	const handleChangesubexam = (event) => {
		setSub_exam_type_name(event.target.value);
	};
	const handleOnChangePathshala = (event) => {
		const selectedUserId = event.target.value;
		const selectedUser = pathshalaList.filter(
			(list) => list.school_id == selectedUserId
		);
		setUserType({
			...userType,
			school_id: selectedUserId,
			school_name: _.size(selectedUser) ? selectedUser[0].school_name : '',
		});
		let streamInput = {
			school_id: parseInt(selectedUserId),
		};
		setLoader(true);
		if (selectedUserId) {
			fetch(`http://54.251.156.235:4001/users/student-in-school`, {
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
					setLoader(false);
					if (responseData.statusCode == 203) {
						setErrMsg(responseData.message);
						// console.log(responseData.statusCode);
					} else {
						if (!responseData.data && responseData.data.length)
							setRecordMsg('No Record Found!');
						else setRecordMsg('');
						setUserlist(responseData.data);
						setShowlist(true);
					}
				})
				.catch((error) => {
					console.error(error);
				});
		} else {
			setLoader(false);
			setShowlist(false);
			setUserlist([]);
		}
	};
	const handleOnChangeRegistrationType = (event) => {
		const selectedUserType = event.target.value;
		if (_.isEmpty(selectedUserType)) {
			setUserType({
				...userType,
				user_type_name: 'Select Registration Type',
				user_type_id: '',
			});
			setShowlist(false);
			return false;
		}
		const selectedUser = usertypelist.filter(
			(list) => list.user_type_id == selectedUserType
		);
		setUserType({
			...userType,
			...selectedUser[0],
		});
		if (selectedUserType === '1') {
			api.httpGet('users/school-list').then((response) => {
				setLoader(false);
				setPathshalaList(response);
			});
		} else {
			let streamInput = { user_type_id: selectedUser[0].user_type_id };
			getUSerList(streamInput);
		}
	};
	const getUSerList = (streamInput) => {
		setLoader(true);
		fetch(`http://54.251.156.235:4001/users/list`, {
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
				setLoader(false);
				if (responseData.statusCode == 203) {
					setErrMsg(responseData.message);
					// console.log(responseData.statusCode);
				} else {
					// console.log("-------------", responseData.data);
					if (!responseData.data && !responseData.data.length)
						setRecordMsg('No Record Found!');
					else setRecordMsg('');
					setUserlist(responseData.data);
					setShowlist(true);
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};
	// use
	const getallusertype = (data) => {
		setLoader(true);
		fetch('http://54.251.156.235:4001/commons/user-type-list', {
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
				setUserTypelist(responseData.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const addnewuser = (evt) => {
		if (userType.user_type_id == '') {
			setErrMsg('Please Select Registration Type First!');
			setTimeout(() => {
				setErrMsg('');
			}, 10000);
			return false;
		} else {
			let selectData = {
				user_type: userType.user_type_id,
			};
			if (userType.user_type_id === 1) {
				selectData = {
					...selectData,
					school_id: userType.school_id,
					school_name: userType.school_name,
				};
			}
			props.history.push({
				pathname: '/global/registration/adduser',
				state: selectData,
			});
		}
	};
	const approveDisprove = (id) => {
		console.log(id);
		fetch(`http://54.251.156.235:4001/users/approve-user`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: gettoken,
			},
			body: JSON.stringify({
				user_id: id,
			}),
		})
			.then((response) => response.json())
			.then((responseData) => {
				setErrMsg('User approve successfully.');
				setTimeout(() => {
					setErrMsg('');
				}, 1500);
			})
			.catch((error) => {
				console.error(error);
			});
	};
	const removeUser = (idd) => {
		fetch(`http://54.251.156.235:4001/users/delete-user`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: gettoken,
			},
			body: JSON.stringify({
				user_id: idd,
			}),
		})
			.then((response) => response.json())
			.then((responseData) => {
				setErrMsg('User deleted successfully.');
				setTimeout(() => {
					setErrMsg('');
				}, 1500);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<div className="row_full">
			<div className="container-fluid">
				<div className="row_full">
					<div className="middleboxArea">
						<h5 className="row_full mar_b_20 text-left">
							Select Registration Type
						</h5>
						<div className="row_full adtopic mar_b_15 inputAdd">
							<select
								name="registration-type"
								className="form-control grid_100"
								value={userType.user_type_id}
								onChange={handleOnChangeRegistrationType}
							>
								<option value="">Select Registration Type</option>
								{usertypelist.map((txt, index) => (
									<option value={txt.user_type_id} key={index}>
										{txt.user_type_name}
									</option>
								))}
							</select>
						</div>
						{userType.user_type_id === 1 ? (
							<>
								<h5 className="row_full mar_b_20 text-left">
									Select Pathshala
								</h5>
								<div className="row_full adtopic mar_b_15 inputAdd">
									<select
										name="registration-type"
										className="form-control grid_100"
										value={userType.school_id}
										onChange={handleOnChangePathshala}
									>
										<option value="">Select Pathshala</option>
										{pathshalaList &&
											pathshalaList.map((txt, index) => (
												<option value={txt.school_id} key={index}>
													{txt.school_name}
												</option>
											))}
									</select>
								</div>
							</>
						) : null}

						<div className="row_full adtopic inputAdd">
							<span>&nbsp;</span>
							<div className="grid_75 text-right">
								<input
									type="submit"
									className="btn custBtn btn-info"
									onClick={addnewuser}
									value="Add New"
								/>
							</div>
						</div>
						<div className="row_full">
							{errMsg ? <p className="errTag">{errMsg}</p> : null}
						</div>
					</div>
					{showlist ? (
						<div className="middleboxArea larger">
							{norecordMsg ? (
								<p className="errTag">{norecordMsg}</p>
							) : (
								<div className="row_full detailsList listBox">
									<h5>{userType.user_type_name} List</h5>

									{loader ? (
										<span className="loaderBox">
											<i className="fa fa-spinner fa-spin"></i>
											<em>Loading All records please wait...</em>
										</span>
									) : (
										<div className="table-responsive table-bordered table-striped ">
											<table className="table">
												<thead>
													<tr>
														<th width="5%">#</th>
														<th width="15%">Name</th>
														<th width="17%">Email</th>
														<th width="15%">Phone</th>
														<th width="15%">State</th>
														<th width="15%">City</th>
														<th width="22%">Action</th>
													</tr>
												</thead>
												<tbody>
													{userlist.map((txt, v) => (
														<tr key={v}>
															<td>{v + 1}</td>
															<td>
																<Link
																	to={{
																		pathname: '/global/registration/viewuser',
																		state: {
																			user_id: txt.user_id,
																			user_type_id: userType.user_type_id,
																		},
																	}}
																>
																	{txt.full_name}
																</Link>
															</td>
															<td>{txt.email}</td>
															<td>{txt.mobile}</td>
															<td>{txt.state_name}</td>
															<td>{txt.city_name}</td>
															<td>
																<Link
																	className="btnpad btn btn-success btn-xs mr-2"
																	to={{
																		pathname: '/global/registration/edituser',
																		state: {
																			user_id: txt.user_id,
																		},
																	}}
																>
																	Edit
																</Link>
																<button
																	className="btnpad btn btn-success btn-xs mr-2"
																	onClick={() => approveDisprove(txt.user_id)}
																>
																	{txt.status ? 'Disapproval' : 'Approval'}
																</button>
																<button
																	className="btnpad btn btn-danger btn-xs mr-2"
																	onClick={() => removeUser(txt.user_id)}
																>
																	Delete
																</button>
															</td>
														</tr>
													))}
												</tbody>
											</table>
										</div>
									)}
								</div>
							)}
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default Registration;
