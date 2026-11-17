import Reveal from "./Reveal";

export default function SectionHead({ eyebrow, title, highlight, sub }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-155 text-center">
      <span className="mb-3.5 inline-block rounded-full bg-pink-200 px-4 py-1.5 text-[13px] font-semibold text-brand">
        {eyebrow}
      </span>
      <h2 className="mb-3 text-[clamp(28px,3.6vw,42px)] font-bold leading-tight text-plum">
        {title} <span className="text-grad">{highlight}</span>
      </h2>
      {sub && <p>{sub}</p>}
    </Reveal>
  );
}
