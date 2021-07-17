import React, { Fragment, useReducer } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import Toaster from './common/component/Toaster/Toaster';
import { initialState } from './hooks/initialState';
import { reducer } from './hooks/reducer';
import { MyContext } from './hooks/UserContext';
import Routes from './routes/index';
import ScrollToTop from './ScrollToTop';
const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const value = { state, dispatch };

	return (
		<MyContext.Provider value={value} displayName="React Context">
			<Router>
				<Fragment>
					<Toaster />
					<ScrollToTop />
					<Switch>
						<Routes />
					</Switch>
				</Fragment>
			</Router>
		</MyContext.Provider>
	);
};
export default App;
