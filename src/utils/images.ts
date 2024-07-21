import { shuffle } from "./array";

type Image = string;

export const chooseImages = (size: number, images: Image[]) => {
  shuffle(images);

  const chosenImages = [
    ...images.slice(0, (size * size) / 2),
    ...images.slice(0, (size * size) / 2),
  ];
  shuffle(chosenImages);

  return chosenImages;
};
