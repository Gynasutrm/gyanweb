import React, { useState, useRef, useEffect } from 'react';
import UnderConstruction from '../../../../../common/component/Underconstruction/UnderConstruction';
import './Igl.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';
const script_path = process.env.PUBLIC_URL + '/assets/js/';

const Igl = () => {
	useEffect(() => {}, []);
	return (
		<div className="row_full">
			<UnderConstruction></UnderConstruction>
		</div>
	);
};

export default Igl;
