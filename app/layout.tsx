import type { Metadata } from "next";
import { Silkscreen, Space_Grotesk, Geist } from "next/font/google";
import "./globals.css";
import "./neon.css";
import { WalletProvider } from "@/hooks/use-wallet";
import { SITE } from "@/lib/config";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const pixel = Silkscreen({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-pixel" });
const body = Space_Grotesk({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: `${SITE.name}: raise pixel ninjas, farm the token`,
  description: "A SocialFi tamagotchi game with pixel ninjas of four elements. Join the whitelist.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("dark", "font-sans", geist.variable)} suppressHydrationWarning>
      <body suppressHydrationWarning className={`${pixel.variable} ${body.variable}`}>
        <WalletProvider>{children}</WalletProvider>
      </body>
    </html>
  );
}
