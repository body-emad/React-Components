import { useEffect, useState } from "react";
function HooksPractice() {
  const [count, setCount] = useState(0);
  function addCount() {
    setCount((c) => c + 1);
  }
  /* it tells react to this code when: 
  1. this component re-renders 
  2. this component mounts (show up for the first time on the page)
  3. the state of a value changes like a priority or something like that. */
  useEffect(() => {
    document.title = `count: ${count}`; /* Do this code only when this ([count]) value updates or changes */
  });
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={addCount}>Add count</button>
    </div>
  );
}
export default HooksPractice;
