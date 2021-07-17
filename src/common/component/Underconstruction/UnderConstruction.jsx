import React, { useState, useRef, useEffect } from 'react';
import './UnderConstruction.scss';
const images_path = process.env.PUBLIC_URL + '/assets/images/';
const script_path = process.env.PUBLIC_URL + '/assets/js/';

const UnderConstruction = () => {
	useEffect(() => {}, []);
	return (
		<div className="row_full">
			<img src={`${images_path}in-progress.jpg`} alt="Under Construction" />
		</div>
	);
};

export default UnderConstruction;
