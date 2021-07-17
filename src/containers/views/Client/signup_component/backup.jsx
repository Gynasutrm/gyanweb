import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import './Signup.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';

const Signup = (props) => {
	const [notifybox, setNotifybox] = useState(false);
	const [errorMsg, setErrorMsg] = useState(false);
	const [onsignup, setOnsignup] = useState(true);
	const [onregister, setOnregister] = useState(true);
	const [accesstype, setAccesstype] = useState('student');

	const [forget, setForget] = React.useState(false);
	const [signin, setsignin] = React.useState(false);

	const [message, setMessage] = useState(null);

	const [statedata, setStatedata] = useState([]);
	const [citydata, setCitydata] = useState([]);

	const [selectedState, setSelectedState] = useState('');
	const [selectedCity, setSelectedCity] = useState('');

	const [verType, setVerType] = useState('student');

	const history = useHistory();
	useEffect(() => {
		getState();
		setVerType(verType);
	}, [verType]);

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

	const hidesignup = () => {
		props.toggleModal();
	};

	const hidesuccess = () => {
		setNotifybox(false);
		props.toggleModal();
	};

	const getState = () => {
		fetch('api/state', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((responseData) => {
				setStatedata(responseData.data);
				getCity(responseData.data[0].state);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const getCity = (val) => {
		fetch('api/city?state=' + val, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((responseData) => {
				setCitydata(responseData.data[0].city);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const handleSubmitData = () => {
		const registeredUser = {
			fullname: state.fullname,
			email: state.email,
			phoneNo: state.phoneNo,
			password: state.password1,
			password1: state.password1,
			state: selectedState,
			city: selectedCity,
			vertical: state.vertical,
		};

		fetch('/api/signup', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(registeredUser),
		})
			.then((response) => response.json())
			.then((responseData) => {
				if (responseData.status == 'success') {
					setOnsignup(false);
					setNotifybox(true);
					setTimeout(() => {
						setNotifybox(false);
						props.toggleModal();
					}, 5000);
				} else {
					setErrorMsg(true);
					setNotifybox(false);
					setTimeout(() => {
						setErrorMsg(false);
					}, 5000);
					setMessage(responseData.message);
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

	const handleSubmitDatalogin = () => {
		const loginuser = {
			email: userDetails.email,
			password: userDetails.password,
			vertical: accesstype,
		};
		fetch('/api/login', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(loginuser),
		})
			.then((response) => response.json())
			.then((responseData) => {
				console.log(responseData);
				if (responseData.status === 'success') {
					props.toggleModal();
					localStorage.setItem('token', JSON.stringify(responseData.token));
					localStorage.setItem('validauth', 'success');
					props.authLogin('success');
					history.push('/admin');
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

	const handleSubmitDatafpass = () => {
		const registeredUser = { email: userDetails.email };
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

	const getvType = (event) => {
		setVerType(event.target.value);
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
														className="form-control"
														placeholder="Vertical"
														name="vertical"
														value={verType}
														onChange={(handleInputChange, getvType)}
														ref={register({
															required: 'You must select an option',
														})}
													>
														<option value="school">School</option>
														<option value="student">Student</option>
														<option value="parent">Parent</option>
													</select>
													{errors.vertical && (
														<p className="errorMsg">
															{errors.vertical.message}
														</p>
													)}
												</div>

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
																value: /^[a-z][a-z\s]*$/,
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
														<p className="errorMsg">{errors.phoneNo.message}</p>
													)}
												</div>

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
																message:
																	'Password must have at least 8 characters',
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

												{verType == 'school' ? (
													<div>
														<div className="form-group">
															<select
																className="form-control"
																placeholder="States"
																name="state"
																onChange={(event) => {
																	getCity(event.target.value);
																	setSelectedState(event.target.value);
																}}
																ref={register({
																	required: 'You must select an option',
																})}
															>
																{statedata.map((item) => (
																	<option value={item.state}>
																		{item.state}
																	</option>
																))}
															</select>
															{errors.states && (
																<p className="errorMsg">
																	{errors.states.message}
																</p>
															)}
														</div>
														<div className="form-group">
															<select
																className="form-control"
																placeholder="Cities"
																name="city"
																onChange={(event) => {
																	setSelectedCity(event.target.value);
																}}
																ref={register({
																	required: 'You must select an option',
																})}
															>
																{citydata.map((item) => (
																	<option value={item.cityName}>
																		{item.cityName}
																	</option>
																))}
															</select>
															{errors.city && (
																<p className="errorMsg">
																	{errors.city.message}
																</p>
															)}
														</div>
													</div>
												) : null}

												{verType == 'parent' ? (
													<div>
														<div className="row_full form-group">
															<input
																type="text"
																className="form-control"
																name="student_enrl_no"
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
															{errors.student_enrl_no && (
																<p className="errorMsg">
																	{errors.student_enrl_no.message}
																</p>
															)}
														</div>
													</div>
												) : null}

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
												{errorMsg ? 'Invalid username or password' : ' '}
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
																message:
																	'Password must have at least 8 characters',
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
														placeholder="Registered Email / Mobile no"
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
