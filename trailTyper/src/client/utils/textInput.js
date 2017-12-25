export const handleBackspaceInput = (display) => {
  const result = (display.length > 0) ? display.slice(0, -1) : display;
  return result;
};

export const handleSpaceInput = display => display.concat(' ');
