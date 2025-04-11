import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import ParticlesBackground from "./components/ParticlesBackground";
import AnimatedGrid from "./components/AnimatedGrid";

const App = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white font-orbitron overflow-hidden">
      <div className="container mx-auto px-4">
      <ParticlesBackground />

      {/* Wallet dugme gore desno */}
      <div className="fixed top-4 right-4 z-50">
        <WalletMultiButton className="!bg-purple-600 hover:!bg-purple-700 transition" />
      </div>

      <AnimatedGrid />

      {/* Futuristička mreža u pozadini */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(255, 0, 255, 0.1)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Centralni sadržaj */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-center px-4 md:px-8 lg:px-20">
        <div className="max-w-screen-md w-full">
        <h1 className="relative text-5xl font-orbitron font-bold text-cyan-400 animate-glitch before:absolute before:inset-0 before:text-pink-500 before:animate-glitch after:absolute after:inset-0 after:text-cyan-300 after:animate-glitch">
            Superteam DeSci Platform
          </h1>
          <p className="text-sm text-purple-300 tracking-widest font-mono drop-shadow-[0_0_5px_#ff00ff]">
            Decentralized Science Platform for Builders, Dreamers & Researchers 🌐🧬
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default App;