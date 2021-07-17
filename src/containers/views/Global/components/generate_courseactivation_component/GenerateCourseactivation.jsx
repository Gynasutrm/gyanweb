import React, { useState, useRef, useEffect } from 'react';
import * as api from '../../apiHelper/Apihelper';
import './GenerateCourseactivation.css';
import moment from 'moment';

const GenerateCourseactivation = () => {
	const [loader, setLoader] = useState(false);
	const [updateId, setUpdateId] = useState('');
	const [errMsg, setErrMsg] = useState('');

	const [courseactivationdata, setCourseactivationdata] = useState([]);

	const [gettoken, setGettoken] = useState(localStorage.getItem('token'));
	const [course_categoryList, setCourse_categoryList] = useState([]);
	const [coursenamelist, setCoursenamelist] = useState([]);

	const [titleUpdate, setTitleUpdate] = useState('Add Course Activation Codes');

	const [countFormData, setCountFormData] = useState({
		count_number: '',
		activation_code_start_date: '',
		activation_code_end_date: '',
		activation_validity_days: '',
	});

	const [coursecategorydata, setCoursecategorydata] = useState({
		course_category_name: '',
		course_category_id: '',
	});

	const [coursenamedata, setCoursenamedata] = useState({
		course_name: '',
		course_id: '',
	});

	useEffect(() => {
		getallcourse();
		getallcourseactivation();
	}, []);

	const inputhandleChange = (event) => {
		const { name, value } = event.target;
		const list = { ...countFormData };
		list[name] = value;
		setCountFormData(list);
	};

	const coursecategoryhandleChange = (event) => {
		const selectedIndex = course_categoryList[event.target.selectedIndex - 1];
		setCoursecategorydata({
			...coursecategorydata,
			course_category_name: selectedIndex
				? selectedIndex.course_category_name
				: '',
			course_category_id: selectedIndex ? selectedIndex.course_category_id : '',
		});
		if (selectedIndex) {
			getallcoursebycategoryId(selectedIndex.course_category_id);
		}
	};

	const coursenamehandleChange = (event) => {
		const selectedIndex = coursenamelist[event.target.selectedIndex - 1];
		setCoursenamedata({
			...coursenamedata,
			course_name: selectedIndex ? selectedIndex.course_name : '',
			course_id: selectedIndex ? selectedIndex.course_id : '',
		});
	};

	async function getallcoursebycategoryId(idd) {
		try {
			let response = await api.getallcoursebycategoryId(idd);
			if (response.statusCode == 203) {
				alert('Course not available for this Course category');
				setCoursecategorydata({
					course_category_name: '',
					course_category_id: '',
				});
				return false;
			} else {
				setCoursenamelist(response.data);
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

	async function getallcourseactivation() {
		setLoader(true);
		try {
			let response = await api.getallcourseactivation();
			setLoader(false);
			setCourseactivationdata(response.data);
		} catch (e) {}
	}

	async function removecourseactivation(idd) {
		try {
			let response = await api.removecourseactivation(idd);
			setErrMsg('Course activation code deleted successfully.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			getallcourseactivation();
		} catch (e) {}
	}

	const fireApi = () => {
		if (coursecategorydata.course_category_name == '') {
			setErrMsg('Please select stream.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else {
			const streamInput = {
				course_category_id: coursecategorydata.course_category_id,
				course_id: coursenamedata.course_id,
				count_number: countFormData.count_number,
				activation_code_start_date: countFormData.activation_code_start_date,
				activation_code_end_date: countFormData.activation_code_end_date,
				activation_validity_days: countFormData.activation_validity_days,
			};
			console.log(JSON.stringify(streamInput));
			fetch('http://54.251.156.235:4001/course-activation-codes', {
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
						setCoursecategorydata({
							course_category_name: '',
							course_category_id: '',
						});

						setCountFormData({
							count_number: '',
							activation_code_start_date: '',
							activation_code_end_date: '',
							activation_validity_days: '',
						});

						setCoursenamedata({
							course_name: '',
							course_id: '',
						});

						getallcourseactivation();
					} else {
						console.log(responseData.message);
					}
				})
				.catch((error) => {
					console.error(error);
				});
		}
	};

	const updateCourse = (obj) => {
		console.log(obj);
		setTitleUpdate('Update Course Activation Codes');
		setUpdateId(obj.course_activation_code_id);

		setCoursecategorydata({
			...coursecategorydata,
			course_category_name: obj.course_category_name,
			course_category_id: obj.course_category_id,
		});

		getallcoursebycategoryId(obj.course_category_id);

		setCountFormData({
			count_number: obj.count_number,
			activation_code_start_date: obj.activation_code_start_date,
			activation_code_end_date: obj.activation_code_end_date,
			activation_validity_days: obj.activation_validity_days,
		});

		setCoursenamedata({
			course_name: obj.course_name,
			course_id: obj.course_id,
		});
	};

	const editStream = () => {
		if (coursecategorydata.course_category_name == '') {
			setErrMsg('Please select stream.');
			setTimeout(() => {
				setErrMsg('');
			}, 1500);
			return false;
		} else {
			const streamInput = {
				activation_code_start_date: countFormData.activation_code_start_date,
				activation_code_end_date: countFormData.activation_code_end_date,
			};
			fetch(`http://54.251.156.235:4001/course-activation-codes/${updateId}`, {
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

					setCoursecategorydata({
						course_category_name: '',
						course_category_id: '',
					});

					setCountFormData({
						count_number: '',
						activation_code_start_date: '',
						activation_code_end_date: '',
						activation_validity_days: '',
					});

					setCoursenamedata({
						course_name: '',
						course_id: '',
					});

					getallcourseactivation();
					setUpdateId('');
					cancleUpdate();
				})
				.catch((error) => {
					console.error(error);
				});
		}
	};

	const cancleUpdate = () => {
		setTitleUpdate('Add Course Activation Codes');

		setCoursecategorydata({
			course_category_name: '',
			course_category_id: '',
		});

		setCountFormData({
			count_number: '',
			activation_code_start_date: '',
			activation_code_end_date: '',
			activation_validity_days: '',
		});

		setCoursenamedata({
			course_name: '',
			course_id: '',
		});
		setUpdateId('');
	};
	const getExpiredStatus = (startDate, endDate) => {
		if (moment().isBetween(startDate, endDate)) {
			return 'No';
		} else {
			return 'Yes';
		}
	};
	return (
		<div className="row_full">
			<div className="container">
				<div className="row_full disp_flex">
					<div className="middleboxArea larger">
						<h3 className="row_full mar_b_20 text-center">{titleUpdate}</h3>

						<div className="row_full mar_b_15 adtopic">
							<div className="grid_49">
								<span className="row_full">Course category</span>
								<select
									name="course_category_name"
									className="form-control row_full"
									value={coursecategorydata.course_category_name}
									onChange={coursecategoryhandleChange}
								>
									<option value="">Select course category</option>
									{course_categoryList.map((txt, index) => (
										<option value={txt.course_category_name} key={index}>
											{txt.course_category_name}
										</option>
									))}
								</select>
							</div>

							<div className="grid_49" style={{ float: 'right' }}>
								<span className="row_full">Course Name</span>
								<select
									name="course_name"
									className="form-control row_full"
									value={coursenamedata.course_name}
									onChange={coursenamehandleChange}
								>
									<option value="">Select course name</option>
									{coursenamelist.map((txt, index) => (
										<option value={txt.course_name} key={index}>
											{txt.course_name}
										</option>
									))}
								</select>
							</div>
						</div>

						<div className="row_full adtopic mar_b_15">
							<div className="grid_49">
								<div className="row_full">
									<span className="row_full">Count</span>
									<input
										type="text"
										name="count_number"
										value={countFormData.count_number}
										onChange={inputhandleChange}
										className="row_full form-control"
										placeholder="Count number"
									/>
								</div>
							</div>

							<div className="grid_49" style={{ float: 'right' }}>
								<div className="row_full">
									<span className="row_full" style={{ width: '100%' }}>
										Activation code start date
									</span>
									<input
										type="date"
										name="activation_code_start_date"
										value={countFormData.activation_code_start_date}
										onChange={inputhandleChange}
										className="row_full form-control"
										placeholder="Activation code start date"
									/>
								</div>
							</div>
						</div>

						<div className="row_full adtopic mar_b_15">
							<div className="grid_49">
								<div className="row_full">
									<span className="row_full" style={{ width: '100%' }}>
										Activation code end date
									</span>
									<input
										type="date"
										name="activation_code_end_date"
										value={countFormData.activation_code_end_date}
										onChange={inputhandleChange}
										className="row_full form-control"
										placeholder="Count number"
									/>
								</div>
							</div>

							<div className="grid_49 mar_b_15" style={{ float: 'right' }}>
								<div className="row_full">
									<span className="row_full" style={{ width: '100%' }}>
										Activation validity days
									</span>
									<input
										type="text"
										name="activation_validity_days"
										value={countFormData.activation_validity_days}
										onChange={inputhandleChange}
										className="row_full form-control"
										placeholder="Activation code start date"
									/>
								</div>
							</div>
						</div>

						<div className="row_full adtopic inputAdd">
							{errMsg ? (
								<p className="row_full errTag" style={{ marginBottom: '15px' }}>
									{errMsg}
								</p>
							) : null}
							<div className="row_full">
								{updateId == '' ? (
									<input
										onClick={fireApi}
										type="submit"
										className="btn custBtn btn-success"
										value="Generate Activation Codes"
									/>
								) : (
									<div className="row_fulll">
										<input
											type="submit"
											style={{ float: 'left', marginRight: '15px' }}
											onClick={editStream}
											className="custBtn btn btn-success"
											value="Update Course Activation Codes"
										/>
										<a
											onClick={cancleUpdate}
											className="addstrm"
											href="javascript:void(0)"
										>
											Add Course Activation Codes
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
											<th>Sr NO.</th>
											<th>Course category name</th>
											<th>Course name</th>
											<th>Activation code</th>
											<th>Course validity days</th>
											<th>Expired</th>
											<th>Already Used</th>
											<th>Action</th>
										</tr>
									</thead>
									<tbody>
										{courseactivationdata.map((txt, v) => (
											<tr key={v}>
												<td>{v + 1}</td>
												<td>{txt.course_category_name}</td>
												<td>{txt.course_name}</td>
												<td>{txt.activation_code}</td>
												<td>{txt.activation_validity_days}</td>
												<td>
													{getExpiredStatus(
														txt.activation_code_start_date,
														txt.activation_code_end_date
													)}
												</td>
												<td>{txt.is_use ? 'Not Used' : 'Used'}</td>
												<td>
													<a
														className="btnpad btn btn-success btn-xs"
														onClick={() => updateCourse(txt)}
														href="javascript:void(0);"
													>
														Edit
													</a>{' '}
													<a
														className="btnpad btn btn-danger btn-xs"
														href="javascript:void(0);"
														onClick={() =>
															removecourseactivation(
																txt.course_activation_code_id
															)
														}
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

export default GenerateCourseactivation;
