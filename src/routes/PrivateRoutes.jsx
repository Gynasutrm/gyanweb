import React, { Fragment } from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';
import { getAllowedRoutes, isLoggedIn } from '../utils/index';
import { PrivateRoutesConfig } from '../config/index';
import MapAllowedRoutes from './MapAllowedRoutes';
import Studentegyan from '../containers/layouts/Studentegyan';
import Global from '../containers/layouts/Global';
import Superheader from '../containers/views/Global/superheader_component/Superheader';
import Supersidebar from '../containers/views/Global/supersidebar_component/Supersidebar';
import Studentpathshala from '../containers/layouts/Studentpathshala';
import StudentEgyanSidebar from '../containers/views/Studentegyan/StudentEgyanSidebar/StudentEgyanSidebar';
import StudentEgyanHeader from '../containers/views/Studentegyan/StudentEgyanHeader/StudentEgyanHeader';
import StudentPathshalaHeader from '../containers/views/Studentpathshala/StudentPathshalaHeader/StudentPathshalaHeader';
import StudentPathshalaSidebar from '../containers/views/Studentpathshala/StudentPathshalaSidebar/StudentPathshalaSidebar';

function PrivateRoutes(props) {
	const match = useRouteMatch('/studentegyan');
	let allowedRoutes = [];
	let path = null;

	if (isLoggedIn()) {
		path = props.path === 'global' ? 'superadmin' : props.path;
		allowedRoutes = getAllowedRoutes(PrivateRoutesConfig[path]);
	} else {
		return <Redirect to="/" />;
	}
	return (
		<Fragment>
			{path === 'superadmin' ? (
				<Global>
					<div className="container-scroller adminCntr">
						<Superheader />
						<div className="container-fluid page-body-wrapper">
							<Supersidebar />
							<div className="main-panel">
								<div className="content-wrapper">
									<MapAllowedRoutes
										routes={allowedRoutes}
										basePath={props.path}
										isAddNotFound
									/>
								</div>
							</div>
						</div>
					</div>
				</Global>
			) : null}
			{path === 'studentegyan' ? (
				<Studentegyan>
					<div className="container-scroller adminCntr">
						<StudentEgyanHeader />
						<div className="container-fluid page-body-wrapper">
							<StudentEgyanSidebar />
							<div className="main-panel">
								<div className="content-wrapper">
									<MapAllowedRoutes
										routes={allowedRoutes}
										basePath={props.path}
										isAddNotFound
									/>
								</div>
							</div>
						</div>
					</div>
				</Studentegyan>
			) : null}

			{path === 'studentpathshala' ? (
				<Studentpathshala>
					<div className="container-scroller adminCntr">
						<StudentPathshalaHeader />
						<div className="container-fluid page-body-wrapper">
							<StudentPathshalaSidebar />
							<div className="main-panel">
								<div className="content-wrapper">
									<MapAllowedRoutes
										routes={allowedRoutes}
										basePath={props.path}
										isAddNotFound
									/>
								</div>
							</div>
						</div>
					</div>
				</Studentpathshala>
			) : null}
		</Fragment>
	);
}

export default PrivateRoutes;
