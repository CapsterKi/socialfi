// Pixel-art ninjas live in /public/ninjas. Elements map to a character by id.
// wind.png (green archer) is cut out but not used yet: the game has four elements, the art has five.
const SPRITES: Record<string, string> = {
  fire: "/ninjas/fire.png",
  water: "/ninjas/water.png",
  earth: "/ninjas/earth.png",
  air: "/ninjas/shadow.png",
};

// Different phase per element so the ninjas don't move or strike in lockstep.
const DELAYS: Record<string, number> = { fire: 0, water: 0.3, earth: 0.6, air: 0.9 };
const ATTACK_DELAYS: Record<string, number> = { fire: 0, water: 1, earth: 2, air: 3 };

type Props = { id: string; accent: string; size?: number; className?: string; idle?: boolean };

export function PixelNinja({ id, accent, size = 160, className = "", idle = false }: Props) {
  const box = size * 1.25;
  return (
    <span
      className={`ninja-wrap ${idle ? (id === "earth" ? "ninja-slam" : "ninja-swing") : ""} ${className}`}
      style={{
        width: box,
        height: box,
        ["--glow" as string]: `${accent}99`,
        ["--delay" as string]: `${-(DELAYS[id] ?? 0)}s`,
        ["--attack-delay" as string]: `${-(ATTACK_DELAYS[id] ?? 0)}s`,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={SPRITES[id] ?? SPRITES.fire}
        alt={`${id} pixel ninja`}
        width={box}
        height={box}
        className={`${idle ? "ninja-idle" : ""} object-contain`}
        style={{
          imageRendering: "pixelated",
          width: box,
          height: box,
          filter: `drop-shadow(0 0 14px ${accent}99)`,
        }}
      />
      {idle && <span className="ninja-slash" aria-hidden="true" style={{ backgroundImage: `url(/ninjas/fx-${id}.png)` }} />}
    </span>
  );
}
