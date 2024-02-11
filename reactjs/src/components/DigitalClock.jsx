import { useState, useEffect } from "react";
function DigitalClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    /*setInterval executes a function repeatedly, starting
       after a specified number of milliseconds
        and then repeating continuously at that interval. While setTimeout
         executes a function once after a specified number of milliseconds. */
    const setIntervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // when we un mount the component clear that interval
    return () => {
      clearInterval(setIntervalId);
    };
  }, []);
  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";
    // in millitary time (24 Hours)

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )} ${meridiem}`;
  }
  // to add leading zeros
  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }
  return (
    <div className="clock-displayer">
      {" "}
      <p>{formatTime()}</p>
    </div>
  );
}
export default DigitalClock;
