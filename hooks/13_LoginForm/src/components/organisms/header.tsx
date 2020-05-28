import * as React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<div className="row col-12">
			<nav className="navbar navbar-expand-lg navbar-light bg-white" id="navbar">
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item"><Link className="nav-link" to="/"> Home</Link></li>
					<li className="nav-item"><Link className="nav-link" to="/login"> Login</Link></li>
				</ul>
			</div>
			</nav>
		</div>
	);
}