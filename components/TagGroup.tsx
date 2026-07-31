const groupColors = ["var(--accent)", "var(--accent-strong)", "var(--accent-warm)", "var(--card-border)"];

export function TagGroup({
  label,
  tags,
  index = 0,
}: {
  label: string;
  tags: readonly string[];
  index?: number;
}) {
  const color = groupColors[index % groupColors.length];

  return (
    <div className="mb-5">
      <p className="mb-2 flex items-center gap-1.5 font-sans text-[11px] uppercase tracking-wide text-muted">
        <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: color }} />
        {label}
      </p>
      <div className="grid grid-cols-2 gap-2 font-mono text-[13px] sm:flex sm:flex-wrap">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border bg-code-bg px-3 py-1.5 text-center text-code-text sm:text-left"
            style={{ borderColor: color }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
