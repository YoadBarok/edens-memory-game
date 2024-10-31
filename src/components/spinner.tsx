import { Circles } from "react-loader-spinner";

type Props = {
  strokeWidth?: string;
  width: string;
};

export const Spinner = ({ width, strokeWidth }: Props) => {
  return <Circles width={width} visible={true} color="rgb(240, 172, 238)" />;
};
