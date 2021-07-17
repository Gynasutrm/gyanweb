import React, { useState, useRef, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Dashboard.scss';

const images_path = process.env.PUBLIC_URL + '/assets/images/';

const localizer = momentLocalizer(moment);
const now = new Date();
const events = [
	{
		id: 0,
		title: 'All Day Event very long title',
		allDay: true,
		start: new Date(2015, 3, 0),
		end: new Date(2015, 3, 1),
	},
	{
		id: 1,
		title: 'Long Event',
		start: new Date(2015, 3, 7),
		end: new Date(2015, 3, 10),
	},

	{
		id: 2,
		title: 'DTS STARTS',
		start: new Date(2016, 2, 13, 0, 0, 0),
		end: new Date(2016, 2, 20, 0, 0, 0),
	},

	{
		id: 3,
		title: 'DTS ENDS',
		start: new Date(2016, 10, 6, 0, 0, 0),
		end: new Date(2016, 10, 13, 0, 0, 0),
	},

	{
		id: 4,
		title: 'Some Event',
		start: new Date(2015, 3, 9, 0, 0, 0),
		end: new Date(2015, 3, 10, 0, 0, 0),
	},
	{
		id: 5,
		title: 'Conference',
		start: new Date(2015, 3, 11),
		end: new Date(2015, 3, 13),
		desc: 'Big conference for important people',
	},
	{
		id: 6,
		title: 'Meeting',
		start: new Date(2015, 3, 12, 10, 30, 0, 0),
		end: new Date(2015, 3, 12, 12, 30, 0, 0),
		desc: 'Pre-meeting meeting, to prepare for the meeting',
	},
	{
		id: 7,
		title: 'Lunch',
		start: new Date(2015, 3, 12, 12, 0, 0, 0),
		end: new Date(2015, 3, 12, 13, 0, 0, 0),
		desc: 'Power lunch',
	},
	{
		id: 8,
		title: 'Meeting',
		start: new Date(2015, 3, 12, 14, 0, 0, 0),
		end: new Date(2015, 3, 12, 15, 0, 0, 0),
	},
	{
		id: 9,
		title: 'Happy Hour',
		start: new Date(2015, 3, 12, 17, 0, 0, 0),
		end: new Date(2015, 3, 12, 17, 30, 0, 0),
		desc: 'Most important meal of the day',
	},
	{
		id: 10,
		title: 'Dinner',
		start: new Date(2015, 3, 12, 20, 0, 0, 0),
		end: new Date(2015, 3, 12, 21, 0, 0, 0),
	},
	{
		id: 11,
		title: 'Birthday Party',
		start: new Date(2015, 3, 13, 7, 0, 0),
		end: new Date(2015, 3, 13, 10, 30, 0),
	},
	{
		id: 12,
		title: 'Late Night Event',
		start: new Date(2015, 3, 17, 19, 30, 0),
		end: new Date(2015, 3, 18, 2, 0, 0),
	},
	{
		id: 12.5,
		title: 'Late Same Night Event',
		start: new Date(2015, 3, 17, 19, 30, 0),
		end: new Date(2015, 3, 17, 23, 30, 0),
	},
	{
		id: 13,
		title: 'Multi-day Event',
		start: new Date(2015, 3, 20, 19, 30, 0),
		end: new Date(2015, 3, 22, 2, 0, 0),
	},
	{
		id: 14,
		title: 'Today',
		start: new Date(new Date().setHours(new Date().getHours() - 3)),
		end: new Date(new Date().setHours(new Date().getHours() + 3)),
	},
	{
		id: 15,
		title: 'Point in Time Event',
		start: now,
		end: now,
	},
];

const Dashboard = () => {
	useEffect(() => {}, []);
	return (
		<div>
			<div className="row">
				<div className="card col-md-12 col-xs-12">
					<div className="card-body main-bar-top-bg">
						<div className="row">
							<div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
								<div className="card h-100 text-white bg-blue">
									<div className="card-body">
										<p className="f-s-2 text-white">Courses</p>
									</div>
								</div>
							</div>

							<div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 pl-0">
								<div className="card text-white bg-green h-100">
									<div className="card-body">
										<div className="card-text">
											<p className="w-100 d-flex">
												<span
													className={'f-s-12 w-50 text-left d-inline-block'}
												>
													Best performing Subject
												</span>
												<span
													className={'w-50 float-end d-inline-block text-right'}
												>
													<button
														className={'btn btn-sm bg-light-green w-100 f-s-12'}
													>
														Subject Name
													</button>
												</span>
											</p>

											<p className="w-100 mt-2 d-flex">
												<span
													className={'f-s-12 w-50 text-left d-inline-block'}
												>
													Best performing <br />
													Topic
												</span>
												<span
													className={'w-50 float-end d-inline-block text-right'}
												>
													<button
														className={'btn btn-sm bg-light-green w-100 f-s-12'}
													>
														Topic Name
													</button>
												</span>
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 pl-0">
								<div className="card text-white bg-pink h-100">
									<div className="card-body">
										<p className="w-100 d-flex">
											<span className={'f-s-12 w-50 text-left d-inline-block'}>
												Best performing Subject
											</span>
											<span className={'w-50 float-end d-inline-block'}>
												<button
													className={
														'btn btn-sm bg-light-pink f-s-12 w-100 text-right'
													}
												>
													Subject Name
												</button>
											</span>
										</p>

										<p className="w-100 mt-2 d-flex">
											<span className={'f-s-12 w-50 text-left d-inline-block'}>
												Best performing <br />
												Topic
											</span>
											<span
												className={'w-50 float-end d-inline-block text-right'}
											>
												<button
													className={'btn btn-sm bg-light-pink w-100 f-s-12'}
												>
													Topic Name
												</button>
											</span>
										</p>
									</div>
								</div>
							</div>

							<div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 pl-0">
								<div className="card text-white bg-light-blue h-100">
									<div className="card-body">
										<div className="text-white f-s-2 pro-comp">
											<span className={'w-50 text-left d-inline-block'}>
												Hi Rahul Kumar...
											</span>
											<span
												className={'w-50 text-right d-inline-block'}
												style={{ letterSpacing: '.001rem' }}
											>
												Profile Completion
											</span>
										</div>
										<div className="text-white mt-2 f-s-2">
											<div className={'w-60 text-left d-inline-block'}>
												<div className={'d-inline-block fa-2x align-bottom'}>
													<i className={'mdi mdi-account-circle'} />
												</div>
												<div
													className={'d-inline-block'}
													style={{ width: '86%' }}
												>
													<div className="w-100 d-block f-s-12">
														<span className={'d-inline-block w-42'}>
															Student Name
														</span>{' '}
														:
														<span className={'d-inline-block ml-2'}>Rahul</span>
													</div>
													<div className="w-100 mt-1 d-block f-s-12">
														<span className={'d-inline-block w-42'}>
															Roll Number
														</span>{' '}
														:
														<span className={'d-inline-block ml-2'}>
															24587547
														</span>
													</div>
												</div>
											</div>
											<div className={'w-40 text-left d-inline-block'}>
												<div className={'w-100 d-flex item-center'}>
													<div className="progress" style={{ width: '82%' }}>
														<div
															className="progress-bar bg-success"
															role="progressbar"
															style={{ width: '60%' }}
															aria-valuenow="60"
															aria-valuemin="0"
															aria-valuemax="100"
														></div>
													</div>{' '}
													<span className={'f-s-12 ml-1'}>60%</span>
												</div>

												<a href={'#'}>
													<div
														className={
															'badge bg-white com-pro text-info f-s-12'
														}
													>
														Complete Profile
													</div>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="row mt-4">
				<div className="col-lg-3 col-md-6 col-sm-12">
					<div className="card text-center">
						<div className="card-body">
							<img src={`${images_path}book.png`} alt="" />
							<h6 className="h6 f-s-14 f-w-600 lt-1 my-2">i-GL</h6>
							<p className="f-s-2">
								Track trainings using a powerful reporting engine.
							</p>
							<button type="button" className="btn btn-sm mt-2 btn-border-info">
								Details
							</button>
						</div>
					</div>
				</div>

				<div className="col-lg-3 col-md-6 col-sm-12">
					<div className="card text-center">
						<div className="card-body">
							<img src={`${images_path}read.png`} alt="" />
							<h6 className="h6 f-s-14 f-w-600 lt-1 my-2">jigyasha</h6>
							<p className="f-s-2">
								Track trainings using a powerful reporting engine.
							</p>
							<button type="button" className="btn btn-sm mt-2 btn-border-info">
								Details
							</button>
						</div>
					</div>
				</div>

				<div className="col-lg-3 col-md-6 col-sm-12">
					<div className="card text-center">
						<div className="card-body">
							<img src={`${images_path}write.png`} alt="" />
							<h6 className="h6 f-s-14 f-w-600 lt-1 my-2">G-Samadhan</h6>
							<p className="f-s-2">
								Track trainings using a powerful reporting engine.
							</p>
							<button type="button" className="btn btn-sm mt-2 btn-border-info">
								Details
							</button>
						</div>
					</div>
				</div>

				<div className="col-lg-3 col-md-6 col-sm-12">
					<div className="card text-center">
						<div className="card-body">
							<img src={`${images_path}user-av.png`} alt="" />
							<h6 className="h6 f-s-14 f-w-600 lt-1 my-2">G-Archive</h6>
							<p className="f-s-2">
								Track trainings using a powerful reporting engine.
							</p>
							<button type="button" className="btn btn-sm mt-2 btn-border-info">
								Details
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* <div className="row mt-4">
                <div className="col-lg-12 col-md-12 text-center">
                    <h5 className={'news_upd'}>News & Updates- Sliding Information</h5>
                </div>
            </div>*/}

			<div className="row mt-4">
				<div className="col-lg-12 col-md-12 col-sm-12">
					<div className="card">
						<div className="card-body">
							<div className="row">
								<div className="col-lg-4 col-md-4 col-sm-12">
									<button
										className={
											'btn btn-small bg-teel text-white btn-block text-capitalize'
										}
									>
										View All
									</button>
									<button
										className={
											'btn btn-small bg-green text-white mt-3 btn-block text-capitalize'
										}
									>
										My Calender
									</button>
									<button
										className={
											'btn btn-small bg-teel-1 text-white mt-3 btn-block text-capitalize'
										}
									>
										holidays(Self-study Time)
									</button>
								</div>
								<div className="col-lg-8 col-md-8 col-sm-12">
									<Calendar
										localizer={localizer}
										events={events}
										views={{
											month: true,
											today: true,
										}}
										startAccessor="start"
										endAccessor="end"
										style={{ height: 500 }}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className="modal fade bd-example-modal-lg"
				tabIndex="-1"
				role="dialog"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-lg">
					<div className="modal-content">
						<div className="container-fluid">
							<div className="row">
								<div className="col-md-4">.col-md-4</div>
								<div className="col-md-4 ml-auto">.col-md-4 .ml-auto</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
