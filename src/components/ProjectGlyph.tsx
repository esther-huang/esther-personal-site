type ProjectGlyphProps = {
  slug: string;
  title: string;
};

const glyphMeta: Record<string, { label: string; accent: string }> = {
  "adaptive-workflow-agent": { label: "workflow path", accent: "#f4f4f1" },
  "branching-storytelling-agent": { label: "branching story state", accent: "#ff6a3d" },
  "persona-consistency-lab": { label: "persona memory orbit", accent: "#f1d46d" },
  "focus-companion": { label: "focus field", accent: "#f1d46d" },
  "personal-opportunity-os": { label: "opportunity radar", accent: "#d5d6d1" }
};

export function ProjectGlyph({ slug, title }: ProjectGlyphProps) {
  const meta = glyphMeta[slug] ?? { label: "project system", accent: "#f4f4f1" };
  const gradientId = `glyph-gradient-${slug}`;
  const glowId = `glyph-glow-${slug}`;

  return (
    <div className="project-glyph" aria-label={`${title} visual marker`}>
      <svg viewBox="0 0 220 132" role="img" aria-label={meta.label}>
        <defs>
          <radialGradient id={gradientId} cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor={meta.accent} stopOpacity="0.7" />
            <stop offset="58%" stopColor={meta.accent} stopOpacity="0.18" />
            <stop offset="100%" stopColor={meta.accent} stopOpacity="0" />
          </radialGradient>
          <filter id={glowId} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect className="project-glyph__frame" x="1" y="1" width="218" height="130" rx="10" />
        <circle className="project-glyph__halo" cx="110" cy="66" r="58" fill={`url(#${gradientId})`} />
        <g className="project-glyph__grid">
          <path d="M24 34H196" />
          <path d="M24 66H196" />
          <path d="M24 98H196" />
          <path d="M56 18V114" />
          <path d="M110 18V114" />
          <path d="M164 18V114" />
        </g>
        <g className="project-glyph__mark" filter={`url(#${glowId})`}>
          {slug === "adaptive-workflow-agent" ? <WorkflowGlyph /> : null}
          {slug === "branching-storytelling-agent" ? <StoryGlyph /> : null}
          {slug === "persona-consistency-lab" ? <PersonaGlyph /> : null}
          {slug === "focus-companion" ? <FocusGlyph /> : null}
          {slug === "personal-opportunity-os" ? <OpportunityGlyph /> : null}
        </g>
        <g className="project-glyph__corner">
          <path d="M17 17H38" />
          <path d="M17 17V38" />
          <path d="M203 115H182" />
          <path d="M203 115V94" />
        </g>
      </svg>
    </div>
  );
}

function WorkflowGlyph() {
  return (
    <>
      <path d="M46 80C70 30 100 102 124 58S164 42 180 76" />
      <circle cx="46" cy="80" r="6" />
      <circle cx="91" cy="62" r="6" />
      <circle cx="124" cy="58" r="6" />
      <circle cx="180" cy="76" r="6" />
      <path d="M137 58H160" />
      <path d="M153 51L160 58L153 65" />
    </>
  );
}

function StoryGlyph() {
  return (
    <>
      <circle cx="70" cy="66" r="8" />
      <circle cx="118" cy="36" r="7" />
      <circle cx="118" cy="96" r="7" />
      <circle cx="168" cy="66" r="8" />
      <path d="M78 66C94 64 101 44 111 38" />
      <path d="M78 66C94 68 101 88 111 94" />
      <path d="M125 36C145 39 155 52 162 60" />
      <path d="M125 96C145 92 155 80 162 72" />
      <path d="M98 66H143" />
    </>
  );
}

function PersonaGlyph() {
  return (
    <>
      <circle cx="110" cy="62" r="24" />
      <path d="M94 88C101 80 119 80 126 88" />
      <path d="M74 66C83 33 137 33 146 66" />
      <path d="M74 66C83 99 137 99 146 66" />
      <circle cx="79" cy="66" r="4" />
      <circle cx="141" cy="66" r="4" />
      <path d="M110 38V27" />
      <path d="M110 97V108" />
    </>
  );
}

function FocusGlyph() {
  return (
    <>
      <circle cx="110" cy="66" r="42" />
      <circle cx="110" cy="66" r="25" />
      <circle cx="110" cy="66" r="7" />
      <path d="M110 24V38" />
      <path d="M110 94V108" />
      <path d="M68 66H82" />
      <path d="M138 66H152" />
      <path d="M91 47L78 34" />
      <path d="M129 85L142 98" />
    </>
  );
}

function OpportunityGlyph() {
  return (
    <>
      <path d="M64 96A58 58 0 0 1 168 96" />
      <path d="M83 96A39 39 0 0 1 149 96" />
      <path d="M102 96A20 20 0 0 1 130 96" />
      <path d="M116 96L158 52" />
      <circle cx="158" cy="52" r="6" />
      <circle cx="116" cy="96" r="5" />
      <path d="M54 96H178" />
      <path d="M158 52C171 49 181 42 188 31" />
    </>
  );
}
