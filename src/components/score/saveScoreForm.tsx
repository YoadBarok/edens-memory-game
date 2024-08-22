import { FormEvent, useEffect, useRef, useState } from "react";
import "../../css/SaveScoreForm.css";

type Props = {
  saveScore: (name: string) => Promise<void>;
};

export const SaveScoreForm = (props: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    inputRef.current?.focus();
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (name.trim() === "") {
      setError("Name cannot be empty!");
    } else {
      setError("");
      props.saveScore(name);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="save-score-form">
      <div className="label">
        <p>
          Enter your name <br /> to know your rank:
        </p>
      </div>
      <input
        ref={inputRef}
        maxLength={15}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Save</button>
      {error && <p>{error}</p>}
    </form>
  );
};
