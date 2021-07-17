import React, { useState, useRef, useEffect } from 'react';
import './MyprofileView.scss';
import * as api from '../../../../Global/apiHelper/Apihelper';
import { useForm } from 'react-hook-form';
const images_path = process.env.PUBLIC_URL + '/assets/images/';

const MyProfileView = (props) => {
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
	useEffect(() => {}, []);
	return (
		<>
			<div className="profile-details d-flex flex-column">
				<div className="row_full section-title">Registration Details</div>
				<div className="row_full d-flex justify-content-between">
					<div className="grid_30 adtopic">
						<span className="w-100">Student name</span>
						<label className="label">{profile.full_name}</label>
					</div>
					<div className="grid_30 adtopic">
						<span className="w-100">Pathshala Name</span>
						<label className="label">{profile.pathshala_name}</label>
					</div>

					<div className="grid_30 adtopic">
						<span className="w-100">Student Email</span>
						<label className="label">{profile.email}</label>
					</div>
				</div>
				<div className="row_full d-flex justify-content-between">
					<div className="grid_30 adtopic">
						<span className="w-100">Student Phone</span>
						<label className="label">{profile.mobile}</label>
					</div>
					<div className="grid_30 adtopic">
						<span className="w-100">State</span>
						<label className="label">{profile.state_name}</label>
					</div>
					<div className="grid_30 adtopic">
						<span className="w-100">City</span>
						<label className="label">{profile.city_name}</label>
					</div>
				</div>
				<div className="row_full d-flex justify-content-between">
					<div className="grid_30 adtopic">
						<span className="w-100">Enrollment ID</span>
						<label className="label">{profile.enrollment_id}</label>
					</div>
				</div>
				<div className="row_full section-title mt-3">Profile Details</div>
				<div className="row_full d-flex justify-content-between">
					<div className="grid_30 adtopic">
						<span className="w-100">Stream</span>
						<label className="label">{profile.stream_name}</label>
					</div>

					<div className="grid_30 adtopic">
						<span className="w-100">Class</span>
						<label className="label">{profile.class_name}</label>
					</div>
					<div className="grid_30 adtopic">
						<span className="w-100">Date of Birth</span>
						<label className="label">{profile.dob}</label>
					</div>
				</div>
				<div className="row_full d-flex justify-content-between">
					<div className="grid_30 adtopic">
						<span className="w-100">Aadhar Number</span>
						<label className="label">{profile.aadhar_no}</label>
					</div>
					<div className="grid_30 adtopic">
						<span className="row_full">Gender</span>
						<label className="label">{profile.gender}</label>
					</div>
					<div className="grid_30 adtopic">
						<span className="w-100">Blood Group</span>
						<label className="label">{profile.blood_group}</label>
					</div>
				</div>
				<div className="row_full d-flex justify-content-between">
					<div className="grid_30 adtopic">
						<span className="w-100">Previous School Name</span>
						<label className="label">{profile.previous_school_name}</label>
					</div>
					<div className="grid_30 adtopic">
						<span className="w-100">School State</span>
						<label className="label">{profile.school_state_name}</label>
					</div>
					<div className="grid_30 adtopic">
						<span className="w-100">School City</span>
						<label className="label">{profile.school_city_name}</label>
					</div>
				</div>
			</div>
			<div className="address d-flex flex-column">
				<div className="present-address d-flex flex-column">
					<div className="section-title">Present Address</div>
					<div className="row_full d-flex justify-content-between">
						<div className="grid_30 adtopic">
							<span className="w-100">House No/Plot No</span>
							<label className="label">{profile.presentAddress?.plot_no}</label>
						</div>
						<div className="grid_30 adtopic">
							<span className="w-100">Street Name</span>
							<label className="label">
								{profile.presentAddress?.street_name}
							</label>
						</div>

						<div className="grid_30 adtopic">
							<span className="w-100">Landmark</span>
							<label className="label">
								{profile.presentAddress?.landmark}
							</label>
						</div>
					</div>
					<div className="row_full d-flex justify-content-between">
						<div className="grid_30 adtopic">
							<span className="w-100">State</span>
							<label className="label">
								{profile.presentAddress?.state_name}
							</label>
						</div>
						<div className="grid_30 adtopic">
							<span className="w-100">City</span>
							<label className="label">
								{profile.presentAddress?.city_name}
							</label>
						</div>

						<div className="grid_30 adtopic">
							<span className="w-100">Pin Code</span>
							<label className="label">{profile.presentAddress?.pincode}</label>
						</div>
					</div>
				</div>
				<div className="permanent-address d-flex flex-column">
					<div className="section-title">Permanent Address</div>
					<div className="row_full d-flex justify-content-between">
						<div className="grid_30 adtopic">
							<span className="w-100">House No/Plot No</span>
							<label className="label">
								{profile.permanentAddress?.plot_no}
							</label>
						</div>
						<div className="grid_30 adtopic">
							<span className="w-100">Street Name</span>
							<label className="label">
								{profile.permanentAddress?.street_name}
							</label>
						</div>

						<div className="grid_30 adtopic">
							<span className="w-100">Landmark</span>
							<label className="label">
								{profile.permanentAddress?.landmark}
							</label>
						</div>
					</div>
					<div className="row_full d-flex justify-content-between">
						<div className="grid_30 adtopic">
							<span className="w-100">State</span>
							<label className="label">
								{profile.permanentAddress?.state_name}
							</label>
						</div>
						<div className="grid_30 adtopic">
							<span className="w-100">City</span>
							<label className="label">
								{profile.permanentAddress?.city_name}
							</label>
						</div>

						<div className="grid_30 adtopic">
							<span className="w-100">Pin Code</span>
							<label className="label">
								{profile.permanentAddress?.pincode}
							</label>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MyProfileView;
