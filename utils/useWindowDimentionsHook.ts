import { useState, useEffect } from "react";

type WindowDimentions = {
  width: number;
  height: number;
}

export const useWindowDimentions = (): WindowDimentions => {
  const [windowDimentions, setWindowDimentions] = useState<WindowDimentions>({
    width: 0,
    height: 0
  })

  useEffect(() => {
    function handleResize():void {
      setWindowDimentions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return ():void => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimentions;
}