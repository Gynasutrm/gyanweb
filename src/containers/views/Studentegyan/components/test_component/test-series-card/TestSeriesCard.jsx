import React, { useEffect, useState } from 'react';
import './TestSeriesCard.css';
import { Link } from 'react-router-dom';

const TestSeriesCard = (props) => {
	const { test_count, test_series_name, test_series_id } = props.data;
	useEffect(() => {}, []);
	return (
		<div className="card">
			<div className="card-body" style={{ padding: '1rem' }}>
				<div className="d-flex justify-content-end">
					<span className="badge badge-info">{test_count}</span>
				</div>
				<h6 className="h6 f-s-16 f-w-600 lt-1 my-2 text-start">
					{test_series_name}
				</h6>
				<div className="divider"></div>
				{/* <button
          type="button"
          className="btn btn-sm mt-2 btn-border-info w-100"
          disabled={parseInt(test_count) < 1}
          onClick={(event) =>
            props.goToTestHandler(event, test_series_id.toString())
          }
        >
          Go to Test
        </button> */}

				<Link
					// disabled={parseInt(test_count) < 1}
					className="btn btn-sm mt-2 btn-border-info w-100"
					to={{
						pathname: '/studentegyan/testlist',
						state: {
							test_series_id: test_series_id,
						},
					}}
				>
					Go to Test
				</Link>
			</div>
		</div>
	);
};

export default TestSeriesCard;
