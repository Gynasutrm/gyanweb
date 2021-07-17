import React, { memo } from 'react';
import { Redirect, Route } from 'react-router-dom';
import Header_new from '../containers/views/Client/header_component_new/Header_new';
import Home from '../containers/views/Client/home_component/Home';
import { isLoggedIn } from '../utils';
import PublicRoutes from './PublicRoutes';

/*
 * TODO: when user loggedIn he/she unable to goto public routes
 *  ie: ('/about', '/contact', 'any other public route')
 */
function Auth(props) {
	// TODO: temp logged-in check, update as per your app logic
	return <PublicRoutes />;
	// return isLoggedIn() ? (
	// 	<Route path="/" render={(props) => <Home {...props} />} exact />
	// ) : (
	// 	<PublicRoutes />
	// );
}

export default memo(Auth);
