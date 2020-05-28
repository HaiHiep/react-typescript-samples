import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginPage } from "./components/pages/loginPage";
import { Home } from "./components/pages/home";
import { ResetPassPage } from "./components/pages/resetPassPage";

export const App = () => {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/login" component={LoginPage} />
					<Route path="/" component={Home} />
					<Route exact path="/resetPass" component={ResetPassPage} />
				</Switch>
			</Router>
		</div>
	);
};
