import { useState, useEffect } from "react";

const Variations = ({
	page,
	setTotal,
	total,
	setStock,
	stock,
	options,
	setOptions,
}) => {
	const [variates, setVariates] = useState([]);
	const variations = () => {
		for (const key in page) {
			if (typeof page[key] == "object") {
				setVariates((variates) => [...variates, key]);
			}
		}
	};

	const handleSelect = (e) => {
		let selected = page[e.target.id][e.target.value];
		setTotal({
			...total,
			[e.target.id]: selected?.price,
		});
		setOptions({ ...options, [e.target.id]: e.target.value });
		setStock({ ...stock, [e.target.id]: selected?.stock });
	};

	const selectOptions = (variate, index) => {
		const keys = Object.keys(page[variate]);
		const option = keys.map((item, index) => (
			<option key={"options" + index} value={item}>
				{item}
			</option>
		));
		option.unshift(
			<option key={"default" + index} value="" disabled>
				Choose here
			</option>
		);
		return option;
	};

	useEffect(() => {
		variations();
	}, [page]);

	useEffect(() => {}, [variates]);

	return (
		<div>
			{variates.length > 0 &&
				variates.map((variate, index) => {
					return (
						<div key={"variate" + index}>
							<label key={"labels" + index} htmlFor={variate}>
								{variate}:{" "}
							</label>
							<select
								key={"selectOption" + index}
								id={variate}
								onChange={handleSelect}
								defaultValue=""
								required>
								{selectOptions(variate, index)}
							</select>
						</div>
					);
				})}
		</div>
	);
};

export default Variations;
