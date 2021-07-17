import React, { useState, useEffect } from "react";
import "./CountDown.scss";
const Timer = (props) => {
  const [alertTime, setAlertTime] = useState(props.alertModeTime * 60);
  const [totalTime, setTotalTime] = useState(props.totalMinutes * 60);
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    min: 0,
    sec: 0,
  });
  useEffect(() => {
    if (totalTime) {
      props.countDown(totalTime);
    }
    const myInterval =
      totalTime > 0 &&
      setInterval(() => {
        setTotalTime(() => totalTime - 1);
        setTimeLeft(() => calculateCountdown(totalTime - 1));
      }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [totalTime]);
  const calculateCountdown = (totalTime) => {
    // clear countdown when date is reached
    let difference = totalTime;
    if (difference <= 0) return false;

    const timeLeft = {
      hours: 0,
      min: 0,
      sec: 0,
    };
    if (difference >= 3600) {
      timeLeft.hours = Math.floor(difference / 3600);
      timeLeft.hours = getTimeInTwoDigit(timeLeft.hours);
      difference -= timeLeft.hours * 3600;
    }
    if (difference >= 60) {
      timeLeft.min = Math.floor(difference / 60);
      timeLeft.min = getTimeInTwoDigit(timeLeft.min);
      difference -= timeLeft.min * 60;
    }
    timeLeft.sec = getTimeInTwoDigit(difference);
    return timeLeft;
  };
  const getTimeInTwoDigit = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div
      className={
        totalTime < alertTime && totalTime > 0 ? "timer timer-alert" : "timer"
      }
    >
      <span>
        {timeLeft.hours ? timeLeft.hours : "00"}:
        {timeLeft.min ? timeLeft.min : "00"}:
        {timeLeft.sec ? timeLeft.sec : "00"}
      </span>
    </div>
  );
};
export default Timer;
