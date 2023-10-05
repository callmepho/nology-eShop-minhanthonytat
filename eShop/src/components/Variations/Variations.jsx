import { useState, useEffect } from "react";

const Variations = ({ page, setTotal }) => {
	const [selected, setSelected] = useState(null);
	const [variates, setVariates] = useState([]);
	const variations = () => {
		for (const key in page) {
			if (typeof page[key] == "object") {
				setVariates([...variates, key]);
			}
		}
	};

	const handleSelect = (e) => {
		setSelected(e.target.value);
	};

	const options = (variate) => {
		const keys = Object.keys(page[variate]);
		return keys.map((item, index) => (
			<option key={index} value={item}>
				{item}
			</option>
		));
	};
	useEffect(() => {
		console.log(variates);
		variations();
	}, [page]);

	useEffect(() => {
		console.log("selected", selected);
		console.log(variates);
		setTotal(page[selected]?.price + total);
	}, [selected]);
	return (
		<div>
			<h1>test</h1>
			{variates &&
				variates.map((variate) => {
					console.log(variate);
					return (
						<div>
							<label htmlFor={variate}>{variate}</label>
							<select id={variate} onChange={handleSelect}>
								{options(variate)}
							</select>
						</div>
					);
				})}
		</div>
	);
};

export default Variations;
