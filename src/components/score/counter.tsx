type Props = {
  counter: number;
};

export const Counter = ({ counter }: Props) => {
  return (
    <div className="eden-text">
      <h4>
        {counter} &nbsp;
        {counter === 1 ? "Attempt" : "Attempts"}
      </h4>
    </div>
  );
};
