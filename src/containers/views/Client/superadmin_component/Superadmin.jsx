import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { isAdminLoggedIn } from '../../../../utils';
import './Superadmin.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';

const Superadmin = (props) => {
	const [errorMsg, setErrorMsg] = useState(false);
	const [forget, setForget] = useState(false);
	const [signin, setsignin] = useState(true);

	const history = useHistory();
	useEffect(() => {
		if (isAdminLoggedIn()) {
			history.push('/global/registration');
		}
	}, []);

	const { register, handleSubmit, errors, watch } = useForm({
		mode: 'onChange',
		reValidateMode: 'onChange',
		defaultValues: {
			email: '',
			remember: false,
		},
	});

	const [userDetails, setUserDetails] = useState({
		email: '',
		password: '',
	});

	const [userDetailsfpass, setUserDetailsfpass] = useState({
		email: '',
	});

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
		};
		fetch('http://54.251.156.235:4001/auth/login', {
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
					localStorage.setItem('token', responseData.token);
					localStorage.setItem('roles', [6]);
					window.location.href = 'http://13.213.28.56:3000/global/registration';
					// window.location.href = 'http://gyansutrm.com/global';
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

	const forgetact = () => {
		setsignin(false);
		setForget(true);
	};

	const signinact = () => {
		setsignin(true);
		setForget(false);
	};
	return (
		<div className="row_full superAdminCntr">
			<div className="container">
				<div className="row_full display_flex">
					<div className="superAdminBox">
						<div className="signUpLeft">
							<img src={`${images_path}signupbg.png`} />
						</div>
						<div className="signUpRight">
							{signin && (
								<div className="row_full loginBox">
									<h3>
										<span className="welcome">Welcome to</span>Gyansutrm
									</h3>
									<p className="row_full text-center stdLogin">
										Super Admin Panel
									</p>
									<div
										className="row_full formBox"
										style={{ paddingTop: '25px' }}
									>
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
															message:
																'Password must have at least 8 characters',
														},
													})}
												/>
												{errors.password && (
													<p className="errorMsg">{errors.password.message}</p>
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
										style={{ paddingTop: '60px' }}
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
				</div>
			</div>
		</div>
	);
};

export default Superadmin;
