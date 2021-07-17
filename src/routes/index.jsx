import React, { memo } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from '../utils/history';
import PrivateRoutes from './PrivateRoutes';
import Auth from './Auth';
import Header_new from '../containers/views/Client/header_component_new/Header_new';
import NotFound from '../common/component/NotFound/NotFound';
import Superadmin from '../containers/views/Client/superadmin_component/Superadmin';

function Routes() {
	return (
		<Router history={history}>
			<Switch>
				<Route path="/studentegyan">
					<PrivateRoutes path={'studentegyan'} />
				</Route>
				<Route path="/studentpathshala">
					<PrivateRoutes path={'studentpathshala'} />
				</Route>
				<Route path="/pathshala">
					<PrivateRoutes path={'pathshala'} />
				</Route>
				<Route path="/global">
					<PrivateRoutes path={'global'} />
				</Route>
				<Route path="/">
					<Auth />
				</Route>
				{/* <Route path="/*">
					<Redirect to="/" />;
				</Route> */}
			</Switch>
		</Router>
	);
}

export default memo(Routes);
