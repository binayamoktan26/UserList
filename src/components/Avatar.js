import React from "react";
import Man from "../Assets/man.png";
import Woman from "../Assets/woman.png";
export const MaleAvatar = () => {
  return (
    <div>
      <img src={Man} alt="" width="50px" />
    </div>
  );
};

export const FemaleAvatar = () => {
  return (
    <div>
      <img src={Woman} alt="" width="50px" />
    </div>
  );
};
