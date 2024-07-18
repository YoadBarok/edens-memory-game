import { CommonFunctionInput, SetStateFunction, SquareClasses } from "../types";

export const boardClickHandler = ({
  id,
  firstSelectedSquare,
  secondSelectedSquare,
  squaresMap,
  setFirstSelectedSquare,
  setSecondSelectedSquare,
}: {
  id: string;
} & CommonFunctionInput) => {
  if (!firstSelectedSquare) {
    setFirstSelectedSquare({
      id,
      image: squaresMap.get(id)?.square.props.image,
    });
  } else if (!secondSelectedSquare) {
    setSecondSelectedSquare({
      id,
      image: squaresMap.get(id)?.square.props.image,
    });
  }
};

export const standardSquareClickHandler = ({
  setContent,
  setClassName,
  handleClick,
  clickable,
  image,
  id,
}: {
  setContent: SetStateFunction<string>;
  setClassName: SetStateFunction<SquareClasses>;
  handleClick: (id: string) => void;
  clickable: boolean;
  image: string;
  id: string;
}) => {
  if (!clickable) return;
  setContent(image);
  setClassName("shown");
  handleClick(id);
};

export const edenModeSquareClickHandler = ({
  content,
  className,
  setContent,
  setClassName,
  image,
}: {
  content: string;
  className: SquareClasses;
  setContent: SetStateFunction<string>;
  setClassName: SetStateFunction<SquareClasses>;
  image: string;
}) => {
  setContent(content === "" ? image : "");
  setClassName(className === "hidden" ? "shown-eden-mode" : "hidden");
};
