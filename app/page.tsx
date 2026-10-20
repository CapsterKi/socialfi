import { Hero } from "@/components/hero";
import { Whitelist } from "@/components/whitelist";
import { ElementsSection } from "@/components/elements-section";
import { WalletButton } from "@/components/wallet-button";
import { SITE } from "@/lib/config";

export default function Home() {
  return (
    <main>
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <span className="font-pixel text-lg" style={{ color: "var(--cyan)" }}>
          {SITE.name}
        </span>
        <WalletButton className="neon-btn-sm" />
      </header>

      <Hero />
      <Whitelist />
      <ElementsSection />

      <footer className="mx-auto max-w-6xl px-5 py-12 text-sm text-[var(--muted)]">
        Built on {SITE.chain} (EVM). Game tokens and NFTs have no guaranteed value and this is not financial advice.
      </footer>
    </main>
  );
}
