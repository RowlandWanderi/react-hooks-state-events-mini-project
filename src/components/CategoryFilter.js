import React, { useState } from "react";

function CategoryFilter({ categories, onHandleCategories }) {
  const [selected, setSelected] = useState("All");

  function handleClick(category) {
    setSelected(category);
    onHandleCategories(category);
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => {
        return (
          <button
            className={selected === category ? "selected" : null}
            key={category}
            onClick={() => handleClick(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
