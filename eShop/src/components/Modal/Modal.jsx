import React from "react";
import styles from "./Modal.module.scss";

const Modal = ({ img, setModal }) => {
	return (
		<div className={styles.modal}>
			<img className={styles.modal_img} src={img} alt="not found" />
			<div className={styles.modal_outer} onClick={() => setModal(false)}></div>
		</div>
	);
};

export default Modal;
