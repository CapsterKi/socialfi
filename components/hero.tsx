"use client";

import { useEffect, useState } from "react";
import { PixelNinja } from "./pixel-ninja";
import { StatBar } from "./stat-bar";
import { WalletButton } from "./wallet-button";
import { Button } from "@/components/ui/button";
import { ELEMENTS } from "@/lib/elements";

export function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % ELEMENTS.length), 2800);
    return () => clearInterval(t);
  }, []);

  const el = ELEMENTS[i];

  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-12 md:grid-cols-[1.1fr_0.9fr] md:pt-20">
      <div>
        <h1 className="font-pixel text-4xl leading-[1.15] md:text-6xl" style={{ textShadow: "4px 4px 0 var(--magenta)" }}>
          Raise a ninja. Feed it daily. Let it farm.
        </h1>
        <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-[var(--muted)]">
          Pixel ninjas of four elements live in your wallet. Feed them, level them up, and they earn the game token
          while you play. Every token that gets minted has a place to be spent, so the economy keeps itself honest.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button render={<a href="#whitelist" />} nativeButton={false} className="neon-btn neon-btn-cyan">
            Join the whitelist
          </Button>
          <WalletButton />
        </div>
      </div>

      {/* Tamagotchi screen */}
      <div className="px-box scan relative p-8" style={{ ["--edge" as string]: el.accent }} aria-live="off">
        <div className="flex justify-center py-4">
          <PixelNinja id={el.id} accent={el.accent} size={220} idle />
        </div>
        <p className="font-pixel mb-5 text-center text-sm" style={{ color: el.accent }}>
          {el.name} ninja
        </p>
        <div className="space-y-3">
          <StatBar label="Fed" value={4} color={el.accent} />
          <StatBar label="Level" value={el.stats.stamina} color={el.accent} />
          <StatBar label="Farm rate" value={el.stats.farm} color={el.accent} />
        </div>
      </div>
    </section>
  );
}
