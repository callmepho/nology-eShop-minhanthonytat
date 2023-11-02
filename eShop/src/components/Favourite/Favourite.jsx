import { useState, useEffect } from "react";
import styles from "./Favourite.module.scss";
import star from "../../assets/star.svg";
import starFilled from "../../assets/starfilled.svg";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../config/firestore";

const Favourite = ({ page }) => {
	const [isFavourite, isSetFavourite] = useState(null);

	const setFavourite = async (booleen) => {
		let temp = page;
		temp.favourite = booleen;
		try {
			await setDoc(doc(db, "eShop", page.id), temp);
			isSetFavourite(booleen);
		} catch (e) {}
	};

	useEffect(() => {
		if (!page) {
			return;
		}
		isSetFavourite(page.favourite);
	}, [page]);

	useEffect(() => {}, [isFavourite]);

	return (
		<>
			{isFavourite ? (
				<img
					className={styles.star}
					src={starFilled}
					onClick={() => setFavourite(!isFavourite)}
				/>
			) : (
				<img
					className={styles.star}
					src={star}
					onClick={() => setFavourite(!isFavourite)}
				/>
			)}
		</>
	);
};

export default Favourite;
