import { useEffect, useState } from "react";

const Timer = (props: TimerProps) => {

  const { countDown, initialTime, maxTime } = props;

  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      if (countDown) {
        setTime((prevTime) => (prevTime === 0 ? 0 : prevTime - 1));
      } else {
        setTime((prevTime) => {
          const nextTime = prevTime + 1;
          if (maxTime !== undefined && nextTime > maxTime) {
            clearInterval(timer);
            return maxTime;
          }
          return nextTime;
        });
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [countDown, maxTime]);

  return <div>{time}</div>;
};

type TimerProps = {
  countDown?: boolean;
  initialTime: number;
  maxTime?: number;
};

export default Timer;
