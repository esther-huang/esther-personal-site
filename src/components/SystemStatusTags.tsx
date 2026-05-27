const tags = [
  { label: "DRAFT MODE", value: "LOCAL ONLY", position: "left-4 top-24" },
  { label: "TRUST LAYER", value: "HUMAN REVIEW", position: "right-4 top-32" },
  { label: "SIGNAL FIELD", value: "ACTIVE", position: "bottom-8 left-4" },
  { label: "NO ANALYTICS", value: "CLEAN ROOM", position: "bottom-8 right-4" }
];

export function SystemStatusTags() {
  return (
    <div className="pointer-events-none fixed inset-0 z-40 hidden sm:block" aria-hidden="true">
      {tags.map((tag, index) => (
        <div
          key={tag.label}
          className={`system-tag ${tag.position}`}
          style={{ animationDelay: `${index * 1.4}s` }}
        >
          <span>{tag.label}</span>
          <strong>{tag.value}</strong>
        </div>
      ))}
    </div>
  );
}
