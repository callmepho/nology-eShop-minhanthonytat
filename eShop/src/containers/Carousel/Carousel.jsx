import { useEffect, useState } from "react";
import { getCarousel } from "../../services/eShop-firestore-service";
import styles from "./Carousel.module.scss";
import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";
const Carousel = () => {
	const [carouselData, setCarouselData] = useState(null);
	const [index, setIndex] = useState(0);
	const getCarouselData = () => {
		getCarousel()
			.then((data) => setCarouselData(data))
			.catch((e) => console.log(e));
	};

	const nextSlide = () => {
		setIndex(index === carouselData["imgLinks"].length - 1 ? 0 : index + 1);
	};

	const prevSlide = () => {
		setIndex(index === 0 ? carouselData["imgLinks"].length - 1 : index - 1);
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
				carouselData.imgLinks.map((img, idx) => (
					<img
						key={idx}
						src={img}
						alt={idx}
						className={
							idx === index
								? `${styles.slide}`
								: `${styles.slide} ${styles.hidden}`
						}
					/>
				))}
			<img
				src={leftArrow}
				onClick={prevSlide}
				className={`${styles.arrow} ${styles.arrow_left}`}
			/>
			<img
				src={rightArrow}
				onClick={nextSlide}
				className={`${styles.arrow} ${styles.arrow_right}`}
			/>
			<span className={styles.dots}>
				{carouselData !== null &&
					carouselData.imgLinks.map((img, idx) => (
						<button
							key={idx}
							onClick={() => setIndex(idx)}
							className={
								idx === index
									? `${styles.dot}`
									: `${styles.dot} ${styles.dot_select}`
							}></button>
					))}
			</span>
		</div>
	);
};

export default Carousel;
