import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Play, Feather, Lock, Leaf, Recycle, Sparkles, Star, Droplets } from "lucide-react";

const mini = [
  { icon: Feather, label: "Ultra Soft Comfort" },
  { icon: Lock, label: "Leak-Proof Protection" },
  { icon: Leaf, label: "Skin Friendly & Rash Free" },
  { icon: Recycle, label: "Eco-Friendly Options" },
];

const petals = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: (i * 7.3) % 100,
  size: 14 + ((i * 5) % 18),
  dur: 11 + ((i * 3) % 9),
  delay: (i * 1.3) % 8,
  emoji: ["🌸", "🌺", "💮"][i % 3],
}));

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Box() {
  const face = "absolute rounded-xl";
  return (
    <div className="relative h-82.5 w-65" style={{ transformStyle: "preserve-3d" }}>
      <div
        className={`${face} inset-0 bg-linear-to-br from-[#d63d92] via-[#8e2a8f] to-[#6b1f78] p-6 text-white`}
        style={{ transform: "translateZ(35px)" }}
      >
        <div className="flex items-center gap-1.5 text-[17px]">
          🌸 <b>SheCare</b>
        </div>
        <h4 className="mt-5 text-[26px] font-bold leading-tight">Ultra Soft</h4>
        <h5 className="text-base font-medium opacity-90">Sanitary Pads</h5>
        <ul className="mt-6 grid gap-2 text-xs">
          <li>● Leak-Proof</li>
          <li>● Breathable</li>
          <li>● Rash-Free</li>
        </ul>
        <span className="absolute bottom-4 right-4 rounded-md bg-white px-3 py-1 text-[11px] font-bold text-brand">
          10 Pads (Regular)
        </span>
      </div>
      <div className={`${face} inset-0 bg-[#6b1f78]`} style={{ transform: "translateZ(-35px) rotateY(180deg)" }} />
      <div
        className={`${face} top-0 h-full w-17.5 bg-linear-to-b from-[#a02a8b] to-[#5e1a6b]`}
        style={{ left: "calc(100% - 35px)", transform: "rotateY(90deg)" }}
      />
      <div className={`${face} -left-8.75 top-0 h-full w-17.5 bg-[#7a2386]`} style={{ transform: "rotateY(-90deg)" }} />
      <div className={`${face} -top-8.75 left-0 h-17.5 w-full bg-[#f2a6cf]`} style={{ transform: "rotateX(90deg)" }} />
    </div>
  );
}

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 70, damping: 14 });
  const sy = useSpring(my, { stiffness: 70, damping: 14 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-22, 22]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [14, -14]);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-linear-to-br from-[#fdeaf6] via-[#f3e4fb] to-white pb-24 pt-14"
    >
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
        className="absolute -left-24 -top-24 h-95 w-95 rounded-full bg-[#ffb3d9] opacity-55 blur-[70px]"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity }}
        className="absolute -bottom-20 -right-28 h-105 w-105 rounded-full bg-[#d3b5ff] opacity-55 blur-[70px]"
      />

      {/* falling petals */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {petals.map((p) => (
          <motion.span
            key={p.id}
            className="absolute -top-10"
            style={{ left: `${p.left}%`, fontSize: p.size }}
            animate={{ y: [0, 820], x: [0, 30, -20, 10], rotate: [0, 360], opacity: [0, 0.8, 0.8, 0] }}
            transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "linear" }}
          >
            {p.emoji}
          </motion.span>
        ))}
      </div>

      <div className="relative mx-auto grid w-[92%] max-w-300 items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
        {/* Text */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="glass inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-semibold text-plum shadow-lg shadow-pink-200/50"
          >
            <Sparkles size={14} className="text-brand" /> Periods, But Make It Comfortable 💜
          </motion.span>

          <motion.h1
            variants={item}
            className="mb-4 mt-5 text-[clamp(36px,5vw,62px)] font-extrabold leading-[1.1] text-plum"
          >
            Comfort, Confidence <br />
            <span className="text-grad">&amp; Care Every Period</span>
          </motion.h1>

          <motion.p variants={item} className="max-w-md text-[17px]">
            Ultra-soft, leak-proof and skin-friendly sanitary pads designed for modern women.
          </motion.p>

          <motion.div variants={item} className="my-7 flex flex-wrap gap-3.5">
            {/* <motion.a
              whileHover={{ y: -4, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="#products"
              className="shine inline-flex items-center gap-2 rounded-full bg-linear-to-br from-brand to-brand2 px-8 py-4 font-semibold text-white shadow-xl shadow-brand/40"
            >
              Shop Now <ArrowRight size={18} />
            </motion.a> */}
            <motion.a
              whileHover={{ y: -4, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="#tracker"
              className="glass inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-plum shadow-xl shadow-pink-200/60"
            >
              <Play size={16} fill="currentColor" className="text-brand" /> Watch How It Works
            </motion.a>
          </motion.div>

          <motion.div variants={item} className="grid max-w-lg grid-cols-2 gap-3 sm:grid-cols-4">
            {mini.map(({ icon: Icon, label }) => (
              <motion.div key={label} whileHover={{ y: -6 }} className="text-center">
                <span className="glass mx-auto mb-2 grid h-13.5 w-13.5 place-items-center rounded-full text-brand shadow-lg shadow-pink-200/60">
                  <Icon size={22} />
                </span>
                <p className="text-xs font-medium leading-tight">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* 3D scene */}
        <div
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          className="relative mx-auto h-130 w-full max-w-140"
          style={{ perspective: 1200 }}
        >
          <motion.div
            className="relative h-full w-full"
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          >
            <div
              className="absolute inset-x-[10%] bottom-15 top-5 rounded-t-[300px] bg-linear-to-b from-[#e9d3fa] to-[#fbe6f3] shadow-[inset_0_0_60px_rgba(255,255,255,0.8)]"
              style={{ transform: "translateZ(-80px)" }}
            />
            <div
              className="absolute inset-x-[6%] bottom-5 h-24 rounded-[50%] bg-linear-to-b from-white to-[#f4dbe9] shadow-[0_30px_60px_-10px_rgba(180,60,140,0.45)]"
              style={{ transform: "translateZ(-10px)" }}
            />
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.04, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute bottom-20 left-[14%] h-10 w-[62%] rounded-[50%] border-[3px] border-[#ff9ed0] shadow-[0_0_40px_#ff7fc0]"
              style={{ transform: "translateZ(10px)" }}
            />

            <motion.div
              className="absolute right-[4%] top-12"
              style={{ transformStyle: "preserve-3d", z: 40, rotateY: -20, rotateX: 4 }}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Box />
            </motion.div>

            <motion.div
              className="absolute left-[2%] top-24 h-32.5 w-67.5"
              style={{ z: 130, rotate: -34, transformStyle: "preserve-3d" }}
              animate={{ y: [0, -18, 0], rotateZ: [-34, -30, -34] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 rounded-[70px_50px_70px_50px/55px_70px_55px_70px] bg-linear-to-br from-white to-[#f1e4f7] shadow-[inset_0_-8px_14px_rgba(180,140,200,0.4),inset_0_6px_10px_#fff,25px_35px_30px_rgba(120,40,120,0.3)]" />
              <div className="absolute inset-x-[18%] inset-y-[28%] rounded-[40px] bg-[repeating-linear-gradient(45deg,#cfe0ff_0_6px,#dfeaff_6px_12px)] opacity-85" />
            </motion.div>

            <motion.span
              className="absolute bottom-24 left-[36%] text-5xl"
              style={{ z: 100 }}
              animate={{ y: [0, -16, 0], rotate: [0, 8, 0] }}
              transition={{ duration: 7, repeat: Infinity }}
            >
              ☁️
            </motion.span>
            <motion.span
              className="absolute -right-1.5 bottom-28 text-4xl"
              style={{ z: 160 }}
              animate={{ y: [0, -20, 0], rotate: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              🌸
            </motion.span>
            <motion.span
              className="absolute left-[8%] top-3 text-4xl"
              style={{ z: 120 }}
              animate={{ y: [0, -14, 0], rotate: [0, 14, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, delay: 1 }}
            >
              🌺
            </motion.span>
          </motion.div>

          {/* floating glass cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="glass absolute -left-2 bottom-8 flex items-center gap-2.5 rounded-2xl px-4 py-3 shadow-xl shadow-pink-300/40"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-yellow-100 text-yellow-500">
              <Star size={18} fill="currentColor" />
            </span>
            {/* <div className="leading-tight">
              <b className="block text-sm text-plum">4.9 / 5 Rating</b>
              <small className="text-[11px]">50K+ happy women</small>
            </div> */}
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity }}
            className="glass absolute right-0 top-0 flex items-center gap-2.5 rounded-2xl px-4 py-3 shadow-xl shadow-pink-300/40"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-pink-100 text-brand">
              <Droplets size={18} />
            </span>
            <div className="leading-tight">
              <b className="block text-sm text-plum">12 Hr Protection</b>
              <small className="text-[11px]">Zero leaks</small>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}