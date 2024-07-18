import { SetStateFunction } from "../types";
import "../css/SizeSelector.css";

type Props = {
  setSelectedSize: SetStateFunction<number | null>;
};

export const SizeSelector = (props: Props) => {
  const selectSize = (size: number) => {
    props.setSelectedSize(size);
  };

  return (
    <div className="size-selector">
      <h3>Select size:</h3>
      <div className="size-buttons">
        <button onClick={() => selectSize(6)} className="size-button">
          6x6
        </button>
        <button onClick={() => selectSize(4)} className="size-button">
          4x4
        </button>
      </div>
    </div>
  );
};
