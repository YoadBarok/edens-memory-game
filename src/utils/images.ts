import { images } from "../constants/images";
import { shuffle } from "./array";

export const chooseImages = (size: number) => {
  const boardImages = [...images];
  shuffle(boardImages);

  const chosenImages = [
    ...boardImages.slice(0, (size * size) / 2),
    ...boardImages.slice(0, (size * size) / 2),
  ];
  shuffle(chosenImages);

  return chosenImages;
};
