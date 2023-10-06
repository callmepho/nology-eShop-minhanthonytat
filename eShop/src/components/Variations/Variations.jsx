import { useState, useEffect } from "react";

const Variations = ({ page, setOptionTotal, optionTotal }) => {
  const [selected, setSelected] = useState(null);
  const [variates, setVariates] = useState([]);
  const [total, setTotal] = useState(0);
  const variations = () => {
    for (const key in page) {
      console.log(key);
      if (typeof page[key] == "object") {
        setVariates((variates) => [...variates, key]);
        console.log(variates);
      }
    }
  };

  const handleSelect = (e) => {
    if (!selected) {
      setSelected(e.target.value);
      setOptionTotal(optionTotal + page[selected]?.price);
    } else {
      setSelected(e.target.value);
      setOptionTotal(optionTotal + page[selected]?.price);
    }
  };

  const options = (variate) => {
    const keys = Object.keys(page[variate]);
    const option = keys.map((item, index) => (
      <option key={index} value={item}>
        {item}
      </option>
    ));
    option.unshift(
      <option selected disabled>
        Choose here
      </option>
    );
    return option;
  };

  useEffect(() => {
    console.log(variates);
    variations();
  }, [page]);

  useEffect(() => {
    console.log("selected", selected);
    console.log(variates);
    // setTotal(total + page[selected]?.price);
    setOptionTotal(total);
  }, [selected]);

  useEffect(() => {
    console.log(variates);
  }, [variates]);
  return (
    <div>
      {variates.length > 0 &&
        variates.map((variate) => {
          return (
            <div>
              <label htmlFor={variate}>{variate}: </label>
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
