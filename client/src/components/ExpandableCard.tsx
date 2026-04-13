import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface ExpandableCardProps {
  title: string;
  subtitle: string;
  description: string;
  fullDescription?: string;
  prices: Array<{ duration: string; price: string }>;
  note?: string;
  tag?: string;
}

export default function ExpandableCard({
  title,
  subtitle,
  description,
  fullDescription,
  prices,
  note,
  tag,
}: ExpandableCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full justify-between relative"
      style={{ borderTop: "1px solid rgba(198,156,109,0.15)" }}
    >
      {tag && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-block px-3 py-1 rounded text-xs font-semibold" style={{ backgroundColor: "#C69C6D", color: "white" }}>
            {tag}
          </span>
        </div>
      )}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-display text-xl font-bold mb-1" style={{ color: "#3E3A37" }}>
          {title}
        </h3>
        <p className="font-body text-xs font-semibold mb-3" style={{ color: "#8DA089" }}>
          {subtitle}
        </p>
        <p className="font-body text-sm leading-relaxed mb-6 flex-1" style={{ color: "#6B6560", height: "6.5em", overflow: "hidden" }}>
          {description}
        </p>

        {/* Expandable Full Description */}
        {fullDescription && (
          <div className="mb-4 w-full">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 font-body text-sm font-semibold transition-all w-full"
              style={{ color: "#8DA089" }}
            >
              <span>{isExpanded ? "Lees minder" : "Lees meer"}</span>
              <ChevronDown
                size={16}
                style={{
                  transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              />
            </button>

            {isExpanded && (
              <div
                className="mt-4 p-4 rounded bg-white border"
                style={{ borderColor: "rgba(141,160,137,0.2)", backgroundColor: "rgba(141,160,137,0.05)" }}
              >
                <p className="font-body text-sm leading-relaxed" style={{ color: "#6B6560" }}>
                  {fullDescription}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="border-t" style={{ borderColor: "rgba(141,160,137,0.2)" }} />

      {/* Price and Duration */}
      <div className="p-6">
        <div className="space-y-2 mb-3">
          {prices.map((p, idx) => (
            <div key={idx} className="flex justify-between font-body text-sm">
              <span style={{ color: "#6B6560" }}>{p.duration}</span>
              <span style={{ color: "#8DA089", fontWeight: "600" }}>{p.price}</span>
            </div>
          ))}
        </div>
        {note && (
          <p className="font-body text-xs mb-4 italic" style={{ color: "#C69C6D" }}>
            {note}
          </p>
        )}
        <a
          href="https://www.supersaas.nl/schedule/balanergy/Balanergy"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded font-body text-sm font-semibold text-white text-center transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#8DA089" }}
        >
          BOEK NU
        </a>
      </div>
    </div>
  );
}
