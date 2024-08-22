import { useEffect } from "react";
import { SetStateFunction } from "../../types";
import "../../css/Timer.css";

type Props = {
  shouldCount: boolean;
  getTime: number;
  setTime: SetStateFunction<number>;
};

export const Timer = (props: Props) => {
  const { getTime, setTime, shouldCount } = props;

  useEffect(() => {
    let counterTimeout: NodeJS.Timeout;

    if (shouldCount) {
      counterTimeout = setTimeout(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      if (counterTimeout) {
        clearTimeout(counterTimeout);
      }
    };
  }, [getTime, setTime, shouldCount]);

  return (
    <div className="timer">
      <div>
        <h4 className="eden-text">Time:</h4>
        <p className="eden-text">{getTime}</p>
      </div>
    </div>
  );
};
