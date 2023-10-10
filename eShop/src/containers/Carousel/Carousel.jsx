import { useContext, useEffect, useState } from "react";
import styles from "./Carousel.module.scss";
import leftArrow from "../../assets/left-arrow.svg";
import rightArrow from "../../assets/right-arrow.svg";
import { ProductsContext } from "../../context/ProductContextProvider";
import { NavLink } from "react-router-dom";
const Carousel = () => {
	const { carouselData, setCarouselData } = useContext(ProductsContext);
	const [index, setIndex] = useState(0);
	const nextSlide = () => {
		setIndex(index === carouselData["imgLinks"].length - 1 ? 0 : index + 1);
	};

	const prevSlide = () => {
		setIndex(index === 0 ? carouselData["imgLinks"].length - 1 : index - 1);
	};

	const carouselLoop = () => {
		if (index === carouselData["imgLinks"].length - 1) {
			return setIndex(0);
		}
		return setIndex(index + 1);
	};

	useEffect(() => {
		if (!carouselData) {
			return;
		}
		const interval = setInterval(() => {
			carouselLoop();
		}, 8000);
		return () => clearInterval(interval);
	});

	return (
		<div className={styles.carousel}>
			{carouselData !== null &&
				carouselData.imgLinks.map((item, idx) => (
					<NavLink to={item.link}>
						<img
							key={"carousel" + idx}
							src={item.img}
							alt={idx}
							className={
								idx === index
									? `${styles.slide}`
									: `${styles.slide} ${styles.hidden}`
							}
						/>
					</NavLink>
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
