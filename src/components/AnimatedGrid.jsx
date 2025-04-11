import React from "react";

const AnimatedGrid = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="w-full h-full grid grid-cols-12 grid-rows-6 animate-pulse">
        {Array.from({ length: 72 }).map((_, i) => (
          <div
            key={i}
            className="border border-purple-500/10 hover:border-purple-400/20 transition duration-500"
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black opacity-70" />
    </div>
  );
};

export default AnimatedGrid;