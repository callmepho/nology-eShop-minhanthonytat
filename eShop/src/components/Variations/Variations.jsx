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

  const selectOptions = (variate) => {
    const keys = Object.keys(page[variate]);
    const option = keys.map((item, index) => (
      <option key={index} value={item}>
        {item}
      </option>
    ));
    option.unshift(
      <option value="" disabled>
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
            <div>
              <label key={"label" + index} htmlFor={variate}>
                {variate}:{" "}
              </label>
              <select
                key={"select" + index}
                id={variate}
                onChange={handleSelect}
                defaultValue=""
                required>
                {selectOptions(variate)}
              </select>
            </div>
          );
        })}
    </div>
  );
};

export default Variations;
