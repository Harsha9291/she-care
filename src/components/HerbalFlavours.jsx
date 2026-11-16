
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Leaf, CheckCircle2 } from "lucide-react";

// import neem from "../assets/neem-care.png";
// import lavender from "../assets/lavender-fresh.png";
// import rose from "../assets/rose-soft.png";
// // import turmeric from "../assets/turmeric-shield.png";
// import aloe from "../assets/aloe-vera-soothing.png";
// import mint from "../assets/mint-cool.png";

// const flavours = [
//   { name: "Neem Care", image: neem, color: "#DDF4CF", shadow: "#B4E89E" },
//   { name: "Lavender Fresh", image: lavender, color: "#EBDDFB", shadow: "#D9BDF5" },
//   { name: "Rose Soft", image: rose, color: "#FFE1E8", shadow: "#FFC5D1" },
//   // { name: "Turmeric Shield", image: turmeric, color: "#FFF0C1", shadow: "#F8DB8A" },
//   { name: "Aloe Vera Soothing", image: aloe, color: "#DDF3D2", shadow: "#BCE6A9" },
//   { name: "Mint Cool", image: mint, color: "#D8F5ED", shadow: "#B3EBDD" },
// ];

// export default function HerbalFlavours() {
//   const [selected, setSelected] = useState(null);

//   return (
//     <section id="flavours" className="relative z-10 mx-auto max-w-[1450px] px-4 pb-8 sm:px-8">
//       <div className="rounded-[30px] border border-white bg-white/90 p-4 shadow-[0_20px_60px_rgba(39,100,43,0.12)] backdrop-blur-xl sm:p-5">
//         <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-[1.2fr_repeat(6,1fr)]">

//           {/* Intro */}
//           <div className="col-span-2 flex items-center gap-3 rounded-2xl bg-[#F5F9EE] p-4 sm:col-span-3 lg:col-span-1 lg:flex-col lg:items-start lg:justify-center">
//             <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
//               <Leaf size={25} />
//             </div>
//             <div>
//               <h2 className="text-lg font-black leading-tight text-green-950 sm:text-xl">
//                 Discover Our
//                 <br />
//                 Herbal Flavours
//               </h2>
//               <p className="mt-2 text-[11px] leading-5 text-green-800/70">
//                 Choose the care your body loves, with nature-powered flavours.
//               </p>
//             </div>
//           </div>

//           {/* Flavour Cards */}
//           {flavours.map((flavour, index) => (
//             <motion.button
//               key={flavour.name}
//               type="button"
//               onClick={() =>
//                 setSelected(selected === flavour.name ? null : flavour.name)
//               }
//               initial={{ opacity: 0, y: 25 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.08 }}
//               whileHover={{ y: -7, scale: 1.025 }}
//               whileTap={{ scale: 0.97 }}
//               className="group relative flex min-h-[155px] flex-col items-center justify-center overflow-hidden rounded-2xl p-3"
//               style={{
//                 background: flavour.color,
//                 boxShadow: selected === flavour.name
//                   ? `0 0 0 3px ${flavour.shadow}`
//                   : "0 5px 15px rgba(40,80,40,0.04)",
//               }}
//             >
//               <motion.img
//                 src={flavour.image}
//                 alt={flavour.name}
//                 className="h-[105px] w-full object-contain transition-transform duration-500 group-hover:scale-110"
//                 animate={{ y: [0, -3, 0] }}
//                 transition={{
//                   duration: 4 + index * 0.3,
//                   repeat: Infinity,
//                 }}
//               />

//               <p className="mt-1 text-center text-xs font-extrabold text-green-950 sm:text-sm">
//                 {flavour.name}
//               </p>

//               {selected === flavour.name && (
//                 <span className="absolute right-2 top-2 rounded-full bg-white p-1 text-green-700 shadow">
//                   <CheckCircle2 size={14} />
//                 </span>
//               )}
//             </motion.button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }





import { useState } from "react";
import { motion } from "framer-motion";
import { Leaf, CheckCircle2 } from "lucide-react";

import neem from "../assets/neem-care.png";
import lavender from "../assets/lavender-fresh.png";
import rose from "../assets/rose-soft.png";
import aloe from "../assets/aloe-vera-soothing.png";
import mint from "../assets/mint-cool.png";

const flavours = [
  { name: "Neem Care", image: neem, color: "#DDF4CF", shadow: "#B4E89E" },
  { name: "Lavender Fresh", image: lavender, color: "#EBDDFB", shadow: "#D9BDF5" },
  { name: "Rose Soft", image: rose, color: "#FFE1E8", shadow: "#FFC5D1" },
  { name: "Aloe Vera Soothing", image: aloe, color: "#DDF3D2", shadow: "#BCE6A9" },
  { name: "Mint Cool", image: mint, color: "#D8F5ED", shadow: "#B3EBDD" },
];

export default function HerbalFlavours() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="flavours"
      className="relative z-10 mx-auto max-w-[1450px] px-4 pb-8 sm:px-8"
    >
      <div className="rounded-[30px] border border-white bg-white/90 p-4 shadow-[0_20px_60px_rgba(39,100,43,0.12)] backdrop-blur-xl sm:p-5">

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">

          {/* Intro */}
          <div className="col-span-2 flex items-center gap-3 rounded-2xl bg-[#F5F9EE] p-4 sm:col-span-3 lg:col-span-1 lg:flex-col lg:items-start lg:justify-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
              <Leaf size={25} />
            </div>

            <div>
              <h2 className="text-lg font-black leading-tight text-green-950 sm:text-xl">
                Discover Our
                <br />
                Herbal Flavours
              </h2>

              <p className="mt-2 text-[11px] leading-5 text-green-800/70">
                Choose the care your body loves, with nature-powered flavours.
              </p>
            </div>
          </div>

          {/* Flavour Cards */}
          {flavours.map((flavour, index) => (
            <motion.button
              key={flavour.name}
              type="button"
              onClick={() =>
                setSelected(
                  selected === flavour.name ? null : flavour.name
                )
              }
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -7, scale: 1.025 }}
              whileTap={{ scale: 0.97 }}
              className="group relative flex min-h-[155px] flex-col items-center justify-center overflow-hidden rounded-2xl p-3"
              style={{
                background: flavour.color,
                boxShadow:
                  selected === flavour.name
                    ? `0 0 0 3px ${flavour.shadow}`
                    : "0 5px 15px rgba(40,80,40,0.04)",
              }}
            >
              <motion.img
                src={flavour.image}
                alt={flavour.name}
                className="h-[105px] w-full object-contain transition-transform duration-500 group-hover:scale-110"
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 4 + index * 0.3,
                  repeat: Infinity,
                }}
              />

              <p className="mt-1 text-center text-xs font-extrabold text-green-950 sm:text-sm">
                {flavour.name}
              </p>

              {selected === flavour.name && (
                <span className="absolute right-2 top-2 rounded-full bg-white p-1 text-green-700 shadow">
                  <CheckCircle2 size={14} />
                </span>
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
