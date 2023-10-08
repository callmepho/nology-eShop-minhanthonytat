import { useState, useEffect } from "react";

const Variations = ({ page, setTotal, total, setStock, stock }) => {
  const [variates, setVariates] = useState([]);
  const variations = () => {
    for (const key in page) {
      console.log(key);
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
    setStock({ ...stock, [e.target.id]: selected?.stock });
  };

  const options = (variate) => {
    const keys = Object.keys(page[variate]);
    const option = keys.map((item, index) => (
      <option key={index} value={item}>
        {item}
      </option>
    ));
    option.unshift(
      <option value="" selected disabled>
        Choose here
      </option>
    );
    return option;
  };

  useEffect(() => {
    variations();
  }, [page]);

  return (
    <div>
      {variates.length > 0 &&
        variates.map((variate) => {
          return (
            <div>
              <label htmlFor={variate}>{variate}: </label>
              <select id={variate} onChange={handleSelect} required>
                {options(variate)}
              </select>
            </div>
          );
        })}
    </div>
  );
};

export default Variations;
