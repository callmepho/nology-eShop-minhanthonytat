import styles from "./Footer.module.scss";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footer_socials}>
				<img src={facebook} className={styles.footer_socials_icon} />
				<img src={twitter} className={styles.footer_socials_icon} />
				<img src={instagram} className={styles.footer_socials_icon} />
			</div>
			<div className={styles.footer_links}>
				<h3 className={styles.footer_links_header}>Support</h3>
				<NavLink to="/guide" className={styles.links}>
					Buyer's Guide
				</NavLink>
				<NavLink to="/layout" className={styles.links}>
					Keyboard Layout
				</NavLink>
				<NavLink to="/contact" className={styles.links}>
					Contact Us
				</NavLink>
			</div>
			<div className={styles.footer_about}>
				<h3 className={styles.footer_about_header}>About store</h3>
				<p className={styles.footer_about_para}>
					This is a project of a ecommorce store selling products catering to
					the hobby of custom mechanical keyboards. All products listed are
					items need to begin building you own custom mechanical keyboard. Check
					out the Buyer's guide to get a run down of the process of purchasing
					and building.
				</p>
			</div>
		</div>
	);
};

export default Footer;
