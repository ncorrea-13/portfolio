export function TagGroup({ label, tags }: { label: string; tags: readonly string[] }) {
  return (
    <div className="mb-4">
      <p className="mb-1.5 font-sans text-[11px] uppercase tracking-wide text-muted">{label}</p>
      <div className="flex flex-wrap gap-2 font-mono text-[13px]">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border bg-code-bg px-3 py-1 text-code-text"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
