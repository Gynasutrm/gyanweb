import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ClientSide from '../containers/layouts/Clientside';
import ChatBott from '../containers/views/Client/chatbot_component/Chatbott';
import Footer from '../containers/views/Client/footer_component/Footer';
import Header_new from '../containers/views/Client/header_component_new/Header_new';
import Home from '../containers/views/Client/home_component/Home';
import Signup from '../containers/views/Client/signup_component/Signup';
import Superadmin from '../containers/views/Client/superadmin_component/Superadmin';
import { MyContext } from '../hooks/UserContext';
import { isLoggedIn } from '../utils';
import { PublicRouteConfig } from './../config/index';

function PublicRoutes() {
	const { dispatch } = useContext(MyContext);
	const [modalElm, setModalElm] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setModalElm(true);
		}, 3000);
	}, []);

	const popup = () => {
		setModalElm(!modalElm);
	};
	const authLogin = (profileData) => {
		dispatch({
			type: 'SET_USER_DATA',
			payload: profileData,
		});
	};
	return (
		<Fragment>
			<Switch>
				<Route path="/superadmin" component={Superadmin} exact></Route>
				<Route>
					<ClientSide>
						<Header_new toggleModal={popup} />
						{!isLoggedIn() && modalElm ? (
							<Signup authLogin={authLogin} toggleModal={popup} />
						) : null}
						<Switch>
							<Route
								path="/"
								render={(props) => <Home toggleModal={popup} {...props} />}
								exact
							/>
							{PublicRouteConfig.map((route) => {
								const {
									path,
									component: Component,
									children,
									title,
									permission,
									...rest
								} = route;
								return (
									<Route key={path} path={path} exact>
										<Component children={children} />
									</Route>
								);
							})}
							<Route>
								<Redirect to="/" />
							</Route>
						</Switch>
						<ChatBott />
						<Footer />
					</ClientSide>
				</Route>
			</Switch>
		</Fragment>
	);
}

export default PublicRoutes;
