import React, {useState} from "react";

function CategoryFilter({categories}) {
  const [selectedCategory, setSelectedCategory] = useState (null)


  function handleCategorySelect (category) {
    setSelectedCategory(category)

  }

  const categoryButtons = categories.map((category) => {
    const buttonClass = category === selectedCategory ? "selected" : ""
    return (
      <button key={category} className={buttonClass} onClick={ () => handleCategorySelect(category)}>{category}</button>
    )
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
