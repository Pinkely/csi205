import { useState, useEffect } from "react";

const Timer = () => {
  const [second, setSecond] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSecond((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const convertToString = (sec) => {
    const MINUTE_SECOND = 60;
    const HOUR_SECOND = MINUTE_SECOND * 60;
    const DAY_SECOND = HOUR_SECOND * 24;

    const day = Math.floor(sec / DAY_SECOND);
    const hour = Math.floor((sec % DAY_SECOND) / HOUR_SECOND);
    const minute = Math.floor((sec % HOUR_SECOND) / MINUTE_SECOND);
    const second = sec % MINUTE_SECOND;

    return day + " Day " + hour + " Hr " + minute + " m " + second + " s";
  };

  return (
    <div
      className="border border-black border-2 rounded-3 mt-3 p-2"
      style={{ width: "fit-content" }}
    >
      <h1 className="text-primary">TIMER</h1>
      <input
        className="border border-black border-1 m-2 rounded-3 text-dark bg-white fs-4 fw-bold"
        style={{ textAlign: "center" }}
        value={convertToString(second)}
        readOnly
      />
      <div>
        <button
          className="btn btn-danger mx-2"
          onClick={() => {
            setSecond(0);
            setIsRunning(false);
          }}
        >
          <i className="bi bi-arrow-counterclockwise"></i>&nbsp;Reset
        </button>
        <button
          className={`btn ${isRunning ? "btn-warning" : "btn-success"} mx-2`}
          onClick={() => setIsRunning(!isRunning)}
        >
          <i className={isRunning ? "bi bi-pause" : "bi bi-play"}></i>&nbsp;
          {isRunning ? "Pause" : "Run"}
        </button>
      </div>
    </div>
  );
};

export default Timer;
