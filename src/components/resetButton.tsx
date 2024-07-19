import React from "react";

export const ResetButton = () => {
  return (
    <button className="big-button" onClick={() => window.location.reload()}>
      🔄
    </button>
  );
};
