import { useState, useEffect } from 'react';

const useScreenSize = () => {
  if (typeof window === 'undefined') return false;

  const [width, setWidth] = useState(width);
  const [height, setHeight] = useState(height);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    setWidth(window.innerWidth);

    return () => {
      window.removeEventListener('resize', handleResize);
      setHeight(window.innerHeight);
    };
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  return { width, height };
};

export default useScreenSize;
