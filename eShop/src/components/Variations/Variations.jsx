import { useState, useEffect } from "react";

const Variations = ({ page, setOptionTotal }) => {
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
    const total = variates.reduce((init, next) => {
      console.log(page[next][selected]);
      return page[next][selected]["price"] + init;
    }, 0);
    setOptionTotal(total);
  }, [selected]);
  return (
    <div>
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
