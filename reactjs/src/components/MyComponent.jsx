import { useState } from "react";
function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [car, setCar] = useState({
    country: "Germany",
    model: "Porsche",
    year: 2024,
  });
  const [isEmployed, setStatus] = useState(false);
  const updateName = () => setName("Body");
  const increamentAge = () => setAge((a) => age + 1);
  const toggleStatus = () => {
    setStatus(!isEmployed);
  };
  function handleYearChange(event) {
    setCar((c) => ({ ...c, year: event.target.value }));
  }
  function handleModelChange(event) {
    setCar((c) => ({ ...c, model: event.target.value }));
  }
  function handleCountryChange(event) {
    setCar((c) => ({ ...c, country: event.target.value }));
  }

  return (
    <div className="use-state-card">
      <p>Name:{name}</p>
      <button onClick={updateName}>Reset Name</button>
      <p>Age:{age}</p>
      <button onClick={increamentAge}>Increament</button>
      <p>is Employed:{isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleStatus}>toggle status</button>

      <p>
        Your favorite car is {car.model} made from {car.country} Model{" "}
        {car.year}
      </p>
      <input type="text" value={car.model} onChange={handleModelChange} />
      <input type="text" value={car.country} onChange={handleCountryChange} />
      <input type="number" value={car.year} onChange={handleYearChange} />
    </div>
  );
}
export default MyComponent;
