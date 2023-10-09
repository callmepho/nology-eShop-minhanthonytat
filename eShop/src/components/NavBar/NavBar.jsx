import { NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./NavBar.module.scss";

const NavBar = () => {
	const activeTab = (e) => {
		console.log(e.target.class);
	};
	return (
		<nav className={styles.navbar}>
			<div className={styles.navbar_title}>
				<NavLink
					onClick={activeTab}
					to="/"
					className={styles.navbar_title_link}>
					<h1>Title</h1>
				</NavLink>
			</div>
			<div className={styles.navbar_category}>
				<NavLink
					onClick={activeTab}
					to="/products/keyboards"
					className={styles.navbar_category_links}>
					Keyboards
				</NavLink>
				<NavLink
					onClick={activeTab}
					to="/products/switches"
					className={styles.navbar_category_links}>
					Switches
				</NavLink>
				<NavLink
					onClick={activeTab}
					to="/products/deskmats"
					className={styles.navbar_category_links}>
					Deskmats
				</NavLink>
				<NavLink
					onClick={activeTab}
					to="/products/accessories"
					className={styles.navbar_category_links}>
					Accessories
				</NavLink>
				<NavLink
					onClick={activeTab}
					to="/cart"
					className={styles.navbar_category_links}>
					Cart
				</NavLink>
			</div>
		</nav>
	);
};

export default NavBar;
