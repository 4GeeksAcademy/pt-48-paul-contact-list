import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/contactos">
				<span className="navbar-brand mb-0 h1">Contact Card</span>
			</Link>
			<div className="ml-auto">
				<Link to="/add-contact">
					<button className="btn btn-primary">Add new Contact</button>
				</Link>
			</div>
		</nav>
	);
};