import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Home from '../pages/Desktop/Home';

const MainRouter = () => {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path={'/'}>
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default MainRouter;
