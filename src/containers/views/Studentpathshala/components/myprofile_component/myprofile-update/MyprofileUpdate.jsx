import React, { useState, useRef, useEffect } from 'react';
import './MyprofileUpdate.scss';
import * as api from '../../../../Global/apiHelper/Apihelper';
import { useForm } from 'react-hook-form';
import { toastEmitterSuccess } from '../../../../../../common/component/Toaster/ToastEmitter';
const images_path = process.env.PUBLIC_URL + '/assets/images/';
const axios = require('axios');

const MyProfileUpdate = (props) => {
	const { register, handleSubmit, errors } = useForm({
		mode: 'onSubmit',
		criteriaMode: 'firstError',
		shouldFocusError: true,
	});
	const [loader, setLoader] = useState(false);
	const [errorMsg, setErrorMsg] = useState(false);
	const [message, setMessage] = useState(null);
	const [streamList, setStreamList] = useState([]);
	const [classList, setClassList] = useState([]);
	const [stateList, setStateList] = useState([]);
	const [cityList, setCityList] = useState([]);
	const [presentCityList, setPresentCityList] = useState([]);
	const [permanentCityList, setPermanentCityList] = useState([]);
	const [profile, setFormData] = useState(props.profile);
	useEffect(() => {
		getAllStream();
		getAllClass();
		getStateList();
		if (profile.school_state_id) {
			getCityByStateId(profile.school_state_id, setCityList);
		}
		if (profile.presentAddress?.state_id) {
			getCityByStateId(profile.presentAddress.state_id, setPresentCityList);
		}
		if (profile.permanentAddress?.state_id) {
			getCityByStateId(profile.permanentAddress.state_id, setPermanentCityList);
		}
	}, []);
	async function getAllStream() {
		setLoader(true);
		try {
			let response = await api.getAll('commons/stream-list', true);
			setLoader(false);
			setStreamList(response.data);
		} catch (e) {}
	}
	async function getAllClass() {
		setLoader(true);
		try {
			let response = await api.getAll('commons/class-list', true);
			setLoader(false);
			setClassList(response.data);
		} catch (e) {}
	}

	async function getStateList() {
		setLoader(true);
		try {
			let response = await api.getAll('commons/state-list', true);
			setLoader(false);
			setStateList(response.data);
		} catch (e) {}
	}

	async function getCityByStateId(stateId, setCity) {
		setLoader(true);
		try {
			let response = await api.getAll(`commons/city-list/${stateId}`, true);
			setLoader(false);
			setCity(response.data);
		} catch (e) {}
	}
	const onInputChangeHandler = (e, key) => {
		setFormData({ ...profile, [e.target.name]: e.target.value });
		console.log('onInputChangeHandler', profile, e.target.name, e.target.value);
	};
	const onSelectChangeHandler = (e, type) => {
		setFormData({ ...profile, [e.target.name]: e.target.value });
		console.log('onSelectChangeHandler', e.target.value);
	};
	const onStateChangeHandler = (e, isOnlySetData) => {
		if (!isOnlySetData) {
			getCityByStateId(e.target.value, setCityList);
		}
		setFormData({ ...profile, [e.target.name]: e.target.value });
	};
	const onPresentAddStateChangeHandler = (e, isOnlySetData) => {
		if (!isOnlySetData) {
			getCityByStateId(e.target.value, setPresentCityList);
		}
		setFormData({
			...profile,
			...{
				presentAddress: {
					[e.target.name]: e.target.value,
				},
			},
		});
	};
	const onPermanentAddStateChangeHandler = (e, isOnlySetData) => {
		if (!isOnlySetData) {
			getCityByStateId(e.target.value, setPermanentCityList);
		}
		setFormData({
			...profile,
			...{
				permanentAddress: {
					[e.target.name]: e.target.value,
				},
			},
		});
	};
	async function updateProfile(formData) {
		setLoader(true);
		try {
			let response = await api.httpFilePostAsync(
				'users/update-profile',
				formData
			);
			setLoader(false);
			if (response.data.statusCode === 200) {
				toastEmitterSuccess(response.data.message);
				props.onButtonClickHandler(null, 'view');
			} else {
				toastEmitterSuccess(response.data.message);
			}
		} catch (e) {}
	}

	const onSubmit = (data) => {
		let parseData = {
			full_name: data.full_name,
			state_id: data.state_id ? parseInt(data.state_id) : profile.state_id,
			city_id: data.city_id ? parseInt(data.city_id) : profile.city_id,
			admission_date: data.admission_date ? data.admission_date : '',
			student_domain_id: data.student_domain_id
				? parseInt(data.student_domain_id)
				: '',
			dob: data.dob,
			alternate_mobile: data.alternate_mobile,
			present_address_obj: {
				plot_no: data.presentAddress.plot_no,
				street_name: data.presentAddress.street_name,
				landmark: data.presentAddress.landmark,
				state_id: parseInt(data.presentAddress.state_id),
				city_id: parseInt(data.presentAddress.city_id),
				pincode: data.presentAddress.pincode,
			},
			parmanent_address_obj: {
				plot_no: data.permanentAddress.plot_no,
				street_name: data.permanentAddress.street_name,
				landmark: data.permanentAddress.landmark,
				state_id: parseInt(data.permanentAddress.state_id),
				city_id: parseInt(data.permanentAddress.city_id),
				pincode: data.permanentAddress.pincode,
			},
			present_address_id: profile.present_address_id,
			parmanent_address_id: profile.parmanent_address_id,
			stream_id: parseInt(data.stream_id),
			class_id: parseInt(data.class_id),
			aadhar_no: data.aadhar_no,
			gender: data.gender,
			blood_group: data.blood_group,
			previous_school_name: data.previous_school_name,
			school_state_id: data.school_state_id
				? parseInt(data.school_state_id)
				: profile.school_state_id,
			school_city_id: data.school_city_id
				? parseInt(data.school_city_id)
				: profile.school_city_id,
		};
		if (props.imagePreview) {
			parseData = {
				...parseData,
				profile_image: props.imagePreview.file,
			};
		}
		const formData = new FormData();
		Object.keys(parseData).map((key, index) => {
			if (key === 'present_address_obj' || key === 'parmanent_address_obj') {
				formData.append(`${key}`, JSON.stringify(parseData[key]));
			} else {
				formData.append(`${key}`, parseData[key]);
			}
		});
		updateProfile(formData);
	};
	return (
		<form
			style={{ paddingTop: '10px' }}
			className="row_full"
			autoComplete="off"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className="profile-details d-flex flex-column">
				<div className="row_full section-title">Profile Details</div>
				<div className="row_full mar_b_15 d-flex justify-content-between">
					<div className="grid_30 adtopic">
						<span className="w-100">Student name</span>
						<input
							type="text"
							name="full_name"
							defaultValue={profile.full_name}
							// onChange={onInputChangeHandler}
							className="row_full form-control"
							placeholder="Student name"
							ref={register({
								required: 'Student name is required.',
							})}
						/>
						<div className="error-message">
							{errors.full_name && errors.full_name.message}
						</div>
					</div>
					<div className="grid_30 adtopic">
						<span className="w-100">Stream</span>
						<select
							name="stream_id"
							className="form-control row_full"
							value={profile.stream_id}
							onChange={onSelectChangeHandler}
							ref={register({
								required: 'Stream is required.',
							})}
						>
							<option value="">Select stream</option>
							{streamList.map((txt, index) => (
								<option value={txt.stream_id} key={txt.stream_id}>
									{txt.stream_name}
								</option>
							))}
						</select>
						<div className="error-message">
							{errors.stream_id && errors.stream_id.message}
						</div>
					</div>

					<div className="grid_30 adtopic">
						<span className="w-100">Class</span>
						<select
							name="class_id"
							className="form-control row_full"
							value={profile.class_id}
							onChange={onSelectChangeHandler}
							ref={register({
								required: 'Class is required.',
							})}
						>
							<option value="">Select class</option>
							{classList.map((txt, index) => (
								<option value={txt.class_id} key={txt.class_id}>
									{txt.class_name}
								</option>
							))}
						</select>
						<div className="error-message">
							{errors.class_id && errors.class_id.message}
						</div>
					</div>
				</div>
				<div className="row_full mar_b_15 d-flex justify-content-between">
					<div className="grid_30 adtopic">
						<span className="w-100">Date of Birth</span>
						<input
							type="date"
							name="dob"
							defaultValue={profile.dob}
							// onChange={onInputChangeHandler}
							className="row_full form-control"
							placeholder="Date of birth"
							ref={register({
								required: 'DOB is required.',
							})}
						/>
						<div className="error-message">
							{errors.dob && errors.dob.message}
						</div>
					</div>
					<div className="grid_30 adtopic">
						<span className="w-100">Aadhar Number</span>
						<input
							type="number"
							name="aadhar_no"
							defaultValue={profile.aadhar_no}
							// onChange={onInputChangeHandler}
							className="row_full form-control"
							placeholder="Aadhar Number"
							ref={register({
								required: 'Aadhar Number is required.',
							})}
						/>
						<div className="error-message">
							{errors.aadhar_no && errors.aadhar_no.message}
						</div>
					</div>
					<div className="grid_30 adtopic">
						<span className="row_full">Gender</span>
						<select
							name="gender"
							className="form-control row_full"
							value={profile.gender}
							onChange={onSelectChangeHandler}
							ref={register({
								required: 'Gender is required.',
							})}
						>
							<option value="">Select gender</option>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
						</select>
						<div className="error-message">
							{errors.gender && errors.gender.message}
						</div>
					</div>
				</div>
				<div className="row_full mar_b_15 d-flex justify-content-between">
					<div className="grid_30 adtopic">
						<span className="w-100">Blood Group</span>
						<input
							type="text"
							name="blood_group"
							defaultValue={profile.blood_group}
							className="row_full form-control"
							placeholder="Blood Group"
							ref={register({
								required: false,
							})}
						/>
					</div>
					<div className="grid_30 adtopic">
						<span className="w-100">Previous School Name</span>
						<input
							type="text"
							name="previous_school_name"
							defaultValue={profile.previous_school_name}
							// onChange={onInputChangeHandler}
							className="row_full form-control"
							placeholder="Previous School Name"
							ref={register({
								required: false,
							})}
						/>
					</div>
					<div className="grid_30 adtopic">
						<span className="w-100">School State{profile.school_state_id}</span>
						<select
							name="school_state_id"
							className="form-control row_full"
							value={profile.school_state_id}
							onChange={(e) => onStateChangeHandler(e, false)}
							ref={register({
								required: false,
							})}
						>
							<option value="">Select state</option>
							{stateList.map((txt, index) => (
								<option value={txt.state_id} key={txt.state_id}>
									{txt.state_name}
								</option>
							))}
						</select>
					</div>
				</div>
				<div className="row_full mar_b_15 d-flex justify-content-between">
					<div className="grid_30 adtopic">
						<span className="w-100">School City</span>
						<select
							name="school_city_id"
							className="form-control row_full"
							value={profile.school_city_id}
							onChange={(e) => onStateChangeHandler(e, true)}
							ref={register({
								required: false,
							})}
						>
							<option value="">Select city</option>
							{cityList.map((txt, index) => (
								<option value={txt.city_id} key={index}>
									{txt.city_name}
								</option>
							))}
						</select>
					</div>
				</div>
			</div>
			<div className="address d-flex flex-column">
				<div className="present-address d-flex flex-column">
					<div className="section-title">Present Address</div>
					<div className="row_full mar_b_15 d-flex justify-content-between">
						<div className="grid_30 adtopic">
							<span className="w-100">House No/Plot No</span>
							<input
								type="text"
								name="presentAddress.plot_no"
								defaultValue={profile.presentAddress?.plot_no}
								// onChange={onInputChangeHandler}
								className="row_full form-control"
								placeholder="House No/Plot No"
								ref={register({
									required: false,
								})}
							/>
						</div>
						<div className="grid_30 adtopic">
							<span className="w-100">Street Name</span>
							<input
								type="text"
								name="presentAddress.street_name"
								defaultValue={profile.presentAddress?.street_name}
								// onChange={onInputChangeHandler}
								className="row_full form-control"
								placeholder="Street Name"
								ref={register({
									required: false,
								})}
							/>
						</div>

						<div className="grid_30 adtopic">
							<span className="w-100">Landmark</span>
							<input
								type="text"
								name="presentAddress.landmark"
								defaultValue={profile.presentAddress?.landmark}
								// onChange={onInputChangeHandler}
								className="row_full form-control"
								placeholder="Landmark"
								ref={register({
									required: false,
								})}
							/>
						</div>
					</div>
					<div className="row_full mar_b_15 d-flex justify-content-between">
						<div className="grid_30 adtopic">
							<span className="w-100">State</span>
							<select
								name="presentAddress.state_id"
								className="form-control row_full"
								value={profile.presentAddress?.state_id}
								onChange={(e) => onPresentAddStateChangeHandler(e, false)}
								ref={register({
									required: false,
								})}
							>
								<option value="">Select state</option>
								{stateList.map((txt, index) => (
									<option value={txt.state_id} key={index}>
										{txt.state_name}
									</option>
								))}
							</select>
						</div>
						<div className="grid_30 adtopic">
							<span className="w-100">City</span>
							<select
								name="presentAddress.city_id"
								className="form-control row_full"
								value={profile.presentAddress?.city_id}
								onChange={(e) => onPresentAddStateChangeHandler(e, true)}
								ref={register({
									required: false,
								})}
							>
								<option value="">Select city</option>
								{presentCityList.map((txt, index) => (
									<option value={txt.city_id} key={index}>
										{txt.city_name}
									</option>
								))}
							</select>
						</div>

						<div className="grid_30 adtopic">
							<span className="w-100">Pin Code</span>
							<input
								type="text"
								name="presentAddress.pincode"
								maxLength="6"
								defaultValue={profile.presentAddress?.pincode}
								// onChange={onInputChangeHandler}
								className="row_full form-control"
								placeholder="Pin Code"
								ref={register({
									required: false,
								})}
							/>
						</div>
					</div>
				</div>
				<div className="permanent-address d-flex flex-column">
					<div className="section-title">Permanent Address</div>
					<div className="row_full mar_b_15 d-flex justify-content-between">
						<div className="grid_30 adtopic">
							<span className="w-100">House No/Plot No</span>
							<input
								type="text"
								name="permanentAddress.plot_no"
								defaultValue={profile.permanentAddress?.plot_no}
								// onChange={onInputChangeHandler}
								className="row_full form-control"
								placeholder="House No/Plot No"
								ref={register({
									required: false,
								})}
							/>
						</div>
						<div className="grid_30 adtopic">
							<span className="w-100">Street Name</span>
							<input
								type="text"
								name="permanentAddress.street_name"
								defaultValue={profile.permanentAddress?.street_name}
								// onChange={onInputChangeHandler}
								className="row_full form-control"
								placeholder="Street Name"
								ref={register({
									required: false,
								})}
							/>
						</div>

						<div className="grid_30 adtopic">
							<span className="w-100">Landmark</span>
							<input
								type="text"
								name="permanentAddress.landmark"
								defaultValue={profile.permanentAddress?.landmark}
								// onChange={onInputChangeHandler}
								className="row_full form-control"
								placeholder="Landmark"
								ref={register({
									required: false,
								})}
							/>
						</div>
					</div>
					<div className="row_full mar_b_15 d-flex justify-content-between">
						<div className="grid_30 adtopic">
							<span className="w-100">State</span>
							<select
								name="permanentAddress.state_id"
								className="form-control row_full"
								value={profile.permanentAddress?.state_id}
								onChange={(e) => onPermanentAddStateChangeHandler(e, false)}
								ref={register({
									required: false,
								})}
							>
								<option value="">Select state</option>
								{stateList.map((txt, index) => (
									<option value={txt.state_id} key={index}>
										{txt.state_name}
									</option>
								))}
							</select>
						</div>
						<div className="grid_30 adtopic">
							<span className="w-100">City</span>
							<select
								name="permanentAddress.city_id"
								className="form-control row_full"
								value={profile.permanentAddress?.city_id}
								onChange={onSelectChangeHandler}
								ref={register({
									required: false,
								})}
							>
								<option value="">Select city</option>
								{permanentCityList.map((txt, index) => (
									<option value={txt.city_id} key={index}>
										{txt.city_name}
									</option>
								))}
							</select>
						</div>

						<div className="grid_30 adtopic">
							<span className="w-100">Pin Code</span>
							<input
								type="text"
								name="permanentAddress.pincode"
								maxLength="6"
								defaultValue={profile.permanentAddress?.pincode}
								// onChange={onInputChangeHandler}
								className="row_full form-control"
								placeholder="Pin Code"
								ref={register({
									required: false,
								})}
							/>
						</div>
					</div>
					<div className="row_full mar_b_15  d-flex justify-content-end">
						<div className="grid_30 adtopic">
							<button
								type="submit"
								className="d-flex justify-content-center btn-sm btn-border-info w-100"
							>
								Update
							</button>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
};

export default MyProfileUpdate;
