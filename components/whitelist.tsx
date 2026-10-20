"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { WalletButton } from "./wallet-button";
import { useWallet } from "@/hooks/use-wallet";
import { SITE } from "@/lib/config";

type StepKey = "follow" | "repost";

export function Whitelist() {
  const { isConnected } = useWallet();
  const [done, setDone] = useState<Record<StepKey, boolean>>({ follow: false, repost: false });
  const [spot, setSpot] = useState<number | null>(null);

  const allDone = done.follow && done.repost && isConnected;

  // MOCK: marks the step done on click. Real verification (X OAuth / backend check) comes later.
  const open = (key: StepKey, url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
    setDone((d) => ({ ...d, [key]: true }));
  };

  const steps = [
    {
      done: done.follow,
      title: "Follow us on X",
      text: "Be first to see drops, quests and mint dates.",
      action: <Button className="neon-btn neon-btn-sm" onClick={() => open("follow", SITE.xUrl)}>Open X</Button>,
    },
    {
      done: done.repost,
      title: "Repost the pinned post",
      text: "Helps more ninjas find the dojo.",
      action: <Button className="neon-btn neon-btn-sm" onClick={() => open("repost", SITE.pinnedPostUrl)}>Open post</Button>,
    },
    {
      done: isConnected,
      title: "Connect your wallet",
      text: `Your address is saved for the ${SITE.chain} mint. No transaction, no fees.`,
      action: <WalletButton className="neon-btn-sm" />,
    },
  ];

  return (
    <section id="whitelist" className="mx-auto max-w-3xl scroll-mt-8 px-5 py-20">
      <h2 className="font-pixel text-3xl md:text-4xl" style={{ textShadow: "3px 3px 0 var(--magenta)" }}>
        Join the whitelist
      </h2>
      <p className="mt-4 text-[var(--muted)]">Three steps, about a minute. Early ninjas mint first and unlock the intro quest.</p>

      <ol className="mt-10 space-y-5">
        {steps.map((s, idx) => (
          <li
            key={s.title}
            className="px-box flex flex-wrap items-center gap-4 p-5"
            style={{ ["--edge" as string]: s.done ? "var(--cyan)" : "var(--line)" }}
          >
            <span
              className="font-pixel grid h-10 w-10 shrink-0 place-items-center text-lg"
              style={{ background: s.done ? "var(--cyan)" : "var(--panel-2)", color: s.done ? "var(--void)" : "var(--ink)" }}
              aria-label={s.done ? "Done" : `Step ${idx + 1}`}
            >
              {s.done ? "✓" : idx + 1}
            </span>
            <div className="min-w-[200px] flex-1">
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-sm text-[var(--muted)]">{s.text}</p>
            </div>
            {s.action}
          </li>
        ))}
      </ol>

      <div className="mt-10">
        {spot ? (
          <p className="px-box p-5 text-lg" style={{ ["--edge" as string]: "var(--cyan)" }}>
            You’re on the list. Your spot: #{spot.toLocaleString("en-US")}. We’ll announce the mint on X.
          </p>
        ) : (
          <Button
            disabled={!allDone}
            onClick={() => setSpot(Math.floor(1000 + Math.random() * 20000))} // MOCK: spot comes from the backend later
            className="neon-btn neon-btn-cyan"
          >
            {allDone ? "Join whitelist" : "Finish all 3 steps to join"}
          </Button>
        )}
      </div>
    </section>
  );
}
