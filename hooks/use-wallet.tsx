"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

/**
 * MOCK wallet. Phase 1 only needs a visual stub.
 * Later: replace the body of WalletProvider with wagmi (useAccount / useConnect /
 * useDisconnect) and keep this same shape, so no component has to change.
 */
type WalletState = {
  address: `0x${string}` | null;
  isConnected: boolean;
  connect: () => void;
  disconnect: () => void;
};

const MOCK_ADDRESS = "0x7a3F9b2C41d85aE60fB3c8E1D4a7092b5Ef6c91E" as const;
const WalletContext = createContext<WalletState | null>(null);

export function WalletProvider({ children }: { children: ReactNode }) {
  const [address, setAddress] = useState<WalletState["address"]>(null);

  const value = useMemo<WalletState>(
    () => ({
      address,
      isConnected: address !== null,
      connect: () => setAddress(MOCK_ADDRESS),
      disconnect: () => setAddress(null),
    }),
    [address],
  );

  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>;
}

export function useWallet() {
  const ctx = useContext(WalletContext);
  if (!ctx) throw new Error("useWallet must be used inside <WalletProvider>");
  return ctx;
}

export const shortAddress = (a: string) => `${a.slice(0, 6)}…${a.slice(-4)}`;
