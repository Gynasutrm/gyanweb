import React, { useEffect, useState } from 'react';
import { BUTTON_TYPE, BUTTON_LABEL } from '../TestConstant';
import { Link, useHistory } from 'react-router-dom';
import '../../../assets/vendors/mdi/css/materialdesignicons.min.css';
import './testListCard.css';
import * as api from '../../../../Global/apiHelper/Apihelper';

const TestListCard = (props) => {
	const { data, test_series_id } = props;
	const [loader, setLoader] = useState(false);
	const [preStart, setPreStart] = useState({});
	const history = useHistory();
	useEffect(() => {}, []);
	async function getPreStartResumeTest(url) {
		setLoader(true);
		try {
			let response = await api.getAll(`${url}/${props.data.test_id}`, true);
			setLoader(false);
			localStorage.setItem('token', response.token);
			history.push({
				pathname: '/studentegyan/instruction',
				state: {
					selectedTest: data,
					test_series_id: test_series_id,
				},
			});
		} catch (e) {}
	}
	// const setPreTestData = (preTestData) => {
	//   props.onComponentChangeHandler(null, preStart, "INSTRUCTION", "test_id");
	//   setPreStart(preTestData);
	// };
	const handleOnButtonClick = (event, type) => {
		if (type === BUTTON_TYPE.Start || type === BUTTON_TYPE.Running) {
			getPreStartResumeTest('commons/pre-start-test', type);
		} else if (type === BUTTON_TYPE.Resume) {
			getPreStartResumeTest('commons/resume-test', type);
		}
	};

	const getButtonHtml = (type) => {
		let isDisable = false;
		if (type === BUTTON_TYPE.Completed) {
			isDisable = true;
		}
		return (
			<button
				type="button"
				className={`d-flex justify-content-center btn-sm btn-border-info ${
					isDisable ? 'disabled' : ''
				}`}
				disabled={isDisable}
				onClick={(event) => handleOnButtonClick(event, type)}
			>
				{BUTTON_LABEL[type] === 'Running' ? 'Resume' : BUTTON_LABEL[type]}
			</button>
		);
	};
	return (
		<div className="card w-100">
			<div className="card-body d-flex">
				<div className="flex-grow-1">
					<div className="h5 f-s-16 f-w-600 text-start">{data.test_name}</div>
					<div className="details f-s-14">
						<span className="pr-3">
							Total Question: {data.test_total_question}
						</span>
						<span className="pr-3">Total Marks: {data.test_total_marks}</span>
						<span className="pr-3">Duration: {data.test_duration} minute</span>
						<span className="pr-3">
							Passing Marks: {data.test_passing_marks}
						</span>
						<span className="pr-3">
							Negative Marking:{' '}
							{data.test_negative_marking ? data.test_negative_marking : 'NA'}
						</span>
					</div>
				</div>
				<div className="">{getButtonHtml(data.test_status)}</div>
			</div>
		</div>
	);
};

export default TestListCard;
