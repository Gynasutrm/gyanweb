import React, { useEffect } from 'react';
import './NotFound.scss';

const NotFound = () => {
	useEffect(() => {}, []);
	return (
		<section className="row_full text-center notfoundCntr">
			<div className="container">
				<div className="row_full">
					<h2>
						404-<span> Not Found</span>
					</h2>
				</div>
			</div>
		</section>
	);
};

export default NotFound;
