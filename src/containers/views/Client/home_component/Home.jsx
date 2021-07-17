import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Home.scss';

const images_path = process.env.PUBLIC_URL + '/assets/images/';

const Home = (props) => {
	const [errorMsg, setErrorMsg] = useState(false);
	const [selectedState, setSelectedState] = useState('');
	const [selectedCity, setSelectedCity] = useState('');
	const [statedata, setStatedata] = useState([]);
	const [citydata, setCitydata] = useState([]);
	const [message, setMessage] = useState(null);
	const [ulwidth, setUlwidth] = useState(null);
	const [trendingulwdth, setTrendingulwdth] = useState(null);
	const [loginData, setLoginData] = useState(false);

	const instaRef = useRef(null);
	const expertRef = useRef(null);
	const liwidthGet = useRef(null);

	const [state, setState] = useState({
		fullname: '',
		email: '',
		phoneNo: '',
		state: '',
		city: '',
	});

	useEffect(() => {
		getState();
		let sliderLength = document.querySelectorAll('.testimonialBox li').length;
		let marginElm = sliderLength * 15;
		let ulWidth =
			parseInt(sliderLength * liwidthGet.current.offsetWidth) + marginElm;
		setUlwidth(ulWidth);

		let trendingBoxLength = document.querySelectorAll('.trendingBox li').length;
		let trndmarginElm = trendingBoxLength * 20;
		let trndulWidth =
			parseInt(trendingBoxLength * liwidthGet.current.offsetWidth) +
			trndmarginElm;
		setTrendingulwdth(trndulWidth);

		const persistState = localStorage.getItem('validauth');
		if (persistState) {
			setLoginData(true);
		}
	}, [liwidthGet.current]);

	const instaScroll = () =>
		instaRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
	const expertScroll = () =>
		expertRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

	let pentagon_slider = [
		{
			slider_index: '0',
			name: 'Aman Sharma',
			speciality: ' Software',
			slider_img: 'team_1',
		},
		{
			slider_index: '1',
			name: 'Mohan Kumar',
			speciality: ' Hardware',
			slider_img: 'team_2',
		},
		{
			slider_index: '2',
			name: 'Dharmendra Dixit',
			speciality: ' Software',
			slider_img: 'team_3',
		},
		{
			slider_index: '3',
			name: 'Deepak Sinha',
			speciality: ' Networking',
			slider_img: 'team_4',
		},
		{
			slider_index: '4',
			name: 'Rajesh Ranjan',
			speciality: ' Software',
			slider_img: 'team_5',
		},
		{
			slider_index: '5',
			name: 'Raman Ranjan',
			speciality: ' Networking',
			slider_img: 'team_6',
		},
		{
			slider_index: '6',
			name: 'Santosh Kumar',
			speciality: ' Software',
			slider_img: 'team_2',
		},
	];

	const { register, handleSubmit, errors, watch } = useForm({
		mode: 'onChange',
		reValidateMode: 'onChange',
		defaultValues: {
			email: '',
			remember: false,
		},
	});

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
			state: selectedState,
			city: selectedCity,
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
				} else {
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const handleInputChange = (event) => {
		setState({ ...state, [event.target.name]: event.target.value });
	};

	let count = 0;
	const moveSlide = (rel, ulelm, main) => {
		let sliderLength = document.querySelectorAll('.' + main + ' li').length;
		let element = document.querySelector('.' + ulelm);
		let liWidth = liwidthGet.current.offsetWidth;
		let gapElm = 0;
		ulelm == 'sliderUlwidth' ? (gapElm = 15) : (gapElm = 20);
		let z = 0;
		if (rel == 'left') {
			if (-count < sliderLength - 2) {
				count--;
				let marginLi = count * gapElm;
				z = parseInt(liWidth * count) + marginLi;
				element.style.webkitTransform = 'translateX(' + z + 'px)';
			}
		} else {
			if (count < 0) {
				count++;
				let marginLi = count * gapElm;
				z = parseInt(liWidth * count) + marginLi;
				element.style.webkitTransform = 'translateX(' + z + 'px)';
			}
		}
	};

	let trendingcount = 0;
	const trendingSlide = (rel, ulelm, main) => {
		let sliderLength = document.querySelectorAll('.' + main + ' li').length;
		let element = document.querySelector('.' + ulelm);
		let liWidth = liwidthGet.current.offsetWidth;
		let gapElm = 0;
		ulelm == 'sliderUlwidth' ? (gapElm = 15) : (gapElm = 20);
		let z = 0;
		if (rel == 'left') {
			if (-trendingcount < sliderLength - 2) {
				trendingcount--;
				let marginLi = trendingcount * gapElm;
				z = parseInt(liWidth * trendingcount) + marginLi;
				element.style.webkitTransform = 'translateX(' + z + 'px)';
			}
		} else {
			if (trendingcount < 0) {
				trendingcount++;
				let marginLi = trendingcount * gapElm;
				z = parseInt(liWidth * trendingcount) + marginLi;
				element.style.webkitTransform = 'translateX(' + z + 'px)';
			}
		}
	};

	const openModal = () => {
		props.toggleModal();
	};

	return (
		<section className="row_full">
			<div className="row_full gyansliderCntr">
				<Carousel
					showArrows={false}
					showStatus={false}
					showThumbs={false}
					swipeable={true}
					dynamicHeight={true}
				>
					<div className="row_full">
						<img src={`${images_path}hero_slider_1.jpg`} />
						<div className="container">
							<div className="row_full">
								<div className="sliderText">
									<h2 className="row_full">
										Interactive Online Classes
										<br /> by India's Top Teachers
									</h2>
									<p className="row_full pad_t_b_20 mar_0 text-center">
										Classes as Per Time-Table Weekday and weekend
										<br /> Batches to Choose Form
									</p>
									<p
										className="row_full text-center"
										style={{ marginTop: '15px' }}
									>
										<a onClick={openModal} className="gyanBtn active">
											Let's Join
										</a>
										<a className="gyanBtn">
											<i className="fa fa-play" aria-hidden="true"></i> Watch
											Preview
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="row_full">
						<img src={`${images_path}hero_slider_1.jpg`} />
						<div className="container">
							<div className="row_full">
								<div className="sliderText">
									<h2 className="row_full">
										Join Gyansutrm & Get <br /> Your Free Courses!
									</h2>
									<p className="row_full pad_t_b_20 mar_0 text-center">
										Self-paced learning and revision on Gyansutrm Live classes
									</p>
									<p
										className="row_full text-center"
										style={{ marginTop: '15px' }}
									>
										<a className="gyanBtn active">Let's Join</a>
										<a className="gyanBtn">
											<i className="fa fa-play" aria-hidden="true"></i> Watch
											Preview
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="row_full">
						<img src={`${images_path}hero_slider_1.jpg`} />
						<div className="container">
							<div className="row_full">
								<div className="sliderText">
									<h2 className="row_full">
										We Provide, <br /> Dedicated mentors to guide students
									</h2>
									<p className="row_full pad_t_b_20 mar_0 text-center">
										One-on-one guidance <br />A dedicated Gyansutrm mentor will
										give constant support to students
									</p>
									<p
										className="row_full text-center"
										style={{ marginTop: '15px' }}
									>
										<a className="gyanBtn active">Let's Join</a>
										<a className="gyanBtn">
											<i className="fa fa-play" aria-hidden="true"></i> Watch
											Preview
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</Carousel>
			</div>

			<div className="row_full pad_t_b_40 mar_b_30">
				<div className="container">
					<div className="row_full homeGliveBox">
						<ul className="row_full text-center">
							<li>
								<span className="icon glive"></span>
								<h4>G-Live</h4>
								<p>
									An innovative Live learning platform <br />
									to make your dreams come true.
								</p>
								<Link to="/glivepremium">
									<i
										className="fa fa-chevron-circle-right"
										aria-hidden="true"
									></i>{' '}
									Read More
								</Link>
							</li>

							<li>
								<span className="icon igl"></span>
								<h4>i-GL</h4>
								<p>
									Interactive Gyansutrm <br />
									Library
								</p>
								<Link to="/iglpro">
									<i
										className="fa fa-chevron-circle-right"
										aria-hidden="true"
									></i>{' '}
									Read More
								</Link>
							</li>

							<li>
								<span className="icon igpt"></span>
								<h4>i-GPT</h4>
								<p>
									Intellectual Gyansutrm <br />
									PracTest
								</p>
								<a>
									Read More{' '}
									<i
										className="fa fa-chevron-circle-right"
										aria-hidden="true"
									></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="row_full pad_t_b_40 popularCntr text-center">
				<div className="container">
					<h3 className="row_full">Popular Category</h3>
					<div className="row_full popularBox">
						<div className="popularItem">
							<ul className="row_full">
								<li className="row_full mar_b_0">
									<div className="row_full imageElm">
										<img src={`${images_path}home/flive_class.png`} />
										<div className="overLayBox">
											<span className="darkArea"></span>
											<div className="row_full overlayContent">
												<h4>Free Live Class</h4>
												<a onClick={openModal} className="expNow">
													Explore Now
												</a>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>

						<div className="popularItem">
							<ul className="row_full">
								<li>
									<div className="row_full imageElm">
										<img src={`${images_path}home/neet_class.png`} />
										<div className="overLayBox">
											<span className="darkArea"></span>
											<div className="row_full overlayContent">
												<h4>NEET 2021</h4>
												<Link className="expNow" to="/neet">
													Explore Now
												</Link>
											</div>
										</div>
									</div>
								</li>

								<li>
									<div className="row_full imageElm">
										<img src={`${images_path}home/jee_class.png`} />
										<div className="overLayBox">
											<span className="darkArea"></span>
											<div className="row_full overlayContent">
												<h4>JEE 2021</h4>
												<Link className="expNow" to="/jeemains">
													Explore Now
												</Link>
											</div>
										</div>
									</div>
								</li>

								<li className="mar_b_0">
									<div className="row_full imageElm">
										<img src={`${images_path}home/garc_class.png`} />
										<div className="overLayBox">
											<span className="darkArea"></span>
											<div className="row_full overlayContent">
												<h4>G-Archive</h4>
												<a className="expNow">Explore Now</a>
											</div>
										</div>
									</div>
								</li>

								<li className="mar_b_0">
									<div className="row_full imageElm">
										<img src={`${images_path}home/expert_class.png`} />
										<div className="overLayBox">
											<span className="darkArea"></span>
											<div className="row_full overlayContent">
												<h4>
													Expert Counselling <br />/ Motivational Session
												</h4>
												<Link className="expNow" to="/expert">
													Explore Now
												</Link>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div className="row_full allcatBox text-center">
						<a className="allCat">ALL CATEGORIES</a>
					</div>
				</div>
			</div>

			<div
				className="row_full pad_t_b_40  browseCntr text-center"
				style={{ background: `url(${images_path}neet/neetbg.jpg)` }}
			>
				<span className="fixtopAppImg">
					<img src={`${images_path}neet/neetfixtop.png`} />
				</span>
				<div className="container">
					<div className="row_full">
						<p className="row_full lightText">CHOOSE YOUR DESIRED COURSES</p>
						<h3 className="row_full">Browse Our Top Live Courses</h3>
						<ul className="row_full">
							<li>
								<Link>Meritorious</Link>
								<Link to="/neet">NEET</Link>
								<Link to="/jeemains">JEE</Link>
								<Link to="/ntse">NTSE</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="row_full trendingCntr">
				<div className="container">
					<div className="row_full">
						<p className="row_full lightText text-center mar_0">
							LEARN ON YOUR SCHEDULE
						</p>
						<h3 className="row_full text-center">Trending Course</h3>
						<div className="row_full trendingBox">
							<i
								onClick={(n, ul, main) => {
									trendingSlide('left', 'courseList', 'trendingBox');
								}}
								className="fa leftslideT fa-chevron-left"
								aria-hidden="true"
							></i>
							<i
								onClick={(n, ul, main) => {
									trendingSlide('right', 'courseList', 'trendingBox');
								}}
								className="fa leftslideT fa-chevron-right"
								aria-hidden="true"
							></i>
							<div className="row_full" style={{ overflow: 'hidden' }}>
								<ul className="courseList" style={{ width: trendingulwdth }}>
									<li ref={liwidthGet}>
										<div className="row_full imageLearn">
											<img src={`${images_path}trend_img1.jpg`} />
											<span className="row_full blackOpc"></span>
											<div className="row_full overLayBox">
												<span className="glpremium">
													G-Live
													<br />
													Premium
												</span>
												<p>
													<a>Join a Free Live Class</a>
												</p>
											</div>
										</div>

										<div className="row_full contentLearn">
											<h3>
												NEET + KVPY + OLYMPIAD LIVE PREMIUM <span></span>
											</h3>
											<div className="row_full ulList">
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>{' '}
													<span>Interactive Live classes (PCB)</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>{' '}
													<span>24 X 7 Doubt Solution</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>{' '}
													<span>G-Samadhan Live doubt session</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>{' '}
													<span>Jigyasha (doubt video library access)</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>{' '}
													<span>i-GL (interactive Gyansutrm Library)</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>{' '}
													<span>PracTest Series</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>{' '}
													<span>Performance analysis</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>{' '}
													<span>Immediate remidial actions</span>
												</div>
											</div>
											<a className="subBtn">Buy Now</a>
										</div>
									</li>

									<li>
										<div className="row_full imageLearn">
											<img src={`${images_path}trend_img1.jpg`} />
											<span className="row_full blackOpc"></span>
											<div className="row_full overLayBox">
												<span className="glpremium">
													G-Live
													<br />
													Premium
												</span>
												<p>
													<a>Join a Free Live Class</a>
												</p>
											</div>
										</div>

										<div className="row_full contentLearn">
											<h3>
												JEE (MAINS +ADVANCED) LIVE<span></span>
											</h3>
											<div className="row_full ulList">
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Interactive Live classes (PCB)</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>24 X 7 Doubt Solution</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>G-Samadhan Live doubt session</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Jigyasha (doubt video library access)</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>i-GL (interactive Gyansutrm Library)</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>PracTest Series</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Performance analysis</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Immediate remidial actions</span>
												</div>
											</div>
											<a className="subBtn">Buy Now</a>
										</div>
									</li>

									<li>
										<div className="row_full imageLearn">
											<img src={`${images_path}trend_img1.jpg`} />
											<span className="row_full blackOpc"></span>
											<div className="row_full overLayBox">
												<span className="glpremium">
													G-Live
													<br />
													Premium
												</span>
												<p>
													<a>Join a Free Live Class</a>
												</p>
											</div>
										</div>

										<div className="row_full contentLearn">
											<h3>
												JEE (MAINS + ADVANCE) + KVPY + OLYMPIAD LIVE PREMIUM
												<span></span>
											</h3>
											<div className="row_full ulList">
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Interactive Live classes (PCM)</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>24 X 7 Doubt Solution</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>G-Samadhan Live doubt session</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Jigyasha (doubt video library access)</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>i-GL (interactive Gyansutrm Library)</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>PracTest Series</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Performance analysis</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Immediate remidial actions</span>
												</div>
											</div>
											<a className="subBtn">Buy Now</a>
										</div>
									</li>

									<li>
										<div className="row_full imageLearn">
											<img src={`${images_path}trend_img1.jpg`} />
											<span className="row_full blackOpc"></span>
											<div className="row_full overLayBox">
												<span className="glpremium">
													G-Live
													<br />
													Premium
												</span>
												<p>
													<a>Join a Free Live Class</a>
												</p>
											</div>
										</div>

										<div className="row_full contentLearn">
											<h3>
												NEET LIVE<span></span>
											</h3>
											<div className="row_full ulList">
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Interactive Live classes (PCB)</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>24 X 7 Doubt Solution</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>G-Samadhan Live doubt session</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Jigyasha (doubt video library access)</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>PracTest Series</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Performance analysis</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Immediate remidial actions</span>
												</div>
											</div>
											<a className="subBtn">Buy Now</a>
										</div>
									</li>

									<li>
										<div className="row_full imageLearn">
											<img src={`${images_path}trend_img1.jpg`} />
											<span className="row_full blackOpc"></span>
											<div className="row_full overLayBox">
												<span className="glpremium">
													G-Live
													<br />
													Premium
												</span>
												<p>
													<a>Join a Free Live Class</a>
												</p>
											</div>
										</div>

										<div className="row_full contentLearn">
											<h3>
												JEE (MAINS + SLEET*) LIVE<span></span>
											</h3>
											<div className="row_full ulList">
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Interactive Live classes (PCM)</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>24 X 7 Doubt Solution</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>G-Samadhan Live doubt session</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Jigyasha (doubt video library access)</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>PracTest Series</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Performance analysis</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Immediate remidial actions</span>
												</div>
											</div>
											<a className="subBtn">Buy Now</a>
										</div>
									</li>

									<li>
										<div className="row_full imageLearn">
											<img src={`${images_path}trend_img1.jpg`} />
											<span className="row_full blackOpc"></span>
											<div className="row_full overLayBox">
												<span className="glpremium">
													G-Live
													<br />
													Premium
												</span>
												<p>
													<a>Join a Free Live Class</a>
												</p>
											</div>
										</div>

										<div className="row_full contentLearn">
											<h3>
												NEET PHYSICS-LIVE<span></span>
											</h3>
											<div className="row_full ulList">
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Interactive Live classes (PCM)</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>24 X 7 Doubt Solution</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>G-Samadhan Live doubt session</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Jigyasha (doubt video library access)</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Performance analysis</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Immediate remidial actions</span>
												</div>
											</div>
											<a className="subBtn">Buy Now</a>
										</div>
									</li>

									<li>
										<div className="row_full imageLearn">
											<img src={`${images_path}trend_img1.jpg`} />
											<span className="row_full blackOpc"></span>
											<div className="row_full overLayBox">
												<span className="glpremium">
													G-Live
													<br />
													Premium
												</span>
												<p>
													<a>Join a Free Live Class</a>
												</p>
											</div>
										</div>

										<div className="row_full contentLearn">
											<h3>
												NEET BIOLOGY- LIVE<span></span>
											</h3>
											<div className="row_full ulList">
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Interactive Live classes</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>24 X 7 Doubt Solution</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>G-Samadhan Live doubt session</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Jigyasha (doubt video library access)</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Performance analysis</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Immediate remidial actions</span>
												</div>
											</div>
											<a className="subBtn">Buy Now</a>
										</div>
									</li>

									<li>
										<div className="row_full imageLearn">
											<img src={`${images_path}trend_img1.jpg`} />
											<span className="row_full blackOpc"></span>
											<div className="row_full overLayBox">
												<span className="glpremium">
													G-Live
													<br />
													Premium
												</span>
												<p>
													<a>Join a Free Live Class</a>
												</p>
											</div>
										</div>

										<div className="row_full contentLearn">
											<h3>
												NEET CHEMISTRY- LIVE<span></span>
											</h3>
											<div className="row_full ulList">
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Interactive Live classes</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>24 X 7 Doubt Solution</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>G-Samadhan Live doubt session</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Jigyasha (doubt video library access)</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Performance analysis</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Immediate remidial actions</span>
												</div>
											</div>
											<a className="subBtn">Buy Now</a>
										</div>
									</li>

									<li>
										<div className="row_full imageLearn">
											<img src={`${images_path}trend_img1.jpg`} />
											<span className="row_full blackOpc"></span>
											<div className="row_full overLayBox">
												<span className="glpremium">
													G-Live
													<br />
													Premium
												</span>
												<p>
													<a>Join a Free Live Class</a>
												</p>
											</div>
										</div>

										<div className="row_full contentLearn">
											<h3>
												JEE MATHEMATICS - LIVE<span></span>
											</h3>
											<div className="row_full ulList">
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Interactive Live classes</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>24 X 7 Doubt Solution</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>G-Samadhan Live doubt session</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Jigyasha (doubt video library access)</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Performance analysis</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Immediate remidial actions</span>
												</div>
											</div>
											<a className="subBtn">Buy Now</a>
										</div>
									</li>

									<li>
										<div className="row_full imageLearn">
											<img src={`${images_path}trend_img1.jpg`} />
											<span className="row_full blackOpc"></span>
											<div className="row_full overLayBox">
												<span className="glpremium">
													G-Live
													<br />
													Premium
												</span>
												<p>
													<a>Join a Free Live Class</a>
												</p>
											</div>
										</div>

										<div className="row_full contentLearn">
											<h3>
												JEE PHYSICS- LIVE<span></span>
											</h3>
											<div className="row_full ulList">
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Interactive Live classes</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>24 X 7 Doubt Solution</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>G-Samadhan Live doubt session</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Jigyasha (doubt video library access)</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Performance analysis</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Immediate remidial actions</span>
												</div>
											</div>
											<a className="subBtn">Buy Now</a>
										</div>
									</li>

									<li>
										<div className="row_full imageLearn">
											<img src={`${images_path}trend_img1.jpg`} />
											<span className="row_full blackOpc"></span>
											<div className="row_full overLayBox">
												<span className="glpremium">
													G-Live
													<br />
													Premium
												</span>
												<p>
													<a>Join a Free Live Class</a>
												</p>
											</div>
										</div>

										<div className="row_full contentLearn">
											<h3>
												JEE CHEMISTRY- LIVE<span></span>
											</h3>
											<div className="row_full ulList">
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Interactive Live classes</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>G-Samadhan Live doubt session</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Performance analysis</span>
												</div>
												<div className="row_full">
													<i className="fa fa-circle" aria-hidden="true"></i>
													<span>Immediate remidial actions</span>
												</div>
											</div>
											<a className="subBtn">Buy Now</a>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="row_full countCntr">
				<div className="row_full countBox">
					<div className="leftCount">
						<div className="row_full stopImg">
							<img src={`${images_path}home/stop_bg.png`} />
						</div>
						<span>
							<img src={`${images_path}home/stop_icon.png`} />
							<em>
								Never Stop Learning, Because
								<br />
								Life Never Stops Teaching.
							</em>
						</span>
					</div>

					<div className="leftCount">
						<ul className="row_full">
							<li>
								<h3>2034</h3>
								<p>STUDENTS MENTORED</p>
							</li>

							<li className="one">
								<h3>51</h3>
								<p>PATHSHALA ENROLLED</p>
							</li>

							<li className="two" style={{ marginBottom: '0px' }}>
								<h3>1019</h3>
								<p>LIVE LEARING HOURS</p>
							</li>

							<li>
								<h3>40800</h3>
								<p>STUDENT ENROLLED</p>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="expInstCntr pad_t_b_40">
				<div ref={expertRef} className="row_full">
					<div className="container">
						<div className="row_full">
							<p className="row_full mar_0 lightText text-center">
								TEAM GYANSUTRM
							</p>
							<h3 className="row_full text-center">Our Expert Instructors</h3>
							<div className="row_full pad_t_40">
								<div className="row_full pentagonBox">
									<div className="pentagon_slide hi-slide">
										<div className="hi-prev "></div>
										<div className="hi-next "></div>
										<ul className="row_full">
											{pentagon_slider.map((item) => (
												<li>
													<img
														src={`${images_path}${item.slider_img}.png`}
														alt={`${item.slider_index}`}
													/>
													<div className="heading">
														<span>{`${item.name}`}</span>{' '}
														<span>{`${item.speciality}`}</span>
													</div>
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="row_full testimonialCntr">
				<span className="fixtopAppImg">
					<img src={`${images_path}home_bot_fix.png`} />
				</span>
				<div className="container">
					<div className="row_full text-center">
						<p className="row_full lightText mar_0">TESTIMONIALS</p>
						<h3 className="row_full">See What Our Lovely Student Said</h3>
					</div>
					<div className="row_full testimonialBox">
						<i
							onClick={(n, ul, main) => {
								moveSlide('left', 'sliderUlwidth', 'testimonialBox');
							}}
							className="fa leftslide fa-chevron-left"
							aria-hidden="true"
						></i>
						<i
							onClick={(n, ul, main) => {
								moveSlide('right', 'sliderUlwidth', 'testimonialBox');
							}}
							className="fa leftslide fa-chevron-right"
							aria-hidden="true"
						></i>
						<div className="row_full" style={{ overflow: 'hidden' }}>
							<ul
								className="sliderUlwidth text-center"
								style={{ width: ulwidth }}
							>
								<li ref={liwidthGet}>
									<span className="icon default"></span>
									<h4 className="row_full">
										Sumit Bhat<span>AFMC PUNE</span>
									</h4>
									<p className="row_full">
										“I choose to learn from the best. When it comes to learning
										how to Learn better, Pushpendra Tripathi sir is that
										person—he’s skillful, humble, passionate, teaching from
										personal experience, and excited to show you the way.{' '}
										<a
											style={{
												color: '#F29626',
												cursor: 'pointer',
												display: 'none',
											}}
										>
											More
										</a>
									</p>
								</li>

								<li>
									<span className="icon default"></span>
									<h4 className="row_full">
										DHANANJAY BANSAL<span>R.N.T. Udaipur</span>
									</h4>
									<p className="row_full">
										With an attitude of being ever ready to help, and not only
										delivering classroom teachings, but they are also the
										pillars of the learning gained from their experience and
										this is a treasure for life.
									</p>
								</li>

								<li>
									<span className="icon default"></span>
									<h4 className="row_full">
										HIMASNHU AGARWAL<span>RUHS Jaipur</span>
									</h4>
									<p className="row_full">
										“Think Different, that is one thing that Gyansutrm urges in
										and to far extent succeed in teaching to its students which
										invariably helps to achieve what you need. It nourished me
										and thus gave me an opportunity to define me.
									</p>
								</li>
							</ul>
						</div>
						<div className="row_full text-center happyStudent">
							<a>500+ Review by Happy Students</a>
						</div>
					</div>
				</div>
			</div>

			<div className="row_full benifitCntr top">
				<div className="container">
					<div className="row_full">
						<div className="benifitBox enhance">
							<div
								className="row_full imgArea"
								style={{ background: '#fff', position: 'relative' }}
							>
								<img src={`${images_path}home/enhance.png`} />
								<span className="tagName">
									<a>START ONLINE LEARNING</a>
								</span>
							</div>
						</div>

						<div className="benifitBox enhance">
							<h3 className="row_full">
								ENHANCE YOUR SKILLS WITH BEST ONLINE COURSES GET STARTED NOW
							</h3>
							<div className="row_full">
								<a onClick={openModal} className="getStart">
									Get Start Now
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="row_full benifitCntr">
				<div className="container">
					<div className="row_full">
						<div className="benifitBox">
							<p className="row_full lightText mar_0">
								get start with GYANSUTRM
							</p>
							<h3 className="row_full">Benefits of Learning With GYANSUTRM</h3>
							<ul className="row_full listText">
								<li className="row_full">
									<i className="fa fa-circle" aria-hidden="true"></i>
									<span>Get Trained by India's Top-Notch IHEs.</span>
								</li>
								<li className="row_full">
									<i className="fa fa-circle" aria-hidden="true"></i>
									<span>Strengthen Your Concept by DPP's (e-ABHYAS)</span>
								</li>
								<li className="row_full">
									<i className="fa fa-circle" aria-hidden="true"></i>
									<span>Realtime Doubt Solving</span>
								</li>
								<li className="row_full">
									<i className="fa fa-circle" aria-hidden="true"></i>
									<span>Get Cruated Study Time Management</span>
								</li>
								<li className="row_full">
									<i className="fa fa-circle" aria-hidden="true"></i>
									<span>Learn And Test Mode For Learning Enhancement</span>{' '}
								</li>
								<li className="row_full">
									<i className="fa fa-circle" aria-hidden="true"></i>
									<span>Live Performance Board With Remedial Actions</span>
								</li>
							</ul>
							<div className="row_full">
								<a onClick={openModal} className="getStart">
									Get Start Now
								</a>
							</div>
						</div>

						<div className="benifitBox" style={{ position: 'relative' }}>
							<div className="row_full imgArea">
								<img src={`${images_path}learning_1.gif`} alt="learning" />
							</div>
							<ul className="row_full instaUlElm">
								<li>
									<a onClick={instaScroll}>
										<span className="icon insta"></span>
										<p className="row_full instatxt">Insta Class</p>
									</a>
								</li>
								<li>
									<Link to="/glivepremium">
										<span className="icon live"></span>
										<p className="row_full livetxt">Live Learning</p>
									</Link>
								</li>
								<li>
									<a onClick={expertScroll}>
										<span className="icon expert"></span>
										<p className="row_full expertTxt">Expert Teachers</p>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div ref={instaRef} className="row_full learningCntr">
				<div className="container">
					<div className="row_full">
						<div className="learningBox">
							<div className="row_full joinArea">
								<h3 className="row_full text-center">
									JOIN FREE LIVE-CLASS NOW
								</h3>
								<div className="row_full">
									<div className="formBox row_full">
										{errorMsg && (
											<h5 className="row_full userExist">{message}</h5>
										)}
										<form
											style={{ paddingTop: '10px' }}
											className="row_full"
											autoComplete="off"
											onSubmit={handleSubmit(handleSubmitData)}
										>
											<div
												className="form-group"
												style={{ position: 'relative' }}
											>
												<input
													type="text"
													className="form-control"
													name="fullname"
													placeholder="Full Name"
													onChange={handleInputChange}
													// value={state.fullname}
													ref={register({
														required: 'Name is required.',
														pattern: {
															value: /^[a-z][a-z\s]*$/,
															message: 'Name is not valid.',
														},
													})}
												/>
												{errors.fullname && (
													<p
														style={{ position: 'absolute', left: '0px' }}
														className="errorMsg"
													>
														{errors.fullname.message}
													</p>
												)}
											</div>
											<div
												className="form-group"
												style={{ position: 'relative' }}
											>
												<input
													className="form-control"
													type="text"
													name="email"
													placeholder="Email"
													onChange={handleInputChange}
													// value={state.email}
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
													<p
														style={{ position: 'absolute', left: '0px' }}
														className="errorMsg"
													>
														{errors.email.message}
													</p>
												)}
											</div>
											<div
												className="form-group"
												style={{ position: 'relative' }}
											>
												<input
													type="text"
													className="form-control"
													name="phoneNo"
													placeholder="Phone No"
													//  value={state.phoneNo}
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
													<p
														style={{ position: 'absolute', left: '0px' }}
														className="errorMsg"
													>
														{errors.phoneNo.message}
													</p>
												)}
											</div>
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
														<option value={item.state}>{item.state}</option>
													))}
												</select>
												{errors.states && (
													<p className="errorMsg">{errors.states.message}</p>
												)}
											</div>
											<div className="form-group row_full">
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
													<p className="errorMsg">{errors.city.message}</p>
												)}
											</div>
											<div className="form-group row_full mar_0">
												<button type="submit" className="getStart">
													Get Start Now
												</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
						<div className="learningBox">
							<h4 className="row_full text-center">
								Get Ahead With <br />
								Learning Paths. Stay Sharp.
							</h4>
							<div className="row_full learningImg">
								<img src={`${images_path}learn_right_img.jpg`} />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="row_full pad_t_b_40 newsCntr">
				<div className="container">
					<p className="row_full lightText text-center mar_0">NEWS FEEDS</p>
					<h3 className="row_full text-center">Latest News & Articles</h3>
					<div className="row_full newsBox">
						<div className="popularItem">
							<ul className="row_full">
								<li>
									<div className="row_full imageElm">
										<img src={`${images_path}home/neet_class.png`} />
										<div className="overLayBox">
											<span className="darkArea row_full"></span>
											<div className="row_full overlayContent">
												<a className="expNow">2 Feb 2021</a>
												<p className="row_full desc">
													How the level of competition changing year by year in
													NEET & JEE
												</p>
											</div>
										</div>
									</div>
								</li>

								<li>
									<div className="row_full imageElm">
										<img src={`${images_path}home/jee_class.png`} />
										<div className="overLayBox">
											<span className="darkArea row_full"></span>
											<div className="row_full overlayContent">
												<a className="expNow">5 Feb 2021</a>
												<p className="row_full desc">
													Upcoming changes and challenges in education System
													with NEP-2021
												</p>
											</div>
										</div>
									</div>
								</li>

								<li style={{ marginBottom: '0px' }}>
									<div className="row_full imageElm">
										<img src={`${images_path}home/garc_class.png`} />
										<div className="overLayBox">
											<span className="row_full darkArea"></span>
											<div className="row_full overlayContent">
												<a className="expNow">2 Feb 2021</a>
												<p className="row_full desc">
													Upcoming announcements for NEET & JEE by NTA
												</p>
											</div>
										</div>
									</div>
								</li>

								<li style={{ marginBottom: '0px' }}>
									<div className="row_full imageElm">
										<img src={`${images_path}home/expert_class.png`} />
										<div className="overLayBox">
											<span className="row_full darkArea"></span>
											<div className="row_full overlayContent">
												<a className="expNow">2 Feb 2021</a>
												<p className="row_full desc">
													Dreaming scientific research but pushed into roller
													coaster
												</p>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>

						<div className="popularItem">
							<ul className="row_full">
								<li className="row_full" style={{ marginBottom: '0px' }}>
									<div className="row_full imageElm">
										<img src={`${images_path}home/flive_class.png`} />
										<div className="overLayBox">
											<span className="row_full darkArea"></span>
											<div className="row_full overlayContent">
												<p className="row_full">
													<a className="expNow green">2 Feb 2021</a>{' '}
													<span>Most Recent</span>
												</p>
												<p className="row_full desc">
													Why there is no separate classes for research and
													skill development courses like KVPY, OLYMPIADS etc
												</p>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="row_full educatorCntr">
				<span className="fixtopAppImg">
					<img src={`${images_path}home_bot_fix.png`} />
				</span>
				<div className="container">
					<div className="row_full educatorBox">
						<ul className="row_full text-center">
							<li>
								<span className="icon glive"></span>
								<h4>BECOME AN EDUCATOR</h4>
								<p>
									Teach what you love. GYANSUTRM gives you the tools to create a
									course.
								</p>
								<Link to="/career">Start Teaching</Link>
							</li>

							<li>
								<span className="icon igl"></span>
								<h4>BECOME A LEARNER</h4>
								<p>
									Learn what you love! transform your life through education
								</p>
								<a>Start Learning</a>
							</li>

							<li>
								<span className="icon igpt"></span>
								<h4>MAKE YOUR SCHOOL PATHSHALA</h4>
								<p>
									Get unlimited access to 5,000+ of GYANSUTRM's top courses for
									your team
								</p>
								<a onClick={openModal}>Join Us</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="row_full stayCntr">
				<div className="row_full">
					<div className="container">
						<div className="row_full stayBox">
							<div className="leftBox">
								<img src={`${images_path}home/stay_connect.png`} />
							</div>
							<div className="leftBox pad_t_30">
								<p className="row_full mar_0 lightText">NEWS FEEDS</p>
								<h3 className="row_full">STAY CONNECTED FOR UPDATES</h3>
								<p className="row_full" style={{ color: '#8B8B8B' }}>
									Your information is safe with us! unsubscribe anytime.
								</p>

								<div className="row_full subsArea">
									<div className="form-group">
										<input
											className="form-control"
											type="text"
											name="email"
											placeholder="Enter your email"
										/>
										<span className="fa fa-envelope-o input-icon"></span>
									</div>
									<button className="subBtn" type="submit">
										Subscribe
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
