import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, CheckCircle2, RotateCcw, Send, ClipboardList, Clock, Gift, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

const questions = [
  {
    q: "How would you describe your usual flow?",
    options: [
      { icon: "💧", text: "Light" },
      { icon: "💦", text: "Medium" },
      { icon: "🌊", text: "Heavy" },
      { icon: "🔄", text: "Changes every cycle" },
    ],
  },
  {
    q: "What matters most to you in a period product?",
    options: [
      { icon: "☁️", text: "Softness & comfort" },
      { icon: "🛡️", text: "Leak protection" },
      { icon: "🌿", text: "Skin-friendly & rash free" },
      { icon: "♻️", text: "Eco-friendly" },
    ],
  },
  {
    q: "When do you need protection the most?",
    options: [
      { icon: "🏢", text: "College / office hours" },
      { icon: "🌙", text: "Night time" },
      { icon: "🏃‍♀️", text: "Travel & sports" },
      { icon: "🏠", text: "All day, every day" },
    ],
  },
  {
    q: "How often do you face irritation or rashes?",
    options: [
      { icon: "😊", text: "Never" },
      { icon: "🙂", text: "Sometimes" },
      { icon: "😕", text: "Often" },
      { icon: "😣", text: "Almost always" },
    ],
  },
  {
    q: "What price range feels right for a pack of pads?",
    options: [
      { icon: "💰", text: "Under ₹100" },
      { icon: "💵", text: "₹100 – ₹150" },
      { icon: "💎", text: "₹150 – ₹200" },
      { icon: "👑", text: "₹200 and above" },
    ],
  },
];

const picks = [
  { name: "Ultra Soft Sanitary Pads", price: "₹149", why: "Cloud-soft cotton top layer for all-day comfort." },
  { name: "Period Pants", price: "₹399", why: "Leak-proof, flexible and worry-free for any activity." },
  { name: "Skin-Friendly Cotton Pads", price: "₹169", why: "Dermatologically tested and rash-free for sensitive skin." },
  { name: "Eco-Friendly Pads", price: "₹199", why: "Plant-based, biodegradable care for a cleaner planet." },
];

const tips = [
  "For light flow, pair pads with panty liners on the last days for fresh comfort.",
  "Change your pad every 4–6 hours to stay fresh and comfortable.",
  "For heavy flow, choose the XL / overnight size and change every 3–4 hours.",
  "Since your flow varies, keep both regular pads and liners handy.",
];

export default function Survey() {
  const total = questions.length;
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(total).fill(null));
  const [note, setNote] = useState("");

  const pick = picks[answers[1] ?? 0];
  const tip = tips[answers[0] ?? 1];
  const pct = Math.round((Math.min(step, total + 1) / (total + 1)) * 100);

  const choose = (i) => {
    const next = [...answers];
    next[step] = i;
    setAnswers(next);
    setTimeout(() => setStep((s) => s + 1), 280);
  };

  const submit = () => {
    const payload = {
      answers: answers.map((a, i) => ({ question: questions[i].q, answer: questions[i].options[a]?.text })),
      suggestion: note.trim(),
      at: new Date().toISOString(),
    };
    try {
      const old = JSON.parse(localStorage.getItem("shecare_survey") || "[]");
      localStorage.setItem("shecare_survey", JSON.stringify([...old, payload]));
    } catch {}
    console.log("Survey submitted:", payload); // yaha apni API call laga do
    setStep(total + 1);
  };

  const reset = () => {
    setStep(0);
    setAnswers(Array(total).fill(null));
    setNote("");
  };

  const slide = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
    transition: { duration: 0.35 },
  };

  return (
    <section id="survey" className="relative overflow-hidden bg-linear-to-br from-[#fdeaf6] via-[#f3e4fb] to-[#fdf1f9] py-22">
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#ffb3d9] opacity-50 blur-[80px]" />
      <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-[#d3b5ff] opacity-50 blur-[80px]" />

      <div className="relative mx-auto grid w-[92%] max-w-300 items-center gap-12 lg:grid-cols-[1fr_1.15fr]">
        <Reveal>
          <span className="mb-3.5 inline-flex items-center gap-1.5 rounded-full bg-pink-200 px-4 py-1.5 text-[13px] font-semibold text-brand">
            <ClipboardList size={14} /> Quick Survey
          </span>
          <h2 className="mb-4 text-[clamp(28px,3.6vw,44px)] font-bold leading-tight text-plum">
            Help us care for you <span className="text-grad">better</span>
          </h2>
          <p className="mb-7 max-w-md">
            Sirf 5 chhote questions. Aapke jawab ke hisaab se hum aapke liye best product suggest karenge.
          </p>
          <div className="grid gap-3.5">
            {[
              { icon: Clock, t: "Takes only 1 minute" },
              { icon: Sparkles, t: "Personalised product pick for you" },
              { icon: Gift, t: "Share your suggestion – we read every one" },
            ].map(({ icon: Icon, t }) => (
              <div key={t} className="glass flex items-center gap-3 rounded-2xl px-4 py-3 shadow-lg shadow-pink-200/40">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-linear-to-br from-brand to-lilac text-white">
                  <Icon size={18} />
                </span>
                <b className="text-sm font-medium text-plum">{t}</b>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="glass relative overflow-hidden rounded-4xl p-6 shadow-2xl shadow-pink-300/50 sm:p-9">
            {/* progress */}
            <div className="mb-7">
              <div className="mb-2 flex justify-between text-xs font-semibold text-plum">
                <span>
                  {step < total ? `Question ${step + 1} of ${total}` : step === total ? "Last step" : "Completed"}
                </span>
                <span>{step > total ? 100 : pct}%</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-pink-100">
                <motion.div
                  className="h-full rounded-full bg-linear-to-r from-brand via-brand2 to-lilac"
                  animate={{ width: `${step > total ? 100 : pct}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            <div className="min-h-85">
              <AnimatePresence mode="wait">
                {step < total && (
                  <motion.div key={`q${step}`} {...slide}>
                    <h3 className="mb-6 text-xl font-semibold leading-snug text-plum sm:text-2xl">
                      {questions[step].q}
                    </h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {questions[step].options.map((o, i) => {
                        const selected = answers[step] === i;
                        return (
                          <motion.button
                            key={o.text}
                            whileHover={{ y: -4, scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => choose(i)}
                            className={`flex items-center gap-3 rounded-2xl border-2 p-4 text-left transition ${
                              selected
                                ? "border-brand bg-pink-50 shadow-lg shadow-brand/20"
                                : "border-white bg-white/80 hover:border-pink-300"
                            }`}
                          >
                            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-linear-to-br from-blush to-blush2 text-2xl">
                              {o.icon}
                            </span>
                            <span className="flex-1 text-[15px] font-medium text-plum">
                              <small className="mr-1.5 text-xs font-bold text-brand">{"ABCD"[i]}.</small>
                              {o.text}
                            </span>
                            {selected && <CheckCircle2 size={20} className="text-brand" />}
                          </motion.button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {step === total && (
                  <motion.div key="note" {...slide}>
                    <h3 className="mb-2 text-xl font-semibold text-plum sm:text-2xl">Any suggestion for us? 💌</h3>
                    <p className="mb-4 text-sm">Kuch bhi likho – feedback, new product idea ya koi problem (optional).</p>
                    <textarea
                      rows={5}
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="Type your suggestion here..."
                      className="w-full resize-none rounded-2xl border-2 border-white bg-white/90 p-4 text-[15px] text-plum outline-none transition focus:border-brand"
                    />
                    <motion.button
                      whileHover={{ y: -3, scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={submit}
                      className="shine mt-5 inline-flex items-center gap-2 rounded-full bg-linear-to-br from-brand to-brand2 px-8 py-3.5 font-semibold text-white shadow-xl shadow-brand/40"
                    >
                      Submit Survey <Send size={16} />
                    </motion.button>
                  </motion.div>
                )}

                {step > total && (
                  <motion.div key="done" {...slide} className="text-center">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="mx-auto mb-4 grid h-20 w-20 place-items-center rounded-full bg-linear-to-br from-brand to-lilac text-white shadow-xl shadow-brand/40"
                    >
                      <CheckCircle2 size={40} />
                    </motion.div>
                    <h3 className="mb-1 text-2xl font-bold text-plum">Thank you! 💖</h3>
                    <p className="mb-5 text-sm">Aapke jawab ke hisaab se hamari suggestion:</p>

                    <div className="rounded-2xl bg-white p-5 text-left shadow-lg shadow-pink-200/50">
                      <small className="font-semibold uppercase tracking-wider text-brand">Best match for you</small>
                      <div className="mt-1 flex items-center justify-between gap-3">
                        <b className="text-lg text-plum">{pick.name}</b>
                        <b className="text-lg text-brand">{pick.price}</b>
                      </div>
                      <p className="mt-1 text-sm">{pick.why}</p>
                      <p className="mt-3 rounded-xl bg-blush p-3 text-[13px] text-plum">💡 {tip}</p>
                    </div>

                    <div className="mt-5 flex flex-wrap justify-center gap-3">
                      {/* <a
                        href="#products"
                        className="rounded-full bg-linear-to-br from-brand to-brand2 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30"
                      >
                        Shop Now
                      </a> */}
                      <button
                        onClick={reset}
                        className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-plum shadow-lg shadow-pink-200/60"
                      >
                        <RotateCcw size={15} /> Retake
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {step > 0 && step <= total && (
              <button
                onClick={() => setStep(step - 1)}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-plum hover:text-brand"
              >
                <ArrowLeft size={16} /> Back
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}