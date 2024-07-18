import { useContext, useState } from "react";
import "../css/Square.css";
import { SquareClasses, SquareSize } from "../types";
import { SquareMapContext } from "../context";

type Props = {
  id: string;
  image: string;
  handleClick: (id: string) => void;
  displayClass: SquareClasses;
  sizeClass: SquareSize;
  clickable: boolean;
};

export const Square = (props: Props) => {
  const squareMap = useContext(SquareMapContext);
  const [getContent, setContent] = useState("");
  const [getClassName, setClassName] = useState<SquareClasses>(
    props.displayClass
  );
  squareMap[props.id].setClass = setClassName;
  squareMap[props.id].setContent = setContent;

  const handleClick = () => {
    if (!props.clickable) return;
    setContent(props.image);
    setClassName("shown");
    props.handleClick(props.id);
  };

  return (
    <div
      className={`square ${props.sizeClass}-square ${getClassName}`}
      onClick={handleClick}
    >
      <p>{getContent}</p>
    </div>
  );
};
