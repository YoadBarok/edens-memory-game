import { useContext, useState } from "react";
import "../css/Square.css";
import { SquareClasses } from "../types";
import { SquareMapContext } from "../context";

type Props = {
  id: string;
  image: string;
  handleClick: (id: string) => void;
  className: SquareClasses;
};

export const Square = (props: Props) => {
  const squareMap = useContext(SquareMapContext);
  const [getContent, setContent] = useState("");
  const [getClassName, setClassName] = useState<SquareClasses>(props.className);
  squareMap[props.id].setClass = setClassName;
  squareMap[props.id].setContent = setContent;

  const handleClick = () => {
    setContent(props.image);
    setClassName("shown");
    props.handleClick(props.id);
  };

  return (
    <div className={`square ${getClassName}`} onClick={handleClick}>
      <p>{getContent}</p>
    </div>
  );
};
