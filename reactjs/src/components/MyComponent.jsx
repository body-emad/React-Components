import { useState } from "react";
function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setStatus] = useState(false);
  const updateName = () => setName("Body");
  const increamentAge = () => setAge(age + 1);
  const toggleStatus = () => {
    setStatus(!isEmployed);
  };
  return (
    <div className="use-state-card">
      <p>Name:{name}</p>
      <button onClick={updateName}>Reset Name</button>
      <p>Age:{age}</p>
      <button onClick={increamentAge}>Increament</button>
      <p>is Employed:{isEmployed ? "Yes": "No"}</p>
      <button onClick={toggleStatus}>toggle status</button>
    </div>
  );
}
export default MyComponent;
