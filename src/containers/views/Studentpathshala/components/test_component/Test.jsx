import React, { useState, useRef, useEffect } from 'react';
import './Test.scss';
import _ from 'lodash';
import TestSeriesCard from './test-series-card/TestSeriesCard';
import TestList from './test-list/testList';
import { testListData } from './test-list';
import TestIntroduction from './test-introduction/testIntroduction';
import Exam from './exam/Exam';
import * as api from '../../../Global/apiHelper/Apihelper';

const Test = () => {
	const [isShowTestList, setIsShowTestList] = useState(false);
	const [currentComponent, setCurrentComponent] = useState('TEST_SERIES');
	const [selectTestData, setSelectedTestData] = useState({
		test_series_id: '',
		test_id: '',
	});
	const [testSeries, setTestSeriesData] = useState([]);
	const [testList, setTestListData] = useState([]);
	const [testInstruction, setTestInstruction] = useState({});
	const [loader, setLoader] = useState(false);
	const getTestSeries = () => {
		setIsShowTestList(false);
		getTestSeriesList();
	};
	async function getTestSeriesList() {
		setLoader(true);
		try {
			let response = await api.getAll('commons/my-test-series', true);
			setLoader(false);
			setTestSeriesData(response.data ? response.data : []);
		} catch (e) {}
	}
	async function getTestListData(test_series_id) {
		setSelectedTestData((prevState) => {
			return {
				...prevState,
				test_series_id: test_series_id,
			};
		});
		setLoader(true);
		try {
			let response = await api.httpPostAsync(`commons/my-tests`, {
				test_series_id: parseInt(test_series_id),
			});
			setLoader(false);
			console.log(response);
			setTestListData(response.data ? response.data : []);
		} catch (e) {}
	}
	const goToTestHandler = (event, test_series_id) => {
		if (!_.isEmpty(test_series_id)) {
			setCurrentComponent('TEST_LIST');
			getTestListData(test_series_id);
		}
	};
	const getTestSeriesListHtml = () => {
		return testSeries.map((item) => (
			<div>
				<h5 className="series-title f-s-18 mb-1 mt-2">{item.test_type_name}</h5>
				<div className="series">
					{item.test_series_data.map((series, index) => (
						<TestSeriesCard
							data={series}
							goToTestHandler={goToTestHandler}
						></TestSeriesCard>
					))}
				</div>
			</div>
		));
	};
	const getPageContent = () => {
		return getTestSeriesListHtml();
	};
	useEffect(() => {
		getTestSeries();
	}, []);
	return <div className="test">{getPageContent()}</div>;
};

export default Test;
