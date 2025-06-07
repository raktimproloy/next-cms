let windowWidth = 0;

const getWindowWidth = () => {
  if (typeof window !== 'undefined') {
    windowWidth = window.innerWidth;
  }
};

export const getWindowWidthValue = () => {
  getWindowWidth()
  return windowWidth;
};
