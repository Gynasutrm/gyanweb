import React, { Suspense, useEffect, useState } from 'react';
import TestListCard from '../test-list-card/testListCard';
import { Link, useLocation } from 'react-router-dom';
import * as api from '../../../../Global/apiHelper/Apihelper';
import './testList.scss';

const TestList = () => {
	console.log('testlist');
	const { state } = useLocation();
	const [loader, setLoader] = useState(false);
	const [testList, setTestListData] = useState([]);
	const [test_series_id, setTestSeriesId] = useState('');
	useEffect(() => {
		getTestListData(state.test_series_id);
	}, []);
	const getTestCardHtml = () => {
		return testList.map((item, index) => (
			<TestListCard
				data={item}
				test_series_id={state.test_series_id}
			></TestListCard>
		));
	};
	async function getTestListData(test_series_id) {
		setTestSeriesId((prevState) => 'test_series_id');
		setLoader(true);
		try {
			let response = await api.httpPostAsync(`commons/my-tests`, {
				test_series_id: parseInt(test_series_id),
			});
			setLoader(false);
			setTestListData(response.data ? response.data : []);
		} catch (e) {}
	}
	return (
		<Suspense fallback={<h1>Still Loading…</h1>}>
			<div className="test-list w-100">{getTestCardHtml()}</div>
		</Suspense>
	);
};

export default TestList;
