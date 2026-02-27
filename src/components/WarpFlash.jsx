import { useEffect, useState } from "react";

const WarpFlash = ({ isActive }) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (isActive) {
      setOpacity(1);
      const timeout = setTimeout(() => {
        setOpacity(0);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [isActive]);

  return (
    <div
      className="fixed inset-0 bg-white pointer-events-none z-50 transition-opacity duration-500 ease-out"
      style={{ opacity }}
    />
  );
};

export default WarpFlash;
