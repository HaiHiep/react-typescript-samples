import * as React from "react";
import { Link } from "react-router-dom";

export const Home = () => (
	<div>
		<h2>Hello Hiep</h2>
		<br />
		<Link to="/login">Navigate to Login</Link>
		<br />
		<Link to="/resetPass">Navigate to Reset Pass</Link>
	</div>
);
