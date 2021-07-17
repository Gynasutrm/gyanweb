import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import './StudentEgyanFooter.css';
const images_path = process.env.PUBLIC_URL + '/assets/images/';
const script_path = process.env.PUBLIC_URL + '/assets/js/';

const StudentEgyanFooter = () => {
	useEffect(() => {}, []);
	return (
		<footer className="footerAdmin">
			<div className="container-fluid clearfix">
				<span className="text-muted d-block text-center text-sm-left d-sm-inline-block">
					Copyright © Gyansutrm 2021
				</span>
			</div>
		</footer>
	);
};

export default StudentEgyanFooter;
