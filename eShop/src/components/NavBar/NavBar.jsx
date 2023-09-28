import { NavLink } from "react-router-dom";
import React from "react";

const NavBar = () => {
	return (
		<nav>
			<h1>Title</h1>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/products/keyboard-kits">Keyboards</NavLink>
			<NavLink to="/products/switchs">Switches</NavLink>
			<NavLink to="/products/deskmats">Deskmats</NavLink>
			<NavLink to="/products/accessories">Accessories</NavLink>
			<NavLink to="/contact">Contact</NavLink>
		</nav>
	);
};

export default NavBar;
