const terms = [
  "Identité visuelle",
  "Typographie",
  "Édition",
  "Motion design",
  "Illustration",
  "Direction artistique",
  "Photographie",
  "UI design",
];

// Bandeau défilant : la liste est doublée pour un défilement sans couture
export default function Marquee() {
  return (
    <div
      aria-hidden
      className="overflow-hidden border-y border-line bg-ink py-4 text-paper"
    >
      <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap">
        {[...terms, ...terms].map((term, i) => (
          <span key={i} className="flex items-center gap-8 font-display text-xl italic">
            {term}
            <span className="not-italic text-accent">✺</span>
          </span>
        ))}
      </div>
    </div>
  );
}
