const words = [
  "Ultra Soft",
  "Leak Proof",
  "Skin Friendly",
  "Rash Free",
  "Eco Friendly",
  "Dermatologically Tested",
  "12 Hour Protection",
  "Made For Women",
];

export default function Marquee() {
  const row = [...words, ...words];
  return (
    <div className="overflow-hidden bg-linear-to-r from-brand via-brand2 to-lilac py-4">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-10 text-sm font-semibold uppercase tracking-widest text-white">
            {w} <span className="text-white/60">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}