import { useEffect, useState } from "react";
import { getCarousel } from "../../services/eShop-firestore-service";
import styles from "./Carousel.module.scss";
const Carousel = () => {
	const [carouselData, setCarouselData] = useState(null);
	const getCarouselData = () => {
		getCarousel()
			.then((data) => setCarouselData(data))
			.catch((e) => console.log(e));
	};

	useEffect(() => {
		getCarouselData();
	}, []);

	useEffect(() => {
		console.log(carouselData);
	}, [carouselData]);

	return (
		<div className={styles.carousel}>
			{carouselData !== null &&
				carouselData.imgLinks.map((img, index) => (
					<img key={index} src={img} className={styles.slide} />
				))}
		</div>
	);
};

export default Carousel;
