import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import './Signup.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';

const Signup = (props) => {
	const [requiredLogout, setIsRequiredLogout] = useState(false);
	const [requiredLogoutToken, setRequiredLogoutToken] = useState(false);
	const [notifybox, setNotifybox] = useState(false);
	const [errorMsg, setErrorMsg] = useState(false);
	const [onsignup, setOnsignup] = useState(true);
	const [onregister, setOnregister] = useState(true);
	const [accesstype, setAccesstype] = useState('student');

	const [otpRequest, setOtpRequest] = useState(false);

	const [forget, setForget] = React.useState(false);
	const [signin, setsignin] = React.useState(false);

	const [pathshalaShow, setPathshalaShow] = useState(false);
	const [parentsShow, setParentsShow] = useState(false);

	const [user_Id, setUser_Id] = useState('');

	const [verticallist, setVerticallist] = useState([]);
	const [verticaldata, setVerticaldata] = useState({
		user_type_name: '',
		user_type_id: '',
	});

	const [schoolnamelist, setSchoolnamelist] = useState([]);
	const [schoolnamedata, setSchoolnamedata] = useState({
		school_name: '',
		school_id: '',
	});

	const [statelist, setStatelist] = useState([]);
	const [statedata, setStatedata] = useState({
		state_name: '',
		state_id: '',
	});

	const [citylist, setCitylist] = useState([]);
	const [citydata, setCitydata] = useState({
		city_name: '',
		city_id: '',
	});

	const [message, setMessage] = useState(null);
	const history = useHistory();

	useEffect(() => {
		getState();
		getSchool();
		getVertical();
	}, []);

	const activeUser = [
		{ name: 'student', img_path: 'acess_1', active_imgpath: 'acess_1_active' },
		{ name: 'parent', img_path: 'acess_2', active_imgpath: 'acess_2_active' },
		{ name: 'school', img_path: 'acess_3', active_imgpath: 'acess_3_active' },
		{ name: 'employee', img_path: 'acess_4', active_imgpath: 'acess_4_active' },
	];

	const { register, handleSubmit, errors, watch } = useForm({
		mode: 'onChange',
		reValidateMode: 'onChange',
		defaultValues: {
			email: '',
			// password: '',
			remember: false,
		},
	});

	const password = useRef({});
	password.current = watch('password', '');

	const [state, setState] = useState({
		fullname: '',
		email: '',
		phoneNo: '',
		password: '',
		password1: '',
		state: '',
		city: '',
		otp: '',
		vertical: '',
	});

	const [userDetails, setUserDetails] = useState({
		email: '',
		password: '',
		vertical: '',
	});

	const [userDetailsfpass, setUserDetailsfpass] = useState({
		email: '',
	});

	const statehandleChange = (event) => {
		if (event.target.value == '') {
			alert('Please select state');
			setStatedata({
				state_name: '',
				state_id: '',
			});
			return false;
		} else {
			setStatedata({
				...statedata,
				state_name: statelist[event.target.selectedIndex - 1].state_name,
				state_id: statelist[event.target.selectedIndex - 1].state_id,
			});
			getCity(statelist[event.target.selectedIndex - 1].state_id);
		}
	};

	const verticalhandleChange = (event) => {
		if (event.target.value == '') {
			alert('Please select vertical');
			setVerticaldata({
				user_type_name: '',
				user_type_id: '',
			});
			return false;
		} else {
			if (event.target.value == 'Student Pathshala') {
				setPathshalaShow(true);
				setParentsShow(false);
			} else if (event.target.value == 'Parents') {
				setPathshalaShow(false);
				setParentsShow(true);
			} else {
				setPathshalaShow(false);
				setParentsShow(false);
			}
			setVerticaldata({
				...verticaldata,
				user_type_name:
					verticallist[event.target.selectedIndex - 1].user_type_name,
				user_type_id: verticallist[event.target.selectedIndex - 1].user_type_id,
			});
		}
	};

	const schoolnamehandleChange = (event) => {
		if (event.target.value == '') {
			alert('Please select school');
			setSchoolnamedata({
				school_name: '',
				school_id: '',
			});
			return false;
		} else {
			setSchoolnamedata({
				...schoolnamedata,
				school_name: schoolnamelist[event.target.selectedIndex - 1].school_name,
				school_id: schoolnamelist[event.target.selectedIndex - 1].school_id,
			});
		}
	};

	const cityhandleChange = (event) => {
		if (event.target.value == '') {
			alert('Please select city');
			setCitydata({
				city_name: '',
				city_id: '',
			});
			return false;
		} else {
			setCitydata({
				...citydata,
				city_name: citylist[event.target.selectedIndex - 1].city_name,
				city_id: citylist[event.target.selectedIndex - 1].city_id,
			});
		}
	};

	const getSchool = () => {
		fetch('http://54.251.156.235:4004/api/commons/pathshala-list', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((responseData) => {
				if (responseData.statusCode == 200) {
					setSchoolnamelist(responseData.data);
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const getVertical = () => {
		fetch('http://54.251.156.235:4004/api/commons/user-type-list', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((responseData) => {
				if (responseData.statusCode == 200) {
					setVerticallist(responseData.data);
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const getState = () => {
		fetch('http://54.251.156.235:4004/api/commons/state-list', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((responseData) => {
				if (responseData.statusCode == 200) {
					setStatelist(responseData.data);
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const getCity = (idd) => {
		fetch('http://54.251.156.235:4004/api/commons/city-list/' + idd, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((responseData) => {
				if (responseData.statusCode == 200) {
					setCitylist(responseData.data);
					console.log(citylist);
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const hidesignup = () => {
		props.toggleModal();
	};

	const hidesuccess = () => {
		setNotifybox(false);
		props.toggleModal();
	};

	const handleSubmitData = () => {
		let registeredUser = '';

		if (verticaldata.user_type_id == 5) {
			registeredUser = {
				user_type_id: verticaldata.user_type_id,
				enrollment_id: state.enrollment_id,
				full_name: state.fullname,
				email: state.email,
				mobile: state.phoneNo,
				state_id: statedata.state_id,
				city_id: citydata.city_id,
			};
		} else if (verticaldata.user_type_id == 1) {
			registeredUser = {
				user_type_id: verticaldata.user_type_id,
				school_id: schoolnamedata.school_id,
				full_name: state.fullname,
				email: state.email,
				mobile: state.phoneNo,
				state_id: statedata.state_id,
				city_id: citydata.city_id,
				password: state.password1,
				confirm_password: state.password1,
			};
		} else {
			registeredUser = {
				user_type_id: verticaldata.user_type_id,
				full_name: state.fullname,
				email: state.email,
				mobile: state.phoneNo,
				state_id: statedata.state_id,
				city_id: citydata.city_id,
				password: state.password1,
				confirm_password: state.password1,
			};
		}

		fetch('http://54.251.156.235:4004/api/auth/register', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(registeredUser),
		})
			.then((response) => response.json())
			.then((responseData) => {
				console.log(responseData);
				if (responseData.statusCode == 200) {
					setOtpRequest(true);
					setOnregister(false);
					setUser_Id(responseData.user_id);
					/*setOnsignup(false);
              setNotifybox(true);
              setTimeout(()=>{setNotifybox(false);props.toggleModal();},5000);*/
				} else {
					setErrorMsg(true);
					setNotifybox(false);
					setMessage(responseData.message);
					setTimeout(() => {
						setErrorMsg(false);
					}, 5000);
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const handleChange = (event) => {
		setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
	};

	const handleChangefact = (event) => {
		setUserDetailsfpass({
			...userDetailsfpass,
			[event.target.name]: event.target.value,
		});
	};

	const verifyAction = () => {
		const registeredUser = {
			user_id: user_Id,
			otp: state.otp,
		};
		fetch('http://54.251.156.235:4004/api/auth/otp-verify', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(registeredUser),
		})
			.then((response) => response.json())
			.then((responseData) => {
				if (responseData.statusCode == 200) {
					props.toggleModal();
					localStorage.setItem('token', responseData.token);
					localStorage.setItem('validauth', 'success');
					props.authLogin('success');
					if (verticaldata.user_type_id == 3) {
						history.push('/pathshala');
					}
					if (verticaldata.user_type_id == 2) {
						history.push('/studentegyan');
					}
					if (verticaldata.user_type_id == 1) {
						history.push('/studentpathshala');
					}
				} else {
					setErrorMsg(true);
					setMessage(responseData.message);
					setTimeout(() => {
						setErrorMsg(false);
					}, 5000);
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const resentOTP = () => {
		const registeredUser = {
			user_id: user_Id,
		};
		fetch('http://54.251.156.235:4004/api/auth/otp-resend', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(registeredUser),
		})
			.then((response) => response.json())
			.then((responseData) => {
				console.log(responseData);
				if (responseData.statusCode == 200) {
					setUser_Id('');
					setMessage(responseData.message);
				} else {
					setErrorMsg(true);
					setMessage(responseData.message);
					setTimeout(() => {
						setErrorMsg(false);
					}, 5000);
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};
	const getDashboardData = () => {
		fetch('http://54.251.156.235:4004/api/auth/dashboard', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: localStorage.getItem('token'),
			},
		})
			.then((response) => response.json())
			.then((responseData) => {
				if (responseData.statusCode === 200) {
					props.toggleModal();
					const { user_type_id } = responseData.data.profile_data;
					localStorage.setItem('roles', [user_type_id]);
					props.authLogin(responseData.data);
					if (user_type_id == 1) {
						history.push('/studentpathshala');
					}
					if (user_type_id == 2) {
						history.push('/studentegyan');
					}
					if (user_type_id == 3) {
						history.push('/pathshala');
					}
				} else {
					setErrorMsg(true);
					setMessage(responseData.message);
					setTimeout(() => {
						setErrorMsg(false);
					}, 5000);
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const handleSubmitDatalogin = () => {
		const loginuser = {
			email: userDetails.email,
			password: userDetails.password,
		};
		setIsRequiredLogout(false);
		fetch('http://54.251.156.235:4004/api/auth/login', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(loginuser),
		})
			.then((response) => response.json())
			.then((responseData) => {
				if (responseData.statusCode === 200) {
					props.toggleModal();
					localStorage.setItem('token', responseData.token);
					getDashboardData();
				} else {
					setErrorMsg(true);
					if (
						responseData.message ===
						'User is already login with this email id and passowrd!'
					) {
						setRequiredLogoutToken(responseData.token);
						setIsRequiredLogout(true);
					}
					setMessage(responseData.message);
					setTimeout(() => {
						setErrorMsg(false);
					}, 5000);
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const handleSubmitDatafpass = () => {
		const userEmail = { email: userDetails.email };

		fetch('http://54.251.156.235:4004/api/auth/forgot-password-otp', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userEmail),
		})
			.then((response) => response.json())
			.then((responseData) => {
				if (responseData.statusCode === 200) {
					setForget(false);
					setOtpRequest(true);
				} else {
					setErrorMsg(true);
					setMessage(responseData.message);
					setTimeout(() => {
						setErrorMsg(false);
					}, 5000);
				}
			})
			.catch((error) => {
				console.error(error);
			});
		/*fetch("/api/login", {
        method: 'POST',
        headers: {'Accept': 'application/json','Content-Type': 'application/json'},
        body: JSON.stringify(registeredUser)
      })
      .then((response) => response.json())
      .then((responseData) => {
            //console.log(responseData.userId['email']);
            if(responseData.message === "login successfully"){
                history.push("/news");

                sessionStorage.setItem("key", "value");
                sessionStorage.getItem("key");
                sessionStorage.removeItem('key');
                sessionStorage.clear();

            }

      })
      .catch((error) =>{
        console.error(error);
      })*/
	};

	const validatePassword = (value) => {
		if (value.length < 6) {
			return 'Password should be at-least 6 characters.';
		} else if (!/(?=.\d)(?=.[a-z])(?=.[A-Z])(?!.\s)(?=.[!@#$])/.test(value)) {
			return 'Password should contain at least one uppercase letter, lowercase letter, digit, and special symbol.';
		}
		return true;
	};

	const handleInputChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.value });
	};

	const forgetact = () => {
		setsignin(false);
		setOnregister(false);
		setForget(true);
	};

	const signinact = () => {
		setsignin(true);
		setOnsignup(true);
		setForget(false);
		setOnregister(false);
	};

	const signupact = () => {
		setsignin(false);
		setForget(false);
		setOnregister(true);
	};

	const setType = (type) => {
		setAccesstype(type);
	};
	const logoutFromAllDevice = () => {
		fetch('http://54.251.156.235:4004/api/auth/logout', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: requiredLogoutToken,
			},
		})
			.then((response) => response.json())
			.then((responseData) => {
				if (responseData.statusCode === 200) {
					setIsRequiredLogout(false);
				} else {
					setErrorMsg(true);
					setTimeout(() => {
						setErrorMsg(false);
					}, 5000);
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};
	return (
		<>
			<div className="row_full blackBox">
				<div className="row_full midbox">
					{onsignup && (
						<div className="quickContact">
							<i
								className="fa faclose fa-times"
								onClick={hidesignup}
								aria-hidden="true"
							></i>
							<div className="signUpLeft">
								<img src={`${images_path}signupbg.png`} />
							</div>
							{requiredLogout ? (
								<div className="signUpRight">
									<div
										className="row_full registerBox"
										style={{ marginTop: '100px' }}
									>
										<p className="mb-3" style={{ textAlign: 'center' }}>
											User is already login with this email id and passowrd!
										</p>
										<div className="form-group lastelm">
											<button
												type="button"
												className="btn btn-lg btn-block"
												onClick={logoutFromAllDevice}
											>
												Logout from all device
											</button>
										</div>
									</div>
								</div>
							) : (
								<div className="signUpRight">
									{onregister && (
										<div className="row_full registerBox">
											<h3>
												<span className="welcome">Welcome to</span>Gyansutrm{' '}
												<span>Register Now</span>
											</h3>
											<div className="formBox row_full">
												{errorMsg && (
													<h5 className="row_full userExist">{message}</h5>
												)}
												<form
													style={{ paddingTop: '20px' }}
													className="row_full"
													autoComplete="off"
													onSubmit={handleSubmit(handleSubmitData)}
												>
													<div className="form-group">
														<select
															name="user_type_name"
															className="form-control row_full"
															value={verticaldata.user_type_name}
															onChange={verticalhandleChange}
															ref={register({
																required: 'You must select an option',
															})}
														>
															<option value="">Select vertical</option>
															{verticallist.map((txt, index) => (
																<option value={txt.user_type_name} key={index}>
																	{txt.user_type_name}
																</option>
															))}
														</select>
														{errors.user_type_name && (
															<p className="errorMsg">
																{errors.user_type_name.message}
															</p>
														)}
													</div>

													{pathshalaShow ? (
														<div className="form-group">
															<select
																name="school_name"
																className="form-control row_full"
																value={schoolnamedata.school_name}
																onChange={schoolnamehandleChange}
																ref={register({
																	required: 'You must select an option',
																})}
															>
																<option value="">Select school name</option>
																{schoolnamelist.map((txt, index) => (
																	<option value={txt.school_name} key={index}>
																		{txt.school_name}
																	</option>
																))}
															</select>
															{errors.school_name && (
																<p className="errorMsg">
																	{errors.school_name.message}
																</p>
															)}
														</div>
													) : null}

													<div className="form-group">
														<input
															type="text"
															className="form-control"
															name="fullname"
															placeholder="Full Name"
															onChange={handleInputChange}
															ref={register({
																required: 'Name is required.',
																pattern: {
																	value: /^[A-Za-z][a-zA-Z\s]*$/,
																	message: 'Name is not valid.',
																},
															})}
														/>
														{errors.fullname && (
															<p className="errorMsg">
																{errors.fullname.message}
															</p>
														)}
													</div>

													<div className="form-group">
														<input
															className="form-control"
															type="text"
															name="email"
															placeholder="Email"
															onChange={handleInputChange}
															ref={register({
																required: 'Email is required.',
																pattern: {
																	value:
																		/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z])+\.)+([a-zA-Z]{2,4})+$/,
																	message: 'Email is not valid.',
																},
															})}
														/>
														{errors.email && (
															<p className="errorMsg">{errors.email.message}</p>
														)}
													</div>

													<div className="form-group">
														<input
															type="text"
															className="form-control"
															name="phoneNo"
															placeholder="Phone No"
															onChange={handleInputChange}
															ref={register({
																required: 'Phone is required.',
																pattern: {
																	value: /^\d{10}$/,
																	message: 'Please enter only digits',
																},
																minLength: {
																	value: 10,
																	message: 'Phone no must be 10 digits',
																},
															})}
														/>
														{errors.phoneNo && (
															<p className="errorMsg">
																{errors.phoneNo.message}
															</p>
														)}
													</div>

													{parentsShow ? (
														<div className="form-group">
															<input
																type="text"
																className="form-control"
																name="enrollment_id"
																placeholder="Student enrollment no"
																onChange={handleInputChange}
																ref={register({
																	required: 'Enrollment is required.',
																	pattern: {
																		value: /^[a-z][a-z0-9]*$/,
																		message: 'Enrollment no is not valid.',
																	},
																})}
															/>
															{errors.enrollment_id && (
																<p className="errorMsg">
																	{errors.enrollment_id.message}
																</p>
															)}
														</div>
													) : (
														<>
															<div className="form-group">
																<input
																	type="password"
																	className="form-control"
																	name="password"
																	placeholder="Password"
																	//  value={state.password}
																	onChange={handleInputChange}
																	ref={register({
																		required: 'You must specify a password',
																		minLength: {
																			value: 8,
																			message: 'Password at least 8 characters',
																		},
																	})}
																/>
																{errors.password && (
																	<p className="errorMsg">
																		{errors.password.message}
																	</p>
																)}
															</div>
															<div className="form-group">
																<input
																	type="password"
																	className="form-control"
																	name="password1"
																	placeholder="Confirm Password"
																	//  value={state.password1}
																	onChange={handleInputChange}
																	ref={register({
																		validate: (value) =>
																			value === password.current ||
																			'The passwords do not match',
																	})}
																/>
																{errors.password1 && (
																	<p className="errorMsg">
																		{errors.password1.message}
																	</p>
																)}
															</div>
														</>
													)}

													<div className="form-group">
														<select
															name="state_name"
															className="form-control row_full"
															value={statedata.state_name}
															onChange={statehandleChange}
															ref={register({
																required: 'You must select an option',
															})}
														>
															<option value="">Select State</option>
															{statelist.map((txt, index) => (
																<option value={txt.state_name} key={index}>
																	{txt.state_name}
																</option>
															))}
														</select>

														{errors.state_name && (
															<p className="errorMsg">
																{errors.state_name.message}
															</p>
														)}
													</div>

													{pathshalaShow || parentsShow ? (
														<div className="row_full form-group">
															<select
																name="city_name"
																className="form-control row_full"
																value={citydata.city_name}
																onChange={cityhandleChange}
																ref={register({
																	required: 'You must select an option',
																})}
															>
																<option value="">Select City</option>
																{citylist.map((txt, index) => (
																	<option value={txt.city_name} key={index}>
																		{txt.city_name}
																	</option>
																))}
															</select>

															{errors.city_name && (
																<p className="errorMsg">
																	{errors.city_name.message}
																</p>
															)}
														</div>
													) : (
														<div className="form-group">
															<select
																name="city_name"
																className="form-control row_full"
																value={citydata.city_name}
																onChange={cityhandleChange}
																ref={register({
																	required: 'You must select an option',
																})}
															>
																<option value="">Select City</option>
																{citylist.map((txt, index) => (
																	<option value={txt.city_name} key={index}>
																		{txt.city_name}
																	</option>
																))}
															</select>

															{errors.city_name && (
																<p className="errorMsg">
																	{errors.city_name.message}
																</p>
															)}
														</div>
													)}

													<div className="form-group lastelm">
														<button
															type="submit"
															className="btn btn-lg btn-block"
														>
															Register
														</button>
													</div>
												</form>
											</div>

											<div className="row_full signinLink">
												<p>
													Already have an account?{' '}
													<Link onClick={signinact}>
														<small>Login</small>
													</Link>
												</p>
											</div>
										</div>
									)}

									{otpRequest && (
										<div
											className="row_full registerBox"
											style={{ paddingTop: '70px' }}
										>
											<h3>
												<span className="welcome">Welcome to</span>Gyansutrm{' '}
												<span>Verify OTP</span>
											</h3>
											<div className="formBox row_full">
												{errorMsg && (
													<h5 className="row_full userExist">{message}</h5>
												)}
												<div
													className="form-group"
													style={{
														paddingTop: '20px',
														width: '100%',
														marginRight: '0px',
														position: 'relative',
													}}
												>
													<input
														type="text"
														className="form-control"
														name="otp"
														placeholder="Please enter OTP"
														onChange={handleInputChange}
														ref={register({
															required: 'OTP is required.',
															pattern: {
																value: /^\d{6}$/,
																message: 'OTP is not valid.',
															},
														})}
													/>
													<a
														style={{
															position: 'absolute',
															top: '31px',
															right: '10px',
														}}
														className="text text-primary text-sm"
														href="javascript:void(0);"
														onClick={resentOTP}
													>
														Resent OTP
													</a>
													{errors.otp && (
														<p className="errorMsg">{errors.otp.message}</p>
													)}
												</div>
												<div
													className="form-group lastelm"
													style={{ textAlign: 'center' }}
												>
													<a
														onClick={verifyAction}
														href="javascript:void(0);"
														className="btn btn-sm"
													>
														Verify OTP
													</a>
												</div>
											</div>
										</div>
									)}

									{signin && (
										<div className="row_full loginBox">
											<h3>
												<span className="welcome">Welcome to</span>Gyansutrm
											</h3>
											<ul className="row_full text-center acessBox">
												{activeUser.map((val, ind) => (
													<li key={ind}>
														<a
															className={`setaction ${
																accesstype === val.name ? 'active' : ''
															}`}
															onClick={(student) => {
																setType(`${val.name}`);
															}}
														>
															<img
																src={` ${
																	accesstype === val.name
																		? `${images_path}${val.active_imgpath}.png`
																		: `${images_path}${val.img_path}.png`
																}`}
															/>
														</a>
													</li>
												))}
											</ul>
											<p className="row_full text-center stdLogin">
												{' '}
												{accesstype} Login
											</p>
											<div className="row_full formBox">
												<p
													style={{
														marginTop: '-10px',
														paddingBottom: '5px',
														fontSize: '14px',
														fontWeight: '600',
													}}
													className="row_full text-center errorMsg"
												>
													{errorMsg ? message : ' '}
												</p>
												<form onSubmit={handleSubmit(handleSubmitDatalogin)}>
													<div className="form-group">
														<input
															type="hidden"
															name="vertical"
															value={accesstype}
														/>
														<input
															type="text"
															className="form-control"
															id="email"
															name="email"
															placeholder="Email id"
															//value ={userDetails.email}
															onChange={handleChange}
															ref={register({
																required: 'Email is required.',
																pattern: {
																	value:
																		/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z])+\.)+([a-zA-Z]{2,4})+$/,
																	message: 'Email is not valid.',
																},
															})}
														/>
														{errors.email && (
															<p className="errorMsg">{errors.email.message}</p>
														)}
													</div>
													<div
														className="form-group"
														style={{ marginBottom: '7px' }}
													>
														<input
															type="password"
															id="psw"
															className="form-control"
															name="password"
															placeholder="Password"
															//value={userDetails.password}
															onChange={handleChange}
															ref={register({
																required: 'You must specify a password',
																minLength: {
																	value: 8,
																	message: 'Password at least 8 characters',
																},
															})}
														/>
														{errors.password && (
															<p className="errorMsg">
																{errors.password.message}
															</p>
														)}
													</div>
													<div className="row_full signinLink">
														<p style={{ marginBottom: '10px' }}>
															<Link
																style={{ fontSize: '16px', color: '#F29419' }}
																onClick={forgetact}
															>
																<small>Forget Password?</small>
															</Link>
														</p>
													</div>
													<div className="form-group lastelm">
														<button className="btn btn-block btn-color">
															Login
														</button>
													</div>
													<div className="row_full signinLink">
														<p>
															Don't have an account?{' '}
															<Link onClick={signupact}>
																<small>Register</small>
															</Link>
														</p>
													</div>
												</form>
											</div>
										</div>
									)}

									{forget && (
										<div className="row_full loginBox">
											<h3>
												<span className="welcome">Welcome to</span>Gyansutrm{' '}
												<span>Forget Password</span>
											</h3>
											<div
												className="row_full formBox"
												style={{ paddingTop: '100px' }}
											>
												<form onSubmit={handleSubmit(handleSubmitDatafpass)}>
													<div className="form-group">
														<input
															type="text"
															className="form-control"
															id="email"
															name="email"
															placeholder="Registered Email"
															//value ={userDetails.email}
															onChange={handleChangefact}
															ref={register({
																required: 'Email is required.',
																pattern: {
																	value:
																		/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z])+\.)+([a-zA-Z]{2,4})+$/,
																	message: 'Email is not valid.',
																},
															})}
														/>
														{errors.email && (
															<p className="errorMsg">{errors.email.message}</p>
														)}
													</div>
													<div className="form-group lastelm">
														<button className="btn btn-block btn-color">
															Forget Password
														</button>
													</div>
													<div className="row_full signinLink">
														<p>
															<Link onClick={signinact}>
																<small>Try Login Again</small>
															</Link>
														</p>
													</div>
												</form>
											</div>
										</div>
									)}
								</div>
							)}
						</div>
					)}
					{notifybox && (
						<div className="successBox">
							<i
								className="fa faclose fa-times"
								onClick={hidesuccess}
								aria-hidden="true"
							></i>
							<h5 className="userExist">Thanks for Registering with us.</h5>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Signup;
