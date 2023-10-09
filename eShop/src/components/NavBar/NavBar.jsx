import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const style = ({ isActive, isPending }) =>
    isPending
      ? `${styles.navbar_category_links}`
      : isActive
      ? `${styles.navbar_category_links} ${styles.active} `
      : `${styles.navbar_category_links}`;
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_title}>
        <NavLink to="/" className={styles.navbar_title_link}>
          <div className={styles.title_border}>
            <h1 className={styles.title}>KeebStore</h1>
          </div>
        </NavLink>
      </div>
      <div className={styles.navbar_category}>
        <NavLink to="/products/keyboards" className={style}>
          Keyboards
        </NavLink>
        <NavLink to="/products/switches" className={style}>
          Switches
        </NavLink>
        <NavLink to="/products/deskmats" className={style}>
          Deskmats
        </NavLink>
        <NavLink to="/products/accessories" className={style}>
          Accessories
        </NavLink>
        <NavLink to="/cart" className={style}>
          Cart
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
