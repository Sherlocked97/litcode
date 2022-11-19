import React, { useState, useEffect } from "react";

const Stopwatch = () => {
	const [time, setTime] = useState(0);
	const [running, setRunning] = useState(false);
	useEffect(() => {
	  let interval;
	  if (running) {
		interval = setInterval(() => {
		  setTime((prevTime) => prevTime + 10);
		}, 10);
	
	  } else if (!running) {
		clearInterval(interval);
		setRunning(true)
	  }
	  return () => clearInterval(interval);
	}, [running]);
	return (
	  <div className="stopwatch">
		<div className="numbers">
		  <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
		  <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
		  <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
		</div>
	  </div>
	);
  };

export default Stopwatch;