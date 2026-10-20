"use client";

import { Button } from "@/components/ui/button";
import { shortAddress, useWallet } from "@/hooks/use-wallet";

export function WalletButton({ className = "" }: { className?: string }) {
  const { address, isConnected, connect, disconnect } = useWallet();

  return (
    <Button
      onClick={isConnected ? disconnect : connect}
      title={isConnected ? "Click to disconnect" : undefined}
      className={`neon-btn ${isConnected ? "neon-btn-on" : ""} ${className}`}
    >
      {isConnected && address ? shortAddress(address) : "Connect wallet"}
    </Button>
  );
}
