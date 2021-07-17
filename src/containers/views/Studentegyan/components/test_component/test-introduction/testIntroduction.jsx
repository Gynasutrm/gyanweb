import React, { Suspense, useEffect, useState } from 'react';
import './testIntroduction.scss';
import { Link, useLocation, useHistory } from 'react-router-dom';
import * as api from '../../../../Global/apiHelper/Apihelper';

const TestIntroduction = (props) => {
	const { state } = useLocation();
	const history = useHistory();
	const [isCheckedTC, setTermCondition] = useState(true);
	const [loader, setLoader] = useState(false);
	useEffect(() => {}, []);
	const checkTermCondition = (event) => {
		setTermCondition(true);
		if (event.target.checked == true) {
			setTermCondition(false);
		}
	};
	// const goBacs
	const next = () => {
		// props.onComponentChangeHandler(null, null, "ONLINE_EXAM");
		getPreStartTest();
	};
	async function getPreStartTest() {
		setLoader(true);
		try {
			let response = await api.getAll(`commons/start-test`, true);
			console.log(response);
			if (response && response.statusCode === 203) {
				alert(response.message);
			} else {
				history.push({
					pathname: '/studentegyan/exam',
					state: {
						selectedTest: state.selectedTest,
						test_series_id: state.test_series_id,
						startExam: response.data,
					},
				});
			}
			setLoader(false);
		} catch (e) {}
	}
	return (
		<Suspense fallback={<h1>Still Loading…</h1>}>
			<div className="test-introduction">
				<div className="card w-100">
					<div className="card-body d-flex flex-column">
						<div className="h5 f-s-16 f-w-600 title">Instructions</div>
						<div className="content">
							<span
								dangerouslySetInnerHTML={{
									__html: state.selectedTest.test_instruction,
								}}
							/>
							<div className="divider"></div>
							<div className="h5 f-s-16 f-w-600 term-and-condition-title">
								Term & Condition
							</div>
							<div className="checkbox">
								<label>
									<input
										type="checkbox"
										value=""
										className="mr-2"
										onClick={(event) => checkTermCondition(event)}
									/>
									<span className="f-s-14">
										I have read and understood the instructions. All computer
										hardware allotted to me are in proper working condition. I
										declare that I am not in possession of / not wearing / not
										carrying any prohibited gadget like mobile phone, bluetooth
										devices etc. /any prohibited material with me into the
										Examination Hall. I agree that in case of not adhering to
										the instructions, I shall be liable to be debarred from this
										Test and/or to disciplinary action, which may include ban
										from future Tests / Examinations
									</span>
								</label>
							</div>
						</div>
					</div>
				</div>
				<div className="footer w-100 pt-3 pb-3 d-flex justify-content-between">
					<Link
						className={`btn-sm btn-border-info back-button`}
						to={{
							pathname: '/studentegyan/testlist',
							state: {
								test_series_id: state.test_series_id,
							},
						}}
					>
						Go to Back
					</Link>
					{isCheckedTC}
					<button
						type="button"
						disabled={isCheckedTC}
						className={`btn-sm btn-border-info next-button`}
						onClick={(event) => next(event)}
					>
						Next
					</button>
				</div>
			</div>
		</Suspense>
	);
};

export default TestIntroduction;
