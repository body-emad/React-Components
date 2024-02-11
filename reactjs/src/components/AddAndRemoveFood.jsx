import React, { useState } from "react";

function AddFood() {
  // Renamed variable for consistency
  const initialFoods = ["Apple", "Orange", "Banana"];
  const [foods, setFoods] = useState(initialFoods);

  function handleAddFood() {
    // Changed setFood to setFoods for better readability
    const newFood = document.getElementById("input-food").value;
    setFoods((prevFoods) => [...prevFoods, newFood]);
    document.getElementById("input-food").value = "";
  }

  function resetFood() {
    // Changed setFood to setFoods for consistency
    setFoods(initialFoods);
  }

  function handleRemoveFood(index) {
    // Added a return statement to properly filter the array
    setFoods(foods.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h1>List of Food</h1>
      <ul>
        {/* Used a more concise syntax for mapping */}
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input id="input-food" placeholder="Add Food Here" type="text" />
      <button onClick={handleAddFood}>Add Food</button>
      <button onClick={resetFood}>Reset</button>
    </div>
  );
}

export default AddFood;
