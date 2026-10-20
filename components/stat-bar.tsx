type Props = { label: string; value: number; max?: number; color: string };

export function StatBar({ label, value, max = 5, color }: Props) {
  return (
    <div className="flex items-center justify-between gap-3 text-sm">
      <span className="text-[var(--muted)]">{label}</span>
      <span role="img" aria-label={`${label}: ${value} of ${max}`} className="flex gap-1">
        {Array.from({ length: max }, (_, i) => (
          <span
            key={i}
            className="block h-3 w-3"
            style={{ background: i < value ? color : "var(--line)", boxShadow: i < value ? `0 0 8px ${color}` : "none" }}
          />
        ))}
      </span>
    </div>
  );
}
