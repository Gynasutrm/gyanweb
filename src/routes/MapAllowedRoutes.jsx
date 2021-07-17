import React, { memo } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import NotFound from '../common/component/NotFound/NotFound';

function MapAllowedRoutes({ routes, basePath, isAddNotFound }) {
	const match = useRouteMatch(basePath);
	return (
		<Switch>
			{routes.map((route) => {
				const {
					path,
					component: Component,
					children,
					title,
					permission,
					...rest
				} = route;
				console.log(path, '@@@@');
				return (
					<Route {...rest} key={path} path={path} exact>
						<Component children={children} />
					</Route>
				);
			})}
			{isAddNotFound && (
				<Route>
					<NotFound />
				</Route>
			)}
		</Switch>
	);
}

export default memo(MapAllowedRoutes);
