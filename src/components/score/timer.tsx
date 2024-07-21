import { useEffect } from "react";
import { SetStateFunction } from "../../types";

type Props = {
  shouldCount: boolean;
  getTime: number;
  setTime: SetStateFunction<number>;
};

export const Timer = (props: Props) => {
  const { getTime, setTime } = props;
  useEffect(() => {
    props.shouldCount && setTimeout(() => setTime(getTime + 1), 1000);
  }, [props.shouldCount, getTime, setTime]);

  return (
    <div>
      <h4 className="eden-text">Time:</h4>
      <p className="eden-text">{getTime}</p>
    </div>
  );
};
