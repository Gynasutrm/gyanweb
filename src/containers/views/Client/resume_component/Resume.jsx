import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import './Resume.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';

const Resume = (props) => {
	const [resumanotifybox, setResumanotifybox] = useState(false);
	const [errorMsg, setErrorMsg] = useState(false);
	const [onresuma, setOnResuma] = useState(true);
	const [message, setMessage] = useState(null);

	useEffect(() => {}, []);

	const { register, handleSubmit, errors, watch } = useForm({
		mode: 'onChange',
		reValidateMode: 'onChange',
		defaultValues: {
			email: '',
			remember: false,
		},
	});

	const [state, setState] = useState({
		fullname: '',
		dob: '',
		fatherName: '',
		qualification: '',
		totalExp: '',
		salary: '',
		maritalstatus: '',
		subject: '',
		location: '',
		location1: '',
		location2: '',
		currentlocation: '',
		currentorgnisation: '',
		email: '',
		phoneNo: '',
		subject: '',
		address: '',
		city: '',
		pincode: '',
		state: '',
		filename: '',
	});

	const closeResume = () => {
		props.dataToddle();
	};

	const afterResUpload = () => {
		setResumanotifybox(false);
		props.dataToddle();
	};

	const handleSubmitData = () => {
		/*const registeredUser = {
        fullname:state.fullname,
        email:state.email,
        phoneNo:state.phoneNo,
      }
      
      fetch("/api/signup", {
        method: 'POST',
        headers: {'Accept': 'application/json','Content-Type': 'application/json'},
        body: JSON.stringify(registeredUser)
      })
      .then((response) => response.json())
      .then((responseData) => {
            if(responseData.status=='success'){
              setOnResuma(false);
              setResumanotifybox(true);
              setTimeout(()=>{setResumanotifybox(false);props.toggleModal();},5000);
            }else{
              setErrorMsg(true);
              setResumanotifybox(false);
              setTimeout(()=>{setErrorMsg(false);},5000);
              setMessage(responseData.message);
            }
      })
      .catch((error) =>{
        console.error(error);
      })*/
	};

	const handleInputChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.value });
	};

	return (
		<>
			<div className="row_full blackBox">
				<div className="row_full midbox">
					{onresuma && (
						<div className="quickContact resumaBox">
							<h3>
								Please Fill the
								<br />
								Blow Detail and Upload Resume
							</h3>
							<i
								className="fa faclose fa-times"
								onClick={closeResume}
								aria-hidden="true"
							></i>
							<div className="signUpRight row_full">
								<div className="row_full registerBox">
									{' '}
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
													<p className="errorMsg">{errors.fullname.message}</p>
												)}
											</div>

											<div className="form-group">
												<input
													type="text"
													className="form-control"
													name="dob"
													placeholder="Date of Birth"
													onChange={handleInputChange}
													ref={register({ required: 'Dob is required.' })}
												/>
												{errors.dob && (
													<p className="errorMsg">{errors.dob.required}</p>
												)}
											</div>

											<div className="form-group">
												<input
													type="text"
													className="form-control"
													name="fatherName"
													placeholder="Father Name"
													onChange={handleInputChange}
													ref={register({
														required: 'Father Name is required.',
													})}
												/>
												{errors.fatherName && (
													<p className="errorMsg">
														{errors.fatherName.required}
													</p>
												)}
											</div>

											<div className="form-group">
												<input
													type="text"
													className="form-control"
													name="qualification"
													placeholder="Qualification"
													onChange={handleInputChange}
													ref={register({
														required: 'Qualification is required.',
													})}
												/>
												{errors.qualification && (
													<p className="errorMsg">
														{errors.qualification.required}
													</p>
												)}
											</div>

											<div className="form-group">
												<select
													className="form-control"
													placeholder="Exp(Years)"
													name="totalExp"
													ref={register({ required: 'Exp(Years) is required' })}
												>
													<option value="">Select Exp(Years)</option>
													<option value="1">1 Year</option>
													<option value="2">2 Year</option>
													<option value="3">3 Year</option>
													<option value="4">4 Year</option>
												</select>
												{errors.totalExp && (
													<p className="errorMsg">{errors.totalExp.required}</p>
												)}
											</div>

											<div className="form-group">
												<input
													type="text"
													className="form-control"
													name="salary"
													placeholder="Current Salary (in Lacs Per Anum)"
													onChange={handleInputChange}
													ref={register({ required: 'Salary is required.' })}
												/>
												{errors.salary && (
													<p className="errorMsg">{errors.salary.required}</p>
												)}
											</div>

											<div className="form-group">
												<select
													className="form-control"
													placeholder="Marital Status"
													name="maritalstatus"
													ref={register({
														required: 'Marital status is required',
													})}
												>
													<option value="">Select Marital Status</option>
													<option value="married">Married</option>
													<option value="unmarried">Unmarried</option>
												</select>
												{errors.maritalstatus && (
													<p className="errorMsg">
														{errors.maritalstatus.required}
													</p>
												)}
											</div>

											<div className="form-group">
												<select
													className="form-control"
													placeholder="Select Subject"
													name="subject"
													ref={register({ required: 'Subject is required' })}
												>
													<option value="">Select Subject</option>
													<option value="1">Subject 1</option>
													<option value="2">Subject 2</option>
												</select>
												{errors.subject && (
													<p className="errorMsg">{errors.subject.required}</p>
												)}
											</div>

											<div className="form-group">
												<select
													className="form-control"
													placeholder="Preferred Location 1"
													name="location"
													ref={register({ required: 'Location is required' })}
												>
													<option value="">Select Preferred Location 1</option>
													<option value="delhi">Delhi</option>
													<option value="noida">Noiida</option>
												</select>
												{errors.location && (
													<p className="errorMsg">{errors.location.required}</p>
												)}
											</div>

											<div className="form-group">
												<select
													className="form-control"
													placeholder="Preferred Location 1"
													name="location1"
													ref={register({ required: 'Location is required' })}
												>
													<option value="">Select Preferred Location 2</option>
													<option value="delhi">Delhi</option>
													<option value="noida">Noiida</option>
												</select>
												{errors.location && (
													<p className="errorMsg">{errors.location.required}</p>
												)}
											</div>

											<div className="form-group">
												<select
													className="form-control"
													placeholder="Preferred Location 3"
													name="location2"
													ref={register({ required: 'Location is required' })}
												>
													<option value="">Select Preferred Location 3</option>
													<option value="delhi">Delhi</option>
													<option value="noida">Noiida</option>
												</select>
												{errors.location && (
													<p className="errorMsg">{errors.location.required}</p>
												)}
											</div>

											<div className="form-group">
												<input
													type="text"
													className="form-control"
													name="currentlocation"
													placeholder="Current Location"
													onChange={handleInputChange}
													ref={register({ required: 'Location is required.' })}
												/>
												{errors.currentlocation && (
													<p className="errorMsg">
														{errors.currentlocation.required}
													</p>
												)}
											</div>

											<div className="form-group">
												<input
													type="text"
													className="form-control"
													name="currentorgnisation"
													placeholder="Current Orgnisation"
													onChange={handleInputChange}
													ref={register({
														required: 'Orgnisation is required.',
													})}
												/>
												{errors.currentorgnisation && (
													<p className="errorMsg">
														{errors.currentorgnisation.required}
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

											<div
												className="form-group lastelm"
												style={{ marginBottom: '15px' }}
											>
												<textarea
													style={{ minHeight: '50px', lineHeight: '20px' }}
													className="form-control"
													placeholder="Address"
													name="Address"
													ref={register({
														required: 'You must enter your address',
													})}
												></textarea>
												{errors.address && (
													<p className="errorMsg">{errors.address.required}</p>
												)}
											</div>

											<div className="form-group">
												<input
													className="form-control"
													type="text"
													name="city"
													placeholder="City"
													onChange={handleInputChange}
													ref={register({ required: 'City is required.' })}
												/>
												{errors.city && (
													<p className="errorMsg">{errors.city.required}</p>
												)}
											</div>

											<div className="form-group">
												<input
													type="text"
													className="form-control"
													name="pincode"
													placeholder="Pincode"
													onChange={handleInputChange}
													ref={register({
														required: 'Pincode is required.',
														pattern: {
															value: /^\d{6}$/,
															message: 'Please enter only digits',
														},
													})}
												/>
												{errors.pincode && (
													<p className="errorMsg">{errors.pincode.pattern}</p>
												)}
											</div>

											<div
												className="form-group"
												style={{ marginRight: '0px', float: 'right' }}
											>
												<select
													className="form-control"
													placeholder="Select State"
													name="state"
													ref={register({ required: 'State is required' })}
												>
													<option value="">Select State</option>
													<option value="delhi">Delhi</option>
													<option value="noida">Noiida</option>
												</select>
												{errors.state && (
													<p className="errorMsg">{errors.state.required}</p>
												)}
											</div>

											<div
												className="form-group lastelm"
												style={{ marginBottom: '15px' }}
											>
												<div className="row_full resupload">
													<p>Drag & Drop to upload</p>
													<input type="file" name="filename" valye="" />
												</div>
											</div>

											<div className="form-group lastelm">
												<button type="submit" className="btn btn-lg btn-block">
													Register
												</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					)}
					{resumanotifybox && (
						<div className="successBox">
							<i
								className="fa faclose fa-times"
								onClick={afterResUpload}
								aria-hidden="true"
							></i>
							<h5 className="userExist">
								Thanks for submitting your resuma. We will contact you soon
							</h5>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Resume;
