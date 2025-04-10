import React, { useEffect, useMemo, useState } from 'react';
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import {
  PhantomWalletAdapter
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl, PublicKey } from '@solana/web3.js';

import '@solana/wallet-adapter-react-ui/styles.css';

const App = () => {
  const [balance, setBalance] = useState(null);
  const endpoint = useMemo(() => clusterApiUrl('devnet'), []);
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <Content />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

const Content = () => {
  const { publicKey, connected } = useWallet();
  const { connection } = useConnection();
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    if (!connected || !publicKey) return;

    (async () => {
      const lamports = await connection.getBalance(publicKey);
      setBalance(lamports / 1e9); // pretvara u SOL
    })();
  }, [publicKey, connected, connection]);

  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <h1>Welcome to Wallet Connect App</h1>
      <WalletMultiButton />
      {connected && (
        <p style={{ marginTop: 20 }}>
          Balance: {balance ?? 'Loading...'} SOL
        </p>
      )}
    </div>
  );
};

export default App;