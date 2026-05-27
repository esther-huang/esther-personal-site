const signals = [
  { label: "Action", detail: "messy workflows", position: "left-[6%] top-[18%]" },
  { label: "Memory", detail: "long context", position: "right-[8%] top-[16%]" },
  { label: "Narrative", detail: "branching state", position: "left-[10%] bottom-[18%]" },
  { label: "Focus", detail: "task initiation", position: "right-[14%] bottom-[16%]" },
  { label: "Trust", detail: "high-signal opportunity", position: "left-1/2 top-[8%] -translate-x-1/2" }
];

type SignalPanelProps = {
  compact?: boolean;
};

export function SignalPanel({ compact = false }: SignalPanelProps) {
  return (
    <div
      className={[
        "signal-panel relative overflow-hidden rounded-lg border border-line bg-white/[0.045] p-4 shadow-soft backdrop-blur-md sm:p-5",
        compact ? "signal-panel--compact" : ""
      ].join(" ")}
    >
      <div className="relative">
        <div className="mb-8 flex items-center justify-between border-b border-line pb-4 text-xs uppercase tracking-[0.16em] text-muted">
          <span>Market Interface</span>
          <span>Draft v0.1</span>
        </div>

        <div className="signal-map">
          <div className="signal-map__orbit signal-map__orbit--outer" aria-hidden="true" />
          <div className="signal-map__orbit signal-map__orbit--inner" aria-hidden="true" />
          <div className="signal-map__axis signal-map__axis--horizontal" aria-hidden="true" />
          <div className="signal-map__axis signal-map__axis--vertical" aria-hidden="true" />

          <div className="signal-map__center">
            <span>North star</span>
            <p>
              AI should not only answer questions. It should help people act in complex systems.
            </p>
          </div>

          <div className="signal-map__nodes">
            {signals.map((signal) => (
              <div key={signal.label} className={`signal-node ${signal.position}`}>
                <span className="signal-node__dot" />
                <div>
                  <strong>{signal.label}</strong>
                  <p>{signal.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="signal-map__mobile">
          <div className="signal-mobile-map">
            <div className="signal-mobile-map__orbit signal-mobile-map__orbit--outer" aria-hidden="true" />
            <div className="signal-mobile-map__orbit signal-mobile-map__orbit--inner" aria-hidden="true" />
            <div className="signal-mobile-map__axis signal-mobile-map__axis--x" aria-hidden="true" />
            <div className="signal-mobile-map__axis signal-mobile-map__axis--y" aria-hidden="true" />
            <div className="signal-mobile-map__center">
              <span>North star</span>
              <p>
                AI should help people act in complex systems.
              </p>
            </div>
            {signals.map((signal, index) => (
              <div
                key={signal.label}
                className={`signal-mobile-node signal-mobile-node--${index + 1}`}
              >
                <span className="signal-mobile-node__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <strong>{signal.label}</strong>
                  <p>{signal.detail}</p>
                </span>
              </div>
            ))}
          </div>
          <div className="signal-mobile-thesis">
            <p>
              AI should not only answer questions. It should help people act in complex systems.
            </p>
          </div>
        </div>

        <div className="sr-only">
          {signals.map((signal) => (
            <p key={signal.label}>
              {signal.label}: {signal.detail}
            </p>
          ))}
          <p>
            AI should not only answer questions. It should help people act in complex systems.
          </p>
        </div>
      </div>
    </div>
  );
}
