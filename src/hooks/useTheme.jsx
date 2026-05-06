import { useState } from "react";

export const useTheme = () => {
  const [color, setColor] = useState("#2e7d65"); // default Satvik green

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return { color, changeColor };
};
