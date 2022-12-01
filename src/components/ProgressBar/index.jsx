import React, { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const Progress = () => {
  const [level, setLevel] = useState(70);
  return (
    <div className="progress">
      <ProgressBar className="progressbar" completed={level} />
    </div>
  );
};

export default Progress;
