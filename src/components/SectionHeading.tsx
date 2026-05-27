type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  index?: string;
};

export function SectionHeading({ eyebrow, title, description, index }: SectionHeadingProps) {
  return (
    <div className="section-heading mb-10 max-w-4xl">
      <div className="section-heading__meta">
        {index ? <span>{index}</span> : null}
        {eyebrow ? <p>{eyebrow}</p> : null}
      </div>
      <h2>{title}</h2>
      {description ? <p className="section-heading__description">{description}</p> : null}
      <div className="section-heading__line" aria-hidden="true" />
    </div>
  );
}
