import { PixelNinja } from "./pixel-ninja";
import { StatBar } from "./stat-bar";
import { ELEMENTS } from "@/lib/elements";

export function ElementsSection() {
  return (
    <section id="elements" className="mx-auto max-w-6xl scroll-mt-8 px-5 py-20">
      <h2 className="font-pixel text-3xl md:text-4xl" style={{ textShadow: "3px 3px 0 var(--magenta)" }}>
        Four elements, four ways to play
      </h2>
      <p className="mt-4 max-w-[60ch] text-[var(--muted)]">
        Each element trades farm speed against upkeep differently. Pick the one that fits how often you will check in.
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {ELEMENTS.map((el) => (
          <article key={el.id} className="px-box flex flex-col p-6" style={{ ["--edge" as string]: el.accent }}>
            <div className="flex justify-center py-3">
              <PixelNinja id={el.id} accent={el.accent} size={128} idle />
            </div>
            <h3 className="font-pixel mt-3 text-xl" style={{ color: el.accent }}>
              {el.name}
            </h3>
            <p className="text-sm font-semibold">{el.role}</p>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">{el.blurb}</p>
            <div className="mt-5 space-y-2">
              <StatBar label="Farm" value={el.stats.farm} color={el.accent} />
              <StatBar label="Food cost" value={el.stats.food} color={el.accent} />
              <StatBar label="Stamina" value={el.stats.stamina} color={el.accent} />
              <StatBar label="Luck" value={el.stats.luck} color={el.accent} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
