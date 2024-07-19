import { SetStateFunction } from "../types";
import "../css/SizeSelector.css";
import { BOARD_SIZES } from "../constants/boardSizes";

type Props = {
  setSelectedSize: SetStateFunction<number | null>;
};

export const SizeSelector = (props: Props) => {
  const selectSize = (size: number) => {
    props.setSelectedSize(size);
  };

  return (
    <div className="size-selector">
      <h2>Select size:</h2>
      <div className="size-buttons">
        <button
          onClick={() => selectSize(BOARD_SIZES.big)}
          className="size-button"
        >
          6x6
        </button>
        <button
          onClick={() => selectSize(BOARD_SIZES.small)}
          className="size-button"
        >
          4x4
        </button>
      </div>
    </div>
  );
};
