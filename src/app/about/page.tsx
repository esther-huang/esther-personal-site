import { SectionHeading } from "@/components/SectionHeading";

const experience = [
  {
    label: "NVIDIA",
    logoLabel: "NV",
    title: "Software Engineering Intern - AI Engineering",
    date: "May 2025 - Aug 2025",
    summary: "GUI agents, perception services, deployment workflows, and agentic automation.",
    body: [
      "Optimized a gameplay GUI agent for test automation and improved its perception capability.",
      "Owned end-to-end deployment of a high-performance perception service to a DGX cluster, improving inference stability and reducing local machine resource load.",
      "Architected and delivered a Helm-based Blueprint for a GUI Agent workflow, improving concurrent performance and creating a reusable production-grade generative AI workflow.",
      "Designed a CLI agent for performance benchmarking with a knowledge base to reduce engineering toil."
    ]
  },
  {
    label: "ABB Robotics",
    logoLabel: "ABB",
    title: "AI-Agent Research Intern",
    date: "Dec 2023 - Jun 2024",
    summary: "Multi-agent systems for natural-language human-robot interaction.",
    body:
      "Natural-language human-robot interaction with shared memory and ambiguity resolution. Most of the interesting problems were in the gaps between what the user said and what they meant."
  },
  {
    label: "IIOT Lab, Shanghai Jiao Tong University",
    logoLabel: "IIOT",
    title: "Research Assistant",
    date: "Jun 2023 - Mar 2024",
    summary: "LLM knowledge-capacity research and PyTorch computation workflows.",
    body:
      "Worked on Knowledge Quantification Indicator research for estimating LLM knowledge capacity and improving PyTorch computation workflows."
  }
];

const education = [
  {
    school: "University of Michigan - Ann Arbor",
    logoLabel: "UM",
    detail: "Master's in Information Science.",
    date: "Aug 2024 - May 2026",
    summary: "Graduate work across information science, data systems, and human-centered AI."
  },
  {
    school: "Shanghai Jiao Tong University",
    logoLabel: "SJTU",
    detail: "Bachelor's in Electrical and Computer Engineering.",
    date: "Sep 2021 - May 2025",
    summary: "Engineering foundation across electrical and computer engineering."
  }
];

const strengths = [
  "AI agents and multi-agent systems",
  "GUI agents, perception services, and workflow automation",
  "RAG, hybrid retrieval, query classification, and chatbot systems",
  "PyTorch, machine learning, deep learning, NLP, and LLM evaluation",
  "Python, SQL/MySQL, C/C++, JavaScript, HTML/CSS, MATLAB",
  "Docker, Kubernetes, Helm, CI/CD, cloud environments, and DGX-cluster-adjacent deployment"
];

export const metadata = {
  title: "About",
  description: "About Esther and her AI-native systems work."
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
      <SectionHeading
        eyebrow="About"
        title="Memory, knowledge, and action. Building AI systems that hold it together when conditions get real."
        description="Background, experience, and what I'm building toward."
      />

      <div className="grid gap-6 md:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-lg border border-line bg-panel p-5 shadow-soft">
          <div className="about-avatar mb-5" aria-label="Portrait placeholder for Esther">
            {/* TODO: Replace this placeholder with Esther's approved public headshot. */}
            <div className="about-avatar__frame">
              <div className="about-avatar__placeholder">
                <span>EH</span>
              </div>
            </div>
            <div className="about-avatar__meta">
              <span>Portrait slot</span>
              <strong>Ready for headshot</strong>
            </div>
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-bluegray">
            Working identity
          </p>
          <p className="mt-4 font-serif text-2xl leading-snug text-ink md:text-3xl">
            Memory, knowledge, and action. Building AI systems that hold it together when conditions get real.
          </p>
        </div>
        <div className="text-base leading-8 text-muted">
          <p>
            The question I keep building around: when an AI system is working with a lot of
            context, how does it actually hold onto the right things, act reliably, and not
            lose the thread?
          </p>
          <p className="mt-4">
            That's the thread connecting what I build — agents that adapt when forms change,
            stories that stay coherent when players wander off-script, companions that help
            you start when starting is the hard part.
          </p>
        </div>
      </div>

      <section className="mt-12 border-t border-line/80 pt-10">
        <p className="about-section-label">Experience</p>
        <div className="grid gap-3">
          {experience.map((item) => (
            <details key={item.label} className="about-disclosure rounded-lg border border-line bg-panel p-5 shadow-soft">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <span className="flex items-start gap-3">
                  <LogoSlot label={item.logoLabel} name={item.label} />
                  <span>
                    <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-bluegray">
                      {item.label}
                    </span>
                    <span className="mt-2 block font-serif text-xl font-semibold leading-tight text-ink">
                      {item.title}
                    </span>
                    <span className="mt-2 block text-sm leading-6 text-muted">{item.summary}</span>
                    <span className="mt-3 block font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted">
                      {item.date}
                    </span>
                  </span>
                </span>
                <span className="about-disclosure__plus text-rust">+</span>
              </summary>
              {Array.isArray(item.body) ? (
                <ul className="mt-4 space-y-2 text-sm leading-7 text-muted">
                  {item.body.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted/50" />
                      {point}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-sm leading-7 text-muted">{item.body}</p>
              )}
            </details>
          ))}
        </div>
      </section>

      <section className="mt-12 border-t border-line/80 pt-10">
        <p className="about-section-label">Education</p>
        <div className="grid gap-3 md:grid-cols-2">
          {education.map((item) => (
            <details key={item.school} className="about-disclosure rounded-lg border border-line bg-panel p-5 shadow-soft">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <span className="flex items-start gap-3">
                  <LogoSlot label={item.logoLabel} name={item.school} />
                  <span>
                    <span className="font-serif text-xl font-semibold leading-tight text-ink">
                      {item.school}
                    </span>
                    <span className="mt-2 block text-sm leading-6 text-muted">{item.summary}</span>
                  </span>
                </span>
                <span className="about-disclosure__plus text-rust">+</span>
              </summary>
              <p className="mt-3 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted">
                {item.date}
              </p>
              <p className="mt-3 text-sm leading-7 text-muted">{item.detail}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-12 border-t border-line/80 pt-10">
        <p className="about-section-label">Technical strengths</p>
        <div className="flex flex-wrap gap-2">
          {strengths.map((strength) => (
            <span key={strength} className="rounded-full border border-line bg-panel px-4 py-2 text-sm leading-6 text-muted">
              {strength}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}

function LogoSlot({ label, name }: { label: string; name: string }) {
  return (
    <span className="credential-logo-slot" aria-label={`${name} logo placeholder`}>
      {/* TODO: Replace this placeholder with Esther's approved public logo asset. */}
      <span>{label}</span>
    </span>
  );
}
