import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, Redirect } from 'react-router-dom';

import '../assets/vendors/mdi/css/materialdesignicons.min.css';
import '../assets/vendors/css/vendor.bundle.base.css';
import '../assets/css/style.css';
import './Adminheader.css';
import { USER_TYPE } from '../../../../common/constant/userRoleConstant';
const images_path = process.env.PUBLIC_URL + '/assets/images/';

const Adminheader = () => {
	const [userType, setUserType] = useState({});
	useEffect(() => {
		const roles = localStorage.getItem('roles');
		const selectedUser = USER_TYPE.filter(
			(item) => item.id === parseInt(roles)
		);
		if (_.size(selectedUser)) {
			setUserType(selectedUser[0]);
		}
	}, []);

	const history = useHistory();
	const logoutAuth = () => {
		const token = localStorage.getItem('token');
		fetch('http://54.251.156.235:4004/api/auth/logout', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: token,
			},
		})
			.then((response) => response.json())
			.then((responseData) => {
				console.log(responseData);
				if (responseData.statusCode === 200) {
					localStorage.removeItem('roles');
					localStorage.removeItem('token');
					history.push('/');
					refreshPage();
				} else {
					setErrorMsg(true);
					setTimeout(() => {
						setErrorMsg(false);
					}, 5000);
				}
			})
			.catch((error) => {
				console.error(error);
			});
	};
	const refreshPage = () => {
		window.location.reload();
	};

	return (
		<header className="cd-main-header js-cd-main-header">
			<div className="cd-logo-wrapper">
				<a href="javascript:void(0);" className="cd-logo">
					<img src={`${images_path}logo.png`} />
				</a>
			</div>

			<div className="cd-search js-cd-search">
				<form>
					<input
						className="reset form-control"
						type="search"
						placeholder="Search..."
					/>
				</form>
			</div>

			<button
				className="reset cd-nav-trigger js-cd-nav-trigger"
				aria-label="Toggle menu"
			>
				<span></span>
			</button>

			<ul className="cd-nav__list js-cd-nav__list">
				<li className="cd-nav__item">
					<a href="javascript:void(0);">
						<i className={'mdi mdi-bell-outline'} />
						<sup className={'notifi'}>
							<i className={'mdi mdi-checkbox-blank-circle text-info'} />
						</sup>
					</a>
				</li>
				<li className="cd-nav__item">
					<a href="javascript:void(0);">
						{' '}
						<i className={'mdi mdi-help-circle'} />{' '}
					</a>
				</li>
				<li className="cd-nav__item">
					<a href="javascript:void(0);" onClick={logoutAuth}>
						{' '}
						<i className={'mdi mdi-power'} />{' '}
					</a>
				</li>
				<li className="cd-nav__item cd-nav__item--has-children cd-nav__item--account js-cd-item--has-children">
					<a href="javascript:void(0);">
						<span className={'badge bg-success cd-title mr-2 text-elip'}>
							{userType?.name}
						</span>
						<img src={`${images_path}cd-avatar.svg`} alt="avatar" />
					</a>

					<ul className="cd-nav__sub-list">
						<li className="cd-nav__sub-item">
							<a href="javascript:void(0);">My Account</a>
						</li>
						<li className="cd-nav__sub-item">
							<a href="javascript:void(0);">Edit Account</a>
						</li>
						<li className="cd-nav__sub-item">
							<a onClick={logoutAuth} href="javascript:void(0);">
								Logout
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</header>
	);
};

export default Adminheader;
