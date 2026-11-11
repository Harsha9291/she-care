import CountUp from "./CountUp";
import Reveal from "./Reveal";

const stats = [
  { to: 50, suffix: "K+", label: "Happy Women", emoji: "" },
  { to: 4.9, suffix: "", label: "Average Rating", emoji: "", decimals: 1 },
  { to: 12, suffix: " Hr", label: "Leak-Proof Protection", emoji: "" },
  { to: 100, suffix: "%", label: "Skin Safe Tested", emoji: "" },
];

export default function Stats() {
  return (
    <section className="px-[4%] pb-22">
      <Reveal>
        <div className="relative mx-auto max-w-300 overflow-hidden rounded-[36px] bg-linear-to-br from-plum via-[#5a2468] to-[#8e2a8f] px-6 py-12 text-white shadow-2xl shadow-plum/30">
          <div className="absolute -left-10 -top-10 h-52 w-52 rounded-full bg-brand/40 blur-3xl" />
          <div className="absolute -bottom-10 -right-10 h-52 w-52 rounded-full bg-lilac/40 blur-3xl" />
          <div className="relative grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="mb-2 text-3xl">{s.emoji}</div>
                <b className="block text-4xl font-extrabold sm:text-5xl">
                  <CountUp to={s.to} suffix={s.suffix} decimals={s.decimals || 0} />
                </b>
                <span className="text-sm text-pink-100">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
