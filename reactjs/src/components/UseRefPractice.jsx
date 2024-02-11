import { useRef, useEffect } from "react";

function UseRefPractice() {
  // useRef has an object that has only one key which is current (value) and we set it in the func
  // useState rerender the component when a state value changes while useRef not
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  useEffect(() => {
    console.log("Component rendered");
  }); // Add an empty dependency array to run only once after initial render
  // useRef doesn't render the element every single time that any changes happen
  function handleClick1() {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "yellow";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }
  function handleClick2() {
    inputRef2.current.focus();
    inputRef2.current.style.backgroundColor = "yellow";
    inputRef3.current.style.backgroundColor = "";
    inputRef1.current.style.backgroundColor = "";
  }
  function handleClick3() {
    inputRef3.current.focus();
    inputRef3.current.style.backgroundColor = "yellow";
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
  }
  function handleReset() {
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }
  return (
    <div>
      <button onClick={handleClick1}>Click me1!</button>
      <button onClick={handleClick2}>Click me2!</button>
      <button onClick={handleClick3}>Click me3!</button>
      <button onClick={handleReset}>Reset!</button>
      <input ref={inputRef1} />
      <input ref={inputRef2} />
      <input ref={inputRef3} />
    </div>
  );
}

export default UseRefPractice;
