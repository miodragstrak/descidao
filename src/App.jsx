import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const App = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white font-orbitron overflow-hidden">
      
      {/* Wallet dugme gore desno */}
      <div className="absolute top-4 right-4 z-10">
        <WalletMultiButton />
      </div>

      {/* Futuristička mreža u pozadini */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,255,0.1),transparent_70%)] opacity-40 z-0 pointer-events-none" />

      {/* Centralni sadržaj */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-cyan-300 drop-shadow-[0_0_10px_cyan] mb-4">
          descidao
        </h1>
        <p className="text-lg md:text-xl text-fuchsia-300 drop-shadow-[0_0_5px_fuchsia] max-w-xl">
          Decentralized Science Platform for Builders, Dreamers & Researchers 🌐🧬
        </p>
      </div>
    </div>
  );
};

export default App;