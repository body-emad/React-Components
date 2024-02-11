import { useState } from "react";

function AddAndRemoveCars() {
  const currentDate = new Date().getFullYear();
  const [cars, setCars] = useState([]);
  const [year, setYear] = useState(currentDate);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  function handleAddCar() {
    const newCar = { Year: year, Make: make, Model: model };
    setCars((c) => [...c, newCar]);
    setYear(currentDate);
    setMake("");
    setModel("");
  }
  function handleRemoveCars(index) {
    setCars((c) => c.filter((car, i) => i !== index));
  }
  function handleYearChange(event) {
    setYear(event.target.value);
  }
  function handleMakeChange(event) {
    setMake(event.target.value);
  }
  function handleModelChange(event) {
    setModel(event.target.value);
  }
  return (
    <div>
      <h1>List of Cars</h1>
      <ul>
        {cars.map((car, index) => {
          return (
            <li key={index}>
              {car.Year} {car.Make} {car.Model}
              <button onClick={() => handleRemoveCars(index)}>Remove</button>
            </li>
          );
        })}
      </ul>
      <input value={year} onChange={handleYearChange} type="number" /> <br />
      <input
        placeholder="Add a Make"
        value={make}
        onChange={handleMakeChange}
        type="text"
      />{" "}
      <br />
      <input
        placeholder="Add a Model"
        value={model}
        onChange={handleModelChange}
        type="text"
      />{" "}
      <br />
      <button onClick={handleAddCar}>Add a Car</button>
    </div>
  );
}
export default AddAndRemoveCars;
